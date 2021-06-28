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

// TODO: The compress_images.js script should produce a JSON export for
//       the file length to be imported into photos.js
const Home = createFileObject("home", 7);
const LongExposure = createFileObject("long_exposure", 5);
const Landscape = createFileObject("landscape", 5);
const Architecture = createFileObject("architecture", 3);
const Beach = createFileObject("beach", 3);
const Fitness = createFileObject("fitness", 4);

class Pair {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }
}

const p1 = new Pair("Long Exposure", "Long Exposure");
const p2 = new Pair("Landscape", "Landscape Photography");
const p3 = new Pair("Architecture", "Architecture");
const p4 = new Pair("Beach", "Beach Portraits");
const p5 = new Pair("Fitness", "Fitness Models");
const collection = [p1, p2, p3, p4, p5];

const photos = {
  "Home": Home,
  "Long Exposure": LongExposure,
  "Landscape": Landscape,
  "Architecture": Architecture,
  "Beach": Beach,
  "Fitness": Fitness
}

export { photos , collection }