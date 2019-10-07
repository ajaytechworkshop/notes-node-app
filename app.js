const chalk = require('chalk');
const yargs = require('yargs');
const validator = require('validator');
const logger = require('./logger.js');
const notes = require('./notes.js');

console.log(notes);

//console.log(notes.getNotes());

//logger.info('Success');
//logger.error('Exception');

//const command = process.argv[2];
//console.log(yargs.argv);

//Add Notes
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler:function(){
        console.log('Removing Notes');
    }
});

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function(){
        notes.listeNotes();
    }
});

//Remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
         notes.removeNote(argv.title);
    }
});

//Read a note
yargs.command({
    command : 'read',
    describe: 'Read  a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
});


//Parse the arguments in process object
yargs.parse();
