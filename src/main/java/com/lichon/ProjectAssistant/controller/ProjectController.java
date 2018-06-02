package com.lichon.ProjectAssistant.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lichon.ProjectAssistant.entity.Project;
import com.lichon.ProjectAssistant.repository.ProjectRepository;

@CrossOrigin
@RestController
@RequestMapping("/projects")
public class ProjectController {

	@Autowired
	private ProjectRepository projectRepository;;

	@GetMapping("")
	private List<Project> getAllProjects() {
		return projectRepository.findAll();
	}
	
	@GetMapping("/{id}")
	private Optional<Project> getProjectById(@PathVariable long id) {
		return projectRepository.findById(id);
	}
	
	@GetMapping("/beneficiary/{id}")
	private List<Project> getProjectsByBeneficiary(@PathVariable long id) {
		return projectRepository.findAllByBeneficiaryId(id);
	}
	
	@PostMapping("")
	private void createProject(@RequestBody Project project) {
		projectRepository.save(project);
	}
	
	@PutMapping("")
	private void updateProject(@RequestBody Project project) {
		projectRepository.save(project);
	}
	
	@DeleteMapping(value = "/{id}")
	private void deleteTask(@PathVariable long id) {
		Project project = projectRepository.getOne(id);
		projectRepository.delete(project);
	}
}
