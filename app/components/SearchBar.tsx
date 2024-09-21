import { useState } from 'react';

interface Solution {
  title: string;
  description: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [solutions, setSolutions] = useState<Solution[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would call an API here
    // For this example, we'll use mock data
    const mockSolutions = [
      { title: 'Rest and Hydration', description: 'Get plenty of rest and stay hydrated.' },
      { title: 'Over-the-counter Medicine', description: 'Consider taking appropriate OTC medication.' },
      { title: 'Consult a Doctor', description: 'If symptoms persist, consult a healthcare professional.' },
    ];
    setSolutions(mockSolutions);
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSearch} className="relative mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your symptoms and find solutions..."
          className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>
      {solutions.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Potential Solutions</h3>
          <ul className="space-y-4">
            {solutions.map((solution, index) => (
              <li key={index}>
                <h4 className="font-semibold text-blue-600">{solution.title}</h4>
                <p className="text-gray-600">{solution.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}