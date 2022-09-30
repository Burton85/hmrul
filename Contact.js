import Header from './components/Header';
import Footer from './components/Footer';
import phone_pc from './img/icons/phone-pc.png';
import location from './img/icons/location.png';
import map from './img/map.png';

function Contact() {
  return (
    <div className="home">
      <Header></Header>
      <div className='marquee'>
        <h2 className='marquee__content'>
          全省服務歡迎來電   <a href="tel:+886-939-278-661">0939-278-661</a>
          ・<a href="tel:+886-910-856-862">0910-856-862</a>
        </h2>
      </div>
      <p className='map__bar'>
        全省服務 <img src={phone_pc} alt="phone" />歡迎來電
        <br />
        <a href="tel:+886-939-278-661">0939-278-661</a>
        ・<a href="tel:+886-910-856-862">0910-856-862</a>
      </p>
      <div className='map'>
        <img src={location} alt="location" className='map__icon' />
        <br />
        <h3 className='map__title'>
          嘉義縣朴子市竹圍里12鄰新進路26號
        </h3>
        <br />
        <a href='https://www.google.com/maps/place/613%E5%98%89%E7%BE%A9%E7%B8%A3%E6%9C%B4%E5%AD%90%E5%B8%82%E6%96%B0%E9%80%B2%E8%B7%AF26%E8%99%9F/' target="_blank" rel="noreferrer">
          <img src={map} alt="map" className='google' />
        </a>
      </div>
      <Footer></Footer>
    </div >
  );
}

export default Contact;
