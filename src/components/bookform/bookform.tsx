import React, { FormEvent } from "react";
import './BookForm.css';

const BookForm = (props:any) => {
    const {book, callback, btnName} = props;
    const updateParent = (event:FormEvent)=>{
        event.stopPropagation();
        event.preventDefault();
        callback(event.target);
    }
    return <form className="addbook__form" action="" onSubmit={(event) => updateParent(event)}>
        <div>
            <input type="text" name="book_name" placeholder="Book Name..." defaultValue={book?.name} />
        </div>
        <div>
            <input type="text" name="book_desc" placeholder="Book Description..." defaultValue={book?.description} />
        </div>
        <div>
            <input type="number" name="book_count" placeholder="Book Count..."  defaultValue={book?.count ?? 1} />
        </div>
        <div>
            <input type="text" name="book_author" placeholder="Book Author..." defaultValue={book?.author} />
        </div>
        <button type="submit" className="btn addbook__form__submit">{btnName}</button>
    </form>
}

export default BookForm;