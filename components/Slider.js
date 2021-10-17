import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Slider() {
  return (
    <div>
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
                    <h2 className="text-22 text-white">Business</h2>
                    <p className="text-3 text-white mb-4">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                    <div className="underline_green"></div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </OwlCarousel>
    </div>
  );
}
