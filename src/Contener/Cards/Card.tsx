import "./Card.css";

function Card({ Data, DataId, SearchName }) {
  return (
    <div className="Cards">
      {!Data.length
        ? "Loading..."
        : !SearchName
          ? Data.map((item) => {
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
            })
          : Data.filter((e) => e.Name === SearchName).map((item) => {
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
