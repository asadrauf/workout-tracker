//requiring path module to get access to the desireable html file inside public folder
var path = require("path");

module.exports = function(app) {
  // We will hit this route when "Countinue Workout" or "new Workout" is clicked in index.html
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  //We will hit this route if user want to see the dashboard to see the historic info in graphical form
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};