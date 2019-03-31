export default function Childrens(childrens) {
    return `
   
    <div class = "children__list"> 
    <h1>Children</h1>
        <ul class="childrens">
            ${childrens.map(children => {
        return `
                    <li class="children">
                        <h4 class="children__childrenName" id="${children.id}">${children.firstName} ${children.lastName}</h4>                      
                    </li>
                `
    }).join('')}
        </ul>
        <section class="add__child">
        <h3>Add Child</h3>
        
            <input type="text" class="add__firstName" placeholder="first name">
            <input type="text" class="add__lastName" placeholder="last name">
            <input type="text" class="add__age" placeholder="age">
            <input type="text" class="add___teacher" placeholder="teacher">
            <button class="add__child__button">Add Child</button>
        </section> 
    `
}