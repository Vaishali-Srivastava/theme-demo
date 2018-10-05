import React, { Component } from 'react'

class Rightnavigation extends Component {
  render() {
    return (
      <div>
        <div className="right-panel">
            <ul>
                <li>
                    <a href="javascript:void(0)">
                        <span><i className="fa fa-check"></i></span>
                        <span className="text-span">Submit</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <span><i className="fa fa-times"></i></span>
                        <span className="text-span">Close</span>
                    </a>
                </li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Rightnavigation;