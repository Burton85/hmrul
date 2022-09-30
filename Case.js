import Header from './components/Header';
import Footer from './components/Footer';
import CASEPOP from './components/CasePop';
import React, { useState } from 'react';
import data from './data/data';

function Case() {
  const [casePopStatus, setCasePopStatus] = useState(false);
  const [casePopIndex, setCasePopIndex] = useState(0);

  function showPop(index) {
    setCasePopStatus(true);
    setCasePopIndex(index);
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  }
  function hidePop() {
    setCasePopStatus(false);
    document.body.style.height = 'unset';
    document.body.style.overflow = 'auto';
  }
  let caseList = [];
  for (let i = 0; i <= data.cases.length - 1; i++) {
    caseList.push(
      <div
        className="case__item"
        onClick={() => showPop(data.cases[i].id)}
        key={data.cases[i].id}
      >
        <div className="case__img">
          <img src={data.cases[i].src} alt={data.cases[i].type}></img>
        </div>
        <div className="case__desc">
          <span>{data.cases[i].type}</span>
          <h3>{data.cases[i].name}</h3>
          {data.cases[i].title}
        </div>
      </div>
    );
  }
  return (
    <div className="home">
      <CASEPOP
        caseIndex={casePopIndex}
        show={casePopStatus}
        hideMe={hidePop}
      ></CASEPOP>
      <Header></Header>
      <div className="marquee">
        <h2 className="marquee__content"></h2>
      </div>
      <div className="case">{caseList}</div>
      <Footer></Footer>
    </div>
  );
}

export default Case;
