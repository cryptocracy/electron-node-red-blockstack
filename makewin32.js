#! /usr/bin/env node
var electronInstaller = require('electron-winstaller');
var fs = require('fs');

if (fs.existsSync('build/Node-RED-win32-ia32')) {
    console.log("Building setup app for Windows 32bit");
    resultPromise = electronInstaller.createWindowsInstaller({
        appDirectory: 'build/Node-RED-win32-ia32',
        outputDirectory: '../electron-bin/',
        authors: 'IBM Corp.',
        exe: 'Node-RED.exe',
        setupExe: 'Node-RED-Electron-ia32.exe',
        setupIcon: 'nodered.ico',
        loadingGif: 'loading.gif',
        skipUpdateIcon: true
    });
    resultPromise.then(
        () => console.log("32bit build completed."),
        (e) => console.log(`32bit build failed: ${e.message}`)
    );
}
