package com.lichon.ProjectAssistant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lichon.ProjectAssistant.entity.Subtask;
import com.lichon.ProjectAssistant.repository.SubtaskRepository;

@RestController
@RequestMapping("/subtasks")
public class SubtaskController {

	@Autowired
	private SubtaskRepository subtaskRepository;
	
	@GetMapping("")
	private List<Subtask> getAllSubtasks() {
		return subtaskRepository.findAll();
	}
}
