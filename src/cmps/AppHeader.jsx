import React from "react";
import { Link, withRouter } from "react-router-dom";

class _AppHeader extends React.Component {
  state = {
    isNavOpen: false,
  };

  toggleNav = () => {
    this.setState((prevState) => ({ isNavOpen: !prevState.isNavOpen }));
  };

  render() {
    const { isNavOpen } = this.state;
    const navClass = isNavOpen ? "nav-open" : "";

    // console.log(isNavOpen);
    return (
      <section className="main-container header-container full">
        <div className={`header ${navClass}`}>
          <Link className="header-logo" to="/" id="logo">
            <svg className="logo-svg" viewBox="0 0 400 50">
              <title>SpaceX Logo</title>
              <g className="letter_s letter">
                <path
                  className="fill-white"
                  d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
          c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"
                />
              </g>
              <g className="letter_p letter">
                <path
                  className="fill-white"
                  d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
                c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"
                />
              </g>
              <g className="letter_a letter">
                <polygon
                  className="fill-white"
                  points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"
                />
              </g>
              <g className="letter_c letter">
                <path
                  className="fill-white"
                  d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
                c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"
                />
              </g>
              <g className="letter_e letter">
                <polygon
                  className="fill-white"
                  points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"
                />
                <rect
                  className="fill-white"
                  x="219.9"
                  y="18.6"
                  width="41.9"
                  height="5.4"
                />
              </g>
              <g className="letter_x letter">
                <path
                  className="fill-white"
                  d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"
                />
                <path
                  className="fill-white"
                  d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"
                />
              </g>
              <g className="letter_swoosh letter">
                <path
                  className="fill-white"
                  d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"
                />
              </g>
            </svg>
          </Link>

          {/* <Link className="clean-link header-logo" to="/">
            <div className="logo">spaceX</div>
          </Link> */}

          {window.innerWidth < 800 && (
            <div
              className={`header-nav hamburger ${isNavOpen ? "active" : ""}`}
              onClick={() => this.toggleNav()}
            >
              ≡
            </div>
          )}

          {isNavOpen && (
            <div className="header-nav-modal">
              <Link className="btn-explore clean-link" to="/explore">
                ALL LAUNCHES
              </Link>
              <Link className="btn-about clean-link" to="/about">
                ABOUT
              </Link>
            </div>
          )}

          {window.innerWidth >= 800 && (
            <div className="header-nav">
              <Link className="btn-explore clean-link" to="/explore">
                ALL LAUNCHES
              </Link>
              <Link className="btn-about clean-link" to="/about">
                ABOUT
              </Link>
            </div>
          )}
          <div className="main-screen" onClick={() => this.toggleNav()}></div>
        </div>
      </section>
    );
  }
}

export const AppHeader = withRouter(_AppHeader);
