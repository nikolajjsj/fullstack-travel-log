import './App.css';
import Map from './components/map';
import { fetchLogEntries } from './Api/API'
import { useEffect, useState } from 'react';

function App() {
  const [logs, updateLogs] = useState([]);

  useEffect(() => {
    (async () => {
      const entries = await fetchLogEntries();
      console.log(entries);
    })();
  }, [])

  return (
    <div className="App">
      <Map
        logs={logs}
      />    
    </div>
  );
}

export default App;
