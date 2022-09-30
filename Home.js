import Header from './components/Header';
import Footer from './components/Footer';
import about from './img/icons/about.png';
import video from './img/icons/video.png';
import location from './img/icons/location.png';
import map from './img/map.png';
import Carousel from './components/Carousel';
import Superman from './components/Superman';


function Home() {
  return (
    <div className="home">
      <Superman></Superman>
      <Header></Header>
      <div className='marquee'>
        <h2 className='marquee__content'>
          全省服務歡迎來電   <a href="tel:+886-939-278-661">0939-278-661</a>
          ・<a href="tel:+886-910-856-862">0910-856-862</a>
        </h2>
      </div>
      <div className="carousel__container">
        <Carousel></Carousel>
      </div>
      <div className='about'>
        <img src={about} alt="about" className='about__icon' />
        <br />
        <h3 className='about__title'>
          關於我們
        </h3>
        <br />
        <p className='about__content'>
          我們累積30年多年的經驗，<br />
          深知傳統式房屋遷移施工法其優點在於細節部分，<br />
          絲毫不馬虎，鉅細靡宜，<br />
          使建築物在遷移過程中，不損傷其結構體，<br />
          這是本公司至始至終堅持的施工理念<br />
          價錢公道讓您貨比三家絕不吃虧，期待給您更完善便利的服務。<br />
        </p>
        <ul className='about__tags'>
          <li>#樓房</li>
          <li>#工廠</li>
          <li>#房屋遷移</li>
          <li>#寺廟遷移</li>
          <li>#房屋轉向</li>
          <li>#房屋扶正</li>
          <li>#昇高</li>
        </ul>
      </div>
      <div className='about'>
        <img src={video} alt="video" className='about__icon' />
        <br />
        <h3 className='about__title'>
          政府認證搬厝師跨足多項領域
        </h3>
        <br />
        <div className='about__video'>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1ApAAdkiljY?end=27&rel=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
        <a className='about__btn' href='/media'>瞭解更多</a>
      </div>
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

export default Home;
