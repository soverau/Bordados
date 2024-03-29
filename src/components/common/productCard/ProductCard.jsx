import Product1 from "/src/assets/images/DMC_CATEGORIES_16x9_Ratio_DESKTOP-MOBILE_720px_GOS_KN-1.jpg";

export const ProductCard = () => {
  return (
    <div className="col gx-5 gy-5">
      <div className="card">
        <img src={Product1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Kits</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};
