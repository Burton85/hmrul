import Header from './components/Header';
import Footer from './components/Footer';
import about from './img/icons/about.png';
// import location from './img/icons/location.png';
// import map from './img/map.png';

function About() {
  return (
    <div className="home">
      <Header></Header>
      <div className="marquee">
        <h2 className="marquee__content">
          全省服務歡迎來電 <a href="tel:+886-939-278-661">0939-278-661</a>・
          <a href="tel:+886-910-856-862">0910-856-862</a>
        </h2>
      </div>
      <br></br>
      <div className="about">
        <img src={about} alt="about" className="about__icon" />
        <br />
        <h3 className="about__title">關於我們</h3>
        <br />
        <p className="about__content">
          我們累積30年多年的經驗，
          <br />
          深知傳統式房屋遷移施工法其優點在於細節部分，
          <br />
          絲毫不馬虎，鉅細靡宜，
          <br />
          使建築物在遷移過程中，不損傷其結構體，
          <br />
          這是本公司至始至終堅持的施工理念
          <br />
          價錢公道讓您貨比三家絕不吃虧，期待給您更完善便利的服務。
          <br />
        </p>
        <ul className="about__tags">
          <li>#樓房</li>
          <li>#工廠</li>
          <li>#房屋遷移</li>
          <li>#寺廟遷移</li>
          <li>#房屋轉向</li>
          <li>#房屋扶正</li>
          <li>#昇高</li>
        </ul>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer></Footer>
    </div>
  );
}

export default About;
