import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/dashboard";
import Layout from "../components/layout";
import NotFound from "../pages/notFound";
import PostJobForm from "../components/header/PostJobForm"; // Add this import
import JobsList from "../components/job/jobList";
import PremiumPage from "../pages/PremiumPage";
import Login from '../components/Login';
import Applications from "../view/applications";

export const RouteContainer = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <DashBoard />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
      <Route
        path="/PostJobForm"
        element={
          <Layout>
            <PostJobForm />
          </Layout>
        }
      />
      <Route
        path="/jobList"
        element={
          <Layout>
            <JobsList />
          </Layout>
        }
      />
      <Route
        path="/PremiumPage"
        element={
          <Layout>
            <PremiumPage />
          </Layout>
        }
      />
      <Route
        path="/Login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />{" "}
      <Route
        path="/applications"
        element={
          <Layout>
            <Applications />
          </Layout>
        }
      />
      <Route
        path="/applications"
        element={
          <Layout>
            <Applications />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
);
