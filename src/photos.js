// TODO:I need to automate all the variable file names based on
//      all the content in a folder

function createFileObject(folder_name) {

  let photo_object = {};
  const path = "/images/" + folder_name + "/";

  // TODO: Automate length to the number of files in the folder
  for(let i = 1; i < 7; i++) {
    const file_name = path + folder_name + i.toString() + ".jpg";

    // TODO: Automate the orientation of the photo
    // KEY: file name, VALUE: orientation of photo
    photo_object[file_name] = "v";
  }
  return photo_object;
}

// NOTE: Declare new photo folders here
const Home = createFileObject("home");

const photos = {
  Home: Home,
}

module.exports = photos;