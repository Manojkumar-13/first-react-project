import React from 'react'

const Book = () => {
  const image = 'https://images-eu.ssl-images-amazon.com/images/I/51oHUvYzbsL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
  const title = 'The Theory of Everything'
  const author = 'Stephen Hawking '
  const price = '₹199'
  return(
    <div className="book" id='book'>
      <div className="book-img-container">
        <img src={image} alt={title} />
      </div>
      <h2 className="book-title">{title}</h2>
      <h3 className="book-author">{author}</h3>
      <h4 className="book-price">{price}</h4>
    </div>
  );
};
export default Book