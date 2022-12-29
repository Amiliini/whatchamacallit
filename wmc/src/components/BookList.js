import React from "react";
import "./BookList.css";

const books = [
    {
        author: "Colleen Hoover",
        title: "It Starts with Us: A Novel (It Ends with Us)",
        img: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51VC+Vru96L._SX320_BO1,204,203,200_.jpg",
    },
    {
        author: "Prince Harry The Duke of Sussex",
        title: "Spare",
        img: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41CSAHVHk+L._SX327_BO1,204,203,200_.jpg",
    },
];

function BookList() {
    return (
        <section className="booklist">
            {books.map(book => {
                const { img, author, title } = book;
                return <Book img={img} title={title} author={author} />;
            })}
        </section>
    );
}

const Book = props => {
    const { img, title, author } = props;
    console.log(props);
    const a = 6;
    const b = 6;
    return (
        <article className="book">
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
            <h5>{a + b}</h5>
        </article>
    );
};

export default BookList;
