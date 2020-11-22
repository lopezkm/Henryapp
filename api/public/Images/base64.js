const imageToBase64 = require("image-to-base64");

export const logo = imageToBase64("logoHenry.png") // Path to the image
  .then((response) => {
    console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
  })
  .catch((error) => {
    console.log(error); // Logs an error if there was one
  });
