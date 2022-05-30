import axios from "axios"

export const authenticate = (cred) => {
    console.log(cred.data)
    return axios.post("https://atmanand-jain-api.herokuapp.com/authenticate",cred.data)
}