const { app, BrowserWindow, ipcMain, dialog} = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
let dialogWindows = [];

app.on('ready', () => {
    mainWindow = new BrowserWindow({
    width: 700,
    height: 800,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#40252500',
      symbolColor: '#ccc',
      height: 20
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Caminho para seu arquivo preload.js
      contextIsolation: true,
    },
  });

  mainWindow.loadFile('src/index.html'); // Carrega o arquivo HTML principal

  // Exemplo de leitura de arquivo JSON
  fs.readFile(path.join(__dirname, 'assets', 'personagem.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler arquivo JSON:', err);
      return;
    }
    const personagemData = JSON.parse(data);
    console.log('Dados do personagem:', personagemData);

    // Envia os dados do personagem para a janela renderizada
    mainWindow.webContents.send('personagem-data', personagemData);
  });
});

// Escutando por eventos do renderizador
ipcMain.on('request-personagem-data', (event) => {
  // Exemplo de leitura de arquivo JSON ou outra fonte de dados
  fs.readFile(path.join(__dirname, 'assets', 'personagem.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler arquivo JSON:', err);
      return;
    }
    const personagemData = JSON.parse(data);
    event.reply('personagem-data', personagemData); // Envia os dados de volta para o renderizador
  });

  // Carregar habilidades.json e enviar para a janela renderizada
  fs.readFile(path.join(__dirname, 'assets', 'habilidades.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler arquivo habilidades.json:', err);
      return;
    }
    const habilidadesData = JSON.parse(data);
    console.log('Dados das habilidades:', habilidadesData);

    mainWindow.webContents.send('habilidades-data', habilidadesData);
  });

  // Exemplo de IPC para solicitação de dados de habilidades
  ipcMain.on('request-habilidades-data', (event) => {
    fs.readFile(path.join(__dirname, 'assets', 'habilidades.json'), 'utf8', (err, data) => {
      if (err) {
        console.error('Erro ao ler arquivo habilidades.json:', err);
        return;
      }
      const habilidadesData = JSON.parse(data);
      event.reply('habilidades-data', habilidadesData);
    });
  });


ipcMain.on('save-personagem-data', (event, updatedData) => {
  fs.writeFile(path.join(__dirname, 'assets', 'personagem.json'), JSON.stringify(updatedData, null, 2), (err) => {
    if (err) {
      console.error('Erro ao salvar arquivo JSON:', err);
      event.reply('save-status', 'error');
    } else {
      event.reply('save-status', 'success');
    }
  });
});

ipcMain.on('exibir-dialogo', (event, mensagem) => {
  createCustomDialog(mensagem);
});
});

function createCustomDialog(mensagem) {
  let dialogWindow = new BrowserWindow({
    width: 600,
    height: 200, // Altura fixa
    parent: mainWindow,
    modal: true,
    show: false,
    frame: false, // Remover a barra de título e bordas da janela
    resizable: false, // Impede o redimensionamento da janela
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

dialogWindow.loadFile('src/dialog.html');

dialogWindow.once('ready-to-show', () => {
  dialogWindow.show();
  dialogWindow.webContents.send('set-message', mensagem);
});

dialogWindow.on('closed', () => {
  dialogWindows = dialogWindows.filter(win => win !== dialogWindow);
  dialogWindow = null;
});

dialogWindows.push(dialogWindow);
}

ipcMain.on('close-dialog', () => {
const dialogWindow = dialogWindows.pop();
if (dialogWindow) {
  dialogWindow.close();
}
});