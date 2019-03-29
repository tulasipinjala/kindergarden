package org.wecancodeit.kindergarden.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.kindergarden.models.Child;
import org.wecancodeit.kindergarden.repositories.ChildRepository;

@RestController
public class ChildController {
	
@Resource
ChildRepository childRepo;

@GetMapping(("/children"))
public Collection<Child> getChildren() {
	return (Collection<Child>) childRepo.findAll();
}

	
	

}
