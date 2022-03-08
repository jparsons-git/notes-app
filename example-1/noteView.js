class NotesView {

    constructor(notes){
      this.notes = notes;
      this.mainContainerEl = document.querySelector('#main-container');


    }

    displayNotes(){
      
      //for (let note in this.notes.getNotes()) {
      let noteArray = this.notes.getNotes();
      noteArray.forEach(note => { 
        let div = document.createElement("div");
        div.className='note'; 
        console.log(note);
        this.mainContainerEl.append(note, div);   
      });

    }

} 

module.exports=NotesView;