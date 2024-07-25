# Chemical Engine - Motorzinho de Alquimia

## Visão Geral
O Chemical Engine é um motor simples para criar um universo de alquimia, onde os jogadores podem combinar elementos para descobrir novos. Este modelo fornece uma estrutura inicial fácil de entender e expandir para criar jogos educacionais ou de entretenimento baseados em princípios de alquimia.

## Estrutura do Universo
O universo é composto por elementos básicos que podem ser combinados para criar novos elementos. Cada elemento possui um nome, uma exibição, uma lista de combinações possíveis e uma URL de imagem representativa.

### Exemplo de Elemento:
- Nome: Fogo
- Exibição: "Fogo"
- Combinações: {"água": "vapor", "fogo": "sol"}
- Item Inicial: Sim
- ![image](https://github.com/Ak4ai/Chemical_Engine/assets/129908980/96d38d2e-2b6a-47cc-9daa-a7c77880417a)

## Estado do Jogo
O estado do jogo mantém o rastreamento dos elementos descobertos e indescobertos, além de registrar tentativas e misturas feitas pelos jogadores.

### Funções Principais:
- `criarEstadoDoJogo(universo)`: Inicializa o estado do jogo com base no universo fornecido.
- `salvarJogo(estadoJogo)`: Salva o estado do jogo no armazenamento local.
- `carregarJogo()`: Carrega o estado do jogo do armazenamento local ou cria um novo se não existir.
- `descobrirNovo(novoEl)`: Move um elemento indescoberto para a lista de elementos descobertos.
- `fazerMistura()`: Realiza a mistura de dois elementos e verifica se resulta em um novo elemento descoberto.

## Interface Gráfica
O Chemical Engine inclui funções para renderizar a interface gráfica, exibindo elementos descobertos, misturas e mensagens informativas.

### Funções de Renderização:
- `obterImg(elID)`: Obtém a tag HTML da imagem para um determinado elemento.
- `renderizarMistura()`: Atualiza a exibição da mistura atual.
- `renderizarDescobertos()`: Renderiza a lista de elementos descobertos na interface gráfica.

## Interação do Usuário
O usuário pode misturar elementos arrastando e soltando, além de clicar em botões para realizar misturas e descobrir novos elementos.

### Drag and Drop:
- Elementos podem ser arrastados para misturar uns com os outros.
- A mistura é realizada quando um elemento é solto sobre outro.

### Cliques e Botões:
- Clicar em um elemento revela informações sobre ele.
- Clicar no botão "Misturar" inicia a combinação dos elementos selecionados.

## Como Jogar
1. Arraste e solte elementos para misturar.
2. Clique em elementos descobertos para obter mais informações.
3. Misture elementos para descobrir novas combinações.
4. Salve seu progresso usando a função de salvar jogo.

![image](https://github.com/Ak4ai/Chemical_Engine/assets/129908980/8c96a38d-e66e-4b4b-b56c-21ff19781c8b)


## Personalização
O Chemical Engine pode ser expandido adicionando mais elementos, imagens e combinações ao universo. Personalize conforme necessário para atender aos objetivos do seu jogo.

## Licença
Este projeto é fornecido sob a [Licença MIT](LICENSE).

Divirta-se explorando o mundo da alquimia com o Chemical Engine!

# HTML, CSS, JS (Auto Refresh)

This template is a starter for building a website with HTML, CSS and JS, powered by [Vite](https://vitejs.dev/). HTML provides the basic structure, CSS controls formatting, and JavaScript controls the behavior of different elements.

Hit run to see this project in action. It will auto-refresh as you edit the HTML, CSS and JS files.

## Disable Auto Refresh

If you find the auto refresh getting in your way, go to [vite.config.js](./vite.config.js) and update it set `hmr` to false to disable hot module reloading (HMR). The full config will look like this:

```js
export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    hmr: false, // Change this line to `false` disable auto-refreshing.
  }
})
```

## Packages

Because this template uses Vite to build your code, you can add install and use npm packages. Simple open the Packager tool to search and manage your packages.

## Learn More

Check out [the vite docs](https://vitejs.dev) to learn more about configuring a frontend application.
