// frontend/src/App.tsx
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  // Define o estado inicial da mensagem (tipado com string)
  const [apiMessage, setApiMessage] = useState<string>('Aguardando conexão com o Laravel...');

  useEffect(() => {
    // Chamada para /api/status. O proxy do Vite redireciona para http://nginx/api/status
    fetch('/api/status')
      .then(res => {
        // ESSENCIAL: Verifica se a resposta é 200 OK (se não for, lança um erro)
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        // Se a chamada for bem-sucedida, atualiza o estado
        setApiMessage(data.message + ' (DB: ' + data.db_connection + ')');
      })
      .catch(error => {
        console.error('Erro na conexão com o Backend:', error);
        setApiMessage(`ERRO: Falha na API. Detalhes: ${error.message}`);
      });
  }, []); // Roda apenas uma vez após a montagem

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Projeto Fullstack (Vite + TS)</h1>
      <div className="card">
        <p>
          <strong>Backend Status:</strong>{' '}
          <span style={{ color: apiMessage.includes('conectada') ? 'lightgreen' : 'orange' }}>
            {apiMessage}
          </span>
        </p>
      </div>
      <p className="read-the-docs">
        Edite src/App.tsx e salve para recarregar (Hot Reload)
      </p>
    </>
  );
}

export default App;