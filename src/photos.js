// NOTE: Cannot automate length of the number of files in a folder
//       This is because file-system is only available on server-side
//       This poses security issues on client-side JavaScript

function createFileObject(folder_name, numberOfFiles) {

  let photo_object = {};
  const path = "/images/" + folder_name + "/";

  for(let i = 0; i < numberOfFiles; i++) {
    const file_name = path + folder_name + i.toString() + ".jpg";

    // TODO: Automate determing the orientation of the photo
    // NOTE: Image must be loaded first
    // This method is too slow --- this must be done in Template.jsx
    // As a result, must move hash table into Template.jsx
    // KEY: file name, VALUE: orientation of photo
    photo_object[file_name] = "v";

    // Determine the photo orientation
    /* let img = new Image();
     * img.onload = () => {
     *   let height = img.height;
     *   let width = img.width;
     *   if(height > width) {
     *     return "v"; // v for vertical
     *   }
     *   else {
     *     return "h"; // h for horizontal
     *   }
     * }
     * img.src = file_name;

     * console.log(img);*/
  }
  console.log(photo_object);
  return photo_object;
}

// NOTE: Declare new photo folders here
// NOTE: file names must start 0, such as file0.jpg, file1.jpg, ...
const Home = createFileObject("home", 6);

const photos = {
  Home: Home,
}

module.exports = photos;