const Title = ({title, subtitle}) => {
  return (
    <div className={title}>
        <h2>
          {title} <span>{subtitle}</span>
        </h2>
      </div>
  )
}

export default Title;
