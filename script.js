let personagem; // Declaração global do objeto personagem
let habilidade;

document.addEventListener('deviceready', async () => {
    try {
        // Solicita e espera pelos dados do personagem
        console.log('Esperando dados do personagem...');
        const personagemData = await carregarDados('personagem.json');
        console.log('Dados do personagem recebidos:', personagemData);

        // Inicializa a instância da classe Personagem com os dados recebidos
        personagem = new Personagem(personagemData);
        atualizarInfoPersonagem(personagem); // Atualiza a interface com os dados do personagem

        // Solicita e espera pelos dados das habilidades
        const habilidadesData = await carregarDados('habilidades.json');
        console.log('Dados das habilidades recebidos:', habilidadesData);

        // Exibe as habilidades na interface
        exibirHabilidades(habilidadesData);
    } catch (error) {
        console.error('Erro ao obter dados do personagem ou habilidades:', error);
    }
});

function carregarDados(filename) {
    return new Promise((resolve, reject) => {
        const filePath = cordova.file.dataDirectory + filename;
        window.resolveLocalFileSystemURL(filePath, (fileEntry) => {
            fileEntry.file((file) => {
                const reader = new FileReader();
                reader.onloadend = function() {
                    console.log('MyAppLog: Conteúdo do arquivo carregado:', reader.result);
                    try {
                        const data = JSON.parse(this.result);
                        resolve(data);
                    } catch (e) {
                        reject(e);
                    }
                };
                reader.onerror = function(e) {
                    console.error('MyAppLog: Erro ao ler o arquivo:', e);
                    mostrarMensagem('Erro ao ler o arquivo: ' + e);  // Alerta para erros de leitura
                    reject(e);
                };
                reader.readAsText(file);
            }, reject);
        }, (err) => {
            console.error('MyAppLog: Erro ao resolver o caminho do arquivo:', err);
            mostrarMensagem('Erro ao resolver o caminho do arquivo: ' + err);  // Alerta para erros de resolução de caminho
            reject(err);
        });
    });
}
  
class Personagem {
    constructor(data) {
        this.vida = data.vida;
        this.vidaMax = data.vidaMax;
        this.energia = data.energia;
        this.energiaMax = data.energiaMax;
        this.sanidade = data.sanidade;
        this.sanidadeMax = data.sanidadeMax;
        this.vigor = data.vigor;
        this.intelecto = data.intelecto;
        this.presenca = data.presenca;
        this.forca = data.forca;
        this.agilidade = data.agilidade;
        this.periciaAcrobacia = data.periciaAcrobacia;
        this.periciaAdestramento = data.periciaAdestramento;
        this.periciaArtes = data.periciaArtes;
        this.periciaAtualidades = data.periciaAtualidades;
        this.periciaCalamidade = data.periciaCalamidade;
        this.periciaCiencias = data.periciaCiencias;
        this.periciaDiplomacia = data.periciaDiplomacia;
        this.periciaFortitude = data.periciaFortitude;
        this.periciaFurtividade = data.periciaFurtividade;
        this.periciaIniciativa = data.periciaIniciativa;
        this.periciaIntuicao = data.periciaIntuicao;
        this.periciaInvestigacao = data.periciaInvestigacao;
        this.periciaLuta = data.periciaLuta;
        this.periciaMedicina = data.periciaMedicina;
        this.periciaManifestacao = data.periciaManifestacao;
        this.periciaPercepcao = data.periciaPercepcao;
        this.periciaPilotagem = data.periciaPilotagem;
        this.periciaPontaria = data.periciaPontaria;
        this.periciaSobrevivencia = data.periciaSobrevivencia;
        this.periciaTecnica = data.periciaTecnica;
        this.periciaVontade = data.periciaVontade;
        this.periciaSorte = data.periciaSorte;
    }

    // Métodos para retornar detalhes específicos
    getVida() {
        return this.vida;
    }

    getEnergia() {
        return this.energia;
    }

    getSanidade() {
        return this.sanidade;
    }

    getPericias() {
        return {
            acrobacia: this.periciaAcrobacia,
            adestramento: this.periciaAdestramento,
            artes: this.periciaArtes,
            atualidades: this.periciaAtualidades,
            calamidade: this.periciaCalamidade,
            ciencias: this.periciaCiencias,
            diplomacia: this.periciaDiplomacia,
            fortitude: this.periciaFortitude,
            furtividade: this.periciaFurtividade,
            iniciativa: this.periciaIniciativa,
            intuicao: this.periciaIntuicao,
            investigacao: this.periciaInvestigacao,
            luta: this.periciaLuta,
            medicina: this.periciaMedicina,
            manifestacao: this.periciaManifestacao,
            percepcao: this.periciaPercepcao,
            pilotagem: this.periciaPilotagem,
            pontaria: this.periciaPontaria,
            sobrevivencia: this.periciaSobrevivencia,
            tecnica: this.periciaTecnica,
            vontade: this.periciaVontade,
            sorte: this.periciaSorte
        };
    }

    getAtributos() {
        return {
            vigor: this.vigor,
            intelecto: this.intelecto,
            presenca: this.presenca,
            forca: this.forca,
            agilidade: this.agilidade
        };
    }

    // Métodos para modificar atributos
    reduzirEnergia(valor) {
        this.energia -= valor;
    }

