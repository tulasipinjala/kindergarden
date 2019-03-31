package org.wecancodeit.kindergarden.models;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Comment {

	@Id
	@GeneratedValue
	private Long id;

	@Lob
	private String content;
	@ManyToOne
	@JsonIgnore
	private Teacher teacher;

	public Comment() {
	}

	public Comment(String content, Teacher teacher) {
		this.content = content;
		this.teacher = teacher;
	}

	public Comment(String content) {
		this.content = content;
	}

	public Long getId() {
		return id;
	}

	public String getContent() {
		return content;
	}

	public Teacher getTeacher() {
		return teacher;
	}

	public void updateContent(String newContent) {
		this.content = newContent;
	}

}
