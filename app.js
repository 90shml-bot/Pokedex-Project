import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Static folders
app.use(express.static(__dirname));
app.use('/about', express.static(path.join(__dirname, 'About')))
app.use('/pokemon', express.static(path.join(__dirname, 'Pokemon')))

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

// About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'About', 'about.html'))
})

// Pokemon page
app.get('/pokemon', (req, res) => {
    res.sendFile(path.join(__dirname, 'Pokemon', 'pokemon.html'))
})

// Fallback in case of invalid URL/Path
app.use((req, res) => {
    res.status(404).send('404 - Page not found')
})

//When server is running - Display this message in the console
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
