import { app, BrowserWindow } from 'electron'
import * as  path from 'path'
import * as url from 'url'

/**
 * electron/main.ts
 *  Entry point of an Electron application
 * @author DaCoDeMaNiaK <jean-luc.aubert@aelion.fr>
 * @version 1.0.0
 * @see https://www.electronjs.org/
 */

let mainWindow: Electron.BrowserWindow | null

/**
 * Create a new Electron window and load Angular app
 */
function createWindow() {
    // Create a new Electron instance
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    })

    // Load the index.html of the app in the brand new Electron window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open devTools if ever needed
    mainWindow.webContents.openDevTools()

    // Handling close button
    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})