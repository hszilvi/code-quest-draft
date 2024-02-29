import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const restartPage = () => {
    window.location.reload();
  };

  return (
    <header>
      <Navbar expand="md" variant="light" expanded={expanded} className="bg-light p-3 full-width-navbar mb-5">
        <Container fluid>
          <Navbar.Brand href="#" className="fs-2">CodeQuest</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button className="m-2" variant="outline-success" onClick={restartPage} >
                Restart
              </Button>
              <Button className="m-2" variant="outline-success"href="leaderboard.html" >
                Leaderboard
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
