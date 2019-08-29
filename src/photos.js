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
    // TODO: Convert hash table to using array of pair objects instead
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
  /* console.log(photo_object);*/
  return photo_object;
}

/* NOTE: Declare new photo folders here
 *       File names must start 0, such as file0.jpg, file1.jpg, ...
 *       Must edit collection array in App.jsx
 *       Must edit renderSelection() function in App.jsx
 */
const Home = createFileObject("home", 6);
const Class2019 = createFileObject("class", 10);
const Ivan = createFileObject("ivan", 10);

/* TODO: Implement this
 * const Aviation = createFileObject("aviation", 0);
 * const Landscape = createFileObject("landscape", 0);
 * const Astrophotograhy = createFileObject("astro", 0);
 * const Wildlife = createFileObject("wild", 0);
 * const Nature = createFileObject("nature", 0);
 * */
const photos = {
  Home: Home,
  Class2019: Class2019,
  Ivan: Ivan
}

module.exports = photos;