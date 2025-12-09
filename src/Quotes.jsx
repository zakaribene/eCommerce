import { useEffect, useState } from "react";

const Quotes = () => {
 const [catUrl, setCatUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search") // <--- URL-kaaga saxda ah
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        // MUHIIM: The Cat API waxay soo celisaa ARRAY [ { id: '...', url: '...' } ]
        // Waxaan u baahanahay inaan helno walxaha koowaad oo aan ka soo saarno 'url'
        if (data && data.length > 0) {
          setCatUrl(data[0].url); // Waxay qaadanaysaa URL-ka sawirka
        } else {
          throw new Error("API-gu ma soo celin sawir.");
        }
      })
      .catch(err => {
        console.error("Fetch Error:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
  <div className="p-5 text-center">
      <h1 className="text-2xl font-bold mb-4">Random Cat Image 🐱</h1>
      
      {loading && <p>Loading cat picture...</p>}
      
      {error && <p className="text-red-600">Cilad: {error}</p>}

      {catUrl && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
          {/* Waxaad u isticmaali kartaa URL-ka si toos ah sawir ahaan */}
          <img 
            src={catUrl} 
            alt="Random Cat" 
            className="max-w-xs mx-auto rounded-lg shadow-lg"
          /> 
          <p className="mt-2 text-sm text-gray-500">Waa bisad cusub!</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default Quotes;