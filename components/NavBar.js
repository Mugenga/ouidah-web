import { Navbar, Nav, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { width } from "dom-helpers";

export default function NavBar() {
  const router = useRouter();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" onClick={() => router.push("/")}>
            <img
              src="/logo_ville_ouidah.jpg"
              alt="Logo Ville Ouidah"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <ul className="nav navbar-nav m-auto my-lg-0">
              <Nav.Link
                href="/"
                className="navLink"
                onClick={() => router.push("/")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/municipalite"
                className="navLink"
                onClick={() => router.push("/municipalite")}
              >
                Municipalite
              </Nav.Link>
              <Nav.Link
                href="/business"
                className="navLink"
                onClick={() => router.push("/business")}
              >
                Business
              </Nav.Link>
              <Nav.Link
                href="/tourisme"
                className="navLink"
                onClick={() => router.push("/tourisme")}
              >
                Tourisme
              </Nav.Link>
              <Nav.Link
                href="/archives"
                className="navLink"
                onClick={() => router.push("#")}
              >
                Archives
              </Nav.Link>
            </ul>
            <Nav
              className="ml-auto my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <button className="pmButton">My Account</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
