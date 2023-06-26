import { appAxios } from "../adaptors/index";

export const removeSocialMedia = async ({ id }) => {
  try {
    const { data } = await appAxios.delete(`socials/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};
