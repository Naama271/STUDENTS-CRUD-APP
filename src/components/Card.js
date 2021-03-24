import { Link } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <div className="card">
      {/* <h4>{data.id}</h4>
      <h3>{data.gender}</h3>
      <img src={data.city} alt="" /> */}
      <Link to="/students">
        <button>Back</button>
      </Link>
    </div>
  );
};
export default Card;
