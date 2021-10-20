import Card from "../components/Card";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export const getStaticProps = async () => {
  const data = {
    headerTitle: "Municipalite",
    headerText:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.",
    isHeaderButtonVisible: true,
    imageUrl: "time.jpg",
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

export default function Municipalite({ data, cardData }) {
  return (
    <div>
      <Header
        title={data.headerTitle}
        text={data.headerText}
        isButton={data.isHeaderButtonVisible}
        imageUrl={data.imageUrl}
      />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row custom-margin-lg">
          <div className="col-sm-12">
            <div className="row">
              {cardData.map((card, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <Card data={card} index={index} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
