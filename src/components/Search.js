import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        setCategories(["All Categories", ...response.data]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearch = () => {
    // Pass the search term and category to the parent component
    const searchCategory = category === "All Categories" ? "" : category;
    onSearch(searchTerm, searchCategory);
  };

  return (
    <div>
      <input
        type="text"
        style={{
          fontSize: '1.25em',
          padding: '5px 20px',
          width: '300px',
        }}
        placeholder="Search Products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  style={{
    fontSize: '1.25em',
    padding: '5px 20px',
    width: '300px',
  }}
>
  {categories.map((cat, index) => (
    <option key={index} value={cat === "All Categories" ? "" : cat}>{cat}</option>
  ))}
</select>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
