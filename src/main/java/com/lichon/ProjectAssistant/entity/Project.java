package com.lichon.ProjectAssistant.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String name;

	private String Voivodeship;

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	private Set<Beneficiary> beneficiary;

	public Project() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getVoivodeship() {
		return Voivodeship;
	}

	public void setVoivodeship(String voivodeship) {
		Voivodeship = voivodeship;
	}

	public Set<Beneficiary> getBeneficiary() {
		return beneficiary;
	}

	public void setBeneficiary(Set<Beneficiary> beneficiary) {
		this.beneficiary = beneficiary;
	}

}
