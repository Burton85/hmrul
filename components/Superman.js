import supermangif from '../img/superman.gif';
import housegif from '../img/house.gif';
import flaggif from '../img/flag.gif';

function superman() {
  return (
    <div className="superman-container">
      <img alt="house" className="house" src={housegif}></img>
      <img alt="superman" className="superman" src={supermangif}></img>
      <img alt="flag" className="flag" src={flaggif}></img>
    </div>
  );
}

export default superman;
