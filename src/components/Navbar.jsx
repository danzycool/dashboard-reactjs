import "../scss/Navbar.scss";
import { SearchOutlined } from "@mui/icons-material";
import { LanguageOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import { FullscreenExitOutlined } from "@mui/icons-material";
import { NotificationsNoneOutlined } from "@mui/icons-material";
import { ChatBubbleOutlineOutlined } from "@mui/icons-material";
import { ListOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>

          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>

          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>

          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <ListOutlined className="icon" />
          </div>

          <div className="item">
            <Avatar src="images/profile.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
