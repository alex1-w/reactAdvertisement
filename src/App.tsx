import { Routes, Route } from "react-router-dom";
import { Ads } from "./pages/HomePage/HomePage";
import { CreateAd } from "./pages/CreateAd/CreateAd";
import { Layout } from "./Layout/Layout";
import { Advertisement } from "./pages/Advertisement/Advertisement";
import { CreateCategory } from "./pages/CreateCategory/CreateCategory";
import { CategoryPage } from "./pages/CategoryPage/CategoryPage";
import { About } from "./pages/About/About";
import { PersonalAccount } from "./pages/PersonalAccount/PersonalAccount";
import { MyAdvertisements } from "./pages/MyAdvertisements/MyAdvertisements";
import { NotFoundedPage } from "./pages/NotFoundedPage/NotFoundedPage";
import { EditAdvertisement } from "./pages/EditAdvertisement/EditAdvertisement";
import { RequireAuth } from "./providers/RequireAuth";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Ads />} />

        <Route path="/create-ad" element={
          <RequireAuth>
            <CreateAd />
          </RequireAuth>}
        />

        <Route path="/create-category" element={
          <RequireAuth>
            <CreateCategory />
          </RequireAuth>}
        />
        <Route path="/personal-account" element={
          <RequireAuth>
            <PersonalAccount />
          </RequireAuth>}
        />
        <Route path="/my-advertisements" element={
          <RequireAuth>
            <MyAdvertisements />
          </RequireAuth>}
        />
        <Route path="/edit-advertisement/:id" element={
          <RequireAuth>
            <EditAdvertisement />
          </RequireAuth>}
        />
        <Route path="/about" element={<About />} />
        <Route path="/category-page/:id" element={<CategoryPage />} />
        <Route path="/advertisement/:id" element={<Advertisement />} />
        <Route path="/not-found" element={<NotFoundedPage />} />
        <Route path="*" element={<NotFoundedPage />} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
