
import { Component, OnDestroy, signal } from '@angular/core';

import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  Unsubscribe,
} from 'firebase/firestore';

import { db } from './firebase';

import { NoteForm } from './note-form/note-form';
import { NoteList } from './note-list/note-list';

interface Note {
  id: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  imports: [NoteForm, NoteList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnDestroy {

  notes = signal<Note[]>([]);

  unsubscribe: Unsubscribe;

  constructor() {
    this.unsubscribe = onSnapshot(
      collection(db, 'notes'),
      (snapshot) => {
        this.notes.set(
          snapshot.docs.map(document => ({
            id: document.id,
            title: document.data()['title'],
            text: document.data()['text']
          }))
        );
      },
      (error) => {
        console.error('Firebase error:', error);
      }
    );
  }

  async addNote(title: string, text: string) {
    if (!title.trim() || !text.trim()) return;

    await addDoc(collection(db, 'notes'), {
      title: title,
      text: text
    });
  }

  async updateNote(id: string, title: string, text: string) {
  if (!title.trim() || !text.trim()) return;

  await updateDoc(doc(db, 'notes', id), {
    title: title,
    text: text
  });
  }

  async deleteNote(id: string) {
    await deleteDoc(doc(db, 'notes', id));
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
