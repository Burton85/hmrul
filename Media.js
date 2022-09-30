import Header from './components/Header';
import Footer from './components/Footer';
import data from './data/data';

function Media() {
  let news = [];
  for (let i = 0; i <= data.media.length - 1; i++) {
    news.push(
      <div className="media__item" key={data.media[i].id}>
        <img src={data.media[i].pic} alt={data.media[i].type}></img>
        <div>
          <span>{data.media[i].type}</span>
          <h3>{data.media[i].name}</h3>
          <p dangerouslySetInnerHTML={{ __html: data.media[i].description }}></p>
        </div>
        <span className="media__date" dangerouslySetInnerHTML={{ __html: data.media[i].date }}></span>
      </div >
    );
  }
  return (
    <div className="home">
      <Header></Header>
      <div className="marquee">
        <h2 className="marquee__content">
          全省服務歡迎來電 0939-278-661 0910-856-862
        </h2>
      </div>
      <div className="media">{news}</div>
      <Footer></Footer>
    </div>
  );
}

export default Media;
