import Childs from './Childs'


export default function Parent(parent) {
    return `
    <div class="parent__container">
        <h3 class="parent__parentName name">Parent: ${parent.firstName} ${parent.lastName}</h3>
        <h4 class="parent__parentPhoneNumber phone">Phone: ${parent.phoneNumber}</h4>
        <h4 class="parent__parentEmail email">e-mail: ${parent.email}</h4>
    
        <ul class="children">
         
            <li class="children">${Childs(parent.child)}</li>
        </ul>

        

        
    </div>
            `
}       