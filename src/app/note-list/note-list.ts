import { Component, input, output } from '@angular/core';

interface Note {
  id: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-note-list',
  imports: [],
  templateUrl: './note-list.html',
  styleUrl: './note-list.css'
})
export class NoteList {
  notes = input<Note[]>([]);
  delete = output<string>();
  edit = output<Note>();

  deleteNote(id: string) {
    this.delete.emit(id);
  }

  editNote(note: Note) {
    this.edit.emit(note);
  }
}