import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteActions } from '../slices/note';

function NotePen(){
  const dispatch = useDispatch();
  const activeNote = useSelector((state) => state.note.activeNote);
  function onEnterPress(event){
  if(event.key==="Enter"){
    dispatch(noteActions.addNote())
  } 
  }
// const [textvalue, setValue]= useState("")
    return (
    <div><div className="note-editor-title"
    onKeyDown={onEnterPress}>
<textarea
value={activeNote.title}
rows={1}
placeholder="Title..."
onInput={(e)=> dispatch(noteActions.onNoteTitleTextChange(e.target.value))}></textarea>
  </div>
  
  <div className="note-editor">
    
<textarea
rows={50}
value={activeNote.text}
onInput={(e)=> dispatch(noteActions.onNoteTextChange(e.target.value))}
 placeholder="Your Note..."
 />
  </div>
  </div>)
  
}
export default NotePen;
