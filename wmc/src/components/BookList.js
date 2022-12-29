import React from "react";
import "./BookList.css";

function BookList() {
    const Book = () => {
        return (
            <article className="book">
                <Image />
                <Title />
                <Author />
            </article>
        );
    };

    const Image = () => (
        <img
            src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51VC+Vru96L._SX320_BO1,204,203,200_.jpg"
            alt="Picture of bookcover with white flowers in water"
        ></img>
    );
    const Title = () => <h2>It Starts with Us: A Novel (It Ends with Us)</h2>;
    const Author = () => (
        <h4 style={{ color: "#617d98", fontSize: "0.75", marginTop: "0.5rem" }}>
            Colleen Hoover
        </h4>
    );

    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

export default BookList;
