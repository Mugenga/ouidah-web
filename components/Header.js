import { Navbar, Nav, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Header() {
  const router = useRouter();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" onClick={() => router.push("/")}>
            Commune de Oudah
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <ul className="nav navbar-nav m-auto my-lg-0">
              <Nav.Link
                href="/"
                className={styles.navLink}
                onClick={() => router.push("/")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/services"
                className={styles.navLink}
                onClick={() => router.push("/services")}
              >
                Services
              </Nav.Link>
              <Nav.Link href="/municipalite" className={styles.navLink}>
                Municipalite
              </Nav.Link>
              <Nav.Link href="/business" className={styles.navLink}>
                Business
              </Nav.Link>
              <Nav.Link href="/tourisme" className={styles.navLink}>
                Tourisme
              </Nav.Link>
              <Nav.Link href="/archives" className={styles.navLink}>
                Archives
              </Nav.Link>
            </ul>
            {/* <Nav
              className="m-auto my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="/"
                className={styles.navLink}
                onClick={() => router.push("/")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/services"
                className={styles.navLink}
                onClick={() => router.push("/services")}
              >
                Services
              </Nav.Link>
              <Nav.Link href="/municipalite" className={styles.navLink}>
                Municipalite
              </Nav.Link>
              <Nav.Link href="/business" className={styles.navLink}>
                Business
              </Nav.Link>
              <Nav.Link href="/tourisme" className={styles.navLink}>
                Tourisme
              </Nav.Link>
              <Nav.Link href="/archives" className={styles.navLink}>
                Archives
              </Nav.Link>
            </Nav> */}
            <Nav
              className="ml-auto my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <button className={styles.pmButton}>My Account</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
