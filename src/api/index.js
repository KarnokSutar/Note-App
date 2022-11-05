export function requestNotes() {
    return new Promise((resolve) => {
        const notes = localStorage.getItem("notes" || [])
        resolve(JSON.parse(notes));
    });
}

export function requestCategories() {
    return new Promise((resolve) => {
        const categories = localStorage.getItem("categories" || [])

        resolve(JSON.parse(categories));
    });
}


export function saveData({ notes, categories }) {
    return new Promise((resolve) => {
        localStorage.setItem("notes", JSON.stringify(notes));
        localStorage.setItem("categories", JSON.stringify(categories));
        console.log(notes)
        resolve({
            categories: JSON.parse(localStorage.getItem('categories') || '[]'),
            notes: JSON.parse(localStorage.getItem('notes') || '[]'),
        })
            ;
    })
}

