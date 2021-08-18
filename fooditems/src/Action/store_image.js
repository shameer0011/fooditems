export const storeImage = image => {
  //   const { id, original_title, overview, popularity, poster_path } = movie;
  return {
    type: "STORE-BREAKFAST-IMAGE",
    image: image,
  };
};
export const removeStoreImage = image => {
  //   const { id, original_title, overview, popularity, poster_path } = movie;
  return {
    type: "REMOVE-STORE-BREAKFAST-IMAGE",
    removeImageList: image,
  };
};
