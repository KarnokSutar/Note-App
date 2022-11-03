import AddCategoryForm from "./AddCategoryForm"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { categoryAction } from "../slices/category";
import {Plus} from 'react-feather'
import { useState } from "react";
import CategoryOption from "./CategoryOption";

function CategoryList (){
    const [showAddCategoryForm, setShowAddCategoryForm] = useState(false)
    console.log("CategoryList")
      const categories = useSelector(state=>state.category.categories)
      const dispatch = useDispatch();
      console.log(categories)
      function submitHandler(event){
        event.preventDefault();
        setShowAddCategoryForm(false)
      dispatch(categoryAction.addNewCategory());
      }
      function updateTempNameHandler(event){
        event.preventDefault();
        dispatch(categoryAction.updateTempName(event.target.value))
      }
      const categoriesList = categories.map(category=>
        <CategoryOption title ={category.title} id = {category.id}/>
    )
    return(<div> 
        <div className="category-title"> <div><h1>Categories</h1></div>
        <div onClick={()=>setShowAddCategoryForm(true)} className="category-button"><Plus/></div></div>
        <div className="category-list">{categoriesList}</div>
    {showAddCategoryForm && <AddCategoryForm submitHandler = {submitHandler} onChange = {updateTempNameHandler}/>}
        </div>
    )
}

export default  CategoryList;