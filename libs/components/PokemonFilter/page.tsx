"use client";
import {
  PokemonHeightFilter,
  PokemonWeightFilter,
} from "@/libs/interface/pokemon";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select as ChakraSelect,
  Text,
} from "@chakra-ui/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { MultiValue } from "react-select";
import Select from "react-select";

const PokemonFilter = () => {
  // variable untuk menyimpan hook useRouter
  const router: AppRouterInstance = useRouter();

  // variabel untuk menyimpan hook useSearchParams
  const searchParams: ReadonlyURLSearchParams | null = useSearchParams();

  // variabel menyimpan custom width
  const customWidth = {
    control: (provided: any) => ({
      ...provided,
      width: "500px", // Atur lebar sesuai kebutuhan
    }),
  };

  // state untuk menyimpan inputan nama pokemon
  const [pokemonName, setPokemonName] = useState<string>("");

  // state untuk mengambil gender pokemon
  const [selectedPokemonGender, setSelectedPokemonGender] = useState<string[]>(
    []
  );

  // state untuk mengambil class pokemon
  const [selectedPokemonClassification, setSelectedPokemonClassification] =
    useState<string[]>([]);

  // state untuk mengambil type pokemon
  const [selectedPokemonType, setSelectedPokemonType] = useState<string[]>([]);

  // state untuk mengambil tinggi pokemon
  const [pokemonHeightFilters, setPokemonHeightFilters] = useState<
    PokemonHeightFilter[]
  >([]);

  // state untuk mengambil berat pokemon
  const [pokemonWeightFilters, setPokemonWeightFilters] = useState<
    PokemonWeightFilter[]
  >([]);

  // variabel untuk menyimpan option multiselect
  const multiSelectOption = {
    classification: [
      { value: "Seed Pokémon", label: "Seed Pokémon" },
      { value: "Lizard Pokémon", label: "Lizard Pokémon" },
      { value: "Flame Pokémon", label: "Flame Pokémon" },
      { value: "Tiny Turtle Pokémon", label: "Tiny Turtle Pokémon" },
      { value: "Turle Pokémon", label: "Turle Pokémon" },
      { value: "Worm Pokémon", label: "Worm Pokémon" },
      { value: "Shellfish Pokémon", label: "Shellfish Pokémon" },
      { value: "Cocoon Pokémon", label: "Cocoon Pokémon" },
      { value: "Butterfly Pokémon", label: "Butterfly Pokémon" },
      { value: "Hairy Pokémon", label: "Hairy Pokémon" },
      { value: "Poison Pokémon", label: "Poison Pokémon" },
      { value: "Tiny Bird Pokémon", label: "Tiny Bird Pokémon" },
      { value: "Bird Pokémon", label: "Bird Pokémon" },
      { value: "Mouse Pokémon", label: "Mouse Pokémon" },
      { value: "Beak Pokémon", label: "Beak Pokémon" },
      { value: "Snake Pokémon", label: "Snake Pokémon" },
      { value: "Cobra Pokémon", label: "Cobra Pokémon" },
      { value: "Poison Pin Pokémon", label: "Poison Pin Pokémon" },
      { value: "Drill Pokémon", label: "Drill Pokémon" },
      { value: "Fairy Pokémon", label: "Fairy Pokémon" },
      { value: "Fox Pokémon", label: "Fox Pokémon" },
      { value: "Balloon Pokémon", label: "Balloon Pokémon" },
      { value: "Bat Pokémon", label: "Bat Pokémon" },
      { value: "Weed Pokémon", label: "Weed Pokémon" },
      { value: "Flower Pokémon", label: "Flower Pokémon" },
      { value: "Duck Pokémon", label: "Duck Pokémon" },
    ],
    gender: [
      {
        value: "Mayoritas Male",
        label: "Mayoritas Male",
        isDisabled: selectedPokemonGender.includes("Minoritas Female"),
      },
      {
        value: "Minoritas Male",
        label: "Minoritas Male",
        isDisabled: selectedPokemonGender.includes("Mayoritas Female"),
      },
      {
        value: "Balance",
        label: "Balance",
        isDisabled: false,
      },
      {
        value: "Mayoritas Female",
        label: "Mayoritas Female",
        isDisabled: selectedPokemonGender.includes("Minoritas Male"),
      },
      {
        value: "Minoritas Female",
        label: "Minoritas Female",
        isDisabled: selectedPokemonGender.includes("Mayoritas Male"),
      },
    ],
    type: [
      { value: "grass", label: "grass" },
      { value: "fire", label: "fire" },
      { value: "water", label: "water" },
      { value: "bug", label: "bug" },
      { value: "normal", label: "normal" },
      { value: "poison", label: "poison" },
      { value: "electric", label: "electric" },
      { value: "ground", label: "ground" },
      { value: "fairy", label: "fairy" },
      { value: "fighting", label: "fighting" },
      { value: "psychic", label: "psychic" },
      { value: "rock", label: "rock" },
      { value: "ghost", label: "ghost" },
      { value: "ice", label: "ice" },
      { value: "dragon", label: "dragon" },
      { value: "dark", label: "dark" },
      { value: "steel", label: "steel" },
      { value: "flying", label: "flying" },
    ],
  };

  //function untuk menghandle perubahan inputan nama pokemon
  const handleSearchPokemonByName = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  // function untuk menghandle perubahan input type pokemon
  const handleTypeFilterChange = (
    typeOptions: MultiValue<{ value: string; label: string }>
  ) => {
    setSelectedPokemonType(typeOptions.map((type) => type.value));
  };

  // function untuk menghandle perubahan input gender pokemon
  const handleGenderFilterChange = (
    genderOptions: MultiValue<{ value: string; label: string }>
  ) => {
    if (Array.isArray(selectedPokemonGender)) {
      setSelectedPokemonGender(genderOptions.map((gender) => gender.value));
    }
  };

  // function untuk menghandle perubahan input class pokemon
  const handleClassificationFilterChange = (
    classificationOptions: MultiValue<{ value: string; label: string }>
  ) => {
    if (Array.isArray(selectedPokemonClassification)) {
      setSelectedPokemonClassification(
        classificationOptions.map((classification) => classification.value)
      );
    }
  };

  // function untuk menambah input tinggi pokemon
  const addPokemonHeightFilter = () => {
    setPokemonHeightFilters([
      ...pokemonHeightFilters,
      { operator: "", valueOfPokemonHeight: null },
    ]);
  };

  // function untuk menghapus input tinggi pokemon
  const deletePokemonHeightFilter = (index: number) => {
    const heightFilters = [...pokemonHeightFilters];
    heightFilters.splice(index, 1);
    setPokemonHeightFilters(heightFilters);
  };

  // function untuk menghandle perubahan input tinggi pokemon
  const handlePokemonHeightFilterChange = (
    index: number,
    fieldOfHeight: string,
    valueOfHeight: number | string
  ) => {
    const heightFilterUpdated: any[] = [...pokemonHeightFilters];
    heightFilterUpdated[index][fieldOfHeight] = valueOfHeight;
    setPokemonHeightFilters(heightFilterUpdated);
  };

  // function untuk menambah input berat pokemon
  const addPokemonWeightFilter = () => {
    setPokemonWeightFilters([
      ...pokemonWeightFilters,
      { operator: "", valueOfPokemonWeight: null },
    ]);
  };

  // function untuk menghapus input berat pokemon
  const deletePokemonWeightFilter = (index: number) => {
    const weightFilters = [...pokemonWeightFilters];
    weightFilters.splice(index, 1);
    setPokemonWeightFilters(weightFilters);
  };

  // function untuk menghandle perubahan input berat pokemon
  const handlePokemonWeightFilterChange = (
    index: number,
    fieldOfWeight: string,
    valueOfWeight: number | string
  ) => {
    const weightFilterUpdated: any[] = [...pokemonWeightFilters];
    weightFilterUpdated[index][fieldOfWeight] = valueOfWeight;
    setPokemonWeightFilters(weightFilterUpdated);
  };

  //fucntion untuk menghandle submit filter
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const urlNameQuery = pokemonName === "" ? "" : `pokemonName=${pokemonName}`;

    const genderQuery = Array.isArray(selectedPokemonGender)
      ? selectedPokemonGender
          .filter((gender) => gender !== "")
          .map((gender) => gender)
          .join(`,`)
      : [];
    const urlGenderQuery =
      genderQuery === "" ? "" : `pokemonGender=${genderQuery}`;

    const typeQuery = Array.isArray(selectedPokemonType)
      ? selectedPokemonType
          .filter((type) => type !== "")
          .map((type) => type)
          .join(`,`)
      : [];
    const urlTypeQuery = typeQuery === "" ? "" : `pokemonType=${typeQuery}`;

    const classificationQuery = Array.isArray(selectedPokemonClassification)
      ? selectedPokemonClassification
          .filter((classification) => classification !== "")
          .map((classification) => classification)
          .join(`,`)
      : [];
    const urlClassificationQuery =
      classificationQuery === ""
        ? ""
        : `pokemonClassification=${classificationQuery}`;

    const heightQuery = pokemonHeightFilters
      .map(
        (heightFilter) =>
          `${heightFilter.operator}${heightFilter.valueOfPokemonHeight}`
      )
      .join(`,`);
    const urlHeightQuery = heightQuery === "" ? "" : `height=${heightQuery}`;

    const weightQuery = pokemonWeightFilters
      .map(
        (weightFilter) =>
          `${weightFilter.operator}${weightFilter.valueOfPokemonWeight}`
      )
      .join(`,`);
    const urlWeightQuery = weightQuery === "" ? "" : `weight=${weightQuery}`;

    const pokemonFilterQueryString = [
      urlNameQuery,
      urlGenderQuery,
      urlClassificationQuery,
      urlTypeQuery,
      urlHeightQuery,
      urlWeightQuery,
    ];

    const pokemonFilterForQueryStringUrl = pokemonFilterQueryString
      .filter((query) => query !== "")
      .map((query) => `${query}`)
      .join("&");

    router.push(`?${pokemonFilterForQueryStringUrl}`);
  };

  const pokemonHeightFilterFromUrl: any[] = [];
  const pokemonWeightFilterFromUrl: any[] = [];

  const heightPokemon = searchParams?.getAll("height").toString();
  const weightPokemon = searchParams?.getAll("weight").toString();

  const heightPokemonSplited = heightPokemon?.split(",");
  const weightPokemonSplited = weightPokemon?.split(",");

  heightPokemonSplited?.forEach((height) => {
    const operator = height.charAt(0);
    const valueOfPokemonHeight = Number(height.slice(1));

    pokemonHeightFilterFromUrl.push({ operator, valueOfPokemonHeight });
  });

  weightPokemonSplited?.forEach((weight) => {
    const operator = weight.charAt(0);
    const valueOfPokemonWeight = Number(weight.slice(1));

    pokemonWeightFilterFromUrl.push({ operator, valueOfPokemonWeight });
  });

  useEffect(() => {
    setPokemonName((searchParams?.get("pokemonName") as string) || "");
    setSelectedPokemonGender(
      (searchParams
        ?.getAll("pokemonGender")
        .toString()
        .split(",") as string[]) || []
    );
    setSelectedPokemonClassification(
      (searchParams
        ?.getAll("pokemonClassification")
        .toString()
        .split(",") as string[]) || []
    );
    setSelectedPokemonType(
      (searchParams?.getAll("pokemonType").toString().split(",") as string[]) ||
        []
    );
    setPokemonHeightFilters(pokemonHeightFilterFromUrl);
    setPokemonWeightFilters(pokemonWeightFilterFromUrl);
  }, []);

  return (
    <div>
      <Box mt="20px" mx="100px">
        <form method="post" onSubmit={handleSubmit}>
          <Flex>
            <FormControl mx="20px">
              <FormLabel>Filter By Name</FormLabel>
              <Input
                placeholder="Input Pokemon Name"
                type="text"
                width="500px"
                value={pokemonName}
                onChange={handleSearchPokemonByName}
              />
            </FormControl>

            <FormControl mx="20px">
              <FormLabel>Filter By Type</FormLabel>
              <Select
                isMulti
                options={multiSelectOption.type}
                styles={customWidth}
                onChange={handleTypeFilterChange}
                value={
                  Array.isArray(multiSelectOption.type)
                    ? multiSelectOption.type.filter((option) =>
                        selectedPokemonType.includes(option.value)
                      )
                    : []
                }
              />
            </FormControl>
          </Flex>

          <Flex>
            <FormControl mt="20px" mx="20px">
              <FormLabel>Filter By Gender</FormLabel>
              <Flex>
                <Select
                  isMulti
                  options={multiSelectOption.gender}
                  styles={customWidth}
                  value={
                    Array.isArray(multiSelectOption.gender)
                      ? multiSelectOption.gender.filter((option) =>
                          selectedPokemonGender.includes(option.value)
                        )
                      : []
                  }
                  onChange={handleGenderFilterChange}
                />
              </Flex>
            </FormControl>

            <FormControl mt="20px" mx="20px">
              <FormLabel>Filter By Classification</FormLabel>
              <Flex>
                <Select
                  isMulti
                  options={multiSelectOption.classification}
                  styles={customWidth}
                  onChange={handleClassificationFilterChange}
                  value={
                    Array.isArray(multiSelectOption.classification)
                      ? multiSelectOption.classification.filter((option) =>
                          selectedPokemonClassification.includes(option.value)
                        )
                      : []
                  }
                />
              </Flex>
            </FormControl>
          </Flex>

          <Flex mt="20px">
            <FormControl mx="20px">
              <FormLabel>Filter By Height</FormLabel>
              <Flex alignItems="center" wrap="wrap">
                {pokemonHeightFilters.map((pokemonHeightFilter, index) => (
                  <Flex key={index} mt="10px" alignItems="center">
                    <ChakraSelect
                      width="100px"
                      mr="5px"
                      value={pokemonHeightFilter.operator}
                      placeholder="operator"
                      onChange={(e) =>
                        handlePokemonHeightFilterChange(
                          index,
                          "operator",
                          e.target.value
                        )
                      }
                    >
                      <option value="="> = </option>
                      <option value="<">&#60;</option>
                      <option value=">">&#62;</option>
                      <option value="&ge;">&ge;</option>
                      <option value="&le;">&le;</option>
                    </ChakraSelect>
                    <Input
                      width="335px"
                      type="number"
                      placeholder="Add Pokemon Height"
                      value={
                        pokemonHeightFilter.valueOfPokemonHeight == null
                          ? ""
                          : pokemonHeightFilter.valueOfPokemonHeight
                      }
                      onChange={(e) =>
                        handlePokemonHeightFilterChange(
                          index,
                          "valueOfPokemonHeight",
                          Number(e.target.value)
                        )
                      }
                    />
                    <Text ml="5px" mr="5px">
                      m
                    </Text>
                    {index < 0 ? (
                      <></>
                    ) : (
                      <Button
                        ml="5px"
                        onClick={() => deletePokemonHeightFilter(index)}
                      >
                        -
                      </Button>
                    )}
                  </Flex>
                ))}
                <Button ml="5px" mt="10px" onClick={addPokemonHeightFilter}>
                  +
                </Button>
              </Flex>
            </FormControl>

            <FormControl ml="10px">
              <FormLabel>Filter By Weight</FormLabel>
              <Flex wrap="wrap" alignItems="center">
                {pokemonWeightFilters.map((pokemonWeightFilter, index) => (
                  <Flex key={index} alignItems="center" mt="10px">
                    <ChakraSelect
                      width="100px"
                      value={pokemonWeightFilter.operator}
                      mr="5px"
                      placeholder="operator"
                      onChange={(e) =>
                        handlePokemonWeightFilterChange(
                          index,
                          "operator",
                          e.target.value
                        )
                      }
                    >
                      <option value="=">=</option>
                      <option value="<">&#60;</option>
                      <option value=">">&#62;</option>
                      <option value="&ge;">&ge;</option>
                      <option value="&le;">&le;</option>
                    </ChakraSelect>
                    <Input
                      width="335px"
                      type="number"
                      placeholder="Add Pokemon Weight"
                      value={
                        pokemonWeightFilter.valueOfPokemonWeight == null
                          ? ""
                          : pokemonWeightFilter.valueOfPokemonWeight
                      }
                      onChange={(e) =>
                        handlePokemonWeightFilterChange(
                          index,
                          "valueOfPokemonWeight",
                          Number(e.target.value)
                        )
                      }
                    />
                    <Text ml="5px" mr="5px">
                      Kg
                    </Text>
                    {index < 0 ? (
                      <></>
                    ) : (
                      <Button
                        ml="5px"
                        onClick={() => deletePokemonWeightFilter(index)}
                      >
                        -
                      </Button>
                    )}
                  </Flex>
                ))}
                <Button ml="5px" mt="10px" onClick={addPokemonWeightFilter}>
                  +
                </Button>
              </Flex>
            </FormControl>
          </Flex>

          <Button
            mx="20px"
            type="submit"
            colorScheme="blue"
            mt="20px"
            width="200px"
          >
            Filter
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default PokemonFilter;
