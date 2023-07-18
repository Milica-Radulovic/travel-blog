import "./RecentPosts.css";

const RecentPosts = () => {
  // Sample data for recent posts
  const posts = [
    {
      id: 1,
      title: "Blog Post 1",
      image:
        "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      author: "John Doe",
      time: "2 hours ago",
      link: "/post1",
    },
    {
      id: 2,
      title: "Blog Post 2",
      image:
        "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      author: "Jane Smith",
      time: "5 hours ago",
      link: "/post2",
    },
    {
      id: 3,
      title: "Blog Post 3",
      image:
        "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      author: "Alex Johnson",
      time: "1 day ago",
      link: "/post3",
    },
  ];

  return (
    <section className="recent-posts">
      <h2>RECENT POSTS</h2>
      <div className="card-container">
        {posts.map((post) => (
          <a key={post.id} href={post.link} className="card-link">
            <div className="card">
              <img src={post.image} alt={post.title} />
              <h3 className="card-title">{post.title}</h3>
              <p className="card-author">{post.author}</p>
              <p className="card-time">{post.time}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
