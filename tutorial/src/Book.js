// children is a special property
const Book = (props) => {
  const { author, img, title, children } = props;
  // ERROR: onClick={getBook(id)} will be run at page load time.
  // This is because every time we have () after the function it
  // makes it run immediately. How to work around it? Well we can
  // use the arrow function as shown below.
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

export default Book;
