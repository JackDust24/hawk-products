import { useState } from 'react';
import './App.css';

function App() {
  const [apiMessage, setApiMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const checkApi = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/`);
      const data = await response.json();
      setApiMessage(data.message);
    } catch (err) {
      setError('Failed to connect to API');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">React + TypeScript + TailwindCSS</h1>
        <p className="mt-4 text-gray-600">
          Edit <code className="text-sm bg-gray-200 p-1 rounded">src/App.tsx</code> and save to test
          HMR
        </p>

        <div className="mt-8">
          <button
            onClick={checkApi}
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50">
            {isLoading ? 'Checking...' : 'Check API Connection'}
          </button>

          {apiMessage && <p className="mt-4 text-green-600 font-semibold">{apiMessage}</p>}

          {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
