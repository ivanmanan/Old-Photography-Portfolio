const compress_images = require("compress-images");
const fs = require('fs');
const rimraf = require("rimraf");

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
}

const ORIGINAL_PHOTOS_PATH = "original_photos/";
const directories = getDirectories(ORIGINAL_PHOTOS_PATH);

console.log(directories)

directories.forEach(dir => {
    const INPUT_PATH = ORIGINAL_PHOTOS_PATH + dir + "/*.{jpg,JPG,jpeg,JPEG}";
    const OUTPUT_PATH = "public/images/" + dir + "/";
    console.log("INPUT PATH: " + INPUT_PATH)
    console.log("OUTPUT PATH: " + OUTPUT_PATH + "\n\n")

    // Remove all previously existed images
    removeFiles(OUTPUT_PATH).then(() => {
        compress_images_in_directory(INPUT_PATH, OUTPUT_PATH)
    });
});

function removeFiles(path) {
    return new Promise((resolve) => {
        rimraf(path, (err) => {
            if(err) {
                throw err;
            }
            else {
                resolve();
            }
        });
    });
}

function compress_images_in_directory(input_path, output_path) {
    compress_images(
        input_path,
        output_path,
        { compress_force: false, statistic: true, autoupdate: true },
        false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "50"] } },
        { png: {engine: 'pngquant', command: ['--quality=20-50'] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        (error, completed, statistic) => {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");
        }
    )
}