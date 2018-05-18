package com.lichon.ProjectAssistant;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lichon.ProjectAssistant.entity.Beneficiary;

public interface BeneficiaryRepository extends JpaRepository<Beneficiary, Long> {

}
