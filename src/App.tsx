import { Post } from "./components/Post";
import { getPost, PostNames } from "./logic/posts-util";

function App() {
  return <Post xml={getPost(PostNames.FORMAL_SYSTEMS)} />;
}

export default App;
