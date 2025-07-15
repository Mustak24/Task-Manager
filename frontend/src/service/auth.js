import { BASE_URL } from "../../env";

export async function login(data){
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            'content-type': "application/json",
        },
        data: JSON.stringify(data)
    })

    if(!res.ok) return {msg: "Require fail"}

    const data = await res.json()
    return data;
}



export async function SignUp(data){
    const res = await fetch(`${BASE_URL}/auth/sign-up`, {
        method: "POST",
        headers: {
            'content-type': "application/json",
        },
        data: JSON.stringify(data)
    })

    if(!res.ok) return {msg: "Require fail"}

    const data = await res.json()
    return data;
}