import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import NewPage from "./pages/NewPage";
import SinglePage from "./pages/SinglePage";
import NotFoundPage from "./pages/NotFoundPage";

import { userInputs, productInputs } from "./lib/data";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />

            <Route path="users">
              <Route index element={<ListPage />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="new"
                element={<NewPage inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<ListPage />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route
                path="new"
                element={
                  <NewPage inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
