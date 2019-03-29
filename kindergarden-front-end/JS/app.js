import events from './utils/events/event-actions'
import api from './utils/api/api-actions'

main()

function main() {
	api.getRequest('/parents', parents => {
		getAppContext().innerHTML = Parent(parents)
	})
	navParent()
	navTeacher()
    navChildren() 
    addParents()
    addTeachers()
    addChildrens()
}

function navParent() {
	const parentButton = document.querySelector('.nav__parents');
	events.on(parentButton, 'click', ()=> {
		api.getRequest('/parents', parents => { 
			getAppContext().innerHTML = Parents(parents)
		})
	})
}
function navTeacher() {
	const teacherButton = document.querySelector('.nav__teachers');
	events.on(teacherButton, 'click', ()=> {
		api.getRequest('/teachers', teachers => { 
			getAppContext().innerHTML = Teachers(teachers)
		})
	})
}
function navChildren() {
	const childButton = document.querySelector('.nav__childrens');
	events.on(childButton, 'click', ()=> {
		api.getRequest('/childrens', childrens => { 
			getAppContext().innerHTML = Childrens(childrens)
		})
	})
}

function addParents() {
	events.on(getAppContext(), 'click', ()=> {
		if(event.target.classList.contains('add__parent__button')) {
			const firstName = document.querySelector('.add__firstName').value
            const lastName = document.querySelector('.add__lastName').value
            const phoneNumber = document.querySelector('.add__phoneNumber').value
            const email = document.querySelector('add__email').value
			api.postRequest('/parents/add', {
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
			api.postRequest('/teachers/add', {
				firstName : firstName,
                lastName : lastName,
                subjectName :subjectName,
                studentsCount:studentsCount
			}, (teachers) => getAppContext().innerHTML = Teachers(teachers))
		}
	})
}
function addChildrens() {
	events.on(getAppContext(), 'click', ()=> {
		if(event.target.classList.contains('add__child__button')) {
			const firstName = document.querySelector('.add__firstName').value
            const lastName = document.querySelector('.add__lastName').value
            const age = document.querySelector('.add__age').value
            const teacher = document.querySelector('.add__teacher').value
			api.postRequest('/children/add', {
				firstName : firstName,
                lastName : lastName,
                age : age,
                teacher: teacher
			}, (childrens) => getAppContext().innerHTML = Childrens(childrens))
		}
	})
}
function getAppContext() {
	return document.querySelector('#app')
}
