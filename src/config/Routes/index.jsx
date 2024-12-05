import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "non.geist/mono";
import { ThemeProvider } from "@/assets/components/ThemeProvider";
import HomePage from "@/pages/HomePage";

const RoutesCon = () => {
  return (
    <>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route index element={<HomePage />} />
            {/* <Route path="*" element={<ErorPage />} /> */}
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default RoutesCon;
