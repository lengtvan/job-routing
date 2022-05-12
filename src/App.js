/* eslint-disable no-unused-vars */
import "./App.css";
import AppBar from "./components/AppBar";
import React, { useState, createContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
  Switch,
} from "react-router-dom";
// import JobCard from "./components/JobCard";
import jobs from "./jobs";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { YardOutlined } from "@mui/icons-material";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./components/AuthProvider";
import LoginModal from "./components/LoginModal";
// import Modal from "./components/Modal";
import RequireAuth from "./components/RequireAuth";
import DetailedJobCard from "./components/DetailedJobCard";
import Layout from "./pages/Layout";
import { SearchProvider } from "./components/SearchProvider";
import { DisplaySearch } from "./components/DisplaySearchedJobs";
import SearchPage from "./pages/SearchPage";
function App() {
  let location = useLocation();

  //http://localhost:3000/
  return (
    <>
      <AuthProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/login" element={<HomePage />} />
              <Route path="/jobs/*" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
            </Route>
          </Routes>
          <Routes>
            <Route path="/login" element={<LoginModal />} />
          </Routes>
          <Routes>
            <Route
              path="/jobs/:jobID"
              element={
                <RequireAuth>
                  <DetailedJobCard />
                </RequireAuth>
              }
            />
          </Routes>
        </SearchProvider>
      </AuthProvider>
    </>
  );
}

export default App;
