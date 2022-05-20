import React from "react";
import { Container, Grid } from "@mui/material";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Container className="top_60">
      <Grid container style={{ gap: 25 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
          <Header />
          <div className="main-content container_shadow">
          <Routes>
              <Route exact path="/" element={<Resume />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
          </Routes>
          </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
