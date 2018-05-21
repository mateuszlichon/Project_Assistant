package com.lichon.ProjectAssistant.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ManagerController {

	@RequestMapping("/manager")
	String home() {
		return "managerAdd";
	}

}
