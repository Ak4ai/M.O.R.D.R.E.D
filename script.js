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

let personagem;

async function loadPersonagem() {
    try {
        const response = await fetch('assets/personagem.json');
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo JSON: ${response.statusText}`);
        }
        const data = await response.json();
        personagem = new Personagem(data);
        atualizarInfoPersonagem();
    } catch (error) {
        console.error('Erro ao carregar o personagem:', error);
        alert('Houve um problema ao carregar os dados do personagem.');
    }
}

// Chamada inicial para carregar o personagem ao carregar a página
document.addEventListener('DOMContentLoaded', loadPersonagem);

function atualizarInfoPersonagem() {
    document.getElementById('status-vida').innerText = personagem.vida;
    document.getElementById('status-energia').innerText = personagem.energia;
    document.getElementById('status-sanidade').innerText = personagem.sanidade;
    document.getElementById('status-vigor').innerText = personagem.vigor;
    document.getElementById('status-intelecto').innerText = personagem.intelecto;
    document.getElementById('status-presenca').innerText = personagem.presenca;
    document.getElementById('status-forca').innerText = personagem.forca;
    document.getElementById('status-agilidade').innerText = personagem.agilidade;

    // Dentro de atualizarInfoPersonagem()
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
                atualizarInfoPersonagem(); // Chama a atualização ao abrir a guia "Info"
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

document.addEventListener("DOMContentLoaded", function() {
    console.log("Documento carregado. Iniciando carregamento de habilidades...");

    fetch('assets/habilidades.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar habilidades.');
            }
            return response.json();
        })
        .then(data => {
            console.log("Dados de habilidades carregados:", data);
            const escolhaHabilidadesDiv = document.getElementById('escolha-habilidades');
            data.habilidades.forEach(habilidade => {
                const button = document.createElement('button');
                button.textContent = habilidade.nome;
                button.setAttribute('data-id', habilidade.id);
                button.onclick = function() {
                    const id = this.getAttribute('data-id');
                    console.log(`Botão clicado: ${id}`);
                    escolherHabilidade(id);
                };
                escolhaHabilidadesDiv.appendChild(button);
            });
        })
        .catch(error => console.error('Erro ao carregar habilidades:', error));
});

function escolherHabilidade(habilidadeId) {
    console.log(`Habilidade selecionada: ${habilidadeId}`);

    // Busca a habilidade com base no ID
    fetch('assets/habilidades.json')
        .then(response => response.json())
        .then(data => {
            const habilidade = data.habilidades.find(h => h.id.toString() === habilidadeId.toString());
            if (habilidade) {
                console.log('Habilidade encontrada:', habilidade);
                document.getElementById('habilidade-nome').textContent = habilidade.nome;
                document.getElementById('dano-total').textContent = `Dano: ${habilidade.dano}`;
                document.getElementById('habilidade-descricao').textContent = habilidade.descricao; // Atualiza a descrição da habilidade
                atualizarStatus(habilidade.status); // Chama a função para atualizar o status
                aplicarHabilidade(habilidade);
            } else {
                console.error('Habilidade não encontrada:', habilidadeId);
            }
        })
        .catch(error => console.error('Erro ao selecionar habilidade:', error));
}

function atualizarStatus(status) {
    const statusElement = document.getElementById('status');
    if (statusElement) {
        statusElement.textContent = `Status: ${status}`;
    } else {
        console.error('Elemento de status não encontrado.');
    }
}


function rolarDano(dano) {
    const [quantidade, faces] = dano.split('d').map(Number);
    let totalDano = 0;
    let rolagens = [];
    for (let i = 0; i < quantidade; i++) {
        const rolagem = Math.floor(Math.random() * faces) + 1;
        rolagens.push(rolagem);
        totalDano += rolagem;
    }
    alert(`Dano rolado (${quantidade}d${faces}): ${totalDano} (${rolagens.join(', ')})`);
    return totalDano;
}

function atualizarEnergia(custo, cooldown) {
    personagem.energia -= custo;
    document.getElementById('status-energia').textContent = `Energia: ${personagem.energia}`;
    alert(`Energia restante após gastar ${custo} de energia. Numero de circulos: ${cooldown}`);
}

function usarHabilidade() {
    // Obtém o nome da habilidade ativa na aba "Habilidades"
    var habilidadeNome = document.getElementById('habilidade-nome').textContent.trim();

    if (!habilidadeNome) {
        console.error('Nome da habilidade não encontrado.');
        return;
    }

    // Busca a habilidade com base no nome
    fetch('assets/habilidades.json')
        .then(response => response.json())
        .then(data => {
            const habilidade = data.habilidades.find(h => h.nome === habilidadeNome);
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
        })
        .catch(error => console.error('Erro ao selecionar habilidade:', error));
}

function atualizarDescricaoHabilidade(nomeHabilidade) {
    // Busca a habilidade com base no nome
    fetch('assets/habilidades.json')
        .then(response => response.json())
        .then(data => {
            const habilidade = data.habilidades.find(h => h.nome === nomeHabilidade);
            if (habilidade) {
                console.log('Descrição da habilidade:', habilidade.descricao);
                document.getElementById('habilidade-descricao').textContent = habilidade.descricao; // Atualiza a descrição da habilidade
            } else {
                console.error('Habilidade não encontrada:', nomeHabilidade);
            }
        })
        .catch(error => console.error('Erro ao buscar descrição da habilidade:', error));
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
        alert("Digite um valor válido para o ajuste de energia");
        return;
    }
    if (multiplicador === 1) {
        personagem.adicionarEnergia(valorAjuste);
    } else if (multiplicador === -1) {
        personagem.reduzirEnergia(Math.abs(valorAjuste)); // Usando Math.abs para garantir que o valor seja positivo
    } else {
        alert("Operação inválida para ajuste de energia");
        return;
    }
    
    // Atualiza informações na aba "Info"
    atualizarInfoPersonagem();
}

function ajustarSanidade(multiplicador) {
    let valorAjuste = parseInt(document.getElementById('ajuste-sanidade').value) * multiplicador;
    if (isNaN(valorAjuste)) {
        alert("Digite um valor válido para o ajuste de sanidade");
        return;
    }
    if (multiplicador === 1) {
        personagem.adicionarSanidade(valorAjuste);
    } else if (multiplicador === -1) {
        personagem.reduzirSanidade(Math.abs(valorAjuste));
    } else {
        alert("Operação inválida para ajuste de sanidade");
        return;
    }
    
    // Atualiza informações na aba "Info"
    atualizarInfoPersonagem();
}


function ajustarVida(multiplicador) {
    let valorAjuste = parseInt(document.getElementById('ajuste-vida').value) * multiplicador;
    if (isNaN(valorAjuste)) {
        alert("Digite um valor válido para o ajuste de vida");
        return;
    }
    if (multiplicador === 1) {
        personagem.adicionarVida(valorAjuste);
    } else if (multiplicador === -1) {
        personagem.reduzirVida(Math.abs(valorAjuste)); // Usando Math.abs para garantir que o valor seja positivo
    } else {
        alert("Operação inválida para ajuste de vida");
        return;
    }
    
    // Atualiza informações na aba "Info"
    atualizarInfoPersonagem();
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
        alert(`Dados rolados: ${dadosAtributo.join(', ')}`);

        // Mostra um alerta com o menor dado rolado
        alert(`Menor dado rolado: ${menorDado}`);

        let complemento = 0;
        if (pericia >= 16) {
            let dadoExtra = Math.floor(Math.random() * 6) + 1;
            complemento = dadoExtra;
        }

        let resultadoFinal = menorDado + pericia + modificador + complemento;

        // Mostra um alerta com o que foi somado no dado final
        alert(`Somado no dado final: ${pericia} (perícia) + ${modificador} (modificador) + ${complemento} (complemento)`);

        return resultadoFinal;
    } else {
        // Caso normal, rola o maior dado como antes
        let dadosAtributo = [];
        for (let i = 0; i < atributo; i++) {
            dadosAtributo.push(Math.floor(Math.random() * 20) + 1);
        }

        // Mostra todos os dados rolados
        alert(`Dados rolados: ${dadosAtributo.join(', ')}`);

        let maiorDado = Math.max(...dadosAtributo);

        // Mostra um alerta com o maior dado rolado
        alert(`Maior dado rolado: ${maiorDado}`);

        let complemento = 0;
        if (pericia >= 16) {
            let dadoExtra = Math.floor(Math.random() * 6) + 1;
            complemento = dadoExtra;
        }

        let resultadoFinal = maiorDado + pericia + modificador + complemento;

        // Mostra um alerta com o que foi somado no dado final
        alert(`Somado no dado final: ${pericia} (perícia) + ${modificador} (modificador) + ${complemento} (complemento)`);

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
    
    // Exibir o resultado em um alert
    alert(`Resultado da Ação: ${resultado}`);
}

function executarAtaque() {
    let numeroVantagens = parseInt(document.getElementById('vantagens-ataque').value);
    let modificador = parseInt(document.getElementById('modificador-ataque').value);
    let resultado = ação('força', 'luta', numeroVantagens, modificador); // Passa personagem.periciaLuta como valor numérico
    
    // Exibir o resultado em um alert
    alert(`Resultado do Ataque: ${resultado}`);
}

function executarDefesa() {
    let numeroVantagens = parseInt(document.getElementById('vantagens-defesa').value);
    let modificador = parseInt(document.getElementById('modificador-defesa').value);
    let resultado = ação('vigor', 'fortitude', numeroVantagens, modificador); // Passa personagem.periciaLuta como valor numérico
    
    // Exibir o resultado em um alert
    alert(`Resultado do Ataque: ${resultado}`);
}

function executarEsquiva() {
    let numeroVantagens = parseInt(document.getElementById('vantagens-esquiva').value);
    let modificador = parseInt(document.getElementById('modificador-esquiva').value);
    let resultado = ação('agilidade', 'acrobacia', numeroVantagens, modificador); // Passa personagem.periciaLuta como valor numérico
    
    // Exibir o resultado em um alert
    alert(`Resultado do Ataque: ${resultado}`);
}

function executarContraAtaque() {
    let numeroVantagens = parseInt(document.getElementById('vantagens-contraataque').value);
    let modificador = parseInt(document.getElementById('modificador-contraataque').value);
    let resultado = ação('força', 'luta', numeroVantagens, modificador); // Passa personagem.periciaLuta como valor numérico
    
    // Exibir o resultado em um alert
    alert(`Resultado do Ataque: ${resultado}`);
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
    const novoStatus = {
        vida: parseInt(document.getElementById('vida').value),
        vidaMax: personagem.vidaMax,
        energia: parseInt(document.getElementById('energia').value),
        energiaMax: personagem.energiaMax,
        sanidade: parseInt(document.getElementById('sanidade').value),
        sanidadeMax: personagem.sanidadeMax,
        vigor: personagem.vigor,
        intelecto: personagem.intelecto,
        presenca: personagem.presenca,
        forca: personagem.forca,
        agilidade: personagem.agilidade,
        periciaAcrobacia: personagem.periciaAcrobacia,
        periciaAdestramento: personagem.periciaAdestramento,
        periciaArtes: personagem.periciaArtes,
        periciaAtualidades: personagem.periciaAtualidades,
        periciaCalamidade: personagem.periciaCalamidade,
        periciaCiencias: personagem.periciaCiencias,
        periciaDiplomacia: personagem.periciaDiplomacia,
        periciaFortitude: personagem.periciaFortitude,
        periciaFurtividade: personagem.periciaFurtividade,
        periciaIniciativa: personagem.periciaIniciativa,
        periciaIntuicao: personagem.periciaIntuicao,
        periciaInvestigacao: personagem.periciaInvestigacao,
        periciaLuta: personagem.periciaLuta,
        periciaMedicina: personagem.periciaMedicina,
        periciaManifestacao: personagem.periciaManifestacao,
        periciaPercepcao: personagem.periciaPercepcao,
        periciaPilotagem: personagem.periciaPilotagem,
        periciaPontaria: personagem.periciaPontaria,
        periciaSobrevivencia: personagem.periciaSobrevivencia,
        periciaTecnica: personagem.periciaTecnica,
        periciaVontade: personagem.periciaVontade,
        periciaSorte: personagem.periciaSorte
    };

    try {
        const response = await fetch('assets/personagem.json', {
            method: 'PUT', // Use PUT method to update the file
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoStatus)
        });
        
        if (!response.ok) {
            throw new Error('Erro ao salvar o arquivo JSON: ' + response.statusText);
        }

        alert('Status do personagem salvo com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar o status do personagem:', error);
        alert('Houve um problema ao salvar o status do personagem.');
    }
}