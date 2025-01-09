const SET_BOOKS = 'SET_BOOKS';

export const setBooks = (books) => ({
    type: SET_BOOKS,
    payload: books,
});


// export const setCreateAcc =(createCred)=>({
//   type:"create",
//   payload:{createCred}
// })