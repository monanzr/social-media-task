export const socialMediaReducer = (state, action) => {
  switch (action.type) {
    case "LIST_ITEM":
      return {
        ...state,
        socialMedia: action.payload,
        shouldRefetch: false
      }
    case "SELECTED_ITEM":
      // return {
      //   ...state,
      //   selectedsocialMedia: state.task.find((t) => t.id === action.payload.id),
      // };
      return {
        ...state,
        selectedSocialMedia: state.socialMedia.find((t) => t.id === action.payload.id)
      }
    case "ADD_ITEM":
      const found = state.socialMedia.find(
        (item) =>
        item.type === action.payload.type ||
          item.link === action.payload.link ||
          item.socialMediaId === action.payload.socialMediaId
      );
      // const isOneValueEmpty =
      //   action.payload.id === "" ||
      //   action.payload.link === "" ||
      //   action.payload.type === "";

      if (!found) {
        return {
          ...state,
          socialMedia: [...state.socialMedia, action.payload],
          shouldRefetch: true
        }
      } else {
        return state
      }
      // return {
      //   ...state,
      //   socialMedia: [...state.socialMedia, action.payload],
      // };
    case "REMOVE_ITEM":
      return {
        ...state,
        socialMedia: state.socialMedia.filter(
          (item) => item.id !== action.payload.id
        ),
        shouldRefetch: true
      }
    case "EDIT_ITEM":
      // const newSocialMediaList =  [...state.socialMedia];
      // const foundIndex = state.socialMedia.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // newSocialMediaList[foundIndex] = {
      //   type: action.payload.type,
      //   link: action.payload.link,
      //   socialMediaId: action.payload.socialMediaId,
      //   id: action.payload.id
      // };
      // return {
      //   ...state,
      //   socialMedia: newSocialMediaList
      // };
      return {
        ...state,
        socialMedia: state.socialMedia.map((item) => {
          return item.id === action.payload.id ? action.payload : item;
        }),
        shouldRefetch: true
      };
    default:
      return state;
  }
};
