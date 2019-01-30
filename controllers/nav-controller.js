// currently not linked to anything

module.exports = {
  redirectHome: (req, res) => {
    console.log("sending user home...");
    return res.redirect("/");
  },
  redirectGame: (req, res) => {
    console.log("sending user to games...");
    return res.redirect("/games");
  }
};
