import { useSelector } from "react-redux";

function AddCategoryForm(props){
  const tempName = useSelector(state=> state.category.tempName)
    return(
        <form className="category-form" onSubmit={props.submitHandler}>
      <input
        aria-label="Category name"
        type="text"
        autoFocus
        value={tempName}
        maxLength={20}
        placeholder="New category..."
        onChange={(event) => {
          props.onChange(event)
        }}
        onBlur={(event) => {
            props.submitHandler(event)
        }}
      />
    </form>
    )
}
export default AddCategoryForm;