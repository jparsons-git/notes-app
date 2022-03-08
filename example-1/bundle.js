(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // noteView.js
  var require_noteView = __commonJS({
    "noteView.js"(exports, module) {
      var NotesView2 = class {
        constructor(notes) {
          this.notes = notes;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNotes() {
          let noteArray = this.notes.getNotes();
          noteArray.forEach((note) => {
            let div2 = document.createElement("div");
            div2.className = "note";
            console.log(note);
            this.mainContainerEl.append(note, div2);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_noteView();
  console.log("The notes app in running!");
  var model = new NotesModel();
  model.addNote("Time for tea!");
  console.log(model.getNotes());
  var view = new NotesView(model);
  var div = view.displayNotes();
})();
