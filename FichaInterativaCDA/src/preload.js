const { contextBridge, ipcRenderer } = require('electron');

// Permitindo apenas métodos específicos através do contexto seguro
contextBridge.exposeInMainWorld('electronAPI', {
  requestPersonagemData: () => {
    return new Promise((resolve, reject) => {
      ipcRenderer.send('request-personagem-data');
      ipcRenderer.once('personagem-data', (event, personagemData) => {
        resolve(personagemData);
      });
    });
  },

  requestHabilidadesData: () => {
    return new Promise((resolve, reject) => {
      ipcRenderer.send('request-habilidades-data');
      ipcRenderer.once('habilidades-data', (event, habilidadesData) => {
        resolve(habilidadesData);
      });
    });
  },

  savePersonagemData: (updatedData) => {
    return new Promise((resolve, reject) => {
      ipcRenderer.send('save-personagem-data', updatedData);
      ipcRenderer.once('save-status', (event, status) => {
        resolve(status);
      });
    });
  }
});

contextBridge.exposeInMainWorld(
  "api", {
      // Função para enviar mensagem de alerta para o processo principal
      messageMain: (mensagem) => {
          ipcRenderer.send("exibir-dialogo", mensagem);
      }
  }
);
