import Blogs from './body/blogs';
import '../styles/home.css';
import useFetch from './useFetch/useFetch';

const Home = () => {
  const {
    data: blog,
    ispending,
    error
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='body'>
      {error && <h1>{error}</h1>}
      {ispending && <h1>data loading...</h1>}
      {blog && <Blogs blogs={blog} title='All blogs' />}
    </div>
  );
};

export default Home;
