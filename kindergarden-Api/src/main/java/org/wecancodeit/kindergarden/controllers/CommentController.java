package org.wecancodeit.kindergarden.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.kindergarden.models.Comment;
import org.wecancodeit.kindergarden.models.Teacher;
import org.wecancodeit.kindergarden.repositories.CommentRepository;
import org.wecancodeit.kindergarden.repositories.TeacherRepository;


@CrossOrigin
@RestController


public class CommentController {
	
	@Resource
	CommentRepository commentRepo;
	@Resource
	TeacherRepository teacherRepo;
	
	@GetMapping("/comments")
	public Collection<Comment> getComments() {
		return (Collection<Comment>)commentRepo.findAll();
	}

	@GetMapping("/comments/{id}")
	public Comment viewSingleComment(@PathVariable Long id) {
		return commentRepo.findById(id).get();
	}
	
	@PostMapping("/comments/add")
	public Collection<Comment> addComment(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		String content = json.getString("content");
		commentRepo.save(new Comment(content));
		return (Collection<Comment>) commentRepo.findAll();
	}
	
	
	@PostMapping("/comments/update/{id}")
	public Comment updateComment(@PathVariable Long id, @RequestBody String body) throws JSONException {
		Comment commentToReplace = commentRepo.findById(id).get();
		JSONObject replaceComment = new JSONObject(body);
		String newContent = replaceComment.getString("newContent");
		commentToReplace.updateContent(newContent);
		commentRepo.save(commentToReplace);
		return commentToReplace;
	}
	
	@DeleteMapping("/comments/delete/{id}")
	public void deleteComment(@PathVariable Long id) {
		Comment commentToDelete = commentRepo.findById(id).get();
		Teacher teacher = commentToDelete.getTeacher();
		commentRepo.delete(commentToDelete);
		
	}

}


