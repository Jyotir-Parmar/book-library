import { Reducer } from "redux";

import ActionModel from "../models/ActionModel";
import StateModel, { INITIAL_STATE } from "../models/StateModel";
import { ADD_ACTION, SEARCH_BOOK, EDIT_BOOK } from "../actions/actions";

const reducer: Reducer<StateModel, ActionModel> = (state: StateModel = INITIAL_STATE, action: ActionModel) => {
    switch (action.type) {
        case ADD_ACTION:
            state.books = [action.payload, ...state.books];
            return {...state};
        case SEARCH_BOOK:
            state.search = action.payload
            return {...state};
        case EDIT_BOOK:
            const index = state.books.findIndex((book) => book.id === action.payload.id);
            if (index > -1)
                state.books[index] = action.payload;
            return {...state};
    }
    return state;
}

export default reducer;