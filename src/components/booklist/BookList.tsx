import React from 'react';
import Book from '../../models/Book';
import BookView from './../bookview/BookView';
import './BookList.css';
import StateModel from '../../models/StateModel';


function BookList(props: StateModel) {
    const { books, search } = props;
    // console.log("inside BookList ", books, search);

    return <div className="booklist">
        {books.map((book: Book) => {
            if(search === "" || book.name.toLowerCase().includes(search.toLowerCase()))
                return <BookView key={book.id} book={book} />
            return "";
        })}
    </div>

}

export default BookList;