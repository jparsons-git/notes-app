/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const notesView = require('./noteView');
 const notesModel = require('./notesModel');
const { isTypedArray } = require('util/types');

describe('noteView instantiation', () => {
  it('should display 2 div .notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
      const notes = new notesModel();
      const view = new notesView(notes);
      notes.addNote('Tim is Jane"s favourite person');
      notes.addNote('Jane is Tim"s favourite person');
      view.displayNotes();
      expect(document.querySelectorAll('div.note').length).toBe(2);
  });    
});
