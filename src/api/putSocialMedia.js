import { appAxios } from '../adaptors/index';

export const putSocialMedia = async (selectedRecord, value) => {
    try{
        const { data } = await appAxios.put("socials" + "/" + selectedRecord.id, value)
        return data
    }
    catch(err) {
        throw err
    }
  }