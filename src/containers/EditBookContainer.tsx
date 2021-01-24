import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import StateModel from '../models/StateModel';
import { editBook } from '../actions/actions';
import Book from '../models/Book';
import EditBook from '../components/editbook/EditBook';

const mapStateToProps = (state: StateModel) => {
    return state;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        editBook(book: Book) { dispatch(editBook(book)) }
    }
}

const EditBookContainer = connect(mapStateToProps, mapDispatchToProps)(EditBook);
export default EditBookContainer;