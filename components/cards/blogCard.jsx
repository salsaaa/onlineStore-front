const BlogCard = ({ img, title, desc, review }) => {
  return (
    <div className="scaled-card">
      <div className="scaled-card__img">
        <img className="scaled-card__image" src={img} />
      </div>
      <div className="scaled-card__desc scaled-card__desc--bold">{title}</div>
      <div className="scaled-card__desc scaled-card__desc--sm">{review}</div>
      <div className="scaled-card__desc scaled-card__desc--lg"> {desc}</div>
    </div>
  );
};

export default BlogCard;
