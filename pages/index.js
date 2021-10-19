import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

import styles from "../styles/Service.module.css";

// Get Data from CMS Server
export const getStaticProps = async () => {
  const data = {
    headerTitle: "Services",
    headerText:null,
    isHeaderButtonVisible: true,
    imageUrl: 'time.jpg'
  };

  return {
    props: {
      data,
    },
  };
};

export default function Home({data}) {
  return (
    <div>
      <NavBar />
      <Header
        title={data.headerTitle}
        text={data.headerText}
        isButton={data.isHeaderButtonVisible}
        imageUrl={data.imageUrl}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className={styles.headerImageWrapper}>
              <img
                src="/service.png"
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
            <img src="/service.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
