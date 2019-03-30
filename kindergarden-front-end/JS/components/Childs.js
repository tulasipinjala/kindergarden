export default function Childrens(childrens) {
    return `
        <ul class="childrens">
            ${childrens.map(children => {
        return `
                    <li class="children">
                        <h4 class="children__childrenName" id="${children.id}">${children.firstName} ${children.lastName}</h4>                      
                    </li>
                `
    }).join('')}
        </ul>
    `
}