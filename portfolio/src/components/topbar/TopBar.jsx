import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">web_vero</a>
                <div className="item-container">
                    <Person className="icon"/>
                    <span>+30 694 657 6043</span>
                </div>

                <div className="item-container">
                    <Mail className="icon"/>
                    <span>veronikakatyrynchuk@gmail.com</span>
                </div>
            </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

