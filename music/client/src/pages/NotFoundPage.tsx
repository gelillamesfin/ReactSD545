import { Link } from "react-router-dom";
import pic from "../img/pageNotFound.jpeg";
export default function NotFoundPage() {
  return (
    <>
      <img alt="pagnotfound" src={pic} style={{width:"60%",marginLeft:"15%"}}/>
      <div>
        <button style={{ marginLeft: "45%" }}>
          <Link to="/">Home</Link>
        </button>
      </div>
    </>
  );
}
