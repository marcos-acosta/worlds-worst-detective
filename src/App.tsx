import Post from "./components/Post";
import { convertMarcdownToJsx } from "./logic/md-compiler";
import { POSTS } from "./logic/posts-util";

function App() {
  return <Post sections={convertMarcdownToJsx(POSTS.testSimple)} />;
}

export default App;
