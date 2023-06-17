import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPokemonData = async () => {
  const pokemons = prisma.pokemon.findMany({
    include: {
      abilities: {
        select: {
          id: true,
          pokemon_id: true,
          name: true,
        },
      },
    },
  });

  return pokemons;
};

const pokemon = async () => {
  const pokemons = await getPokemonData();

  return (
    <div>
      <h1>ini adalah halaman utama pokemon</h1>
    </div>
  );
};

export default pokemon;
