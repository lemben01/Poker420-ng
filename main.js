const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function onReady () {
 win = new BrowserWindow({width: 670, height: 300, frame:false })
 win.loadURL(url.format({
 pathname: path.join(
 __dirname,
 'dist/oker420/index.html'),
 protocol: 'file:',
 slashes: true
 }))
}
app.on('ready', onReady);