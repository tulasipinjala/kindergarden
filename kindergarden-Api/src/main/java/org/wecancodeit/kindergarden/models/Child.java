package org.wecancodeit.kindergarden.models;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Child {
	
	
@Id
@GeneratedValue
private Long id;

private String firstName;
private String lastName;
private String age;

@ManyToOne
private Parent parent;
@ManyToMany(mappedBy = "children")
private Collection<Teacher> teachers;

public Child() {}


public Child(String firstName, String lastName, String age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
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
public String getAge() {
	return age;
}
public Parent getParent() {
	return parent;
}

public Collection<Teacher> getTeachers() {
	return teachers;
}
@Override
public String toString() {
	return "Child [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + ", parent="
			+ parent + "]";
}


}
