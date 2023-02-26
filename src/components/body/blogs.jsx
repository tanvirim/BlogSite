import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/blogs.css';
const Blogs = props => {
  const blogs = props.blogs;
  const title = props.title;
  console.log(blogs);
  return (
    <div className='Home'>
      <h1 style={{ fontSize: '20px' }}>{title}</h1>
      {blogs.map(blog => (
        <div className='blog-list' key={blog.id}>
          <div className='blog-item'>
            <h1>{blog.title}</h1>
            <p> {blog.body} </p>
          </div>
          <button className='delete'> delete</button>
        </div>
      ))}
    </div>
  );
};

export default Blogs;