import {Navbar, Container} from 'react-bootstrap';

function NavBar(){
    return(<>
        <Navbar>
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="./src/assets/react.svg"
                width="30"
                height="30"
                />{' '}
                Calculadora de promedios UTPL
            </Navbar.Brand>
            </Container>
        </Navbar>
    </>);
}
export default NavBar;