// Note that the key of article is removed and
// is actually configured when Service component
// is declared/used. Hence, there is no need of
// passing or destructuring the id prop.
const Service = ({ icon, title, text }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
      </div>
    </article>
  );
};

export default Service;
