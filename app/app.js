const {BrowserWindow, app} = require('electron')

app.on('ready', ()=>{
  ;(new BrowserWindow()).loadURL(`file://${__dirname}/app.html`)
})

app.on('window-all-closed', ()=>app.quit())
