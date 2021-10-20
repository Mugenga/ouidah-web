import Card from "../components/Card";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styles from "../styles/Tourism.module.css";
import { style } from "dom-helpers";

export const getStaticProps = async () => {
  const data = {
    headerTitle: "Tourism",
    headerText:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.",
    isHeaderButtonVisible: true,
    imageUrl: "/tourisme.jpg",
  };

  const cardData = [
    {
      id: 1,
      text: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.",
      buttonText: "Did you Know?",
    },
    {
      id: 1,
      text: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.",
      buttonText: "Invest",
    },
    {
      id: 1,
      text: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.",
      buttonText: "Did you Know?",
    },
  ];

  return {
    props: {
      data,
      cardData,
    },
    revalidate: 1000,
  };
};

export default function Tourisme({ data, cardData }) {
  return (
    <div>
      <Head>
        <title>Tourism || Commune Ouidah</title>
        <meta name="description" content="Tourism || Commune Ouidah" />
      </Head>
      <Header
        title={data.headerTitle}
        text={data.headerText}
        isButton={data.isHeaderButtonVisible}
        imageUrl={data.imageUrl}
      />
      <div className="container custom-margin-lg">
        {/* Concerts */}
        <div className="row">
          <div className="col-sm-9">
            <div
              className={styles.concertWrapper}
              style={{ backgroundColor: "black" }}
            >
              <img src="/event.png" alt="Commune Ouidah Concerts" />
              <div className={styles.concertContent}>
                <button className="button-lg">
                  <h3>Concerts</h3>
                </button>
                <p className="text-3 text-white mb-4 custom-margin-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  expedita quas enim rem dicta voluptatem inventore molestias
                  non perferendis saepe ratione aliquid incidunt minus aliquam
                  reprehenderit ipsum quidem, id odit?
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <Card data={cardData[0]} index={0} />
          </div>
        </div>
      </div>
      <div
        className="container-fluid custom-margin-lg"
        style={{ padding: 0, margin: 0 }}
      >
        <div className="row" style={{backgroundColor: "#00206a"}}>
          <div className="col-sm-7" style={{ margin: 0, padding: 0 }}>
            <div
              className={styles.concertWrapper}
              style={{ backgroundColor: "black", margin: 0 }}
            >
              <img src="/expo.jpg" alt="Commune Ouidah Concerts" />
              <div className={styles.concertContent}>
                <button className="button-lg">
                  <h3>Expos</h3>
                </button>
              </div>
            </div>
          </div>
          <div className={"col-sm-5 my-auto " + styles.expoLeft}>
            <p className="text-3 text-white mb-4 custom-margin-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              expedita quas enim rem dicta voluptatem inventore molestias non
              perferendis saepe ratione aliquid incidunt minus aliquam
              reprehenderit ipsum quidem, id odit?
            </p>
            <button className="button-md" style={{border: "3px solid white", fontWeight: "bold"}}>
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="container custom-margin-lg">
        <div className="row">
          {cardData.map((card, index) => {
            return (
              <div className="col-md-4 " key={index}>
                <Card data={card} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
