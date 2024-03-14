import { useState } from "react";
import "./App.css";
import Card from "./Contener/Cards/Card";
import Menu from "./Contener/MenuList/Menu";
import Data from "./Data/Data";
import Header from "./Contener/Header/Header";
import Nav from "./Contener/Navbar/Nav";

function App() {
  // State
  // const [Data, setData] = useState([]);
  const [oneData, setOneData] = useState();
  const [AdminLogin, setAdminLogin] = useState();
  const [SearchName, setSearchName] = useState();

  // Api call
  // fetch("https://jjvpp9-3000.csb.app/product")
  //   .then((res) => res.json())
  //   .then((data) => setData(data));

  // Group Data
  const Group = Data.map((e) => e.Group).filter(
    (e, i, a) => a.indexOf(e) === i,
  );
  const GropuSl = Data.filter((e) => e.Group === oneData);

  // Show Data
  return (
    <div className="App">
      <Nav />
      <Header Status={AdminLogin} />
      <div className="contener">
        <Menu
          Group={Group}
          SeletGroup={setOneData}
          ADlogin={(e) => setAdminLogin(e)}
          Status={AdminLogin}
          SearchName={(e) => setSearchName(e)}
        />
        <Card
          Data={!oneData ? Data : GropuSl}
          DataId={(e) => console.log(e)}
          SearchName={SearchName}
        />
      </div>
    </div>
  );
}
export default App;
