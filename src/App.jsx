import { useEffect, useState } from "react";
import "./App.css";
import {} from "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Banner";
import Hi1 from "./components/Slider";
import vite from "/vite.svg";
import reactLogo from "./assets/react.svg";
import Home from "./components/body";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Nav from "./components/navBar";
import Form from "./components/form";
import Button from "./components/connector";
import BaseContext from "./context/BaseContext";

let user = "Amali";
function hi(user) {
  return "Hello " + user;
}

function onclick() {
  console.log("ebuwa needa");
}
function App() {
  const [component, setComponent] = useState(<Home image={reactLogo} />);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  function setMenu(menu) {
    switch (menu) {
      case "home": {
        setComponent(<Home image={reactLogo} />);
        break;
      }
      case "about": {
        setComponent(<Home image={vite} />);
        break;
      }
    }
  }
  const [nm, setNm] = useState(3);
  const [cat, setCat] = useState({});

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        setCat(data);
        console.log(data);
      });
  }, [nm]);
  console.log(cat);
  console.log(nm);

  return (
    <div>
      <Nav />
      <BaseContext.Provider value={onclick}>
        <Button />
      </BaseContext.Provider>
      <button
        onClick={() => {
          setNm(4);
        }}
      >
        click me
      </button>
      <Form />
      <h1>hello</h1>
      <Banner />
      <Hi1 title="Bread" description="Good Bread" image={reactLogo} />
      <Hi1 title="Bread" image={reactLogo}>
        Hiyoooo
      </Hi1>
      <Hi1 title={cat.fact}></Hi1>
      <Hi1 title={cat.length}></Hi1>
      <div>{component}</div>
      <h1>Hi {hi(user)}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setMenu("home");
        }}
      >
        click me 01
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setMenu("about");
        }}
      >
        click me 02
      </button>
    </div>
  );
}

export default App;
