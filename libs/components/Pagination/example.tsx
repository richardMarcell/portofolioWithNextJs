// const queryStrings: Map<string, string | string[]> = new Map([
//   ["pokemonName", searchParams?.get("pokemonName") ?? ""],
//   [
//     "pokemonGender",
//     searchParams?.getAll("pokemonGender").toString().split(",") ?? "",
//   ],
//   [
//     "pokemonType",
//     searchParams?.getAll("pokemonType").toString().split(",") ?? "",
//   ],
//   [
//     "pokemonClassification",
//     searchParams?.getAll("pokemonClassification").toString().split(",") ?? "",
//   ],
//   [
//     "heightValue",
//     searchParams?.getAll("heightValue").toString().split(",") ?? "",
//   ],
//   [
//     "heightOperator",
//     searchParams?.getAll("heightOperator").toString().split(",") ?? "",
//   ],
//   [
//     "weightValue",
//     searchParams?.getAll("weightValue").toString().split(",") ?? "",
//   ],
//   [
//     "weightOperator",
//     searchParams?.getAll("weightOperator").toString().split(",") ?? "",
//   ],
// ]);

// const pokemonName: string = queryStrings.get("pokemonName") as string;

// const pokemonGenders: string[] = queryStrings.get("pokemonGender") as string[];

// const pokemonTypes: string[] = queryStrings.get("pokemonType") as string[];

// const pokemonClassifications: string[] = queryStrings.get(
//   "pokemonClassification"
// ) as string[];

// const pokemonHeight: { operator: string; value: string }[] = [];

// const pokemonHeightOperators: string[] = queryStrings.get(
//   "heightOperator"
// ) as string[];

// const pokemonHeightValues: string[] = queryStrings.get(
//   "heightValue"
// ) as string[];

// for (let i = 0; i < pokemonHeightOperators.length; i++) {
//   const operator: string = pokemonHeightOperators[i];
//   const value: string = pokemonHeightValues[i];

//   pokemonHeight.push({ operator, value });
// }

// const pokemonWeight: { operator: string; value: string }[] = [];

// const pokemonWeightOperators: string[] = queryStrings.get(
//   "weightOperator"
// ) as string[];

// const pokemonWeightValues: string[] = queryStrings.get(
//   "weightValue"
// ) as string[];

// for (let i = 0; i < pokemonWeightOperators.length; i++) {
//   const operator: string = pokemonWeightOperators[i];
//   const value: string = pokemonWeightValues[i];

//   pokemonWeight.push({ operator, value });
// }

// const pokemonNameQueryString = `pokemonName=${pokemonName}`;

// const pokemonGenderQueryString = pokemonGenders
//   ?.map((gender) => `pokemonGender=${gender}`)
//   .join("&");

// console.log(searchParams?.get("pokemonName"));

// const pokemonTypeQueryString = pokemonTypes
//   ?.map((type) => `pokemonType=${type}`)
//   .join("&");

// const pokemonClassificationQueryString = pokemonClassifications
//   ?.map((classification) => `pokemonClassification=${classification}`)
//   .join("&");

// const pokemonHeightQueryString = pokemonHeight
//   .map(
//     (height) => `heightOperator=${height.operator}&heightValue=${height.value}`
//   )
//   .join("&");

// const pokemonWeightQueryString = pokemonWeight
//   .map(
//     (weight) => `weightOperator=${weight.operator}&weightValue=${weight.value}`
//   )
//   .join("&");
