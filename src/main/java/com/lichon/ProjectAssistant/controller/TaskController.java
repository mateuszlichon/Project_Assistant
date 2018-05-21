package com.lichon.ProjectAssistant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lichon.ProjectAssistant.entity.Task;
import com.lichon.ProjectAssistant.repository.TaskRepository;

@RestController
@RequestMapping("/tasks")
public class TaskController {
	
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/{id}")
	private Task getTaskById(@PathVariable long id) {
		return taskRepository.getOne(id);
	}

}
