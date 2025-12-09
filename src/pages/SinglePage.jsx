import "../scss/SinglePage.scss";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const SinglePage = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <h3>Single Page Content</h3>
      </div>
    </div>
  );
};

export default SinglePage;
