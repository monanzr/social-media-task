import React from 'react'
import { appAxios } from '../adaptors/index';

export const getSocialMedia = async () => {
    try{
        const { data } = await appAxios.get("socials")
        console.log("data", data)
        return data
    }
    catch(err) {
        throw err
    }
}