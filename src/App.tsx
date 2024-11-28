import "./App.css";
import Section from "./components/Section";
import {
  convertMarcdownToJsx,
  Section as SectionInterface,
} from "./logic/md-compiler";
import { POSTS } from "./logic/posts-util";

function App() {
  return (
    <>
      {convertMarcdownToJsx(POSTS.test).map((s: SectionInterface) => (
        <Section section={s} key={s.title} />
      ))}
    </>
  );
}

export default App;
