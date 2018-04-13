const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/contact.html"));
    });

    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/about.html"));
    });

    // app.get("/tech", function(req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/tech.html"));
    // });

    // app.get("/contact", function(req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/contact.html"));
    // });

    // app.get("/resume", function(req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/assets/docs/samanthacappsresume.pdf"));
    // });

    // app.get("/hangman", function(req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/Hangman-Game/index.html"));
    // });

    // app.get("/trivia", function(req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/week-4-game/index.html"));
    // });

    // app.get("/pokemon", function(req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/pokemon/index.html"));
    // });

    // app.get("/rpsls", function(req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/RPS-Multiplayer/index.html"));
    // });

};