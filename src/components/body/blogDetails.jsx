import { useParams } from 'react-router-dom';
import useFetch from '../useFetch/useFetch';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    ispending,
    error
  } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    })
      .then(() => {
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      {error && <h1>{error}</h1>}
      {ispending && <h1>data loading...</h1>}

      <article style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {blog && (
          <p>
            author , <br /> {blog.author}
          </p>
        )}
        {blog && <h1>{blog.title}</h1>}
        {blog && <p> {blog.content} </p>}
        <button onClick={handleDelete}>Delete</button>
      </article>
    </div>
  );
};

export default BlogDetails;
