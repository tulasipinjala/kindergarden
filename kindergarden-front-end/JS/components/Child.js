export default function Child(child) {
    return `
    <div class="child__container">
        <h3 class="children__childrenName name">Child: ${child.firstName} ${child.lastName}</h3>
        <h4 class="child__childAge age">Age: ${child.age}</h4>

        
    </div>
            `
}   
