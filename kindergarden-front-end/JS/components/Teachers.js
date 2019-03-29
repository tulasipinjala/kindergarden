// import'../../CSS/s.css'

export default function Teachers(teachers) {
    return `
        <ul class="teachers">
            ${teachers.map(teacher => {
        return `
                    <li class="teacher">
                        <h3 class="teacher__teacherName" id="${teacher.id}">${teacher.firstName} ${teacher.lastName}</h3>                     
                    </li>
                    `
    }).join('')}
            </ul>
            `
}