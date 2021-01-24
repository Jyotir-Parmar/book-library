import React from 'react';
import {Link} from 'react-router-dom';
import './BookView.css';
import '../../Styles.css';

function BookView({ book }: any) {
    return <section className="book">
        <h3>{book.name}</h3>
        <p className="book__desc">{book.description}</p>
        <footer className="book__footer">
            <div className="book__footer__item">
                <div>
                    Author:
                </div>
                <div>
                    {book.author}
                </div>
            </div>
            <div className="book__footer__item">
                <div>
                    Available Books:
                </div>
                <div>
                    {book.count}
                </div>
            </div>
            <Link to={`/editbook?id=${book.id}`} className="header__link"><button className="btn book__edit">Edit</button></Link>
        </footer>
    </section>
}

export default BookView;