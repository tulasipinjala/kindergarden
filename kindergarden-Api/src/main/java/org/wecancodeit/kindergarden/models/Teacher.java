package org.wecancodeit.kindergarden.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Teacher {
	
	@Id
	@GeneratedValue
	private Long id;
	private String firstName;
	private String lastName;
	private String subjectName;
	private int studentsCount;
	@JsonIgnore
	@ManyToMany(mappedBy="teachers")
	private Collection<Child> childrens;
	@JsonIgnore
	@OneToMany(mappedBy="teacher")
	private Collection<Comment> comments;
	
	public Teacher() {}
	
		
	public Teacher(String firstName, String lastName, String subjectName, int studentsCount) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.subjectName = subjectName;
		this.studentsCount = studentsCount;
		this.childrens = new ArrayList<Child>();
		this.comments = new ArrayList<Comment>();
	
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
	
	public Collection<Child> getChild() {
		return childrens;
	}
	
	public Collection<Comment> getComments() {
		return comments;
	}
	
	public void addCommentToTeacher(Comment comment) {
		 comments.add(comment);
	}

	@Override
	public String toString() {
		return "Teacher [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", subjectName="
				+ subjectName + ", studentsCount=" + studentsCount + ", childrens=" + childrens + "]";
	}



}
