import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/blogs.css';
import { Link } from 'react-router-dom';
const Blogs = props => {
  const blogs = props.blogs;
  const title = props.title;
  return (
    <div className='Home'>
      <h1 style={{ fontSize: '20px' }}>{title}</h1>
      {blogs.map(blog => (
        <div className='blog-list' key={blog.id}>
          <div className='blog-item'>
            <Link to={`/blogs/${blog.id}`}>
              <h1>{blog.title}</h1>
              <p> {blog.content.split(' ').slice(0, 20).join(' ')}... </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
