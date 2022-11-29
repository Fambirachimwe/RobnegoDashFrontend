// import axios from 'axios';

import axios from "axios"

export const getReservations = () => {
    // get all 
    const response = fetch("https://robnego-production.up.railway.app/reservation/").then((response) => response.json())
    return response

}


// get orders
export const getOrders = () => {
    // get all 
    const response = fetch("https://robnego-production.up.railway.app/orders/").then((response) => response.json())
    return response

}

// get feedback

export const getFeedback = () => {
    // get all 
    const response = fetch("https://robnego-production.up.railway.app/feedback/").then((response) => response.json())
    return response

}

export const getFoodSuggestions = () => {
    // get all 
    const response = fetch("https://robnego-production.up.railway.app/food-suggestion/").then((response) => response.json())
    return response

}

export const UserLogin = (email, password) => {
    return axios.post("https://robnego-production.up.railway.app/login", { email, password })
}

export const UserRegister = (username, email, phoneNumber, password) => {
    return axios.post("https://robnego-production.up.railway.app/register", { username, email, phoneNumber, password })
}