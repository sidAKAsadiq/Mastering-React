import { useEffect, useId, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Theme_provider } from "./contexts/theme";
import Theme_button from "./components/Theme_button";
import Card from "./components/Card";

function App() {
  const [theme , set_theme] = useState("light")

  const light_mode = () => {
    set_theme("light")
  }
  const dark_mode = () => {
    set_theme("dark")
  }
  const toggle_mode = () => {
    if(theme == "light")
      set_theme("dark")
    else
      set_theme("light")
  } 

  //How to change theme using JS
  useEffect(()=>{
    //removing current theme mode
    document.querySelector('html').classList.remove("light" , "dark")
    //adding new mode
    document.querySelector('html').classList.add(theme)

  } , [theme])


  return (
    <>
    <Theme_provider value={{theme,light_mode,dark_mode,toggle_mode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <Theme_button />
          </div>
          <div className="w-full max-w-sm mx-auto"></div>
              <Card />
        </div>
      </div>
    </Theme_provider>
    </>
  );
}

export default App;
