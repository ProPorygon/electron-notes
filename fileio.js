const fs = require('fs');
const quill = require('quill');
const remote = require('electron').remote;
const dialog = remote.require('electron').dialog;

var loaded_file;

function saveFile() {
    if(!loaded_file) {
        dialog.showSaveDialog({ filters: [
            { name: 'text', extensions: ['html', 'txt'] }
        ]}, function(filename) {
            if(filename === undefined) return;
            writeToFile(editor, filename);
        });
    }
    else {
        writeToFile(editor, loaded_file);
    }
}

function loadFile() {
    dialog.showOpenDialog({ filters: [
        { name: 'text', extensions: ['html', 'txt'] }
    ]}, function(filenames) {
        if(filenames === undefined) return;
        var filename = filenames[0];
        readFromFile(editor, filename);
        loaded_file = filename;
    })
}

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
