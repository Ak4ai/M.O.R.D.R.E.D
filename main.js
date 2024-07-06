const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  // Ajuste para carregar a pasta assets externamente
  const assetsPath = path.join(process.cwd(), 'assets');
  const personagemPath = path.join(assetsPath, 'personagem.json');
  const habilidadePath = path.join(assetsPath, 'habilidade.json');

  fs.readFile(personagemPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Erro ao ler personagem.json', err);
      return;
    }
    mainWindow.webContents.send('carregar-personagem', data);
  });

  fs.readFile(habilidadePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Erro ao ler habilidade.json', err);
      return;
    }
    mainWindow.webContents.send('carregar-habilidade', data);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
