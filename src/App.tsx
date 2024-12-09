import Article from "./components/Article";
import { DEFAULT_MATCHERS, parseMarcdownToXml } from "./logic/marcdown";
import { POSTS } from "./logic/posts-util";

function App() {
  return (
    <Article xml={parseMarcdownToXml(POSTS.testSimple, DEFAULT_MATCHERS)} />
  );
}

export default App;
