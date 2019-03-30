function addParents() {
    return `
    <section class="add__parent">
        <h3>Add Parent</h3>
        
            <input type="select" class="add__firstName" placeholder="first name">
            <input type="text" class="add__lastName" placeholder="last name">
            <input type="select" class="add__phoneNumber" placeholder="phone number">
            <input type="text" class="add__email" placeholder="email">
            <button class="add__parent__button">Add Parent</button>
        </section> 
        `
}

function addChildrens() {
    return `
    <section class="add__child">
        <h3>Add Child</h3>
        
            <input type="text" class="add__firstName" placeholder="first name">
            <input type="text" class="add__lastName" placeholder="last name">
            <input type="text" class="add__age" placeholder="age">
            <input type="text" class="add__teacher" placeholder="teacher">
            <button class="add__child__button">Add Child</button>
        </section> 
        `
}




function addTeachers() {
    return `
    <section class="add__teacher">
        <h3>Add Teacher</h3>
        
            <input type="text" class="add__firstName" placeholder="first name">
            <input type="text" class="add__lastName" placeholder="last name">
            <input type="text" class="add__subjectName" placeholder="subject name">
            <input type="text" class="add__studentsCount" placeholder="number of students">
            <button class="add__teacher__button">Add Teacher</button>
        </section> 
        `
}

export default {
    addParents, addChildrens, addTeachers
}
