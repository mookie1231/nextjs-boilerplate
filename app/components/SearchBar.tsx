'use client';

import { useState } from 'react';

interface Solution {
  title: string;
  description: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSolutions([]);

    try {
      console.log('Sending request with query:', query);
      const response = await fetch('/api/getSolutions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms: query }),
      });

      const data = await response.json();
      console.log('API response:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch solutions');
      }

      if (Array.isArray(data.solutions)) {
        setSolutions(data.solutions);
      } else {
        console.error('Unexpected response format:', data);
        setError('Received an unexpected response format');
      }
    } catch (error) {
      console.error('Error fetching solutions:', error);
      setError(error instanceof Error ? error.message : 'An error occurred while fetching solutions');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSearch} className="relative mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your symptoms and find solutions..."
          className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg text-gray-800 placeholder-gray-500"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {solutions.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Potential Solutions</h3>
          <ul className="space-y-4">
            {solutions.map((solution, index) => (
              <li key={index} className="border-b pb-4 last:border-b-0">
                <h4 className="font-semibold text-blue-600 mb-2">{solution.title}</h4>
                <p className="text-gray-700">{solution.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isLoading && (
        <div className="text-center">
          <p className="text-gray-600">Searching for solutions...</p>
        </div>
      )}
    </div>
  );
}