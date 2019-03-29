package org.wecancodeit.kindergarden.models;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Teacher {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String firstName;
	private String lastName;
	private String subjectName;
	private int studentsCount;
	
	@ManyToMany
	private Collection<Child> children;
	
	public Teacher() {}
	
	public Teacher(String firstName, String lastName, String subjectName, int studentsCount) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.subjectName = subjectName;
		this.studentsCount = studentsCount;
	
	}
	
	public Long getId() {
		return id;
	}
	public String getFirstName() {
		return firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public String getSubjectName() {
		return subjectName;
	}
	public int getStudentsCount() {
		return studentsCount;
	}
	
	@Override
	public String toString() {
		return "Teacher [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", subjectName="
				+ subjectName + ", studentsCount=" + studentsCount + ", childrens=" + children + "]";
	}
	

}
