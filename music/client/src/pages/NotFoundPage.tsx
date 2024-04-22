import { Link } from "react-router-dom";
import notfound from "../img/404black.jpeg";
export default function NotFoundPage() {
  return (
    <>
      <img
        alt="pagnotfound"
        src={notfound}
        style={{ width: "60%", marginLeft: "20%", height: "10%" }}
      />

      <button style={{ marginLeft: "48%" }}>
        <Link to="/"><span style={{color:"black"}}> Home</span></Link>
      </button>
    </>
  );
}
