import { appAxios } from '../adaptors/index';

export const postSocialMedia = async (socialData) => {
    try{
        const { data } = await appAxios.post("socials", socialData)
        return data
    }
    catch(err) {
        throw err
    }
  }