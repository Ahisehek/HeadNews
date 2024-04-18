import React from "react";


function Card(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
         
      <div className="my-3">
                    <div className="card-body">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
        )
}

export default Card;
