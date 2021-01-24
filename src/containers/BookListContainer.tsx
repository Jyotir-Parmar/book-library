import { connect } from 'react-redux';
import BookList from "../components/booklist/BookList";
import StateModel from '../models/StateModel';
const mapStateToProps = (state: StateModel) => {
    return {books:state.books, search: state.search};
}
const BookListContainer = connect(mapStateToProps)(BookList);
export default BookListContainer;