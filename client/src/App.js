import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "./Components/Comments";
import Task from "./Components/Task";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/comments/:category/:id" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
