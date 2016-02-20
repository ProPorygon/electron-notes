var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('5e0a4198d583aabe8a39557d240670120974a254');
alchemy.keywords('Glucose is comprised of 6 carbons, 12 hydrogens, and 6 oxygens.', {}, function(err, response) {
    if (err) throw err;

    // See http://www.alchemyapi.com/api/keyword/htmlc.html for format of returned object
    var keywords = response.keywords;
    console.log(keywords[1].text);
    // Do something with data
});