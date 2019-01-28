// require Game model
// const { Game } = require('path to model')
// console.log("Success!")

router.get("/", (req, res) => {
    res.render("homepage");
});

module.exports = {
    index: (req, res) => {
        res.send("Controller '/' triggered!")
        // res.render('layout')
        res.render('index', { message: 'Hello there!' })
    },
}