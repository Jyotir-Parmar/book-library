import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import StateModel from '../models/StateModel';
import AddBook from '../components/addbook/AddBook';
import { addAction } from '../actions/actions';
import Book from '../models/Book';

const mapStateToProps = (state: StateModel) => {
    return state;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addBook(book: Book) { dispatch(addAction(book)) }
    }
}

const AddBookContainer = connect(mapStateToProps, mapDispatchToProps)(AddBook);
export default AddBookContainer;