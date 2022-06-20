import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      Chào mừng đến với admin,
      <Link to="/admin">Go To Admin Page</Link>
    </div>
  );
};

export default Home;
