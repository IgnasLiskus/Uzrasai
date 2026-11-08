import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Note {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  notes: Note[] = [];

  constructor() {
    const saved = localStorage.getItem('notes');

    if (saved) {
      this.notes = JSON.parse(saved);
    }
  }

  addNote(title: string, text: string) {
    if (!title.trim() || !text.trim()) {
      return;
    }

    this.notes.push({ title, text });

    this.saveNotes();
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.saveNotes();
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}