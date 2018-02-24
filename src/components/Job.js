import React, { Component } from 'react';

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: true,
    }
  }

  generateNumbers(length) {
    const power = Math.pow(10, length -1);
    const multiplier = 9 * power;

    return Math.floor(power + Math.random() * multiplier)
  }

  generateLetter(length) {
    var string = '';
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++) {
      string += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    return string.toUpperCase();
  }

  generateShitTons(x) {
    var arr = [];
    for (var i = 0; i < 10000; i++) {
      arr.push(this.generateNumbers(x));
      arr.push('  ');
    }
    return arr;
  };

  render() {
    return (
      <div className="job">
        {/* <div>{this.generateShitTons(2)}</div> */}
        <div className="job-head">
          <div className="code">{this.generateLetter(3)}-{this.generateNumbers(4)}</div>
          <div className="time">2h30</div>
        </div>
        <div className="note"><div>Note</div><div>Worked really hard</div></div>
      </div>
    );
  }
}

export default Job