    adicionarEnergia(valor) {
        this.energia += valor;
    }

    reduzirVida(valor) {
        this.vida -= valor;
    }

    adicionarVida(valor) {
        this.vida += valor;
    }

    // Métodos para modificar atributos do objeto Personagem
    reduzirSanidade(valor) {
        this.sanidade -= valor;
        // Adicione aqui qualquer lógica adicional, como validações ou atualizações de interface
    }

    adicionarSanidade(valor) {
        this.sanidade += valor;
        // Adicione aqui qualquer lógica adicional, como validações ou atualizações de interface
    }

    // Método para retornar o status geral
    obterStatus() {
        return `Vida: ${this.vida} | Energia: ${this.energia} | Vigor: ${this.vigor} | Intelecto: ${this.intelecto} | Presença: ${this.presenca} | Força: ${this.forca} | Agilidade: ${this.agilidade}`;
    }
}

function atualizarInfoPersonagem(Personagem) {
    document.getElementById('status-vida').innerText = personagem.vida;
    document.getElementById('status-energia').innerText = personagem.energia;
    document.getElementById('status-sanidade').innerText = personagem.sanidade;
    document.getElementById('status-vigor').innerText = personagem.vigor;
    document.getElementById('status-intelecto').innerText = personagem.intelecto;
    document.getElementById('status-presenca').innerText = personagem.presenca;
    document.getElementById('status-forca').innerText = personagem.forca;
    document.getElementById('status-agilidade').innerText = personagem.agilidade;

    // Dentro de atualizarInfoPersonagem(Personagem)
    document.getElementById('status-bar-vida').style.width = (personagem.vida / personagem.vidaMax) * 100 + '%';
    document.getElementById('status-bar-energia').style.width = (personagem.energia / personagem.energiaMax) * 100 + '%';
    document.getElementById('status-bar-sanidade').style.width = (personagem.sanidade / personagem.sanidadeMax) * 100 + '%';

    const pericias = personagem.getPericias();
    document.getElementById('status-pericia-acrobacia').innerText = pericias.acrobacia;
    document.getElementById('status-pericia-adestramento').innerText = pericias.adestramento;
    document.getElementById('status-pericia-artes').innerText = pericias.artes;
    document.getElementById('status-pericia-atualidades').innerText = pericias.atualidades;
    document.getElementById('status-pericia-calamidade').innerText = pericias.calamidade;
    document.getElementById('status-pericia-ciencias').innerText = pericias.ciencias;
    document.getElementById('status-pericia-diplomacia').innerText = pericias.diplomacia;
    document.getElementById('status-pericia-fortitude').innerText = pericias.fortitude;
    document.getElementById('status-pericia-furtividade').innerText = pericias.furtividade;
    document.getElementById('status-pericia-iniciativa').innerText = pericias.iniciativa;
    document.getElementById('status-pericia-intuicao').innerText = pericias.intuicao;
    document.getElementById('status-pericia-investigacao').innerText = pericias.investigacao;
    document.getElementById('status-pericia-luta').innerText = pericias.luta;
    document.getElementById('status-pericia-medicina').innerText = pericias.medicina;
    document.getElementById('status-pericia-manifestacao').innerText = pericias.manifestacao;
    document.getElementById('status-pericia-percepcao').innerText = pericias.percepcao;
    document.getElementById('status-pericia-pilotagem').innerText = pericias.pilotagem;
    document.getElementById('status-pericia-pontaria').innerText = pericias.pontaria;
    document.getElementById('status-pericia-sobrevivencia').innerText = pericias.sobrevivencia;
    document.getElementById('status-pericia-tecnica').innerText = pericias.tecnica;
    document.getElementById('status-pericia-vontade').innerText = pericias.vontade;
    document.getElementById('status-pericia-sorte').innerText = pericias.sorte;
}


let danoTotal = 0;

class HabilidadeBase {
    constructor(nome, personagem) {
        this.nome = nome;
        this.personagem = personagem;
    }

    rolarDado(lados, quantidade = 1) {
        let resultados = [];
        for (let i = 0; i < quantidade; i++) {
            resultados.push(Math.floor(Math.random() * lados) + 1);
        }
        return [resultados, resultados.reduce((a, b) => a + b, 0), lados * quantidade];
    }

    obterDanoTotal() {
        return this.nome === "Lucifer" ? `Dano Total Acumulado (${this.nome}): ${danoTotal}` : `(${this.nome}) Teste de Presença - Manifestação`;
    }
}

// Variável para armazenar a fila de mensagens
const filaDeMensagens = [];

function mostrarMensagem(mensagem) {
    const dialog = document.getElementById('custom-dialog');
    const dialogMessage = document.getElementById('dialog-message');
    const dialogOkButton = document.getElementById('dialog-ok-button');

    // Adiciona a mensagem à fila de mensagens
    filaDeMensagens.push(mensagem);

    // Verifica se o diálogo já está sendo exibido
    if (dialog.style.display === 'none' || dialog.style.display === '') {
        exibirProximaMensagem();
        exibirBlurBackground(); // Exibe o blur-background ao mostrar o primeiro diálogo
    }
}

