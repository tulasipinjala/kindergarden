import events from './utils/events/event-actions'
 import api from './utils/api/api-actions'
import Parents from './components/Parents'
import Teachers from './components/Teachers'
import Childrens from './components/Childs'
import Comments from './components/Comments'
import Parent from './components/Parent'
import Child from './components/Child'
import Teacher from './components/Teacher'
import Comment from './components/Comment'

main()


	 function main() {
		  api.getRequest('http://localhost:8080/parents', parents => {
			  getAppContext().innerHTML 
			  
	 })
		 
	navParent()
	navTeacher()
	navChild() 
	navComment()
    addParents()
    addTeachers()
	addChildrens()
	viewSingleParent()
	viewSingleChild()
	viewSingleTeacher()
	addComments()
	viewSingleComment()
	updateComment()
	deleteSingleComment()
	
}

function navParent() {
	const parentButton = document.querySelector('.nav__parents');
	events.on(parentButton, 'click', ()=> {
		api.getRequest('http://localhost:8080/parents', parents => { 
			getAppContext().innerHTML = Parents(parents)
		
		})
	})
}
function navTeacher() {
	const teacherButton = document.querySelector('.nav__teachers');
	events.on(teacherButton, 'click', ()=> {
		api.getRequest('http://localhost:8080/teachers', teachers => { 
			getAppContext().innerHTML = Teachers(teachers)
		})
	})
}
function navChild() {
	const childButton = document.querySelector('.nav__childrens');
	events.on(childButton, 'click', ()=> {
		api.getRequest('http://localhost:8080/childrens', childrens => { 
			getAppContext().innerHTML = Childrens(childrens)
		})
	})
}
function navComment() {
	const commentButton = document.querySelector('.nav__comments');
	events.on(commentButton, 'click', ()=> {
		api.getRequest('http://localhost:8080/childrens', comments => { 
			getAppContext().innerHTML = Comments(comments)
		})
	})
}

function addParents() {
	events.on(getAppContext(), 'click', ()=> {
		if(event.target.classList.contains('add__parent__button')) {
			const firstName = document.querySelector('.add__firstName').value
            const lastName = document.querySelector('.add__lastName').value
            const phoneNumber = document.querySelector('.add__phoneNumber').value
            const email = document.querySelector('.add__email').value
			api.postRequest('http://localhost:8080/parents/add', {
				firstName : firstName,
                lastName : lastName,
                phoneNumber : phoneNumber,
                email: email
			}, (parents) => getAppContext().innerHTML = Parents(parents))
		}
	})
}

function addTeachers() {
	events.on(getAppContext(), 'click', ()=> {
		if(event.target.classList.contains('add__teacher__button')) {
			const firstName = document.querySelector('.add__firstName').value
            const lastName = document.querySelector('.add__lastName').value
            const subjectName = document.querySelector('.add__subjectName').value
            const studentsCount = document.querySelector('.add__studentsCount').value
			api.postRequest('http://localhost:8080/teachers/add', {
				firstName : firstName,
                lastName : lastName,
                subjectName :subjectName,
                studentsCount:studentsCount
			}, (teachers) => getAppContext().innerHTML = Teachers(teachers))
		}
	})
}
function addComments() {
	events.on(getAppContext(), 'click', () => {
	  if(event.target.classList.contains('add__comment__button')) {
		const content = document.querySelector('.add__comment').value
		api.postRequest('http://localhost:8080/teachers/comments/add', {
		  content: content
		}, (comments) => getAppContext().innerHTML = Comment(comments))
	  }
	})
  }
function addChildrens() {
	events.on(getAppContext(), 'click', ()=> {
		if(event.target.classList.contains('add__child__button')) {
			const firstName = document.querySelector('.add__firstName').value
            const lastName = document.querySelector('.add__lastName').value
            const age = document.querySelector('.add__age').value
			api.postRequest('http://localhost:8080/childrens/add', {
				firstName : firstName,
                lastName : lastName,
                age : age,
			}, (childrens) => getAppContext().innerHTML = Childrens(childrens))
		}
	})
}

function viewSingleParent() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('parent__parentName')) {
			api.getRequest(`http://localhost:8080/parents/ ${event.target.id}`, parent => {
				getAppContext().innerHTML = Parent(parent)
			})
		}
	})
}
function viewSingleChild() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('children__childrenName')) {
			api.getRequest(`http://localhost:8080/childrens/ ${event.target.id}`, child => {
				getAppContext().innerHTML = Child(child)
			})
		}
	})
}
function viewSingleTeacher() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('teacher__teacherName')) {
			api.getRequest(`http://localhost:8080/teachers/ ${event.target.id}`, teacher => {
				getAppContext().innerHTML = Teacher(teacher)
			})
		}
	})
} 
  function viewSingleComment() {
	  events.on(getAppContext(), 'click', () => {
		  if(event.target.classList.contains('comment__commentContent')) {
			  api.getRequest(`http://localhost:8080/teachers/comments/${event.target.id}`, comment => {
				  getAppContext().innerHTML = Comment(comment)
			  })
		  }
	  })
  }
  
  function updateComment() {
	events.on(getAppContext(), 'click', () => {
	  if(event.target.classList.contains('update__comment')) {
		const newContent = event.target.parentElement.querySelector('.update__comment').value
		api.postRequest(`http://localhost:8080/comments/update/${event.target.id}`, {
		  newContent: newContent,
		}, (comment) => getAppContext().innerHTML = Comment(comment))
	  }
	})
  }
  
  function deleteSingleComment() {
	events.on(getAppContext(), 'click', () => {
		  if(event.target.classList.contains('delete__teacher')) {
		api.deleteRequest(`http://localhost:8080/comments/delete/${event.target.id}`, teacher => {
				  getAppContext().innerHTML = Teacher(teacher)
		})
	  }
	})
  }


function getAppContext() {
	return document.querySelector('#app');
 }

