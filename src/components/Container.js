import Photo from "./Photo";
import "../styles/Container.css";

function Container({ id, categoryTitle, urls }) {
  return (
    <section className="category">
      <h2 className="category-title">{ categoryTitle }</h2>
      <div className="category-container">
        {
          // creates a new Photo component for each element inside urls array
          urls.map(url => 
            <Photo
            url={url}
            id={id} />
          )
        }
      </div>
    </section>
  )
}

export default Container;
