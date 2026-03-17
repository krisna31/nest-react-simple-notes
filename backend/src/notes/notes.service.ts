import { Injectable } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { Note } from "./interfaces/note.interface";

@Injectable()
export class NotesService {
    private readonly notes: Note[] = [];

    create(createNoteDto: CreateNoteDto) {
        const newNote: Note = {
            id: (this.notes.length + 1).toString(),
            title: createNoteDto.title,
            content: createNoteDto.content,
            image: createNoteDto.image,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.notes.push(newNote);
        return newNote;
    }

    findAll() {
        return this.notes;
    }

    findOne(id: string) {
        return this.notes.find(note => note.id === id);
    }

    update(id: string, updateNoteDto: UpdateNoteDto) {
        const noteIndex = this.notes.findIndex(note => note.id === id);
        if (noteIndex === -1) {
            return null;
        }

        const updatedNote = {
            ...this.notes[noteIndex],
            ...updateNoteDto,
            updatedAt: new Date(),
        };
        this.notes[noteIndex] = updatedNote;
        return updatedNote;
    }

    remove(id: string) {
        const noteIndex = this.notes.findIndex(note => note.id === id);
        if (noteIndex === -1) {
            return null;
        }
        return this.notes.splice(noteIndex, 1)[0];
    }
}