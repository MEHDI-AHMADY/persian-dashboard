import axios from 'axios';
import { LoginInputs } from '../pages/Login';
import { RegisterInputs } from '../pages/Register';

export const userLoginHandler = async (data:LoginInputs) => {
    const res = await axios.post("https://api.angoshtarbaz.com/auth/login" , data)
    const token = res.data.token
    return token
}

export const userRegisterHandler = async (data : RegisterInputs) => {
    const res = await axios.post("https://api.angoshtarbaz.com/auth/register" , data)
    console.log(res)
}