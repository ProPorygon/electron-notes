var fs = require('fs');
var quill = require('quill');

function writeToFile(editor, filename) {
    var html = editor.getHTML();
    fs.writeFile(filename, html, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("File Saved");
    });
}

function readFromFile(editor, filename) {
    fs.readFile(filename, "utf-8", function(err, data) {
        if(err) {
            console.log(err);
        }
        editor.setHTML(data);
    });
}