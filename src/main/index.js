'use strict'

import { app, BrowserWindow, Menu, Tray } from 'electron'
import path from 'path'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}
let iconPath = path.join(__dirname, 'tray-icon.png')

/**
 * App - Components
 */
let mainWindow
let tray = null

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 550,
    minWidth: 550,
    minHeight: 600,
    maxWidth: 550,
    maxHeight: 600,

    useContentSize: true,
    center: true,
    fullscreen: false,
    frame: true,
    titleBarStyle: 'hidden-inset'
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  createTray()
}

function createTray () {
  tray = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Conexion', type: 'radio'},
    {label: 'Sincrionizar', type: 'radio'},
    {label: 'Ayuda', type: 'radio'},
    { label: 'Salir',
      accelerator: 'Command+Q',
      selector: 'terminate:'
    }
  ])
  tray.setToolTip('ETL - Herramienta de Migracion')
  tray.setContextMenu(contextMenu)
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  } else if (tray === null) {
    createTray()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
