import axios from "axios"
import { GET_CONTACT, ADD_CONTACT, DELETE_CONTACT} from "./Type"
const url = "http://localhost:5000/api"

export const getContact = () => async (dispatch) => {
    await axios.get(url + "/get").then(
        (response) => dispatch({
            type: GET_CONTACT,
            payload: response.data.contact
        })
    )
}


export const addContact = (newContact) => async (dispatch) => {
    await axios.post(url + "/post", newContact)
        dispatch({
            type: ADD_CONTACT,
        })
        dispatch(getContact())
}

export const deleteContact = (id) => async (dispatch) => {
    await axios.delete(`${url}/delete/${id}`)
        dispatch({
            type: DELETE_CONTACT,
        })
        dispatch(getContact())
}