import { useQuery } from "@tanstack/react-query";

const fetchPoke = async () => {
  const todos = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${Math.ceil(
      Math.random() * 10
    )}`
  );
  const res = await todos.json();
  return res;
};

const useGetPokeQuery = () => {
  return useQuery(["poke"], () => fetchPoke());
};

export default useGetPokeQuery;
