import "./styles/hero.css";
import HeaderImg from "../assets/images/bg-header-desktop.png";
import Logo from "../assets/images/logo.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="header">
        <img src={HeaderImg} alt="" />
        <img src={Logo} className="logo" />
      </div>
      <div className="hero-content">
        <div className="text">
          <h1>A history of everything you copy</h1>
          <p>Clipboard allows you to track and organize everything you copy.</p>
          <p>Instantly access your clipboard on all your devices</p>
        </div>
        <div className="buttons">
            <a className="btn ios">Download for iOS</a>
            <a className="btn mac">Download for Mac</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
