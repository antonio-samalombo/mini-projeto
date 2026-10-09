import { PokemonResumo, PokemonApiResponse } from "../models/Pokemon.js";
import { APIError } from "../models/CustomErrors.js";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const url = `${BASE_URL}/${nomeOuId.toLowerCase()}`;
  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new APIError(`Pokémon não encontrado: ${nomeOuId}`);
    }

    const dados = (await resposta.json()) as PokemonApiResponse;

    const tipos: string[] = dados.types.map((item) => item.type.name);

    const pokemon: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos,
      altura: dados.height,
      peso: dados.weight,
    };

    console.log(`[OK] Pokémon encontrado: ${pokemon.nome}`);
    return pokemon;
  } catch (erro) {
    if (erro instanceof APIError) {
      console.log(`[ERRO] ${erro.message}`);
    } else {
      console.log("[ERRO] Não foi possível buscar o Pokémon.");
    }
    return null;
  }
}
