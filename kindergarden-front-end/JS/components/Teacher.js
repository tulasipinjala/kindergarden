import Childs from './Childs'
import Comments from './Comments'
import Comment from './Comment'


export default function Teacher(teacher) {
    return `
    <div class="teacher__container">
        <h3 class="teacher__teacherName name">Teacher: ${teacher.firstName} ${teacher.lastName}</h3>
        <h4 class="teacher__teacherSubjectName Subject">Subject: ${teacher.subjectName}</h4>
        <h4 class="teacher__teacherStudentsCount email">Number of Students: ${teacher.studentsCount}</h4>
        
       
        <ul class="children">
         
        <li class="children">${Childs(teacher.child)}</li>
    </ul>
     </div>
            `
}       