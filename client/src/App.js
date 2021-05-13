import './App.css';
import Map from './components/Map';
import { fetchLogEntries } from './Api/API'
import { useEffect, useState } from 'react';

function App() {
  const [logs, updateLogs] = useState([]);

  const fetcEntries = async () => {
    const entries = await fetchLogEntries();
    updateLogs(entries);
  }

  useEffect(() => {
    fetcEntries();
  }, [])

  return (
    <div className="App">
      <Map logs={logs} fetcEntries />    
    </div>
  );
}

export default App;
