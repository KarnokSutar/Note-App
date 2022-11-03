
import React from "react";
import { useSelector } from "react-redux";
import NotesTitle from "./NotesTitle";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { noteActions } from "../slices/note";


function NotesList(){
  const dispatch = useDispatch()
const activeCategoryID = useSelector(states=> states.category.activeCategoryID)
  const allNotes = useSelector(states=> states.note.notes)
  const searchValue = useSelector(states=> states.note.searchValue)
  const activeFolder = useSelector(states=> states.note.activeFolder)
 const re = new RegExp(searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
  const isMatch = (result) => re.test(result.title)
  let filteredNotes = allNotes.filter(note=> note.categoryId===activeCategoryID).filter(isMatch)
 function searchNotesHandler(value){
  console.log(value)
  dispatch(noteActions.searchNote(value))
 }
 if (activeFolder==='NOTES'){filteredNotes = allNotes.filter(isMatch)}
  const noteTitle = filteredNotes.map((note)=>{
    return <NotesTitle
    title = {note.title}
    id= {note.id}
    />
  })
    return (<div className="notelist"><aside className="note-sidebar">
    <div className="note-sidebar-header">
<SearchBar searchNotes = {searchNotesHandler}/>
    </div>
    {noteTitle}    
        </aside>
        </div> )  
}

export default NotesList;
