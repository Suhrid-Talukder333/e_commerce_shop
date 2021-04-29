import "./styles.scss";

const MenuItem = ({ title, img, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-img"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle"> SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
