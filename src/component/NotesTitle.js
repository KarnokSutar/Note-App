import { useDispatch } from "react-redux";
import { noteActions } from '../slices/note'
function NotesTitle(props) {

    const dispatch = useDispatch();
    function noteClickHandler() {
        dispatch(noteActions.changeActiveNote(props.id))
    }
    return (
        <div onClick={noteClickHandler} className="notelist-each">
            <div className="note-title">
                <div className="truncate-text">{props.title}</div>
            </div></div>
    )
}
export default NotesTitle;