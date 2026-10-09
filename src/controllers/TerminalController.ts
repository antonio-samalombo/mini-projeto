import { CatalogoPokemon } from "../models/Pokemon.js";
import { buscarPokemon } from "../services/PokeApiService.js";
import { salvarBox } from "../services/BoxService.js";
import { formatarTitulo } from "../utils/textFormatters.js";

export class TerminalController {
  constructor(private catalogo: CatalogoPokemon) {}

  async buscarEAdicionar(nomeOuId: string): Promise<void> {
    const pokemon = await buscarPokemon(nomeOuId);
    if (pokemon !== null) {
      this.catalogo.adicionar(pokemon);
    }
  }

  listar(): void {
    console.log(formatarTitulo("Catálogo atual"));
    this.catalogo.listar();
  }

  remover(id: number): void {
    this.catalogo.remover(id);
  }

  async persistir(): Promise<void> {
    await salvarBox(this.catalogo.obterTodos());
    console.log("[OK] Catálogo salvo em pc_box.json.");
  }

  exibirEstatisticas(): void {
    const todos = this.catalogo.obterTodos();
    if (todos.length === 0) return;

    const pesoTotal = this.catalogo.pesoTotal();
    const mediaPeso = pesoTotal / todos.length;
    const todosValidos = this.catalogo.todosTemNome();
    const tipos = todos.map((p) => p.tipos).flat();
    const tiposUnicos = [...new Set(tipos)];

    console.log(formatarTitulo("Estatísticas"));
    console.log(`Total de Pokémon: ${todos.length}`);
    console.log(`Peso total: ${pesoTotal} | Média de peso: ${mediaPeso.toFixed(1)}`);
    console.log(`Todos com nome válido: ${todosValidos}`);
    console.log(`Tipos presentes: ${tiposUnicos.join(", ")}`);
  }
}
