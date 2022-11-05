import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    categories: [],
    tempName: "",
    activeCategoryID: ""
}

const category = createSlice(
    {
        name: 'category',
        initialState: intialState,
        reducers: {
            addNewCategory(state) {
                if (state.tempName !== "") {
                    console.log(state.tempName)
                    state.categories.push({ id: Math.floor(Math.random() * 100000), title: state.tempName })
                    console.log(state.categories)
                    state.tempName = "";
                }
            },
            updateTempName(state, { payload }) {
                state.tempName = payload;
            },
            setActiveCategory(state, { payload }) {
                state.activeCategoryID = payload;
            },
            loadCategories() {
                console.log("loadCategories")
            },
            loadCategoriesSuccess(state, { payload }) {
                console.log("loadCategorySuccess")
                state.categories = payload;
            }
        }
    })

export const categoryAction = category.actions;
export default category.reducer;
