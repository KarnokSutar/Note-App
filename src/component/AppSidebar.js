import { Crosshair, Bell, Battery, Book, Save} from "react-feather";
import React from "react";
import { noteActions } from "../slices/note";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";

function AppSidebar(){
        const dispatch =useDispatch();
        const activeCategoryID = useSelector(state=> state.category.activeCategoryID)
        function newNoteClickHandler(){
                dispatch(noteActions.onActiveFolderChange('NEWNOTE'))
                dispatch(noteActions.clearActiveNote())
        }
        function notesClickHandler(){
                dispatch(noteActions.onActiveFolderChange('NOTES'));
                dispatch(noteActions.clearActiveNote())
        }

return(
    <aside className="app-sidebar">
        <button onClick={newNoteClickHandler} className="action-button">
        <Crosshair size={18}
        className="action-button-icon"
        aria-hidden="true"
        focusable="false"/>
        <span>New Note</span>
        </button>
        <section className="app-sidebar-main">
 <button className="app-sidebar-wrapper"
 onClick={notesClickHandler}>
 <div className='app-sidebar-link'>
<Bell size={18}
        className="action-button-icon"
        aria-hidden="true"
        focusable="false"/>
<span style={{marginLeft : "10px"}}>Notes</span></div>
</button> 
<button className="app-sidebar-wrapper"
onClick={()=>dispatch(noteActions.onActiveFolderChange('DESK'))}>
<div className='app-sidebar-link' > 
<Book size={18}
        className="action-sidebar-icon"
        aria-hidden="true"
        focusable="false"/>
       <span style={{marginLeft : "10px"}}>Desk</span>  </div>
</button>
 <button className="app-sidebar-wrapper">
 <div className='app-sidebar-link'>
<Battery size={18}
        className="action-sidebar-icon"
        aria-hidden="true"
        focusable="false"/>
      <span style={{marginLeft : "10px"}}>Projects</span></div>
</button> 
<button onClick={()=> dispatch(noteActions.addNote(activeCategoryID))} className="app-sidebar-wrapper">
 <div className='app-sidebar-link'>
<Save size={18}
        className="action-sidebar-icon"
        aria-hidden="true"
        focusable="false"/>
       <span style={{marginLeft : "10px"}}>Save</span> </div>
</button>

<CategoryList/>
        </section>
    </aside>
)
}
export default AppSidebar;