import "./CardOne.css";
function CardOne({ Data, BackDrop }) {
  return (
    <div className="CardOne">
      {Data.map((item, i) => {
        return (
          <div key={i} className="oneitems">
            <a href={item.Image} target="_blank">
              <img src={item.Image} alt="" />
            </a>
            <div>
              <p>{item.Name}</p>
              <p>ราคา :{item.Price}</p>
              <p>ราคา :{item.Total}</p>
              <p>ราคา :{item.Details}</p>
            </div>
            <button
              style={{ margin: "2rem", padding: "4px" }}
              onClick={() => BackDrop("")}
            >
              กลับหน้าแรก
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default CardOne;
