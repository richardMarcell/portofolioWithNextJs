import Pokedex from "@/libs/components/Pokedex/page";
import PokemonFilter from "@/libs/components/PokemonFilter/page";
import { AlertDialogHeader } from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemon Catalogue",
};

// variable menampung source di prisma
const prisma = new PrismaClient();

// variabel menampung banyak nya record per halaman
const pokemonRecordPerPage: number = 3;

const getPaginationPageResources = async (page: number, pokemonFilter: {}) => {
  const totalPokemon = await prisma.pokemon.count({
    where: pokemonFilter,
  });

  const currentPage: number = page || 1;
  const totalPage: number = Math.ceil(totalPokemon / pokemonRecordPerPage);

  const pageOfUser: number = Math.min(Math.max(1, currentPage), totalPage);

  // variable untuk menyimpan berapa banyak record pokemon yang akan di skip
  const paginationStart: number = Math.max(
    0,
    (currentPage - 1) * pokemonRecordPerPage
  );

  return {
    totalPage: totalPage,
    currentPage: pageOfUser,
    paginationStart: paginationStart,
  };
};

const getPaginatedPokemons = async (
  page: number,
  pokemonName: string,
  pokemonType: string[],
  pokemonGender: string[],
  pokemonClassification: string[],
  heightOperator: string[],
  weightOperator: string[],
  heightValue: string[],
  weightValue: string[]
) => {
  const pokemonFilter: any = {};

  // mengecek apakah ada pokemonName
  if (pokemonName !== undefined) {
    pokemonFilter.name = {
      contains: pokemonName,
    };
  }

  // mengecek apakah ada pokemonType
  if (pokemonType !== undefined) {
    pokemonFilter.OR = [
      {
        type1: {
          in: pokemonType,
        },
      },
      {
        type2: {
          in: pokemonType,
        },
      },
    ];
  }

  // mengecek apakah ada pokemonClassification
  if (pokemonClassification !== undefined) {
    pokemonFilter.classification = {
      in: pokemonClassification,
    };
  }

  // mengecek apakah ada pokemonGender
  if (pokemonGender !== undefined) {
    if (
      pokemonGender.includes("Mayoritas Male") ||
      pokemonGender.includes("Minoritas Female")
    ) {
      if (pokemonGender.includes("Balance")) {
        if (
          pokemonGender.includes("Mayoritas Female") ||
          pokemonGender.includes("Minoritas Male")
        ) {
          pokemonFilter.OR = [
            {
              percentage_male: {
                gt: 50,
              },
            },
            {
              percentage_male: {
                equals: 50,
              },
            },
            {
              percentage_male: {
                lt: 50,
              },
            },
          ];
        } else {
          pokemonFilter.OR = [
            {
              percentage_male: {
                gt: 50,
              },
            },
            {
              percentage_male: {
                equals: 50,
              },
            },
          ];
        }
      } else {
        pokemonFilter.percentage_male = {
          gt: 50,
        };
      }
    } else if (
      pokemonGender.includes("Mayoritas Female") ||
      pokemonGender.includes("Minoritas Male")
    ) {
      if (pokemonGender.includes("Balance")) {
        if (
          pokemonGender.includes("Mayoritas Male") ||
          pokemonGender.includes("Minoritas Female")
        ) {
          pokemonFilter.OR = [
            {
              percentage_male: {
                lt: 50,
              },
            },
            {
              percentage_male: {
                equals: 50,
              },
            },
            {
              percentage_male: {
                gt: 50,
              },
            },
          ];
        } else {
          pokemonFilter.OR = [
            {
              percentage_male: {
                lt: 50,
              },
            },
            {
              percentage_male: {
                equals: 50,
              },
            },
          ];
        }
      } else {
        pokemonFilter.percentage_male = {
          lt: 50,
        };
      }
    } else if (pokemonGender.includes("Balance")) {
      pokemonFilter.percentage_male = {
        equals: 50,
      };
    }
  }

  // megnecek apakah ada filter height
  if (heightOperator && heightValue) {
    const heightFilters: any[] = [];

    for (let i = 0; i < heightOperator.length; i++) {
      if (heightOperator[i] === ">") {
        heightFilters.push({
          height_m: { gt: Number(heightValue[i]) },
        });
      } else if (heightOperator[i] === "\u2265") {
        heightFilters.push({
          height_m: { gte: Number(heightValue[i]) },
        });
      } else if (heightOperator[i] === "=") {
        heightFilters.push({
          height_m: { equals: Number(heightValue[i]) },
        });
      } else if (heightOperator[i] === "<") {
        heightFilters.push({
          height_m: { lt: Number(heightValue[i]) },
        });
      } else if (heightOperator[i] === "\u2264") {
        heightFilters.push({
          height_m: { lte: Number(heightValue[i]) },
        });
      }
    }

    if (heightFilters.length > 0) {
      pokemonFilter.OR = heightFilters;
    }
  }

  // mengecek apakah ada filter weight
  if (weightOperator && weightValue) {
    const weightFilters: any[] = [];

    for (let i = 0; i < weightOperator.length; i++) {
      if (weightOperator[i] === ">") {
        weightFilters.push({
          weight_kg: { gt: Number(weightValue[i]) },
        });
      } else if (weightOperator[i] === "\u2265") {
        weightFilters.push({
          weight_kg: { gte: Number(weightValue[i]) },
        });
      } else if (weightOperator[i] === "=") {
        weightFilters.push({
          weight_kg: { equals: Number(weightValue[i]) },
        });
      } else if (weightOperator[i] === "<") {
        weightFilters.push({
          weight_kg: { lt: Number(weightValue[i]) },
        });
      } else if (weightOperator[i] === "\u2264") {
        weightFilters.push({
          weight_kg: { lte: Number(weightValue[i]) },
        });
      }
    }

    if (weightFilters.length > 0) {
      pokemonFilter.OR = weightFilters;
    }
  }

  const paginationResource = await getPaginationPageResources(
    page,
    pokemonFilter
  );

  //variable untuk menampung data pokemon dari database
  const pokemons = await prisma.pokemon.findMany({
    take: pokemonRecordPerPage,
    skip: paginationResource.paginationStart,
    include: {
      abilities: {
        select: {
          id: true,
          name: true,
          pokemon_id: true,
        },
      },
    },
    where: pokemonFilter,
  });

  return {
    pokemons: pokemons,
    paginationResource: paginationResource,
  };
};

