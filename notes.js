const fs = require('fs');
const logger = require('./logger.js');

//Create a function called as getNotes that returns some notes
const getNotes = () => {
    return "Notes....."
}

//Add notes
const addNote = (title,body) => { 
    const notes = loadNotes();
    console.log(notes);

    //Check for duplicate  notes title
    const duplicateNotes = notes.filter((note) => note.title === title);
    /*const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });*/
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);    
    }
    else{
        logger.error('Note Title already taken');
    }  
}

const removeNote = (title) => {
    const notes = loadNotes();

    //Filter the notes thats not needed to be removed
    const filteredNotes = notes.filter((note) => note.title !== title);
    
    /*const filteredNotes = notes.filter((note) => {
        return note.title !== title
    });*/

    if(notes.length !== filteredNotes.length){
        logger.info('Note Remoed');
        saveNotes(filteredNotes);
    }
    else{
        logger.info('No Note Removed');
    }  
}

//Load JSON Object from file and return the JSON object
const loadNotes = () => {
    try{
        //Read data from notes.json file
        var dataBuffer = fs.readFileSync('notes.json');
        //Convert buffer data to String
        var dataJsonStr = dataBuffer.toString();
        //Conver JSON string to JSON object
        var dataJson = JSON.parse(dataJsonStr);
        return dataJson;
    }
    catch(e){
        return [];
    }
}

//Read a note based on title
const readNote = (title) => {
    logger.info("Reading note for the title:"+title);
    const notes = loadNotes();
    const note = notes.find((note) => note.title == title);
    if(note){
        logger.print(note.body);    
    }else{
        logger.error("No notes for the given title");
    }
    
};



//Stringify the incoming JSON object and save it to file
const saveNotes = (notes) => {
    const notesStr = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notesStr);
    logger.info('Notes Saved');
}

const listNotes = () => {
    logger.info("Your Notes");
    const notes = loadNotes();
    notes.forEach((note) => {
       logger.print(note.title);
    });
};

//export the function using the moduld.exports
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listeNotes:listNotes,
    readNote:readNote
}