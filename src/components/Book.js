import React from 'react'

  const clickHandler = function(title){
  alert(`${title} has been added to your cart`);
};
const Book = (props) => {
  // object destructuring
  const {image,title,author,price} = props.book;
  return(
    <div className="book" id='book'>
      <div className="book-img-container">
        <img src={image} alt={title} />
      </div>
      <h2 className="book-title">{title}</h2>
      <h3 className="book-author">{author}</h3>
      <h4 className="book-price">{price}</h4>
      <button
      type='button'
      onClick={() => clickHandler(title)}
      >Add to cart</button>
      <button> Buy</button>
    </div>
  );
  };
export default Book