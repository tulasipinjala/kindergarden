import Childs from './Childs'


export default function Parent(parent) {
    return `
    <div class="parent__container">
        <h3 class="parent__parentName name">Parent: ${parent.firstName} ${parent.lastName}</h3>
        <h4 class="parent__parentPhoneNumber phone">Phone: ${parent.phoneNumber}</h4>
        <h4 class="parent__parentEmail email">e-mail: ${parent.email}</h4>
 
        

        <section class="add__child">
        <input type="text" class="add__firstName" placeholder="first name">
        <input type="text" class="add__lastName" placeholder="last name">
        <input type="select" class="add__age" placeholder="age">
            <button class="add__child__button" id="${parent.id}">Add Child</button>
        </section>
    </div>
            `
}       