// require Game model
// const { Game } = require('path to model')
console.log("Success!")

module.exports = {
    index: (req, res) => {
        res.send("We hit the controller!")
        console.log("frontpage.js success!")
    }
}