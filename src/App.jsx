import "./index.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Header title="Popular tour places" />
      <Main />
    </>
  )
}

export default App


// App.jsx our project
// main.jsx the big parent, the root render the project
// index.css just for styling
// index.html to create the DOM