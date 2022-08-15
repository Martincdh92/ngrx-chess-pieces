import { createReducer, on, props } from "@ngrx/store";
import { loadChessPiece, loadChessPieceFailure, loadChessPieceList, loadChessPieceListFailure, loadChessPieceListSuccess, loadChessPieceSuccess } from "./chess-piece.actions";
import { ChessPieceState } from "./chess-piece.state";

export const initialState: ChessPieceState = {
    pieces: [],
    error: null,
    status: 'pending',
};

export const chessPiecesReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add the new todo to the todos array
    // on(addTodo, (state, { content }) => ({
    //     ...state,
    //     todos: [...state.todos, { id: Date.now().toString(), content: content }],
    // })),
    // // Remove the new todo from the todos array
    // on(removeTodo, (state, { id }) => ({
    //     ...state,
    //     todos: state.todos.filter((todo) => todo.id !== id),
    // })),
    // Trigger loading the todos (API)
    on(loadChessPieceList, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(loadChessPieceListSuccess, (state, { pieces }) => ({
        ...state,
        pieces: pieces,
        error: null,
        status: 'success'
    })),
    // Handle pieces load failure
    on(loadChessPieceListFailure, (state, { error }) => ({ 
        ...state, 
        error: error, 
        status: 'error' 
    })),
);