# Pokedex TypeScript Lite

Aplicacao back-end em Node.js com TypeScript que consulta a PokeAPI, transforma as respostas em objetos tipados e os gerencia em um catalogo local com persistencia em `pc_box.json`.

## Tecnologias

- Node.js v20+
- TypeScript v5 (strict mode)
- TSX
- PokeAPI (`https://pokeapi.co`)

## Instalacao

```bash
git clone <LINK_DO_REPOSITORIO>
cd pokedex-typescript-lite
npm install
```

## Execucao

```bash
npm run start
```

```bash
npm run dev
```

## Estrutura

```
src/
├── main.ts
├── controllers/
│   └── TerminalController.ts
├── services/
│   ├── PokeApiService.ts
│   └── BoxService.ts
├── models/
│   ├── Pokemon.ts
│   └── CustomErrors.ts
└── utils/
    └── textFormatters.ts
pc_box.json
```

## Arquitetura

| Camada | Responsabilidade |
|---|---|
| `models/` | Interfaces `PokemonResumo`, `PokemonApiResponse` e classe `CatalogoPokemon` |
| `services/` | Integracao com PokeAPI (`fetch`) e persistencia com `node:fs/promises` |
| `controllers/` | Orquestracao das operacoes e saida no terminal |
| `utils/` | Funcoes puras de formatacao de strings |

## Funcionalidades

- Busca de Pokemon por nome ou ID via PokeAPI
- Tratamento de erro 404 com `APIError`
- Mapeamento da resposta da API para `PokemonResumo`
- Adicao ao catalogo com verificacao de duplicidade por ID
- Remocao por ID
- Listagem formatada no terminal
- Estatisticas: peso total, media de peso, tipos presentes
- Persistencia do catalogo em `pc_box.json`

## Metodos de array utilizados

| Metodo | Uso |
|---|---|
| `map` | Extrair tipos da API e listar tipos do catalogo |
| `filter` | Remover Pokemon por ID |
| `some` | Verificar duplicidade e existencia |
| `every` | Validar se todos os Pokemon tem nome |
| `reduce` | Calcular peso total |
| `forEach` | Listar Pokemon no terminal |

## Saidas esperadas

```
[OK] Pokemon encontrado: pikachu
[OK] pikachu adicionado ao catalogo.
[AVISO] pikachu ja esta no catalogo.
[ERRO] Pokemon nao encontrado: pokemon-inexistente
[OK] Pokemon removido do catalogo.
[AVISO] Nenhum Pokemon encontrado com esse ID.
[OK] Catalogo salvo em pc_box.json.
```

## Branches

| Branch | Descricao |
|---|---|
| `main` | Codigo estavel |
| `develop` | Integracao de features |
| `feat/pokedex` | Desenvolvimento das funcionalidades |
| `docs/readme` | Documentacao |


# mini-projeto
