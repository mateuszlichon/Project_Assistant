package com.lichon.ProjectAssistant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lichon.ProjectAssistant.entity.Project;
import com.lichon.ProjectAssistant.repository.ProjectRepository;

@RestController
@RequestMapping("/projects")
public class ProjectController {

	@Autowired
	private ProjectRepository projectRepository;;

	@GetMapping("")
	private List<Project> getAllProjects() {
		return projectRepository.findAll();
	}
	
	@GetMapping("/beneficiary/{id}")
	private List<Project> getProjectsByBeneficiary(@PathVariable long id) {
		return projectRepository.findAllByBeneficiaryId(id);
	}
}
