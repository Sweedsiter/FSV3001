import { useState } from "react";
import "./App.css";
import Card from "./Contener/Cards/Card";
import Menu from "./Contener/MenuList/Menu";
import Data from "./Data/Data";
import Header from "./Contener/Header/Header";
import Nav from "./Contener/Navbar/Nav";
import CardOne from "./Contener/Cards/CardOne";

function App() {
  // State
  // const [Data, setData] = useState([]);
  const [oneData, setOneData] = useState();
  const [AdminLogin, setAdminLogin] = useState();
  const [SearchName, setSearchName] = useState();
  const [DataId, setDataId] = useState();

  // Api call
  // fetch("https://jjvpp9-3000.csb.app/product")
  //   .then((res) => res.json())
  //   .then((data) => setData(data));

  // Group Data
  const Group = Data.map((e) => e.Group).filter(
    (e, i, a) => a.indexOf(e) === i,
  );

  // Selet Group
  const GropuSl = Data.filter((e) => e.Group === oneData);

  // Selet OneData
  const DataOneId = Data.filter((e) => e._id === DataId);

  // Show Data
  return (
    <div className="App">
      <Nav />
      <Header Status={AdminLogin} />
      <div className="contener">
        <Menu
          Group={Group}
          SeletGroup={setOneData}
          ADlogin={setAdminLogin}
          Status={AdminLogin}
          SearchName={setSearchName}
        />

        {/* Card Show */}
        {!DataOneId.length ? (
          <Card
            Data={!oneData ? Data : GropuSl}
            DataId={setDataId}
            SearchName={SearchName}
          />
        ) : (
          <CardOne Data={DataOneId} BackDrop={setDataId} />
        )}
      </div>
    </div>
  );
}
export default App;
