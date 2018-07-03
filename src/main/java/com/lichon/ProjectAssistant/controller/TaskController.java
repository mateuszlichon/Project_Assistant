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

import com.lichon.ProjectAssistant.entity.Task;
import com.lichon.ProjectAssistant.repository.TaskRepository;

@CrossOrigin
@RestController
@RequestMapping("/tasks")
public class TaskController {
	
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/{id}")
	private Optional<Task> getTaskById(@PathVariable long id) {
		return taskRepository.findById(id);
	}
	
	@GetMapping("/project/{id}")
	private List<Task> getTasksByProjectId(@PathVariable long id) {
		return taskRepository.findAllByProjectId(id);
	}
	
	@PostMapping("")
	private void createTask(@RequestBody Task task) {
		taskRepository.save(task);
	}
	
	@PutMapping("")
	private void updateBeneficiary(@RequestBody Task task) {
		taskRepository.save(task);
	}
	
	@DeleteMapping(value = "/{id}")
	private void deleteTask(@PathVariable long id) {
		Task task = taskRepository.getOne(id);
		taskRepository.delete(task);
	}

}
