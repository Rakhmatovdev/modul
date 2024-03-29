import "./Home.css"
import bghome from "../hook/bg-home.svg";
const Home = () => {
  return (
    <div className="container d-flex justify-content-between">
      <h1 className="home">Dasturlashni qulay <span className="text-success">muhitda</span> organing</h1>
     <h3> <img src={bghome} height={380} /></h3>
    </div>
  );
};

export default Home;
