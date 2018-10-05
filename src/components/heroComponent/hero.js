import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';


class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Container fluid id='hero'>
          <Navbar color="dark" dark expand="md" id='navBar'>
            <NavbarBrand href="#" id='logo'>
              <span> AVERAGEJOETRADER. </span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem active>
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Courses</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Subscriptions</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Contacts</NavLink>
                </NavItem>
                <Button id='signin'>Sign In</Button>{''}
              </Nav>
            </Collapse>
          </Navbar>
          <div id='heroSpace'>
            <h1 id='payoff'>
              <div> Building Dreams </div>
              <div> One Trade At A Time </div>
            </h1>
            <p id='heroContent'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem </p>
            <Button bssize="large" id='memberButton'>
              Become a member
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}

export default Hero;
