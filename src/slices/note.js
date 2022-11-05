import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    activeFolder: 'NOTES',
    activeNote: { title: "", text: "", id: "", categoryId: "" },
    notes: [],
    loading: true,
    searchValue: ""
}

const noteS = createSlice(
    {
        name: 'note',
        initialState: intialState,
        reducers: {
            onActiveFolderChange(state, action) {
                state.activeFolder = action.payload
                console.log(state.activeFolder)
            },
            onNoteTextChange(state, action) {
                state.activeNote.text = action.payload;
            },
            addNote(state, { payload }) {
                console.log("addNote")
                if (state.activeNote.id !== null && state.activeNote.id !== "") {
                    console.log(state.notes)
                    const activeNoteIndex = state.notes.findIndex((note) => note.id === state.activeNote.id)
                    const activeNote = state.notes[activeNoteIndex]
                    activeNote.text = state.activeNote.text
                    activeNote.title = state.activeNote.title
                    activeNote.categoryId = state.activeNote.categoryId;
                    state.notes[activeNoteIndex] = activeNote;
                    alert(state.notes[activeNoteIndex].title + " is saved")
                    return;
                }
                if (state.activeNote.title.trim() !== "" & state.activeNote.text.trim() !== "") {
                    console.log("Saving New Note")
                    state.notes.push({
                        id: Math.floor(Math.random() * 100000),
                        title: state.activeNote.title,
                        text: state.activeNote.text,
                        categoryId: payload
                    });
                    state.activeNote.title = ""
                    state.activeNote.text = ""
                    state.activeNote.id = ""
                    state.activeNote.categoryId = ""
                }
            },
            onNoteTitleTextChange(state, action) {
                state.activeNote.title = action.payload;
            },
            loadNotesSuccess(state, action) {
                state.notes = action.payload
                console.log("loadSuccess")
            },
            loadNotes(state) {
                state.loading = true;
                console.log("loadNotes")
            },
            sync({ payload }) {
                console.log("sync- slice")
            },
            changeActiveNote(state, { payload }) {
                console.log(payload)
                const activeNoteIndex = state.notes.findIndex((note) => note.id === payload)
                const activeNote = state.notes[activeNoteIndex]
                console.log(state.notes[activeNoteIndex])
                state.activeNote.title = activeNote.title
                state.activeNote.text = activeNote.text
                state.activeNote.id = activeNote.id
                state.activeNote.categoryId = activeNote.categoryId
            },
            clearActiveNote(state) {
                state.activeNote.text = "";
                state.activeNote.title = ""
                state.activeNote.id = ""
                state.activeNote.categoryId = "";
            },
            searchNote(state, { payload }) {
                state.searchValue = payload;
            }

        },
    }
);

export const noteActions = noteS.actions;
export default noteS.reducer;