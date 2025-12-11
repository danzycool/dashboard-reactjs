import "./scss/App.scss";
import "./themes/dark.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import NewPage from "./pages/NewPage";
import SinglePage from "./pages/SinglePage";
import NotFoundPage from "./pages/NotFoundPage";

import { userInputs, productInputs } from "./lib/data";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  // Change Theme
  const changeTheme = () => {
    const theme = localStorage.getItem("DashboardTheme");

    if (!theme) {
      localStorage.setItem(JSON.stringify(true));
      setDarkTheme(true);
    } else {
      setDarkTheme(!JSON.parse(theme));
      localStorage.setItem("DashboardTheme", JSON.stringify(darkTheme));
    }
  };

  // Check if a theme is stored in localStorage
  const checkTheme = () => {
    const theme = localStorage.getItem("DashboardTheme");

    theme && setDarkTheme(JSON.parse(darkTheme));
  };

  useEffect(() => {
    checkTheme;
  }, []);

  return (
    <div className={darkTheme ? "app dark" : "app"}>
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
    </div>
  );
}

export default App;
