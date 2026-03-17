import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { NotesService } from "./notes.service";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Post()
    create(@Body() createNoteDto: CreateNoteDto) {
        const newNote = this.notesService.create(createNoteDto);
        return newNote;
    }

    @Get()
    findAll() {
        const notes = this.notesService.findAll();
        return notes;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        const note = this.notesService.findOne(id);
        if (!note) return { message: "Note not found" };
        return note;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
        const updatedNote = this.notesService.update(id, updateNoteDto);
        if (!updatedNote) return { message: "Note not found" };
        return updatedNote;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        const result = this.notesService.remove(id);
        if (!result) return { message: "Note not found" };
        return result;
    }
}