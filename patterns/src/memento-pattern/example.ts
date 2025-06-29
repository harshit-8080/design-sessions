class Editor {
  constructor(private content: string = "") {}

  addWord(words: string) {
    this.content += words;
  }

  getContent() {
    return this.content;
  }

  creatMemento() {
    return new EditorMemento(this.content);
  }

  restoreContent(editorMemento: EditorMemento) {
    this.content = editorMemento.getContent();
  }
}

class EditorMemento {
  constructor(private content: string) {}

  getContent() {
    return this.content;
  }
}

class HistoryManager {
  private history: EditorMemento[] = [];

  save(memento: EditorMemento) {
    this.history.push(memento);
  }

  undo() {
    const latestState = this.history.pop();
    return this.history[this.history.length - 1];
  }
}

const editor = new Editor();
const historyCareTaker = new HistoryManager();

editor.addWord("Harshit ");
historyCareTaker.save(editor.creatMemento());

editor.addWord("Navin ");
historyCareTaker.save(editor.creatMemento());

editor.addWord("Ramya");
historyCareTaker.save(editor.creatMemento());

console.log("Current:", editor.getContent());

// undo....
let currentState = historyCareTaker.undo();
editor.restoreContent(currentState);
console.log("first undo:", editor.getContent());

// undo....
currentState = historyCareTaker.undo();
editor.restoreContent(currentState);
console.log("Second undo:", editor.getContent());
