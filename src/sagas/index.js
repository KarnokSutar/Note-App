import { requestNotes, saveData, requestCategories } from '../api';
import { noteActions } from '../slices/note'
import { all, put, takeLatest } from 'redux-saga/effects'
import { categoryAction } from '../slices/category';


function* fetchNotes() {
    console.log("fetchNotes")
    let data;
    try {
        data = yield requestNotes()
        console.log(data)
        if (data !== null) { yield put(noteActions.loadNotesSuccess(data)) }
    }
    catch (err) {
        console.log(err)
    }
}
function* fetchCategories() {
    console.log("fetchCaategories")
    let data;
    try {
        data = yield requestCategories()
        console.log(data)
        if (data !== null) { yield put(categoryAction.loadCategoriesSuccess(data)) }
    }
    catch (err) {
        console.log(err)
    }
}

function* syncData({ payload }) {
    console.log("syncNote")
    console.log(payload)
    // yield axios.post('https://todoapp-b9195-default-rtdb.firebaseio.com/notes.json', payload)

    yield saveData(payload)
}

function* rootSaga() {
    yield all([
        takeLatest(noteActions.loadNotes.type, fetchNotes),
        takeLatest(categoryAction.loadCategories, fetchCategories),
        takeLatest(noteActions.sync.type, syncData)
    ])
}
export default rootSaga;