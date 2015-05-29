#!/usr/bin/env node

"use strict";

var cp = require("child_process");
var colors = require("colors/safe");

/**
 * Performs code validation by executing a given task and pipes the output to `process.stdout` or `process.stderr`
 * If validation fails,
 * @param {string} task The validation task that needs to be ran
 */
function validateCode(task) {

    var gitDiffCommand = "git diff-index --name-only --cached --diff-filter=ACMR HEAD -- *.js **/*.js";
    var sources        = cp.execSync(gitDiffCommand, {
        encoding: "utf-8"
    });
    var validateCommand = [
        "gulp",
        task,
        "-s",
        sources.split("\n"),
        "--color"
    ].join(" ");

    cp.exec(validateCommand, function (error, stdout, stderr) {
        process.stdout.write("-------------- " +
                            colors.bgBlue("Le validating of le code.") +
                            " --------------\n");
        stdout && process.stdout.write(stdout);
        stderr && process.stderr.write(stderr);
        process.stdout.write("--------------------------------------------------------------\n");
        if (error) {
            process.exit(error.code);
        }
    });
}

validateCode("jshint");
