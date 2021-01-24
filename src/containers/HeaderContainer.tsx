import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {searchBook } from '../actions/actions';
import Header from '../components/header/Header';
import StateModel from '../models/StateModel';

const mapStateToProps = (state: StateModel) => {
    return state;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        searchBook(searchTerm: string) { dispatch(searchBook(searchTerm)) }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;