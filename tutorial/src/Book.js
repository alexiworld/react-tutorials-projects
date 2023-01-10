// children is a special property
const Book = (props) => {
  const { author, img, title, number, children } = props;
  // ERROR: onClick={getBook(id)} will be run at page load time.
  // This is because every time we have () after the function it
  // makes it run immediately. How to work around it? Well we can
  // use the arrow function as shown below.
  // `# ${number + 1}` is called template literal. This is nice
  // way of adding # before then actual number.
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <span className='number'>{`# ${number + 1}`}</span>
      {children}
    </article>
  );
};

export default Book;
