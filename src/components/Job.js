import React, { Component } from 'react';

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: true,
    }

  }
  render() {
    return (
      <div className="job">
        <div className="job-head">
          <div className="code">NLT-888888</div>
          <div className="time">2h30</div>
        </div>
        <div className="note">Note: Loled a lot</div>
      </div>
    );
  }
}

export default Job
