export const addUser = (user) => (dispatch) => {
    dispatch({type: "ADD_USER", payload: user});
};

export const editUser = (id, updatedUser) => (dispatch) =>{
    dispatch({type: "EDIT_USER", payload: {id, updatedUser}})
};

export const deleteUser = (id) => (dispatch) => {
    dispatch({type: "DELETE_USER", payload: id})
}