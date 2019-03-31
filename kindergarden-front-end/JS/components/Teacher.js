import Childs from './Childs'
import Comments from './Comments'


export default function Teacher(teacher) {
    return `
    <div class="teacher__container">
        <h3 class="teacher__teacherName name">Teacher: ${teacher.firstName} ${teacher.lastName}</h3>
        <h4 class="teacher__teacherSubjectName Subject">Subject: ${teacher.subjectName}</h4>
        <h4 class="teacher__teacherStudentsCount email">Number of Students: ${teacher.studentsCount}</h4>
        <h4 class="teacher__teacherComment>Comment: ${Comments.content}</h4>
       

        <section class="add__child">
        <input type="text" class="add__firstName" placeholder="first name">
        <input type="text" class="add__lastName" placeholder="last name">
        <input type="text" class="add__age" placeholder="age">
            <button class="add__child__button" id="${teacher.id}">Add Student</button>
        </section>

        <section class="add__comment">
        <input type="text" class="add__content" placeholder="comment">
            <button class="add__comment__button">Add Comment</button>
        </section>

    

    </div>
            `
}       