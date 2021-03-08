import './assets/css/App.scss'
import globe from './assets/images/svg/shutterstock_355866386 1.svg'
import whiteEllipse from './assets/images/svg/Ellipse 9.svg'
import greyEllipse from './assets/images/svg/Ellipse 8.svg'

function App() {
  return (
    <div className="App">
      <div className="title">
        Welcome to the Hive.
      </div>
      <img src={greyEllipse} alt="" className="grey-ellipse"/>
      <img src={whiteEllipse} alt="" className="white-ellipse"/>
      <img src={globe} alt="globe" className="globe"/>
    </div>
  );
}

export default App;
