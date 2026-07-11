import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRegister from "./components/AddRegister";
import SearchRegister from "./components/SearchRegister";
import DeleteRegister from "./components/DeleteRegister";
import ViewRegister from "./components/ViewRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddRegister />} />
        <Route path="/search" element={<SearchRegister />} />
        <Route path="/delete" element={<DeleteRegister />} />
        <Route path="/view" element={<ViewRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;