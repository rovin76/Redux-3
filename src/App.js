import "./styles.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import TodoApp from "./pages/TodoApp";
import CounterApp from "./pages/CounterApp";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CounterApp />}></Route>
        <Route path="/todoapp" element={<TodoApp />}></Route>
      </Routes>
    </div>
  );
}
export default App;
