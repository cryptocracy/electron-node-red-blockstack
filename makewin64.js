#! /usr/bin/env node
var electronInstaller = require('electron-winstaller');
var fs = require('fs');

if (fs.existsSync('build/Node-RED-win32-x64')) {
    console.log("Building setup app for Windows 64bit");
    resultPromise = electronInstaller.createWindowsInstaller({
        appDirectory: 'build/Node-RED-win32-x64',
        outputDirectory: '../electron-bin/',
        authors: 'IBM Corp.',
        exe: 'Node-RED.exe',
        setupExe: 'Node-RED-Electron-x64.exe',
        setupIcon: 'nodered.ico',
        loadingGif: 'loading.gif',
        skipUpdateIcon: true
    });
    resultPromise.then(
        () => console.log("64bit build completed."),
        (e) => console.log(`64bit build failed: ${e.message}`)
    );
}