function exibirProximaMensagem() {
    const dialog = document.getElementById('custom-dialog');
    const dialogMessage = document.getElementById('dialog-message');
    const dialogOkButton = document.getElementById('dialog-ok-button');

    // Verifica se há mensagens na fila
    if (filaDeMensagens.length > 0) {
        // Obtém a próxima mensagem da fila
        const mensagem = filaDeMensagens.shift(); // Remove e retorna o primeiro elemento da fila

        // Define a mensagem no diálogo e exibe
        dialogMessage.innerText = mensagem;
        dialog.style.display = 'flex';

        // Limpa qualquer evento onclick anterior do botão
        dialogOkButton.onclick = null;

        // Define o evento onclick para fechar o diálogo e exibir a próxima mensagem
        dialogOkButton.onclick = function() {
            dialog.style.display = 'none';
            // Verifica se ainda há mensagens na fila após fechar o diálogo
            if (filaDeMensagens.length === 0) {
                esconderBlurBackground(); // Esconde o blur-background ao fechar o último diálogo
            }
            exibirProximaMensagem(); // Exibe a próxima mensagem da fila

        };
    }
}

function exibirBlurBackground() {
    const blurBackground = document.getElementById('blur-background');
    blurBackground.style.display = 'block';
}

function esconderBlurBackground() {
    const blurBackground = document.getElementById('blur-background');
    blurBackground.style.display = 'none';
}



class LuciferPassiva extends HabilidadeBase {
    constructor(personagem) {
        super("Lucifer", personagem);
    }

    aplicarAtaque() {
        let [dados, resultado, maximo] = this.rolarDado(6, 1);
        danoTotal += resultado;
        mostrarMensagem(`Ataque recebido/causado: ${dados} => +${resultado} de dano (Máximo: ${maximo})`);
    }

    aplicarNocaute() {
        let [dados, resultado, maximo] = this.rolarDado(8, 1);
        danoTotal += resultado;
        mostrarMensagem(`Inimigo Morto/Aliado Caido: ${dados} => +${resultado} de dano (Máximo: ${maximo})`);
    }

    aplicarBuffDebuff() {
        let [dados, resultado, maximo] = this.rolarDado(6, 2);
        danoTotal += resultado;
        mostrarMensagem(`Buff/Debuff em si: ${dados} => +${resultado} de dano (Máximo: ${maximo})`);
    }

    aplicarHabilidade() {
        let [dados, resultado, maximo] = this.rolarDado(8, 2);
        danoTotal += resultado;
        mostrarMensagem(`Habilidade inimiga/aliada: ${dados} => +${resultado} de dano (Máximo: ${maximo})`);
    }

    aplicarCriticos() {
        let [dados, resultado, maximo] = this.rolarDado(10, 1);
        danoTotal += resultado;
        mostrarMensagem(`Críticos (Aliados ou inimigo): ${dados} => +${resultado} de dano (Máximo: ${maximo})`);
    }

    aplicarAliadoMorto() {
        danoTotal += 30;
        mostrarMensagem("Aliado Morto (morte permanente): +30 de dano");
    }
}

class Belzebub extends HabilidadeBase {
    constructor(personagem) {
        super("Belzebub", personagem);
    }

    aplicarHabilidade() {
        this.personagem.reduzirEnergia(25);

        let dadosPresenca = [];
        for (let i = 0; i < this.personagem.presenca; i++) {
            dadosPresenca.push(Math.floor(Math.random() * 20) + 1);
        }
        let maiorDado = Math.max(...dadosPresenca);

        mostrarMensagem(`Teste de Presença - Manifestação: ${dadosPresenca} => maior dado: ${maiorDado}`);

        let mensagem = `Teste de Presença - Manifestação (com Perícia): ${maiorDado}\n`;

        if (maiorDado <= 10) {
            mensagem += "1-10: Toma somente ½ do dano físico de todas as fontes";
        } else if (maiorDado <= 18) {
            mensagem += "11-18: Toma somente ¼ do dano físico de todas as fontes";
        } else {
            mensagem += "19+: Não toma dano físico de nenhuma fonte";
        }

        mostrarMensagem(mensagem);
    }
}

function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.innerText.toLowerCase() === tabName) {
            tab.classList.add('active');
        }
    });

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.id === tabName) {
            content.classList.add('active');
            if (tabName === 'info') {
                atualizarInfoPersonagem(Personagem); // Chama a atualização ao abrir a guia "Info"
                // Inicia o timer para atualizar a cada 5 segundos
                setInterval(atualizarInfoPersonagem, 5000); // 5000 milissegundos = 5 segundos
            }
        }
    });
}


function openSubtab(tabName, subtabName) {
    // Esconde todas as subcontent e remove a classe "active" das subtabs
    var subcontents = document.querySelectorAll('.subcontent');
    for (var i = 0; i < subcontents.length; i++) {
        subcontents[i].classList.remove('active');
    }

    var subtabs = document.querySelectorAll('.subtab');
    for (var i = 0; i < subtabs.length; i++) {
        subtabs[i].classList.remove('active');
    }

    // Exibe a subcontent selecionada e adiciona a classe "active" na subtab correspondente
    var subcontent = document.getElementById(subtabName);
    if (subcontent) {
        subcontent.classList.add('active');
        document.querySelector('.subtab[data-tab="' + subtabName + '"]').classList.add('active');
    }

    // Verifica se estamos na aba "Habilidades" e mostra o texto de nenhuma habilidade selecionada se necessário
    if (tabName === 'skills' && subtabName === 'habilidades') {
        if (nenhumaHabilidadeSelecionada()) {
            document.getElementById('texto-nenhuma-habilidade').style.display = 'block';
        } else {
            document.getElementById('texto-nenhuma-habilidade').style.display = 'none';
        }
    }
}

