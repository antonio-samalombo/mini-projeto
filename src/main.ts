import { CatalogoPokemon } from "./models/Pokemon.js";
import { TerminalController } from "./controllers/TerminalController.js";

async function main(): Promise<void> {
  const catalogo = new CatalogoPokemon();
  const controller = new TerminalController(catalogo);

  await controller.buscarEAdicionar("pikachu");
  await controller.buscarEAdicionar("charmander");
  await controller.buscarEAdicionar("bulbasaur");
  await controller.buscarEAdicionar("pikachu");
  await controller.buscarEAdicionar("pokemon-inexistente");

  controller.listar();
  controller.remover(25);
  controller.listar();
  controller.remover(999);
  controller.exibirEstatisticas();

  await controller.persistir();
}

main();
