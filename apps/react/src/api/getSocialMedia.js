import { appAxios } from '../adaptors/index';

export const getSocialMedia = async () => {
    try{
        const { data } = await appAxios.get("socials")
        return data
    }
    catch(err) {
        throw err
    }
}