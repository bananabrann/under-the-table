const { Game } = require("../models/Game")

// Working

module.exports = {
    show: (req, res) => {
        res.render('homepage')
        // res.json(Game)
        // console.log(Game)
    },
}

// New

// module.exports = {
//     show: (req, res) => {
//         Game.find({}).then(games => {
//             // res.render("homepage", { games })
//             // res.send(games)
//             // res.render("homepage")
//         })
//     }
// }


// // Tweeter
// Tweet.find({})
//       .sort({ createdAt: -1 })
//       .limit(10)
//       .populate("author")
//       .then(tweets => {
//         res.render("app/index", { tweets });
//       });

// // hbs
// {{#if tweets}}
//   <ul class="tweets">
//     {{#each tweets}}
//        {{> 'tweet'}}
//     {{/each}}
//   </ul>
// {{/if}}
