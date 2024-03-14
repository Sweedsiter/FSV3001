import { IoMdLock } from "react-icons/io";

import "./Header.css";

function Header({ Status }) {
  const Admin = Status;

  return (
    <div className="Header">
      <div className="L">
        <img
          style={{ width: "50px", padding: "6px  0" }}
          src="https://res.cloudinary.com/dxni450l4/image/upload/v1710315037/iexscntcwdhykwwgxvh2.png"
          alt=""
        />
      </div>
      <div className="R">
        {!Admin ? (
          <>
            <IoMdLock style={{ fontSize: "20px" }} className="H_icon" />
          </>
        ) : (
          "Deshboard"
        )}
      </div>
    </div>
  );
}
export default Header;
