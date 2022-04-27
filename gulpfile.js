const gulp = require("gulp");
const ts = require("gulp-typescript");
const nodemon = require("gulp-nodemon");

const tsProject = ts.createProject("tsconfig.dev.json");

const SRC_DIR = "src";
const DIST_DIR = "lib";
const ENV = "./.env";

const BUILD_TASKS = ["compile"];
const SERVE_WATCH_GLOBS = [`${SRC_DIR}/**/*.*`, ENV];

gulp.task(
  "compile", 
  () => {
    return tsProject.src()
      .pipe(tsProject())
      .js
      .pipe(gulp.dest(DIST_DIR));
  }
);

gulp.task(
  "build", 
  gulp.series(BUILD_TASKS)
);

gulp.task(
  "serve",
  gulp.series("build", (done) => {
    nodemon({
      exec: 'npm start',
      watch: SERVE_WATCH_GLOBS,
      tasks: BUILD_TASKS,
      done,
    });
  })
);
