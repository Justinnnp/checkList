import React, {Component} from "react";
import Note from './Components/Note';
import "./App.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteText: '',
            notes: []
        }
    }

    updateNoteText(noteText) {
        this.setState({noteText: noteText.target.value})
    }

    addNote() {
        let notesArr = this.state.notes;
        if (this.state.noteText === '') return;
        notesArr.push(this.state.noteText);
        this.setState({noteText: ''});
        this.textInput.focus();

    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            let notesArr = this.state.notes;
            if (this.state.noteText === '') return;
            notesArr.push(this.state.noteText);
            this.setState({noteText: ''});
        }

    }

    deleteNote(index) {
        let notesArr = this.state.notes;
        notesArr.splice(index, 1);
        this.setState({notes: notesArr})
    }

    deleteArray() {
            this.setState({
                notes: []
            })
    }

    render() {

        let notes = this.state.notes.map((val, key) => {
            return <Note
                key={key} text={val}
                deleteMethod={() => this.deleteNote(key)}/>
        });

        return (
            <div className="Main">
                <div className="Content">
                    <div className="Header">
                        <h1>Todo List</h1>
                    </div>
                    <button onClick={this.addNote.bind(this)}>Add item</button>
                    <button onClick={this.deleteArray.bind(this)}>Delete list</button>
                    <div className="textDiv">
                        <input type="text"
                               ref={(input => {
                                   this.textInput = input
                               })}
                               className="textInput"
                               value={this.state.noteText}
                               onChange={noteText => this.updateNoteText(noteText)}
                               onKeyPress={this.handleKeyPress.bind(this)}
                        />
                    </div>
                    {notes}
                </div>
            </div>
        );
    }
}

export default App;
