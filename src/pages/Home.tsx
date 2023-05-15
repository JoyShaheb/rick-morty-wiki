import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Characters");
  }, []);
  return <div>Home</div>;
};

export default Home;
