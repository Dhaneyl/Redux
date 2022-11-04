

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    
    reducerPath: 'todos',
    
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) =>({
       
        getTodos: builder.query({
            query: ()=> '/todos'
        }),
        // Hacer esto es como concatenar el id al final de este endpoint con su api que es /todos ''https://jsonplaceholder.typicode.com''
        getTodoById: builder.query({
            query: (todoId)=> `/todos/${todoId}`
        }),
    })
})

export const { useGetTodosQuery, useGetTodoByIdQuery, } = todosApi;