// import {
//     ReflexContainer,
//     ReflexSplitter,
//     ReflexElement
//   } from 'react-reflex'
  
//   import 'react-reflex/styles.css'
import Split from 'react-split';

  import AppSidebar from './AppSidebar';
  import NotePen from './NotePen';
  import NotesList from './NotesList';
  import { useSelector, useDispatch } from 'react-redux';
import { noteActions } from '../slices/note';
import { useInterval } from '../hooks';
import { useEffect, useState } from 'react';
import { categoryAction } from '../slices/category';

function NoteApp(){
  const [loadNotes, setLoadNotes]= useState(true)
      const notes = useSelector(states=> states.note.notes)
      const categories = useSelector(states=> states.category.categories)
    const dispatch = useDispatch();
   const activeFolder = useSelector(states=> states.note.activeFolder);
   const _loadNotes = () => dispatch(noteActions.loadNotes());
   const _loadCategories = () => dispatch(categoryAction.loadCategories());
    const _sync = (notes, categories) =>
    dispatch(noteActions.sync({notes, categories}))    
    useEffect(()=>{
      if(loadNotes){_loadNotes();
        _loadCategories();
      }
      setLoadNotes(false)
      console.log("loadNotes-useEffect")
    },[])
    
    useInterval(() => {
      console.log("sync-useInterval")
      _sync(notes, categories)
    }, 50000)
    
    
    return(
    <div className="app dark">
    {/* <ReflexContainer orientation="vertical">
  
          <ReflexElement 
          minSize="150" 
            maxSize="200" 
             className="left-pane">
             <AppSidebar/>
          </ReflexElement>
          <ReflexSplitter propagate={true}/>
  
          <ReflexElement 
          maxSize={`"${sizeValue[0]}"`}
          minSize={`"${sizeValue[1]}"`}
          className="middle-pane">
           <NotesList/>
          </ReflexElement>
          <ReflexSplitter propagate={true}/>
          <ReflexElement
           className="right-pane">
        <NotePen/>
          </ReflexElement>
        </ReflexContainer> */}

<Split
className='split'
sizes ={[30,50,175]}
    minSize={[25,25,100]}
    maxSize={[200,200,900]}
    gutterSize={14}
>
<AppSidebar/>
<div className={activeFolder=== 'NEWNOTE'? "none": ''}><NotesList/></div>
<NotePen/>
</Split>
        
    </div>)
}
export default NoteApp;