// Função para verificar e exibir mensagem quando nenhuma habilidade está selecionada
function verificarHabilidadeSelecionada() {
    var habilidadeNome = document.getElementById('habilidade-nome').innerText.trim();
    
    if (habilidadeNome === '') {
      document.getElementById('habilidade-descricao').innerText = 'Escolha uma habilidade na aba escolha.';
    }
  }
  


// Chamada inicial para verificar se há uma habilidade selecionada ao carregar a página
verificarHabilidadeSelecionada();


function escolherHabilidade1(habilidadeNome) {
    if (habilidadeNome === 'LuciferPassiva') {
        habilidade = new LuciferPassiva(personagem);
        document.getElementById('habilidade-descricao').textContent = "Lucifer - Habilidade Passiva: Teste de Presença - Manifestação";
    } else if (habilidadeNome === 'Belzebub') {
        habilidade = new Belzebub(personagem);
        document.getElementById('habilidade-descricao').textContent = "Belzebub - Teste de Presença - Manifestação (com Perícia)";
    }

    openSubtab('skills', 'habilidades');

    document.getElementById('habilidade-nome').innerText = habilidade.nome;

    const botoesHabilidade = document.getElementById('botoes-habilidade');
    botoesHabilidade.innerHTML = '';

    for (let nomeMetodo of Object.getOwnPropertyNames(Object.getPrototypeOf(habilidade))) {
        if (nomeMetodo.startsWith("aplicar")) {
            let botao = document.createElement('button');
            botao.innerText = nomeMetodo.replace("aplicar", "");
            botao.onclick = function () {
                habilidade[nomeMetodo]();
                atualizarDanoTotal();
                atualizarStatus();
            };
            botoesHabilidade.appendChild(botao);
        }
    }

    atualizarDanoTotal();
    atualizarStatus();
}



function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.innerText.toLowerCase() === tabName) {
            tab.classList.add('active');
        }
    });

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.id === tabName) {
            content.classList.add('active');
            if (tabName === 'info') {
                atualizarInfoPersonagem(Personagem); // Chama a atualização ao abrir a guia "Info"
                // Inicia o timer para atualizar a cada 5 segundos
                setInterval(atualizarInfoPersonagem, 5000); // 5000 milissegundos = 5 segundos
            }
        }
    });
}

function openSubtab(tab, subtab) {
    console.log(`Abrindo subtab: ${subtab}`);
    const tabElement = document.getElementById(tab);
    const subcontents = tabElement.querySelectorAll('.subcontent');
    const subtabs = tabElement.querySelectorAll('.subtab');

    subcontents.forEach(content => {
        content.classList.remove('active');
    });
    subtabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(subtab).classList.add('active');
    tabElement.querySelector(`div[onclick="openSubtab('${tab}', '${subtab}')"]`).classList.add('active');
}

// Função para exibir as habilidades na interface
function exibirHabilidades(habilidadesData) {
    try {
        console.log("Dados de habilidades carregados:", habilidadesData);

        const escolhaHabilidadesDiv = document.getElementById('escolha-habilidades');
        habilidadesData.habilidades.forEach(habilidade => {
            const button = document.createElement('button');
            button.textContent = habilidade.nome;
            button.setAttribute('data-id', habilidade.id);
            button.onclick = function() {
                const id = this.getAttribute('data-id');
                console.log(`Botão clicado: ${id}`);
                escolherHabilidade(id, habilidadesData); // Passa habilidadesData como parâmetro
            };
            escolhaHabilidadesDiv.appendChild(button);
        });
    } catch (error) {
        console.error('Erro ao processar dados de habilidades:', error);
    }
}

// Função para escolher uma habilidade específica
function escolherHabilidade(habilidadeId, habilidadesData) {
    console.log(`Habilidade selecionada: ${habilidadeId}`);

    try {
        const habilidade = habilidadesData.habilidades.find(h => h.id.toString() === habilidadeId.toString());
        if (habilidade) {
            // Muda para a aba "Habilidades"
            openSubtab('skills', 'habilidades');
            console.log('Habilidade encontrada:', habilidade);
            document.getElementById('habilidade-nome').textContent = habilidade.nome;
            document.getElementById('dano-total').textContent = `Dano: ${habilidade.dano}`;
            document.getElementById('habilidade-descricao').textContent = habilidade.descricao; // Atualiza a descrição da habilidade
            atualizarStatus(habilidade.status); // Chama a função para atualizar o status
        } else {
            console.error('Habilidade não encontrada:', habilidadeId);
        }
    } catch (error) {
        console.error('Erro ao processar dados de habilidades:', error);
    }
}

function atualizarStatus(status) {
    const statusElement = document.getElementById('status');
    if (statusElement) {
        statusElement.textContent = `Status: ${status}`;
    } else {
        console.error('Elemento de status não encontrado.');
    }
}


