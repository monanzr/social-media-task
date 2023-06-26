import { appAxios } from '../adaptors/index';

export const putSocialMedia = async ({id}, socialData) => {
    try{
        const { data } = await appAxios.put(`socials/${id}`, socialData)
        return data
    }
    catch(err) {
        throw err
    }
  }