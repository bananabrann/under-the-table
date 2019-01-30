const { Game, Comment } = require("../models/Game")

module.exports = {
    show: (req, res) => {
        res.render("games/update.hbs")
    },
    edit: (req, res) => {

    }
}