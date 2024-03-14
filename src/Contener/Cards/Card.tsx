import { useState } from "react";
import "./Card.css";

function Card({ Data, DataId, SearchName }) {
  const [SS, setSS] = useState(Data);
  console.log(SearchName);
  return (
    <div className="Cards">
      {!Data.length
        ? "Loading..."
        : SS.map((item) => {
            return (
              <div
                key={item._id}
                className="items"
                onClick={() => DataId(item._id)}
              >
                <img src={item.Image} alt="" />
                <div>
                  <p>{item.Name}</p>
                  <p>ราคา :{item.Price}</p>
                </div>
              </div>
            );
          })}
    </div>
  );
}
export default Card;
