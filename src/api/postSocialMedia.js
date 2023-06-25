import { appAxios } from '../adaptors/index';

export const postSocialMedia = async (val) => {
    try{
        const { data } = await appAxios.post("socials", val)
        return data
    }
    catch(err) {
        throw err
    }
  }