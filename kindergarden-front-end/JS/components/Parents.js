// import childrens from './Childs'

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
    `
}