function rolarDano(expressao) {
    // Remover espaços em branco e converter para minúsculas para simplificar
    expressao = expressao.replace(/\s/g, '').toLowerCase();
    
    // Verificar se há um termo 'max' no início
    let maximo = false;
    if (expressao.startsWith('max')) {
        maximo = true;
        expressao = expressao.slice(3);
    }
    
    // Separar os termos de dano por vírgula
    const termos = expressao.split(',');
    
    // Preparar para armazenar o resultado total do dano
    let totalDano = 0;
    let rolagensTotais = [];
    
    // Iterar sobre cada termo de dano
    termos.forEach(termo => {
        // Encontrar a posição do primeiro 'd'
        const indexD = termo.indexOf('d');
        
        // Extrair a quantidade e faces do dado
        let quantidade, faces;
        if (indexD !== -1) {
            quantidade = parseInt(termo.slice(0, indexD));
            faces = parseInt(termo.slice(indexD + 1));
        } else {
            // Se não houver 'd', considerar o termo como apenas um número
            quantidade = 1;
            faces = parseInt(termo);
        }
        
        // Verificar se há um modificador após as faces do dado
        let modificador = 0;
        const indexModificador = termo.indexOf('+');
        if (indexModificador !== -1) {
            modificador = parseInt(termo.slice(indexModificador + 1));
        }
        
        // Gerar as rolagens para este termo de dano
        let rolagens = [];
        let totalTermo = 0;
        for (let i = 0; i < quantidade; i++) {
            const rolagem = Math.floor(Math.random() * faces) + 1;
            rolagens.push(rolagem);
            totalTermo += rolagem;
        }
        
        // Adicionar o modificador, se houver
        totalTermo += modificador;
        
        // Se for 'max', considerar apenas o valor máximo possível
        if (maximo) {
            totalTermo = quantidade * faces + modificador;
        }
        
        // Adicionar ao total de dano
        totalDano += totalTermo;
        
        // Armazenar as rolagens deste termo para exibição
        rolagensTotais.push({
            expressao: `${quantidade}d${faces}${modificador !== 0 ? '+' + modificador : ''}`,
            rolagens: rolagens.join(', '),
            totalTermo: totalTermo
        });
    });
    
    // Montar a mensagem final com todas as rolagens
    let mensagem = '';
    rolagensTotais.forEach(termo => {
        mensagem += `Dano rolado (${termo.expressao}): ${termo.totalTermo} (${termo.rolagens})\n`;
    });
    
    // Exibir mensagem com os resultados
    mostrarMensagem(mensagem);
    
    // Retornar o total de dano calculado
    return mensagem + " Dano total: " + totalDano;
}

function atualizarEnergia(custo, cooldown) {
    personagem.energia -= custo;
    document.getElementById('status-energia').textContent = `Energia: ${personagem.energia}`;
    
    // Envia um evento para o processo principal para exibir um diálogo
    mostrarMensagem(`Energia restante após gastar ${custo} de energia. Numero de circulos: ${cooldown}`);
}


function usarHabilidade() {
    // Obtém o nome da habilidade ativa na aba "Habilidades"
    var habilidadeNome = document.getElementById('habilidade-nome').textContent.trim();

    if (!habilidadeNome) {
        console.error('Nome da habilidade não encontrado.');
        return;
    }

    try {
        // Obtém os dados de habilidades já carregados na interface (assumindo que estão disponíveis)
        const habilidadesData = window.habilidadesData; // Supondo que habilidadesData seja uma variável global

        // Procura a habilidade pelo nome
        const habilidade = habilidadesData.habilidades.find(h => h.nome === habilidadeNome);

        if (habilidade) {
            console.log('Habilidade encontrada:', habilidade);
            document.getElementById('habilidade-nome').textContent = habilidade.nome;
            atualizarDescricaoHabilidade(habilidade.nome); // Chamando função para buscar e atualizar descrição
            document.getElementById('dano-total').textContent = `Dano: ${habilidade.dano}`;
            document.getElementById('status').textContent = `Status: ${habilidade.status}`;
            aplicarHabilidade(habilidade);
            atualizarStatus(habilidade.status); // Chama a função para atualizar o status
        } else {
            console.error('Habilidade não encontrada:', habilidadeNome);
        }
    } catch (error) {
        console.error('Erro ao processar dados de habilidades:', error);
    }
}


function atualizarDescricaoHabilidade(nomeHabilidade) {
    try {
        // Procura a habilidade pelo nome na variável global window.habilidadesData
        const habilidade = window.habilidadesData.habilidades.find(h => h.nome === nomeHabilidade);
        if (habilidade) {
            console.log('Descrição da habilidade:', habilidade.descricao);
            document.getElementById('habilidade-descricao').textContent = habilidade.descricao; // Atualiza a descrição da habilidade
        } else {
            console.error('Habilidade não encontrada:', nomeHabilidade);
        }
    } catch (error) {
        console.error('Erro ao processar dados de habilidades:', error);
    }
}


function aplicarHabilidade(habilidade) {
    const danoRolado = rolarDano(habilidade.dano);
    atualizarEnergia(habilidade.custo, habilidade.cooldown);
    console.log(`Dano rolado: ${danoRolado}`);
    document.getElementById('dano-total').textContent = `Dano: ${danoRolado}`;
    atualizarStatus(habilidade.status); // Chama a função para atualizar o status
}

function sair() {
    console.log("Sair clicado");
    // Implementar a lógica para a ação de sair
}  

