#!/usr/bin/env node

"use strict";

var cp = require("child_process");
var colors = require("colors/safe");

function installDeps() {

    var getModifiedFilesInTreeCommand = "git diff-tree -r --name-only --no-commit-id HEAD@{1} HEAD";

    var sources        = cp.execSync(getModifiedFilesInTreeCommand, {
        encoding: "utf-8"
    });


    (sources.indexOf("package.json") !== -1) && cp.execSync("npm install && npm prune");
}

installDeps();
