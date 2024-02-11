import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';


const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
    <div className='flex flex-col max-w-6xl gap-6 px-3 mx-auto p-28 '>
      <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to Daily Blogs</h1>
      <p className='text-xs text-gray-500 sm:text-sm'>
        Here you'll find a variety of articles on topics such as
        Tech, Science, lifestyle, Fashion and Culinary.
      </p>
      <Link
        to='/search'
        className='text-xs font-bold text-teal-500 sm:text-sm hover:underline'
      >
        View all posts
      </Link>
    </div>
  

    <div className='flex flex-col max-w-6xl gap-8 p-3 mx-auto py-7'>
      {posts && posts.length > 0 && (
        <div className='flex flex-col gap-6'>
          <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
          <div className='flex flex-wrap gap-4'>
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <Link
            to={'/search'}
            className='text-lg text-center text-teal-500 hover:underline'
          >
            View all posts
          </Link>
        </div>
      )}
    </div>
  </div>
  )
}

export default Home