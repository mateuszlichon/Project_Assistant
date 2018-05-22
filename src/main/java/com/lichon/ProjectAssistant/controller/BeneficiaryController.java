package com.lichon.ProjectAssistant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lichon.ProjectAssistant.entity.Beneficiary;
import com.lichon.ProjectAssistant.repository.BeneficiaryRepository;

@RestController
@RequestMapping("/beneficiaries")
public class BeneficiaryController {

	@Autowired
	private BeneficiaryRepository beneficiaryRepository;

	@GetMapping("")
	private List<Beneficiary> getAllBeneficiaries() {
		return beneficiaryRepository.findAll();
	}
	
	@PostMapping("")
	private void createBeneficiary(@RequestBody Beneficiary beneficiary) {
		beneficiaryRepository.save(beneficiary);
	}

}
