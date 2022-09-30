// import logo from '../img/logo.png';
import house from '../img/house.png';
import facebook from '../img/facebook.png';
import phone_m from '../img/icons/phone-m.png';
import phone_pc from '../img/icons/phone-pc.png';
import icon1 from '../img/icons/1.png';
import icon2 from '../img/icons/2.png';
import icon4 from '../img/icons/4.png';
import icon5 from '../img/icons/5.png';
import { Link } from 'react-router-dom';


const isMobile = document.body.clientWidth <= 750 || document.documentElement.clientWidth <= 750 || window.innerWidth <= 750;
const isPad = document.body.clientWidth <= 1200 || document.documentElement.clientWidth <= 1200 || window.innerWidth <= 750;
function Header() {
  function switchMenu() {
    if (document.querySelector('.menu').style.opacity !== '1') {
      if (isPad) {
        document.body.style.height = "100vh"
        document.body.style.overflow = "hidden"
        document.querySelector('.menu--trigger').classList.remove('unactive');
        document.querySelector('.menu--trigger').classList.add('active');
        window.setTimeout(() => {
          document.querySelector('.menu').style.display = 'flex';
          document.querySelector('.menu').style.opacity = 1;
        },
          500)
      }
    } else {
      document.body.style.height = "unset"
      document.body.style.overflow = "auto"
      document.querySelector('.menu').style.display = 'none';
      document.querySelector('.menu').style.opacity = 0;
      document.querySelector('.menu--trigger').classList.remove('active');
      document.querySelector('.menu--trigger').classList.add('unactive');
    }
  }
  let logo
  if (isMobile) {
    logo = <img src={facebook} alt="facebook" className='menu__fb' />
  } else {
    logo = <img src={house} alt="house" />
  }
  return (
    <header>
      <div className="menu" onClick={switchMenu}>
        <ul>
          <li>
            <Link className="menu__link" to="/about">
              關於宏銘
              <img src={icon1} alt="about-us" />
            </Link>
          </li>
          <li>
            <Link className="menu__link" to="/media">
              媒體報導
              <img src={icon2} alt="media" />
            </Link>
          </li>
          <li>
            <Link className="menu__link" to="/case">
              遷移案例
              <img src={icon4} alt="move-case" />
            </Link>
          </li>
          <li>
            <Link className="menu__link" to="/contact">
              聯絡我們
              <img src={icon5} alt="contact-us" />
            </Link>
          </li>
        </ul>
        <div>
          <a href='https://www.facebook.com/%E5%AE%8F%E9%8A%98%E6%A8%93%E6%88%BF%E9%81%B7%E7%A7%BB%E5%B7%A5%E7%A8%8B%E8%A1%8C-439033473291618/?ref=page_internal' className="menu__logo">
            {logo}
          </a>
          <div className="menu__slogan">
            <p>
              ３０年移屋經驗
            </p>
            <p>
              房屋遷移的救星
            </p>
          </div>
          <p className='menu__bar'>
            全省服務 <img src={isMobile ? phone_m : phone_pc} alt="phone" />歡迎來電
            <br />
            <a href="tel:+886-939-278-661">0939-278-661</a>
            ・<a href="tel:+886-910-856-862">0910-856-862</a>
          </p>
        </div>
      </div>
      <div className="menu--trigger" onClick={switchMenu}>
        <span></span>
      </div>
      <nav className="home__head">
        <h1 className="home__title">
          <Link to="/">
            <span>宏銘</span><br></br>樓房遷移工程行
          </Link>
        </h1>
        <div className="home__logo">
          {/* <img src={logo} alt="logo" />
          <p>
            ３０年<br></br>移屋經驗
          </p>
          <p>
            房屋遷移<br></br>的救星
          </p> */}
          <p>３０年移屋經驗,房屋遷移的救星</p>
          <img src={house} alt="house" />
        </div>
      </nav>

    </header>
  );
}

export default Header;
