import "../scss/ListPage.scss";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Datatable from "../components/Datatable";

const ListPage = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default ListPage;
