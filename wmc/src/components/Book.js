import React from "react";

const Book = props => {
    const { img, title, author, number } = props;
    //const a = 6;
    // const b = 6;
    //  <h5>{a + b}</h5>
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <span className="number">#{number + 1}</span>
        </article>
    );
};
// TAI TL <span className="number">{`# ${number + 1}`}</span>

export default Book;
