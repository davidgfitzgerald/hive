import React, {Component} from 'react';
import '../../assets/css/NavBar.scss'
import settings from '../../assets/images/svg/fi-rr-settings.svg'
import joeChan from '../../assets/images/svg/Rectangle 45.svg'
import Logo from "../logo/Logo";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <Logo/>
        <div className="nav-item">Projects</div>
        <div className="nav-item">Resources</div>
        <div className="nav-item">Community</div>
        <img src={joeChan} alt="settings" className="nav-item med-icon"/>
        <img src={settings} alt="settings" className="nav-item sm-icon"/>

      </nav>
    );
  }
}

export default NavBar;