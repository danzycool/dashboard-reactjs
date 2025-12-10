import "../scss/SinglePage.scss";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import Table from "../components/Table";

const SinglePage = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h3 className="itemTitle">Jane Doe</h3>

                <div className="detailItem">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">janedoe@gmail.com</div>
                </div>

                <div className="detailItem">
                  <div className="itemKey">Phone:</div>
                  <div className="itemValue">+2348036666999</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Address:</div>
                  <div className="itemValue">
                    31 Missionary Street, Wuse 2, Abuja
                  </div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Country:</div>
                  <div className="itemValue">Sovereign State</div>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart aspectRatio={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
