import Book from "./Book";
import { BOOK_LOCAL_STORAGE_KEY } from "../Constatnt";
import { getDataFromLocalStorage } from "../utils/utils";

const books: Book[] = [
    {
        name: "Atomic Habits",
        id: (Math.random() * 10000000).toString(),
        description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        author: "James Clear",
        count: 10
    },
    {
        name: "The Midnight Library",
        id: (Math.random() * 10000000).toString(),
        description: "Let's be kind to the people in our own existence.",
        author: "Matt Haig",
        count: 10
    }
];


export const INITIAL_STATE: StateModel = { books: getDataFromLocalStorage(BOOK_LOCAL_STORAGE_KEY) ?? books, search: "" };

export default interface StateModel {
    books: Book[]
    search: string
}