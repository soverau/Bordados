import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  const { img, title, description, price, id } = props;
  return (
    <div className="col gx-5 gy-5">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description} description</p>
          <p className="card-text">Price: ${price} </p>
          <Link to={`/itemDetail/${id}`}>
            <div className="btn btn-primary">See More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
