import React, { Component } from "react";

// because there isn't much to this component we can transform it into a Stateless Functional Component
// you have to remove the this keyword and list props as the parameter

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secdonary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

// the original component follows below:
// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secdonary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }
