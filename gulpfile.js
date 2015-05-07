"use strict";

var gulp          = require("gulp");
var jsdoc         = require("gulp-jsdoc");
var jshint        = require("gulp-jshint");
var Dependo       = require("dependo");
var minimist      = require("minimist");
var jshintStylish = require("jshint-stylish");


var jsdocConfig   = {
        docstrapOptions  : {
            path           : "ink-docstrap",
            systemName     : "Domains Self-Service Application (DSSA)",
            footer         : "Domains Self-Service Application (DSSA)",
            copyright      : "&copy Domain Apps Team",
            navType        : "vertical",
            theme          : "cerulean",
            linenums       : true,
            collapseSymbols: false,
            inverseNav     : true
        },
        documentationPath: "./doc",

        documentedSources: [
            "!node_modules/**",
            "plugins/**/*.js",
            "README.md"
        ]
    },

    dependoConfig = {
        options   : {
            format    : "cjs",
            outputPath: "",
            fileName  : "deps.html",
            exclude   : "^node_modules"
        },
        modulePath: ""
    };

var dependo = new Dependo(dependoConfig.modulePath, dependoConfig.options);

/**
 * Documentation generation task
 */
gulp.task("jsdoc", function () {
    gulp.src(jsdocConfig.documentedSources)
        .pipe(jsdoc.parser({
            plugins: ["plugins/markdown"]
        }))
        .pipe(jsdoc.generator(jsdocConfig.documentationPath, jsdocConfig.docstrapOptions));
});

/**
 * JavaScript sources to be checked for errors
 * @type {string[]}
 */
var javaScriptSources = [""];

/**
 * Code validation task
 */
gulp.task("jshint", function () {
    var _argv              = minimist(process.argv.slice(0));

    /**
     * Flag that validates whether or not we got source files to check.
     * @type {boolean}
     * @private
     */
    var _hasDynamicSources = (typeof _argv.s === "string");

    return gulp.src(_hasDynamicSources ? _argv.s.split(",") : javaScriptSources)
        .pipe(jshint())
        .pipe(jshint.reporter(jshintStylish))
        .pipe(jshint.reporter("fail"));
});

/**
 * Generates a force-oriented dependency graph for each module included in its configuration
 */
gulp.task("dependo", function () {
    dependo.generateHtml();
});

gulp.task("default", ["jsdoc", "dependo"]);