import '../../styles//newBlog.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const New = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Tanvir');
  const [pending, setPending] = useState(false);
  const history = useHistory();
  const style = { border: '1px solid gray', width: '300px' };

  const handleSubmit = e => {
    e.preventDefault();
    const blog = { title, content, author };
    setPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    })
      .then(() => {
        console.log('New blog added');
        history.push('/');
        // add logic to redirect user to home page or show success message
      })
      .catch(err => console.error(err))
      .finally(() => {
        setPending(false);
      });
  };

  return (
    <div className='form-container'>
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='blogTitle'>Title:</label>
        <input
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
          type='text'
          id='blogTitle'
          name='blogTitle'
          placeholder='Enter your blog title'
          style={style}
        />

        <label htmlFor='blogContent'>Content:</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          id='blogContent'
          name='blogContent'
          placeholder='Enter your blog content'
          style={{ border: '1px solid gray', height: '300px' }}
        ></textarea>

        <label htmlFor='authorName'>Author:</label>
        <select
          id='authorName'
          name='authorName'
          value={author}
          onChange={e => setAuthor(e.target.value)}
          style={style}
        >
          <option value='John'>Tanvir</option>
          <option value='Jane'>Imam</option>
          <option value='Bob'>Mitul</option>
        </select>

        {pending ? (
          <p>Sending data...</p>
        ) : (
          <button type='submit'>Create Post</button>
        )}
      </form>
    </div>
  );
};

export default New;
