import React, { Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./global.css"
import ElephantPage from "./pages/ElephantPage";

/**
 * The starting page for your App
 */

class App extends Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <Header />
          <main>
            <section>
                <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/elephant/:name"} element={<ElephantPage />} />
                </Routes>
            </section>
          </main>
        </BrowserRouter>
      </>

    );
  }
}

export default App;