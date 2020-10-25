import BlogCard from "../cards/blogCard";
const OurBlogs = () => {
  return (
    <React.Fragment>
      <div className="container container--space container--maxwidth centered">
        <div className="word">
          From Our Blog
          <div className="word--sm">The latest Classic Shop news</div>
        </div>
      </div>
      <div className="container container--maxwidth container--space">
        <BlogCard
          review=" September 9th, 2015 | 0 Comments"
          img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/post_img_12-700x441.jpg"
          title=" Aenean lobortis sapien enim viverra"
          desc=" Donec finibus sit amet orci eget ultricies. Praesent posuere ante
              ut erat fringilla,"
        />
        <BlogCard
          review=" September 9th, 2015 | 0 Comments"
          img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/post_img_11-700x441.jpg"
          title="Aenean lobortis sapien enim viverra"
          desc="Donec finibus sit amet orci eget ultricies. Praesent posuere ante
              ut erat fringilla,"
        />
        <BlogCard
          review="September 9th, 2015 | 0 Comments"
          img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/post_img_10-700x441.jpg"
          title=" Aenean lobortis sapien enim viverra"
          desc=" Donec finibus sit amet orci eget ultricies. Praesent posuere ante
              ut erat fringilla,"
        />
      </div>
    </React.Fragment>
  );
};

export default OurBlogs;
