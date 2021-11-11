import * as React from "react";
import AppRouter from "./AppRouter";
import Footer from "./components/common/Footer";

import Header from "./components/common/Header";
const App = () => {
  return (
    <>
      <AppRouter>
        <Header />
        <Footer />
      </AppRouter>
    </>
  );
};

export default App;
