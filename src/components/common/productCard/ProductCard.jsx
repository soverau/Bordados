export const ProductCard = (props) => {
  return (
    <div className="col gx-5 gy-5">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.descripcion} description</p>
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};
