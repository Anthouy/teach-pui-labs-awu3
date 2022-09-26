const notecard = {
    noteTitle: 'title',
    noteBody: 'body',
    noteImageURL: 'asset/warhol-frog.png'
}

class Notecard {
    noteTitle;
    noteBody;
    noteImageURL;

    constructor(title, body, imageURL, elementID) {
        this.noteTitle = title;
        this.noteBody = body;
        this.noteImageURL = iamgeURL;
        this.element = document.querySelector(elementID);
        this.updatedElement();

        const deleteButton = this.element.querySelector('.icon-delete')
        deleteButton.onclick = this.deleteNote();
    }

    updateElement() {
        const noteTitleElement = this.element.querySelector('.note-title')
        const noteBodyElement = this.element.querySelector('.note-body')
        const noteImageElement = this.element.querySelector('.notecard-image')

        noteTitleElement.innerText = this.noteTitle;
        noteBodyElement.innerText = this.noteBody;
        noteImageElement.src = this.noteImageURL;
    }
    
    deleteNote() {
    console.log("deleting note")
    // fine, let "this" refer to the trash icon
    let parent = this.closest('.notecard-one');
    console.log(this, parent);
    parent.element.remove();
    }
}

const notecardOne = new Notecard(
    'this is the first note',
    'first note body',
    'assets/warhol-frog.png',
    '#notecard-one'
)

const notecardTwo = new Notecard(
    'this is the first note',
    'first note body',
    'assets/warhol-frog.png',
    '#notecard-two'
)
  
const notecardThree = new Notecard(
    'this is the first note',
    'first note body',
    'assets/warhol-frog.png',
    '#notecard-three'
)