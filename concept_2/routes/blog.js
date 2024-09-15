



const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {                         // define the home page route           //  goto http://localhost:3000/blog
  res.send('Blog home page')
})


router.get('/about', (req, res) => {                    // define the about route               //  goto http://localhost:3000/blog/about
  res.send('About Blog')
})


module.exports = router                             //  exported in order to be able to use for any end point......




