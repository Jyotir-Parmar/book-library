import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../../Styles.css';
import './Header.css';
import { Location } from 'history';
import useDebounce from '../../utils/utils';
import DELAY_SEARCH from '../../Constatnt';

const Header = (props: any) => {

    const { searchBook } = props;

    const [searchTerm, setSearchTerm] = useState('');

    const location: Location = useLocation();
    const debouncedSearchTerm = useDebounce(searchTerm, DELAY_SEARCH);

    useEffect(() => {
        searchBook(debouncedSearchTerm);
    }, [debouncedSearchTerm, searchBook])


    const onChange = (event: any) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    }

    return <header className="header">
        <Link to="/" className="header__link"><h3>Book Library</h3></Link>
        <div className="header__mid" style={{ "display": location.pathname.search(/addbook|editbook/i) > -1 ? 'none' : 'flex' }} >
            <input type="text" placeholder="Search By Name..." onChange={onChange}/>
            {/* <svg className="MuiSvgIcon-root header__inputButton"  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg> */}
        </div>
        <div className="header__action">
            <Link to="/addbook" className="header__link"><button className="btn header__btn">
                Add Book
            </button></Link>
        </div>
    </header>
}

export default Header;