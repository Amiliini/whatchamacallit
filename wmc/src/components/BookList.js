import React from "react";
import "./BookList.css";
import { books } from "./books.js";
import Book from "./Book";

const BookList = () => {
    return (
        <>
            <h1>Some best sellers</h1>
            <section className="booklist">
                {books.map((book, index) => {
                    return <Book {...book} key={book.id} number={index} />;
                })}
            </section>
        </>
    );
};

export default BookList;
