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

import com.lichon.ProjectAssistant.entity.Beneficiary;
import com.lichon.ProjectAssistant.entity.Project;
import com.lichon.ProjectAssistant.repository.BeneficiaryRepository;

@CrossOrigin
@RestController
@RequestMapping("/beneficiaries")
public class BeneficiaryController {

	@Autowired
	private BeneficiaryRepository beneficiaryRepository;

	@GetMapping("")
	private List<Beneficiary> getAllBeneficiaries() {
		return beneficiaryRepository.findAll();
	}

	@GetMapping("/{id}")
	private Optional<Beneficiary> getBeneficiaryById(@PathVariable long id) {
		return beneficiaryRepository.findById(id);
	}

	@PostMapping("")
	private void createBeneficiary(@RequestBody Beneficiary beneficiary) {
		beneficiaryRepository.save(beneficiary);
	}
	
	@PutMapping("")
	private void updateBeneficiary(@RequestBody Beneficiary beneficiary) {
		beneficiaryRepository.save(beneficiary);
	}

	@DeleteMapping(value = "/{id}")
	private void deleteTask(@PathVariable long id) {
		Beneficiary beneficiary = beneficiaryRepository.getOne(id);
		beneficiaryRepository.delete(beneficiary);
	}

}
