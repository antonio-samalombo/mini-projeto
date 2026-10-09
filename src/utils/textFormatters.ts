export function formatarPokemon(id: number, nome: string, tipos: string[], altura: number, peso: number): string {
  return `#${id} - ${nome} | Tipos: ${tipos.join(", ")} | Altura: ${altura} | Peso: ${peso}`;
}

export function formatarTitulo(texto: string): string {
  return `\n=== ${texto.toUpperCase()} ===`;
}
