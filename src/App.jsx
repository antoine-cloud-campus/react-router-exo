import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Category from "./pages/Category.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="category/:id">
          <Route index element={<Category />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;