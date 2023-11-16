import {useContext , createContext} from 'react'

export const ToDocontext = createContext({
    todos: [
        {
            id: Date.now(),
            todo: '',
            completed: false
        }
    ],
    addToDo: (todo)=>{},
    updateToDo: (id , todo) =>{},
    deleteToDo: (id) => {},
    toggleComplete: (id)=>{}
});

export const useToDo = ()=>{
    return useContext(ToDocontext);
}

export const ToDoprovider = ToDocontext.Provider