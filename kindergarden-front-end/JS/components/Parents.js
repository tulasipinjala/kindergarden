 import add from './add'

// export default function Parents(parents) {
//     return

//     `
//         <ul class="parents">
//             ${parents.map(parent => {
//         return `
//                     <h4 class="parent__parentName" id="${parent.id}">${parent.firstName} ${parent.lastName}</h4>
//                     `;
//     }).join('')}
//         </ul>
//     `

// }
export default function Parents(parents) {
    return `
        <ul class="parents">
            ${parents.map(parent => {
        return `
                    <li class="parent">
                        <h4 class="parent__parentName" id="${parent.id}">${parent.firstName} ${parent.lastName}</h4>                      
                    </li>
                `
    }).join('')}
        </ul>
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