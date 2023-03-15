import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">Recipe Book</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}