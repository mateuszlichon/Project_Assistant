package com.lichon.ProjectAssistant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lichon.ProjectAssistant.BeneficiaryRepository;
import com.lichon.ProjectAssistant.entity.Beneficiary;

@RestController
@RequestMapping("/beneficiaries")
public class BeneficiaryController {

	@Autowired
	private BeneficiaryRepository beneficiaryRepository;

	@GetMapping("")
	private List<Beneficiary> getAllBeneficiaries() {
		return beneficiaryRepository.findAll();
	}

}
