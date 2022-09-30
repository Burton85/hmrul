import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import data from '../data/data';

function onCarouselChange(e) { }
class casePop extends React.Component {
  render() {
    let lists = [];
    for (
      let i = 0;
      i <= data.cases[this.props.caseIndex].list.length - 1;
      i++
    ) {
      lists.push(
        <div key={data.cases[this.props.caseIndex].list[i].id}>
          <img
            width="100%"
            src={data.cases[this.props.caseIndex].list[i].src}
            alt={data.cases[this.props.caseIndex].name}
          />
          <label className="legend carousel__tag">
            {data.cases[this.props.caseIndex].title}
          </label>
        </div>
      );
    }
    const hide = () => {
      this.props.hideMe()
    }

    return (
      <div className={this.props.show ? 'case__pop' : 'case__pop hidden'}>
        <div className="case__pop__container">
          <span className="pop__close" onClick={hide}>
            &times;
          </span>
          <Carousel
            key={lists.length}
            infiniteLoop={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            onChange={onCarouselChange}
            centerSlidePercentage={50}
            centerMode={false}
            selectedItem={0}
          >
            {lists}
          </Carousel>
        </div>
      </div >
    );
  }
}

export default casePop;
