import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // 假设这里调用API获取所有可用类别
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        setCategories(["All Categories", ...response.data]); // 在数组开头添加“All Categories”
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearch = () => {
    // 如果选择了“All Categories”，则将category参数设置为空字符串
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
