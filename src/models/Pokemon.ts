export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
}

export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((p) => p.id === pokemon.id);
    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }
    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  listar(): void {
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }
    this.pokemons.forEach((p) => {
      console.log(
        `#${p.id} - ${p.nome} | Tipos: ${p.tipos.join(", ")} | Altura: ${p.altura} | Peso: ${p.peso}`
      );
    });
  }

  remover(id: number): void {
    const existe = this.pokemons.some((p) => p.id === id);
    if (!existe) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }
    this.pokemons = this.pokemons.filter((p) => p.id !== id);
    console.log("[OK] Pokémon removido do catálogo.");
  }

  obterTodos(): PokemonResumo[] {
    return this.pokemons;
  }

  pesoTotal(): number {
    return this.pokemons.reduce((acc, p) => acc + p.peso, 0);
  }

  todosTemNome(): boolean {
    return this.pokemons.every((p) => p.nome.trim().length > 0);
  }
}
