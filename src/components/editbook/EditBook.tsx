import React from 'react';
import { useHistory } from "react-router-dom";
import Book from '../../models/Book';
import { History } from 'history';
import BookForm from '../bookform/bookform';
import '../../Styles.css';
import './EditBook.css';

const EditBook = (props: any) => {
    const history: History = useHistory();
    const { books, editBook } = props;
    const id = new URLSearchParams(history.location.search).get("id")
    let book: Book = books.find((item: Book) => (item.id === id));
    const editBookToStore = (target: any) => {
        book.name = target.elements[0].value;
        book.description = target.elements[1].value;
        book.count = target.elements[2].value;
        book.author = target.elements[3].value;
        editBook(book);
        history.push("/");
    }

    return <section className="editbook">
        <BookForm callback={editBookToStore} book={book} btnName={'Update Book'} />
    </section>;

}

export default EditBook;