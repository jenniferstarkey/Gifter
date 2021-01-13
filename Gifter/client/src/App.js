import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <PostList />
      <PostForm />
    </div>
  );
}

export default App;
