var edu = require('./getEducation');

edu.queryEducation(function(result) {
    console.log(JSON.stringify(result));
});

