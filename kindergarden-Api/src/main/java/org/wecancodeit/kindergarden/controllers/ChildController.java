package org.wecancodeit.kindergarden.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.kindergarden.models.Child;
import org.wecancodeit.kindergarden.repositories.ChildRepository;

@CrossOrigin
@RestController
public class ChildController {
	
@Resource
ChildRepository childRepo;

@GetMapping(("/children"))
public Collection<Child> getChildren() {
	return (Collection<Child>) childRepo.findAll();
}

@GetMapping("/childrens/{id}")
public Child getChild(@PathVariable Long id) {
	return childRepo.findById(id).get(); 
}

@PostMapping("/childrens/add{id}")
public Collection<Child> addChild(@PathVariable Long id,@RequestBody String body) throws JSONException{
 JSONObject json = new JSONObject(body);
 String firstName = json.getString("firstName");
 String lastName = json.getString("lastName");
 String age = json.getString("age");
 String teacher = json.getString("teacher");
 Child childToAdd = childRepo.findById(id).get();
 childRepo.save(new Child());
 return (Collection<Child>) childRepo.findAll();
}
}

	


