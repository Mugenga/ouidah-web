export default function Card({data}) {
  return (
      <div className="web-card">
        <img src="/time.jpg" alt="Image" />
        <div className="card-btn-wrapper text-center">
          <button className="card-btn blue-btn">{data.buttonText}</button>
        </div>
        <p className="text-3" style={{ marginTop: "40px" }}>
          {data.text}
        </p>
        <a href="#" className="find-more">
          Find More
        </a>
      </div>
  );
}
