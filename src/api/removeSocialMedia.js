import { appAxios } from '../adaptors/index';

export const removeSocialMedia = async (selectedRecord) => {
    try{
        const { data } = await appAxios.delete("socials" + "/" + selectedRecord.id)
        return data
    }
    catch(err) {
        throw err
    }
  }