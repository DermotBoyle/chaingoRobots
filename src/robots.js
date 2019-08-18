import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Dropdown
} from "reactstrap";
import "./App.css";
import { slide as Menu } from "react-burger-menu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCheckSquare,
  faCoffee,
  faRobot
} from "@fortawesome/free-solid-svg-icons";
library.add(faCheckSquare, faCoffee, faRobot);

export default class Robots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      menuOpen: false,
      dropdownOpen: false,
      robots: [],
      robotDetails: [],
      id: ""
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:5656/api/robots") // "/api/veterinary?cp=" + e.target.value // dispaly in the map
      .then(response => response.json())
      .then(data => {
        this.setState({
          robots: data
        });
        console.log(data);
      });
  };

  fetchData = () => {
    fetch("http://localhost:5656/api/robots/" + this.state.Id)
      .then(response => response.json())
      .then(data => {
        this.setState({
          robotDetails: data
        });
      });
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  robotNameClick = e => {
    this.setState({ dropdownOpen: false, Id: e.target.id });

    this.fetchData();
    e.preventDefault();
  };

  handleStateChange = state => {
    this.setState({ menuOpen: true });
  };

  showSettings = event => {
    event.preventDefault();
  };

  closeMenu = state => {
    this.setState({ menuOpen: false });
  };

  render() {
    const robots = this.state.robots;
    const robotDetails = this.state.robotDetails;
    return (
      <>
        <div>
          <Navbar color="faded" light>
            <Menu
              right
              width={"15em"}
              isOpen={this.state.menuOpen}
              onStateChange={state => this.handleStateChange(state)}
            >
              <a
                id="home"
                className="menu-item"
                href="/"
                onClick={() => this.closeMenu()}
              >
                Home
              </a>
              <br />
              <a
                id="about"
                className="menu-item"
                href="/about"
                onClick={() => this.closeMenu()}
              >
                About
              </a>
              <br />
              <a
                id="contact"
                className="menu-item"
                href="/contact"
                onClick={() => this.closeMenu()}
              >
                Contact
              </a>
              <br />
              <a
                onClick={this.showSettings}
                className="menu-item--small"
                href=""
                onClick={() => this.closeMenu()}
              >
                Settings
              </a>
            </Menu>
            <NavbarBrand href="/" className="mr-auto">
              reactstrap
            </NavbarBrand>
          </Navbar>
        </div>
        <div className="wrapper">
          <div className="a">
            <h2>Search for a Bot</h2>
            <div className="dropdownMenu">
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  <FontAwesomeIcon icon="robot" /> &nbsp; Robot Name &nbsp;
                  <FontAwesomeIcon icon="robot" />{" "}
                </DropdownToggle>
                <DropdownMenu>
                  {robots.map(robot => (
                    <DropdownItem header>
                      <a id={robot.name} onClick={this.robotNameClick} href="/">
                        {robot.name}
                      </a>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          {robotDetails.map(robotDetail => (
            <div className="b">
              <h3>Type:&nbsp;{robotDetail.type}</h3>
              <h3>Name:&nbsp;{robotDetail.name}</h3>
              <h3>Weapon:{robotDetail.weapons.weapon}</h3>
              <h3>Armour:{robotDetail.armours.armour}</h3>
              <h3>Serial Number:{robotDetail.serialnumber}</h3>
            </div>
          ))}
          <div className="c">C</div>
          <div className="d">D</div>
          <div className="e">E</div>
          <div className="f">F</div>
          <div className="g">G></div>
        </div>
      </>
    );
  }
}
