package com.lichon.ProjectAssistant.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Beneficiary {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String name;
	
	@OneToMany(mappedBy="beneficiary", cascade = CascadeType.ALL, orphanRemoval=true)
	@JsonManagedReference
	private Set<Project> project;

	public Beneficiary() {
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

	public Set<Project> getProject() {
		return project;
	}

	public void setProject(Set<Project> project) {
		this.project = project;
	}
	
}
