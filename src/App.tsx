import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { Post } from "./components/Post";
import { POSTS } from "./logic/posts-util";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {POSTS.map((postData) => (
          <Route
            key={postData.url}
            path={`/${postData.url}`}
            element={<Post xml={JSON.parse(postData.content)} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
