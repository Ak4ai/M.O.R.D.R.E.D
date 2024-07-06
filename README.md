# Módulo de Organização e Recuperação de Dados para RPGs Épicos e Diversificados

<p align="center">
  <img src="https://i.ibb.co/GPHh4Zh/image.png" alt="Screenshot_4">
</p>


Este é um sistema simples para gerenciar as informações de um personagem em um RPG, utilizando arquivos JSON para configurar os atributos e habilidades do personagem.

## Funcionalidades

### Classe Personagem

A classe `Personagem` é utilizada para instanciar um objeto de personagem com atributos como vida, energia, sanidade, atributos físicos e mentais, além de diversas perícias.

### Métodos da Classe Personagem

- `getVida()`, `getEnergia()`, `getSanidade()`: Métodos para retornar os valores atuais de vida, energia e sanidade do personagem.
- `getPericias()`, `getAtributos()`: Métodos para retornar um objeto com todas as perícias e atributos do personagem.
- Métodos para modificar atributos: `reduzirEnergia()`, `adicionarEnergia()`, `reduzirVida()`, `adicionarVida()`, `reduzirSanidade()`, `adicionarSanidade()`.
- `obterStatus()`: Retorna uma string formatada com o status geral do personagem.

### Como Configurar

1. **Arquivo `personagem.json`:**

   Este arquivo deve conter as informações iniciais do personagem, como vida, energia, sanidade, atributos e perícias. Exemplo:

   ```json
   {
       "vida": 100,
       "vidaMax": 100,
       "energia": 50,
       "energiaMax": 50,
       "sanidade": 80,
       "sanidadeMax": 80,
       "vigor": 12,
       "intelecto": 15,
       "presenca": 10,
       "forca": 14,
       "agilidade": 16,
       "periciaAcrobacia": 10,
       "periciaAdestramento": 8,
       "periciaArtes": 12,
       "periciaSorte": 5
   }
   ```

2. **Arquivo `habilidades.json`:**

   Este arquivo deve conter as habilidades disponíveis para o personagem, cada uma com seu nome, descrição, custo de energia, cooldown, dano e status. Exemplo:

   ```json
   {
       "habilidades": [
           {
               "id": 1,
               "nome": "Ataque Poderoso",
               "descricao": "Ataque poderoso que causa grande dano.",
               "custo": 10,
               "cooldown": 2,
               "dano": "2d8",
               "status": "Ativo"
           },
           {
               "id": 2,
               "nome": "Curar Ferimentos",
               "descricao": "Habilidade para curar ferimentos leves.",
               "custo": 5,
               "cooldown": 1,
               "dano": "1d6",
               "status": "Disponível"
           }
       ]
   }
   ```

### Como Usar

1. Clone o repositório.
2. Configure os arquivos `personagem.json` e `habilidades.json` conforme descrito acima.
3. Abra `index.html` em seu navegador para iniciar o sistema.

### Estrutura do Projeto

```
├── assets/
│   ├── personagem.json
│   └── habilidades.json
├── index.html
├── script.js
├── style.css
├── README.md
└── ...
```

### Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

### Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
```

Este README.md fornece uma visão geral clara do seu projeto, suas funcionalidades principais, como configurá-lo e estrutura de diretórios básica. Certifique-se de ajustar conforme necessário para refletir completamente o seu projeto.
