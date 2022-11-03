import { useDispatch, useSelector} from "react-redux";
import { categoryAction } from "../slices/category";
import { noteActions } from "../slices/note";

function CategoryOption(props){
const activeCategoryID = useSelector(state=> state.category.activeCategoryID)
const dispatch = useDispatch()
    function getClassName(){
if (activeCategoryID === props.id){
    return ("category-list-each active")
} else return ("category-list-each")
}
function categoryOptionClickHandler(){
    dispatch(noteActions.onActiveFolderChange('CATEGORY'))
   dispatch(categoryAction.setActiveCategory(props.id))
   dispatch(noteActions.clearActiveNote())
}
return(
    <div onClick={categoryOptionClickHandler} className={getClassName()} >{props.title}</div>)
}
export default CategoryOption;