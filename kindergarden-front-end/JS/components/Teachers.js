import'../../CSS/index.css'

export default function Teachers(teachers) {
    return `
      
       <div class = "teacher__list"> 
       <h1>Teachers</h1>
        <ul class="teachers">
            ${teachers.map(teacher => {
        return `
                    <li class="teacher">
                        <h3 class="teacher__teacherName" id="${teacher.id}">${teacher.firstName} ${teacher.lastName}</h3>                     
                    </li>
                    `
    }).join('')}
            </ul>
            <section class="add__teacher">
            <h3>Add Teacher</h3>
            <input type="text" class="add__firstName" placeholder="first name">
            <input type="text" class="add__lastName" placeholder="last name">
            <input type="text" class="add__subjectName" placeholder="subject name">
            <input type="text" class="add__studentsCount" placeholder="number of students">
            <button class="add__teacher__button">Add Teacher</button>
        </section>
        </div> 
            `
}