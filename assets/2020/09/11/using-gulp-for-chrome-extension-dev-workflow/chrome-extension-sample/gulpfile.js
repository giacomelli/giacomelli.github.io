const gulp = require("gulp");
const del = require("del");
const merge = require('gulp-merge-json');
const fs = require("fs");

const argv = require('yargs').argv;
const config = argv.config == undefined ? 'DEV' : argv.config;

function clean() {
    return del(["./dist/"]);
}

function copyAllFiles() {
  return gulp
    .src([
      "src/**/*.*",
      "!src/config*.json",
      "!src/manifest*.json"
    ])
    .pipe(gulp.dest("./dist/"));
}
 
function transformConfig(cb) {
  return transformJson(cb, "config");
}

function transformManifest(cb) {
  return transformJson(cb, "manifest");
}

function transformJson(cb, fileName) {
  if(config == "DEV") {
    return gulp
      .src(`src/${fileName}.json`)
      .pipe(gulp.dest("./dist/"));
  }

  return gulp
  .src([
    `src/${fileName}.json`,
    `src/${fileName}.${config}.json`
  ]) 
  .pipe(merge({
    fileName: `${fileName}.json`}
  ))
  .pipe(gulp.dest('./dist'));
}

function writeConfigJsFile(cb) {
  var content = fs.readFileSync("./dist/config.json", "utf8");
  content =  `
  // File generated by gulpfile.js. 
  // DO NOT CHANGED IT DIRECTLY.
  // Edit config.*.json files instead.
  const config = ${content};`

  fs.mkdirSync('./dist/scripts', { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.writeFileSync("./dist/scripts/config.js", content);

  fs.mkdirSync('./src/scripts', { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.writeFileSync("./src/scripts/config.js", content);
 
  return cb();
}

function watch(cb) {
  if(argv.watch == undefined)
    return cb();

  return gulp.watch(
    [
      "src/**/*.*", 
      '!src/scripts/config.js'
    ],
    gulp.series(copyAllFiles, transformConfig, writeConfigJsFile, transformManifest));
}

exports.default = gulp.series(clean, copyAllFiles, transformConfig, writeConfigJsFile, transformManifest, watch)