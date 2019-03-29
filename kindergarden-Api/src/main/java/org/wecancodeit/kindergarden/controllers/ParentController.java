package org.wecancodeit.kindergarden.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.kindergarden.models.Parent;
import org.wecancodeit.kindergarden.repositories.ParentRepository;

@RestController
public class ParentController {
	
	@Resource
	ParentRepository parentRepo;
	
	@GetMapping("/parents")
	public Collection<Parent> getParents() {
		return(Collection<Parent>) parentRepo.findAll();
	}
	
	

}
