const { GET_CONTACT } = require("../actions/Type")

 const contactReducer = (state= [], {type, payload}) => {
    switch (type) {
        case GET_CONTACT: 
            return payload
        default :
        return state
    }
}

export default contactReducer