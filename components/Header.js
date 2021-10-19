import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Header({ title, text, imageUrl }) {
  return (
    <div>
      <OwlCarousel items={1} className="owl-theme" loop nav margin={0}>
        <div className="item">
          <section className="hero-wrap">
            <div className="hero-mask opacity-7 bg-dark"></div>
            <div
              className="hero-bg"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            ></div>
            <div className="hero-content d-flex fullscreen-with-header py-5">
              <div className="container my-auto">
                <div className="row">
                  <div className="col-12 col-lg-8 col-xl-7 text-left text-lg-left">
                    <h2 className="text-18 text-white">{title}</h2>
                    <p className="text-3 text-white mb-4">{text}</p>
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
