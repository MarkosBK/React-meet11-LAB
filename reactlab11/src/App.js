import React from "react";
let reviews = ["Review1", "Review2", "Review3"];
class Book extends React.Component {
  state = {
    book: {
      title: "OMG",
      author: "Markos",
      pages: 1,
      genre: "Comedy",
      reviews: reviews,
    },
  };
  render() {
    return (
      <div>
        <h2>Info:</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <h3>Title: {this.state.book.title}</h3>
          </li>
          <li className="list-group-item">
            <h3>Author: {this.state.book.author}</h3>
          </li>
          <li className="list-group-item">
            <h3>Pages: {this.state.book.pages}</h3>
          </li>
          <li className="list-group-item">
            <h3>Genre: {this.state.book.genre}</h3>
          </li>
        </ul>
        <h2>Reviews:</h2>
        <ul className="list-group">
          {
          this.state.book.reviews.forEach((item) => {
            return (
              <li className="list-group-item">
                <h3>{item}</h3>
              </li>
            )
          })
          }
        </ul>
      </div>
    );
  }
}
export default Book;
