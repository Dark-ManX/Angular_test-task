import { ReactElement } from "react";
import { Component } from "react";

class Navigation extends Component {
  render(): ReactElement {
    return (
      <nav>
        <ul>
          <li>Catalogue</li>
          <li>Info</li>
          <li>Something else</li>
          <li>Contacts</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