function ajustarEnergia(multiplicador) {
    let valorAjuste = parseInt(document.getElementById('ajuste-energia').value) * multiplicador;
    if (isNaN(valorAjuste)) {
        mostrarMensagem("Digite um valor válido para o ajuste de energia");
        return;
    }
    if (multiplicador === 1) {
        personagem.adicionarEnergia(valorAjuste);
    } else if (multiplicador === -1) {
        personagem.reduzirEnergia(Math.abs(valorAjuste)); // Usando Math.abs para garantir que o valor seja positivo
    } else {
        mostrarMensagem("Operação inválida para ajuste de energia");
        return;
    }
    
    // Atualiza informações na aba "Info"
    atualizarInfoPersonagem(Personagem);
}

function ajustarSanidade(multiplicador) {
    let valorAjuste = parseInt(document.getElementById('ajuste-sanidade').value) * multiplicador;
    if (isNaN(valorAjuste)) {
        mostrarMensagem("Digite um valor válido para o ajuste de sanidade");
        return;
    }
    if (multiplicador === 1) {
        personagem.adicionarSanidade(valorAjuste);
    } else if (multiplicador === -1) {
        personagem.reduzirSanidade(Math.abs(valorAjuste));
    } else {
        mostrarMensagem("Operação inválida para ajuste de sanidade");
        return;
    }
    
    // Atualiza informações na aba "Info"
    atualizarInfoPersonagem(Personagem);
}


function ajustarVida(multiplicador) {
    let valorAjuste = parseInt(document.getElementById('ajuste-vida').value) * multiplicador;
    if (isNaN(valorAjuste)) {
        mostrarMensagem("Digite um valor válido para o ajuste de vida");
        return;
    }
    if (multiplicador === 1) {
        personagem.adicionarVida(valorAjuste);
    } else if (multiplicador === -1) {
        personagem.reduzirVida(Math.abs(valorAjuste)); // Usando Math.abs para garantir que o valor seja positivo
    } else {
        mostrarMensagem("Operação inválida para ajuste de vida");
        return;
    }
    
    // Atualiza informações na aba "Info"
    atualizarInfoPersonagem(Personagem);
}

function rolarDadosCalculo(atributo, pericia, numeroVantagens, modificador) {
    // Adiciona o número de vantagens ao atributo (número de dados)
    if(atributo >= 0){
        atributo += 1;
    }

    atributo += numeroVantagens;

    if(atributo == 0){
        atributo += 1;
    }
    
    // Se atributo for negativo, rola o número absoluto de dados e pega o menor valor
    if (atributo < 0) {
        atributo = Math.abs(atributo);
        atributo += 1;
        let dadosAtributo = [];
        for (let i = 0; i < atributo; i++) {
            dadosAtributo.push(Math.floor(Math.random() * 20) + 1);
        }
        let menorDado = Math.min(...dadosAtributo);

        // Mostra todos os dados rolados
        mostrarMensagem(`Dados rolados: ${dadosAtributo.join(', ')}`);

        // Mostra um alerta com o menor dado rolado
        mostrarMensagem(`Menor dado rolado: ${menorDado}`);

        let complemento = 0;
        if (pericia >= 16) {
            let dadoExtra = Math.floor(Math.random() * 6) + 1;
            complemento = dadoExtra;
        }

        let resultadoFinal = menorDado + pericia + modificador + complemento;

        // Mostra um alerta com o que foi somado no dado final
        mostrarMensagem(`Somado no dado final: ${pericia} (perícia) + ${modificador} (modificador) + ${complemento} (complemento)`);

        return resultadoFinal;
    } else {
        // Caso normal, rola o maior dado como antes
        let dadosAtributo = [];
        for (let i = 0; i < atributo; i++) {
            dadosAtributo.push(Math.floor(Math.random() * 20) + 1);
        }

        // Mostra todos os dados rolados
        mostrarMensagem(`Dados rolados: ${dadosAtributo.join(', ')}`);

        let maiorDado = Math.max(...dadosAtributo);

        // Mostra um alerta com o maior dado rolado
        mostrarMensagem(`Maior dado rolado: ${maiorDado}`);

        let complemento = 0;
        if (pericia >= 16) {
            let dadoExtra = Math.floor(Math.random() * 6) + 1;
            complemento = dadoExtra;
        }

        let resultadoFinal = maiorDado + pericia + modificador + complemento;

        // Mostra um alerta com o que foi somado no dado final
        mostrarMensagem(`Somado no dado final: ${pericia} (perícia) + ${modificador} (modificador) + ${complemento} (complemento)`);

        return resultadoFinal;
    }
}

function ação(atributo, pericia, numeroVantagens, modificador) {
    let valorAtributo = 0;
    let valorPericia = 0;

    // Verifica o atributo selecionado e atribui o valor correspondente
    switch (atributo) {
        case 'força':
            valorAtributo = personagem.forca;
            break;
        case 'vigor':
            valorAtributo = personagem.vigor;
            break;
        case 'agilidade':
            valorAtributo = personagem.agilidade;
            break;
        case 'intelecto':
            valorAtributo = personagem.intelecto;
            break;
        case 'presenca':
            valorAtributo = personagem.presenca;
            break;
        default:
            valorAtributo = 0; // Atributo padrão caso não haja correspondência
    }

    // Verifica a perícia selecionada e atribui o valor correspondente
    switch (pericia) {
        case 'luta':
            valorPericia = personagem.periciaLuta;
            break;
        case 'acrobacia':
            valorPericia = personagem.periciaAcrobacia;
            break;
        case 'fortitude':
            valorPericia = personagem.periciaFortitude;
            break;
        case 'artes':
            valorPericia = personagem.periciaArtes;
            break;
        case 'atualidades':
            valorPericia = personagem.periciaAtualidades;
            break;
        case 'calamidade':
            valorPericia = personagem.periciaCalamidade;
            break;
        case 'ciências':
            valorPericia = personagem.periciaCiências;
            break;
        case 'diplomacia':
            valorPericia = personagem.periciaDiplomacia;
            break;
        case 'furtividade':
            valorPericia = personagem.periciaFurtividade;
            break;
        case 'iniciativa':
            valorPericia = personagem.periciaIniciativa;
            break;
        case 'intuição':
            valorPericia = personagem.periciaIntuição;
            break;
        case 'investigação':
            valorPericia = personagem.periciaInvestigação;
            break;
        case 'medicina':
            valorPericia = personagem.periciaMedicina;
            break;
        case 'manifestação':
            valorPericia = personagem.periciaManifestação;
            break;
        case 'percepção':
            valorPericia = personagem.periciaPercepção;
            break;
        case 'pilotagem':
            valorPericia = personagem.periciaPilotagem;
            break;
        case 'pontaria':
            valorPericia = personagem.periciaPontaria;
            break;
        case 'sobrevivência':
            valorPericia = personagem.periciaSobrevivência;
            break;
        case 'técnica':
            valorPericia = personagem.periciaTécnica;
            break;
        case 'vontade':
            valorPericia = personagem.periciaVontade;
            break;
        case 'sorte':
            valorPericia = personagem.periciaSorte;
            break;
        default:
            valorPericia = 0; // Perícia padrão caso não haja correspondência
    }

    // Chama a função rolarDadosCalculo com os parâmetros ajustados
    return rolarDadosCalculo(valorAtributo, valorPericia, numeroVantagens, modificador);
}

function executarAcao() {
    let atributo = document.getElementById('atributoSelect').value;
    let pericia = document.getElementById('periciaSelect').value;
    let numeroVantagens = parseInt(document.getElementById('vantagensInput').value);
    let modificador = parseInt(document.getElementById('modificadorInput').value);

    let resultado = ação(atributo, pericia, numeroVantagens, modificador);
    
    // Exibir o resultado em um mostrarMensagem
    mostrarMensagem(`Resultado da Ação: ${resultado}`);
}

function executarAtaque() {
    let numeroVantagens = parseInt(document.getElementById('vantagens-ataque').value);
    let modificador = parseInt(document.getElementById('modificador-ataque').value);
    let resultado = ação('força', 'luta', numeroVantagens, modificador); // Passa personagem.periciaLuta como valor numérico
    
    // Exibir o resultado em um mostrarMensagem
    mostrarMensagem(`Resultado do Ataque: ${resultado}`);
}

function executarDefesa() {
    let numeroVantagens = parseInt(document.getElementById('vantagens-defesa').value);
    let modificador = parseInt(document.getElementById('modificador-defesa').value);
    let resultado = ação('vigor', 'fortitude', numeroVantagens, modificador); // Passa personagem.periciaLuta como valor numérico
    
    // Exibir o resultado em um mostrarMensagem
    mostrarMensagem(`Resultado do Ataque: ${resultado}`);
}

function executarEsquiva() {
    let numeroVantagens = parseInt(document.getElementById('vantagens-esquiva').value);
    let modificador = parseInt(document.getElementById('modificador-esquiva').value);
    let resultado = ação('agilidade', 'acrobacia', numeroVantagens, modificador); // Passa personagem.periciaLuta como valor numérico
    
    // Exibir o resultado em um mostrarMensagem
    mostrarMensagem(`Resultado do Ataque: ${resultado}`);
}

function executarContraAtaque() {
    let numeroVantagens = parseInt(document.getElementById('vantagens-contraataque').value);
    let modificador = parseInt(document.getElementById('modificador-contraataque').value);
    let resultado = ação('força', 'luta', numeroVantagens, modificador); // Passa personagem.periciaLuta como valor numérico
    
    // Exibir o resultado em um mostrarMensagem
    mostrarMensagem(`Resultado do Ataque: ${resultado}`);
}

function atualizarDanoTotal() {
    document.getElementById('dano-total').innerText = habilidade.obterDanoTotal();
}

function atualizarStatus() {
    document.getElementById('status').innerText = personagem.obterStatus();
}

function sair() {
    openSubtab('skills', 'escolha');
}

function sairAjustes() {
    openSubtab('actions', 'ajustes');
    openTab('skills');
}

function togglePericias() {
    var content = document.getElementById('pericias-content');
    if (content.classList.contains('content-collapsed')) {
        content.classList.remove('content-collapsed');
        content.classList.add('content-expanded');
    } else {
        content.classList.remove('content-expanded');
        content.classList.add('content-collapsed');
    }
}

