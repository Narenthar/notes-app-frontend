import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header setSearch={setSearch} />
      <main className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/createnote" component={CreateNote} />
        <Route exact path="/note/:id" component={SingleNote} />
        <Route path="/mynotes" component={() => <MyNotes search={search} />} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
