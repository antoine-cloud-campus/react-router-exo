import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Category from "./pages/Category.jsx";
import NotFound from "./pages/NotFound.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="category/:category" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;