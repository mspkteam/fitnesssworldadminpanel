import React, { useState } from 'react';
import {
  Container, Row, Col, UncontrolledCollapse, Button, CardBody, Card,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import '../../../theme.scss';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/" id="toggler">OPEN</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Fitness World</NavLink>
                </NavItem>
              </Nav>
              <NavbarText>ICON HERE</NavbarText>
            </Collapse>
          </Navbar>
          <UncontrolledCollapse toggler="#toggler">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni,
                voluptas debitis
                similique porro a molestias consequuntur earum odio officiis natus,
                amet hic, iste sed
                dignissimos esse fuga! Minus, alias.
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
