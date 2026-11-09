import { Component, output, signal } from '@angular/core';

interface Note {
  id: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-note-form',
  imports: [],
  templateUrl: './note-form.html',
  styleUrl: './note-form.css'
})
export class NoteForm {
  add = output<{ title: string; text: string }>();
  saveEdit = output<{ id: string; title: string; text: string }>();

  editingNote = signal<Note | null>(null);

  startEditing(note: Note) {
    this.editingNote.set(note);
  }

  addNote(title: string, text: string) {
    if (!title.trim() || !text.trim()) return;

    const note = this.editingNote();

    if (note) {
      this.saveEdit.emit({
        id: note.id,
        title,
        text
      });
      this.editingNote.set(null);
    } else {
      this.add.emit({ title, text });
    }
  }
}