import { useState, useEffect } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const hidePost = async (postId: string) => {
    await fetch(`http://localhost:3000/posts/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hidden: true }),
    });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const currentUsers = users.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:5000/users');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th>Tác giả</th>
          <th>Nội dung</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.authorId}</td>
            <td>{post.text}</td>
            <td>
              <button onClick={() => hidePost(post.id)}>Ẩn</button>
            </td>
          </tr>
        ))}
        
      </tbody>
    </table>
  );
};

export default PostList;
