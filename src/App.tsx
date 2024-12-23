import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { Post } from "./components/Post";
import { POSTS } from "./logic/posts-util";

function App() {
  return (
    <BrowserRouter>
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
