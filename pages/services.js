import dynamic from "next/dynamic";
import Header from "../components/Header";
import Footer from "../components/Footer";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "../styles/Service.module.css";

export default function Services() {
  return (
    <div>
      <Header />
      <OwlCarousel items={1} className="owl-theme" loop nav margin={0}>
        <div className="item">
          <section className="hero-wrap">
            <div className="hero-mask opacity-7 bg-dark"></div>
            <div
              className="hero-bg"
              style={{ backgroundImage: "url('/time.jpg')" }}
            ></div>
            <div className="hero-content d-flex fullscreen-with-header py-5">
              <div className="container my-auto">
                <div className="row">
                  <div className="col-12 col-lg-8 col-xl-7 text-left text-lg-left">
                    <h2 className="text-22 text-white text-bold">Services</h2>
                    <div className="underline_green"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </OwlCarousel>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className={styles.headerImageWrapper}>
              <img
                src="/services.png"
                alt="Commune Quidah Service Title Image"
              />
            </div>
          </div>
          <div className={"col-md-5 " + styles.servicesSection1Left} style={{ padding: "5%" }}>
            <h2 className="text-15 text-blue custom-margin-sm text-bold">
              E-Service
            </h2>
            <p className="text-3 custom-margin-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="text-blue text-3">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
            <div className="card-btn-wrapper text-center custom-margin-sm">
              <button className="blue-btn">Find More</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5" style={{ padding: "5%" }}>
            <h2 className="text-15 text-blue custom-margin-sm text-bold">
              Service Presentiel
            </h2>
            <p className="text-3 custom-margin-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="text-blue text-3">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
            <div className="card-btn-wrapper text-center custom-margin-sm">
              <button className="blue-btn">Find More</button>
            </div>
          </div>
          <div
            className={
              "col-md-7  text-center custom-margin-sm " +
              styles.servicePresentielImageWrapper
            }
            style={{ padding: "5%" }}
          >
            <img src="/services.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
