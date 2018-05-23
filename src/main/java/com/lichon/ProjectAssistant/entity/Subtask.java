package com.lichon.ProjectAssistant.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Subtask {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String name;

	private String city;

	private int numberOfParticipants;

	private int numberOfHours;

	@ManyToOne
	private ExecutingEntity executingEntity;

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	private Set<Trainer> trainer;

	public Subtask() {
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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getNumberOfParticipants() {
		return numberOfParticipants;
	}

	public void setNumberOfParticipants(int numberOfParticipants) {
		this.numberOfParticipants = numberOfParticipants;
	}

	public int getNumberOfHours() {
		return numberOfHours;
	}

	public void setNumberOfHours(int numberOfHours) {
		this.numberOfHours = numberOfHours;
	}

	public ExecutingEntity getExecutingEntity() {
		return executingEntity;
	}

	public void setExecutingEntity(ExecutingEntity executingEntity) {
		this.executingEntity = executingEntity;
	}

	public Set<Trainer> getTrainer() {
		return trainer;
	}

	public void setTrainer(Set<Trainer> trainer) {
		this.trainer = trainer;
	}

}
