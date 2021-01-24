import React from 'react';
import { useHistory } from "react-router-dom";

import '../../Styles.css';
import './AddBook.css';
import Book from '../../models/Book';
import { History } from 'history';
import BookForm from '../bookform/bookform';

const AddBook = (props: any) => {
    const history: History = useHistory();
    const { addBook } = props;
    const addBookToStore = (target: any) => {
        const book: Book = {
            name: target.elements[0].value,
            description: target.elements[1].value,
            count: target.elements[2].value,
            author: target.elements[3].value,
            id: `${(Math.random() * 10000000000)}_${new Date().getTime()}`
        }
        addBook(book);
        history.push("/");
    }

    return <section className="addbook">
        <BookForm callback={addBookToStore} btnName={'Add Book'} />
    </section>;
}

export default AddBook;