import "../scss/NewPage.scss";
import { useState } from "react";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const NewPage = ({ inputs, title }) => {
  const [file, setFile] = useState(null);

  console.log(file); // Debugging line to log the selected file

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>{title}</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img
              // src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              src={file ? URL.createObjectURL(file) : "/images/no-image.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form action="" method="post">
              <div className="formInput">
                <label htmlFor="file">
                  <span className="uploadImg">Upload Image:</span>
                  <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input, key) => (
                <div className="formInput" key={key}>
                  <label type="text">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
