const imageReducersDefaultValue = [];
const imageReducers = (state = imageReducersDefaultValue, action) => {
  switch (action.type) {
    case "STORE-BREAKFAST-IMAGE":
      return [...state, action.image];
      break;
    case "REMOVE-STORE-BREAKFAST-IMAGE":
      console.log(action.removeImageList);
      return [...state.filter(c => c !== action.removeImageList)];
      break;

    default:
      return state;
      break;
  }
};
export default imageReducers;
