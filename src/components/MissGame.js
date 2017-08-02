import React, { Component } from 'react';

import PasswordInput from './PasswordInput';
  
class MissGame extends Component {
  constructor() {
    super();
    this.state = {
      showPage: 1,
      result: '',
      correct: [false, false, false, false]
    }
    this.checkPassword = this.checkPassword.bind(this);
  }

  checkPassword(num, passwd) {
    this.setState((state) => {
      switch (num) {
        case 1: state.correct[0] = passwd === '1101'; break;
        case 2: state.correct[1] = passwd === '1940'; break;
        case 3: state.correct[2] = passwd === '5321'; break;
        case 4: state.correct[3] = passwd === '3689'; break;
      }
      if (state.correct.every(cor => cor)) {
        state.result = 'Unlocked!';
        setTimeout(() => {
          this.setState({ showPage: 2, result: '' });
        }, 2500);
      }
      return state;
    });
    return (
      num === 1 ? passwd === '1101' : 
      num === 2 ? passwd === '1940' : 
      num === 3 ? passwd === '5321' : 
      passwd === '3689'
    );
  }

  render() {
    const { result, showPage, correct } = this.state;
    const showResult = result === '' ? '' :
      <div className="col-12 password-result-text">
        <span className="blink-text">{result}</span>
      </div>;
    const showPage1 =  
      <div className="col-12">
        <div className="row" style={{display: showPage === 1 ? 'block' : 'none' }}>
          <div className="col-12">
            <div className="row password-row">
              <div className="col-3 password-input-div-2-pic">
                <img src="./src/components/binary.png" className="img-game" alt="binary" height="150" width="150"/>
              </div>
              <div className="col-9 password-input-div-2">
                <PasswordInput checkPassword={(passwd) => this.checkPassword(1, passwd)}/>
              </div>
            </div>
            <div className="row password-row">
              <div className="col-3 password-input-div-2-pic">
                <img src="./src/components/war.png" className="img-game" alt="war" height="150" width="150"/>
              </div>
              <div className="col-9 password-input-div-2">
                <PasswordInput checkPassword={(passwd) => this.checkPassword(2, passwd)}/>
              </div>
            </div>
            <div className="row password-row">
              <div className="col-3 password-input-div-2-pic">
                <img src="./src/components/note.png" className="img-game" alt="note" height="150" width="150"/>
              </div>
              <div className="col-9 password-input-div-2">
                <PasswordInput checkPassword={(passwd) => this.checkPassword(3, passwd)}/>
              </div>
            </div>
            <div className="row password-row">
              <div className="col-3 password-input-div-2-pic">
                <img src="./src/components/chair.png" className="img-game" alt="chair" height="150" width="150"/>
              </div>
              <div className="col-9 password-input-div-2">
                <PasswordInput checkPassword={(passwd) => this.checkPassword(4, passwd)}/>
              </div>
            </div>
            {showResult}
          </div>
        </div>
      </div>;
    const showPage2 = 
      <div className="col-12">
        <div className="row" style={{display: showPage === 2 ? 'block' : 'none' }}>
          <div className="col-12">
            <div className="row password-row-2">
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/cpp.png" className="img-game" alt="cpp" height="200"/>
              </div>
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/question3.png" className="img-game" alt="binary" height="200"/>
              </div>
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/question1.png" className="img-game" alt="binary" height="200"/>
              </div>
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/question2.png" className="img-game" alt="binary" height="200"/>
              </div>
            </div>
            <div className="row password-row-2">
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/block.png" className="img-game" alt="cpp" height="200"/>
              </div>
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/question2.png" className="img-game" alt="binary" height="200"/>
              </div>
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/question3.png" className="img-game" alt="binary" height="200"/>
              </div>
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/question1.png" className="img-game" alt="binary" height="200"/>
              </div>
            </div>
            <div className="row password-row-2">
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/wing.jpg" className="img-game" alt="cpp" height="200" width="250"/>
              </div>
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/question1.png" className="img-game" alt="binary" height="200"/>
              </div>
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/question2.png" className="img-game" alt="binary" height="200"/>
              </div>
              <div className="col-3 password-input-div-2-pic-2">
                <img src="./src/components/question3.png" className="img-game" alt="binary" height="200"/>
              </div>
            </div>
            {showResult}
          </div>
        </div>
      </div>;

    return (
      <div className="container">
        {[showPage1, showPage2]}
      </div>
    );
  }
}

export default MissGame;
