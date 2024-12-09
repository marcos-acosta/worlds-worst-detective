import { Post } from "./components/Post";
import { DEFAULT_MATCHERS, parseMarcdownToXml } from "./logic/marcdown";
import { POSTS } from "./logic/posts-util";

function App() {
  return <Post xml={parseMarcdownToXml(POSTS.testSimple, DEFAULT_MATCHERS)} />;
}

export default App;
