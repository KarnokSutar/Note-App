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


{/* <CodeMirror
value={noteTitle}
onChange={(value, viewUpdate) => {
   dispatch(noteActions.onNoteTitleTextChange(value))
  }}
  height="10vh"
  li
  theme={myTheme}
  placeholder="Title..."
  options ={
{linenumbers:2}
  }
/> 
 <CodeMirror
value={noteText}
onChange={(value, viewUpdate) => {
   dispatch(noteActions.onNoteTextChange(value))
  }}
  theme={myTheme}
  height="80vh"
  placeholder="Your Note..."
/> */}