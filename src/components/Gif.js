import React, { Component } from 'react'

export class Gif extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center my-4">
            <div className="spinner-border" role="status">
            <span className="sr-only"></span>
            </div>
        </div>
    )
  }
}

export default Gif
