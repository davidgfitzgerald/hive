import React, {Component} from 'react';
import hive from '../../assets/images/svg/HIVE 2.svg'
import orangeHexagon from '../../assets/images/svg/Star 1.svg'
import whiteHexagon from '../../assets/images/svg/Star 2.svg'

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={orangeHexagon} alt="" className="orange-hexagon"/>
        <img src={whiteHexagon} alt="" className="white-hexagon"/>
        <img src={hive} alt="Hive" className="hive-text"/>
      </div>
    );
  }
}

export default Logo;