async function salvarStatus() {
    try {
        const dirPath = cordova.file.dataDirectory;
        const filePath = dirPath + 'personagem.json';

        const updatedData = {
            vida: parseInt(document.getElementById('vida').value),
            vidaMax: parseInt(document.getElementById('vidaMax').value),
            energia: parseInt(document.getElementById('energia').value),
            energiaMax: parseInt(document.getElementById('energiaMax').value),
            sanidade: parseInt(document.getElementById('sanidade').value),
            sanidadeMax: parseInt(document.getElementById('sanidadeMax').value),
            vigor: parseInt(document.getElementById('vigor').value),
            intelecto: parseInt(document.getElementById('intelecto').value),
            presenca: parseInt(document.getElementById('presenca').value),
            forca: parseInt(document.getElementById('forca').value),
            agilidade: parseInt(document.getElementById('agilidade').value),
            periciaAcrobacia: parseInt(document.getElementById('periciaAcrobacia').value),
            periciaAdestramento: parseInt(document.getElementById('periciaAdestramento').value),
            periciaArtes: parseInt(document.getElementById('periciaArtes').value),
            periciaAtualidades: parseInt(document.getElementById('periciaAtualidades').value),
            periciaCalamidade: parseInt(document.getElementById('periciaCalamidade').value),
            periciaCiencias: parseInt(document.getElementById('periciaCiencias').value),
            periciaDiplomacia: parseInt(document.getElementById('periciaDiplomacia').value),
            periciaFortitude: parseInt(document.getElementById('periciaFortitude').value),
            periciaFurtividade: parseInt(document.getElementById('periciaFurtividade').value),
            periciaIniciativa: parseInt(document.getElementById('periciaIniciativa').value),
            periciaIntuicao: parseInt(document.getElementById('periciaIntuicao').value),
            periciaInvestigacao: parseInt(document.getElementById('periciaInvestigacao').value),
            periciaLuta: parseInt(document.getElementById('periciaLuta').value),
            periciaMedicina: parseInt(document.getElementById('periciaMedicina').value),
            periciaManifestacao: parseInt(document.getElementById('periciaManifestacao').value),
            periciaPercepcao: parseInt(document.getElementById('periciaPercepcao').value),
            periciaPilotagem: parseInt(document.getElementById('periciaPilotagem').value),
            periciaPontaria: parseInt(document.getElementById('periciaPontaria').value),
            periciaSobrevivencia: parseInt(document.getElementById('periciaSobrevivencia').value),
            periciaTecnica: parseInt(document.getElementById('periciaTecnica').value),
            periciaVontade: parseInt(document.getElementById('periciaVontade').value),
            periciaSorte: parseInt(document.getElementById('periciaSorte').value)
        };

        console.log('MyAppLog: Salvando dados em:', filePath);
        await writeFile(filePath, JSON.stringify(updatedData, null, 2));
        console.log('MyAppLog: Status do personagem salvo com sucesso!');
        mostrarMensagem('Status do personagem salvo com sucesso!');

        // Após salvar, ler o conteúdo do arquivo
        await carregarStatus();
    } catch (error) {
        console.error('MyAppLog: Erro ao salvar status do personagem:', JSON.stringify(error));
        mostrarMensagem('Erro ao salvar status do personagem.');
    }
}

async function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (dirEntry) {
            dirEntry.getFile('personagem.json', { create: true, exclusive: false }, function (fileEntry) {
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function () {
                        console.log('MyAppLog: Arquivo escrito com sucesso:', filePath);
                        resolve();
                    };
                    fileWriter.onerror = function (e) {
                        console.error('MyAppLog: Erro ao escrever arquivo:', JSON.stringify(e));
                        reject(e);
                    };
                    fileWriter.write(data);
                });
            }, function (err) {
                console.error('MyAppLog: Erro ao obter o arquivo:', JSON.stringify(err));
                reject(err);
            });
        }, function (err) {
            console.error('MyAppLog: Erro ao resolver o caminho do diretório:', JSON.stringify(err));
            reject(err);
        });
    });
}

async function carregarStatus() {
    const dirPath = cordova.file.dataDirectory;
    const filePath = dirPath + 'personagem.json';
    try {
        window.resolveLocalFileSystemURL(filePath, function (fileEntry) {
            fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function () {
                    console.log('MyAppLog: Conteúdo do arquivo lido:', reader.result);
                    mostrarMensagem('Conteúdo do arquivo: ' + reader.result);  // Adiciona um alerta para verificar o conteúdo lido
                    const personagemData = JSON.parse(reader.result);
                    personagem = new Personagem(personagemData);
                    atualizarInfoPersonagem(personagem); // Atualiza a interface com os dados do personagem
                };
                reader.onerror = function (e) {
                    console.error('MyAppLog: Erro ao ler o arquivo:', JSON.stringify(e));
                    mostrarMensagem('Erro ao ler o arquivo: ' + JSON.stringify(e));  // Adiciona um alerta para erros de leitura
                };
                reader.readAsText(file);
            });
        }, function (err) {
            console.error('MyAppLog: Erro ao resolver o caminho do arquivo para leitura:', JSON.stringify(err));
            mostrarMensagem('Erro ao resolver o caminho do arquivo para leitura: ' + JSON.stringify(err));  // Adiciona um alerta para erros de resolução de caminho
        });
    } catch (error) {
        console.error('MyAppLog: Erro inesperado ao ler o arquivo:', JSON.stringify(error));
        mostrarMensagem('Erro inesperado ao ler o arquivo: ' + JSON.stringify(error));  // Adiciona um alerta para erros inesperados
    }
}