const pokemon = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = Number(searchParams.page);
  const pokemonName = searchParams.pokemonName;

  const pokemonType = searchParams.pokemonType as string;
  const pokemonTypeSplited = pokemonType?.split(",");

  const pokemonClassification = searchParams.pokemonClassification;
  const pokemonClassificationSplited = pokemonClassification?.split(",");

  const pokemonGender = searchParams.pokemonGender;
  const pokemonGenderSplited = pokemonGender?.split(",");

  const heightPokemon = searchParams.height;
  const heightPokemonSplited = heightPokemon?.split(",");

  const weightPokemon = searchParams.weight;
  const weightPokemonSplited = weightPokemon?.split(",");

  const heightOperator: string[] = [];
  const heightValue: string[] = [];

  const weightOperator: string[] = [];
  const weightValue: string[] = [];

  heightPokemonSplited?.forEach((height) => {
    const operator = height.charAt(0);
    const value = height.slice(1);

    heightOperator.push(operator);
    heightValue.push(value);
  });

  weightPokemonSplited?.forEach((weight) => {
    const operator = weight.charAt(0);
    const value = weight.slice(1);

    weightOperator.push(operator);
    weightValue.push(value);
  });

  const paginatedPokemons = await getPaginatedPokemons(
    page as number,
    pokemonName as string,
    pokemonTypeSplited as string[],
    pokemonGenderSplited as string[],
    pokemonClassificationSplited as string[],
    heightOperator as string[],
    weightOperator as string[],
    heightValue as string[],
    weightValue as string[]
  );

  const currentPage = paginatedPokemons.paginationResource.currentPage;
  const totalPage = paginatedPokemons.paginationResource.totalPage;

  return (
    <div>
      <PokemonFilter />
      <Pokedex
        pokemons={paginatedPokemons.pokemons}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </div>
  );
};

export default pokemon;
