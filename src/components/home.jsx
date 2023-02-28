import Blogs from './body/blogs';
import Nav from './navbar/navbar';
import '../styles/home.css';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // fetch API data and update state
    fetch('http://localhost:8080/api/posts')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = id => {
    const newBlogs = apiData.filter(blog => blog.id !== id);
    setApiData(newBlogs);
  };

  return (
    <div className='body'>
      <Nav />
      <Blogs blogs={apiData} title='All blogs' handleDelete={handleDelete} />
      <Blogs
        blogs={apiData.filter(e => e.author === 'John Doe')}
        title="John Doe's blogs"
      />
    </div>
  );
};

export default Home;
