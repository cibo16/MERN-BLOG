import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
        <div className="navbar-fixed">
            <nav className="z-depth-0">
            <div className="nav-wrapper white">
                <Link
                to="/"
                style={{
                    fontFamily: "monospace"
                }}
                className="col s5 brand-logo center black-text"
                >
                <i className="material-icons"></i>
                MicroBloggos
                </Link>
            </div>
            </nav>
        </div>
    )
  }
}
