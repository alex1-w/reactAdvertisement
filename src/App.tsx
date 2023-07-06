import { Routes, Route } from "react-router-dom";
import { Ads } from "./pages/Ads/Ads";
import { Categories } from "./pages/Categories/Categories";
import { CreateAd } from "./pages/CreateAd/CreateAd";
import { Layout } from "./Layout/Layout";
import { Advertisement } from "./pages/Advertisement/Advertisement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Ads />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/advertisement/:id" element={<Advertisement />} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
