import Menu from "./nav-bar";
import useRoutes from "./routes";
import './App.css'
import {useSelector } from "react-redux";
import { isAuthCheking } from "./store/selectors";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


function App() {
  const auths = useSelector(isAuthCheking)
  const routes = useRoutes(auths)
  const history = useHistory()
  useEffect(()=>{
    if(auths){
      history.push('/profile')
    }
  }, [auths, history])
  return (
    <>
      {auths && <Menu/>}
      {routes}
    </>
  );
}

export default App;
