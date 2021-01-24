import Book from "../models/Book";

export const ADD_ACTION = "ADD_ACTION"
export const SEARCH_BOOK = "SEARCH_BOOK"
export const EDIT_BOOK = "EDIT_BOOK"

export const addAction = (book: Book) => {
    return {
        type: ADD_ACTION,
        payload: book
    }
}

export const searchBook = (searchTeam: string) => {
    return {
        type: SEARCH_BOOK,
        payload: searchTeam
    }
}

export const editBook = (book: Book) => {
    return {
        type: EDIT_BOOK,
        payload: book
    }
}
