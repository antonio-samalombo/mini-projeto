import { readFile, writeFile } from "node:fs/promises";
import { PokemonResumo } from "../models/Pokemon.js";
import { LocalBoxError } from "../models/CustomErrors.js";

const BOX_PATH = "./pc_box.json";

export async function carregarBox(): Promise<PokemonResumo[]> {
  try {
    const conteudo = await readFile(BOX_PATH, "utf-8");
    return JSON.parse(conteudo) as PokemonResumo[];
  } catch {
    return [];
  }
}

export async function salvarBox(pokemons: PokemonResumo[]): Promise<void> {
  try {
    await writeFile(BOX_PATH, JSON.stringify(pokemons, null, 2), "utf-8");
  } catch (erro) {
    throw new LocalBoxError("Erro ao salvar o pc_box.json.");
  }
}
