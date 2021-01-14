import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import './App.css';
import { PostProvider } from "./components/PostProvider";
import { PostSearch } from "./components/PostSearch";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostList />
        <PostForm />
        <PostSearch />
      </PostProvider>
    </div>
  );
}

export default App;
