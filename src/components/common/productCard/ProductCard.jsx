export const ProductCard = (props) => {
  const { img, title, description, price } = props;
  return (
    <div className="col gx-5 gy-5">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description} description</p>
          <p className="card-text">Price: ${price} </p>
          <a href="#" className="btn btn-primary">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};
