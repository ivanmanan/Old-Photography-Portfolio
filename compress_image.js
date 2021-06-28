const compress_images = require("compress-images");
const fs = require('fs');

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
}

const ROOT_PATH = "public/images/";
const directories = getDirectories(ROOT_PATH);

console.log(directories)

directories.forEach(dir => {
    const INPUT_PATH = ROOT_PATH + dir + "/original/*.{jpg,JPG,jpeg,JPEG}";
    const OUTPUT_PATH = ROOT_PATH + dir + "/";
    console.log("INPUT PATH: " + INPUT_PATH)
    console.log("OUTPUT PATH: " + OUTPUT_PATH + "\n\n")

    // Remove all previously existed images
    removeFiles(OUTPUT_PATH).then(() => {
        compress_images_in_directory(INPUT_PATH, OUTPUT_PATH)
    });
})

function removeFiles(path) {
    let regex = /[.](jpg|JPG|jpeg|JPEG)$/
    return new Promise((resolve) => {
        fs.readdirSync(path)
            .filter(f => regex.test(f))
            .map(f => fs.unlinkSync(path + f))
        resolve()
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