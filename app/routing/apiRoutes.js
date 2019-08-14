let friends = require('../data/friends');

module.exports = function(app) {

    app.get("/api/friends.js", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends.js", function(req, res) {
        let newFriend = req.body;
        let total = 0;
        let match = {
            name: "",
            photo: "",
            difference: 10
        };

        for (let i = 0; i < friends.length; i++) {
            total = 0;

            for (let x = 0; x < friends[i].scores.length; x++) {
                total += Math.abs(friends[i].scores[x] - newFriend.scores[x]);

                if (total <= match.difference) {
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.difference = total;
                }
            }
        }
        console.log(newFriend);
        friends.push(newFriend);
        res.json(match);



    })
}