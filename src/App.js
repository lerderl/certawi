// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.css';
import Icon from './images/icon.svg';

function App() {
  return (
    <div>
      <header>
        <Navbar className='header' expand="lg">
          <Container>
            <Navbar.Brand href="/" className='cert'>
              Cert<span className='awi'>awi</span>
              <img src={Icon} alt='Certawi icon' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
              <Navbar.Text>
                Signed in as: <a href="/">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
