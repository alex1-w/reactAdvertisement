import { Routes, Route } from "react-router-dom";
import { Ads } from "./pages/Ads/Ads";
import { CreateAd } from "./pages/CreateAd/CreateAd";
import { Layout } from "./Layout/Layout";
import { Advertisement } from "./pages/Advertisement/Advertisement";
import { CreateCategory } from "./pages/CreateCategory/CreateCategory";
import { CategoryPage } from "./pages/CategoryPage/CategoryPage";
import { About } from "./pages/About/About";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index path="/" element={<Ads />} /> */}
        <Route index element={<Ads />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/category-page/:id" element={<CategoryPage />} />
        <Route path="/advertisement/:id" element={<Advertisement />} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
