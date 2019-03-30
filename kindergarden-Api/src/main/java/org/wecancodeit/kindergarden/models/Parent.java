package org.wecancodeit.kindergarden.models;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Parent {


@Id
@GeneratedValue
private Long id;
private	String firstName;
private String lastName;
private String phoneNumber;
private String email;

@OneToMany(mappedBy ="parent")
private Collection<Child> childrens;

public Parent() {}


public Parent(String firstName, String lastName, String phoneNumber, String email) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	this.email = email;
	
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
public String getPhoneNumber() {
	return phoneNumber;
}
public String getEmail() {
	return email;
}

public Collection<Child> getChild() {
	return childrens;
}
@Override
public String toString() {
	return "Parent [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber=" + phoneNumber
			+ ", email=" + email + ", children=" + childrens + "]";
}
	
}
