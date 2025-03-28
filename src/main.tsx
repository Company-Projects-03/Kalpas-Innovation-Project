import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import AllNews from "./pages/AllNews/AllNews";
import AllTechNews from "./pages/AllTechNews/AllTechNews";
import AllBusinessNews from "./pages/AllBusinessNews/AllBusinessNews";
import AllSportsNews from "./pages/AllSports/AllSportsNews";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchedNews from "./pages/SearchedNews/SearchedNews";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          components: {
            Segmented: {
              /* here is your component tokens */
              // itemActiveBg: "#2d57dd",
              itemSelectedBg: "#2563EB",
              itemSelectedColor: "#ffffff",
              // itemHoverColor: "#ffffff",
              // itemHoverBg: "#2563EB",
            },
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<AllNews />} />
              <Route path="/sports" element={<AllSportsNews />} />
              <Route path="/technology" element={<AllTechNews />} />
              <Route path="/business" element={<AllBusinessNews />} />
              <Route path="/results" element={<SearchedNews />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
