import Blogs from './body/blogs';
import Nav from './navbar/navbar';
import '../styles/home.css';
import React, { useState } from 'react';

const Home = () => {
  const [blogs, setblogs] = useState([
    {
      id: 1,
      title: 'First Blog Post',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe'
    },
    {
      id: 2,
      title: 'Second Blog Post',
      body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Jane Smith'
    },
    {
      id: 3,
      title: 'Third Blog Post',
      body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Bob Johnson'
    }
  ]);
  return (
    <div className='body'>
      <Nav />
      <Blogs blogs={blogs} title='All blogs' />
      <Blogs
        blogs={blogs.filter(e => e.author === 'John Doe')}
        title="John Doe's blogs"
      />
    </div>
  );
};

export default Home;
