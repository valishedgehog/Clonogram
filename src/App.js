import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  const [user, setUser] = React.useState("hello");
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    document.title = user ? `${user}'s feed` : "Login";
  }, [user]);

  const handleAddPost = React.useCallback((newPost) => {
    setPosts([newPost, ...posts]);
  }, [posts]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList posts={posts} />
    </>
  );
}

export default App;
