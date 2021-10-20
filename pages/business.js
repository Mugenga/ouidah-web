import Card from "../components/Card";
import Footer from "../components/Footer";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import styles from "../styles/Business.module.css";

export async function getStaticProps() {
  const data = {
    headerTitle: "Business",
    headerText:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.",
    isHeaderButtonVisible: true,
    imageUrl: "time.jpg",
  };

  const cardData = [
    {
      id: 1,
      text: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.",
      buttonText: "Invest",
    },
    {
      id: 1,
      text: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.",
      buttonText: "Invest",
    },
    {
      id: 1,
      text: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.",
      buttonText: "Invest",
    },
    {
      id: 1,
      text: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.",
      buttonText: "Invest",
    },
  ];

  return {
    props: {
      data,
      cardData,
    },
  };
}

export default function Business({ data, cardData }) {
  return (
    <div className={styles.container}>
      <Header
        title={data.headerTitle}
        text={data.headerText}
        isButton={data.isHeaderButtonVisible}
        imageUrl={data.imageUrl}
      />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              {cardData.map((card, index) => {
                return (
                  <div className="col-md-6" key={index}>
                    <Card data={card} index={index} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <div className="col-md-12">
                <div className="web-card">
                  <img src="/time.jpg" alt="Image" />
                  <div className="card-btn-wrapper text-center">
                    <button className="card-btn blue-btn">Invest</button>
                  </div>
                  <p
                    className="text-3"
                    style={{ marginTop: "40px", padding: "1%" }}
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using &apos;Content here, content here&apos;, making it look
                    like readable English.
                  </p>
                  <a href="#" className="find-more">
                    Find More
                  </a>
                </div>
              </div>
              <div className="col-md-12">
                <div className="web-card">
                  <img src="/time.jpg" alt="Image" />
                  <div className="card-btn-wrapper text-center">
                    <button className="card-btn blue-btn">Invest</button>
                  </div>
                  <p
                    className="text-3"
                    style={{ marginTop: "40px", padding: "1%" }}
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using &apos;Content here, content here&apos;, making it look
                    like readable English.
                  </p>
                  <a href="#" className="find-more">
                    Find More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
