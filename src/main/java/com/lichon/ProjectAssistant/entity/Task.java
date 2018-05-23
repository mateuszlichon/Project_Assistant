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
import javax.persistence.OneToMany;

@Entity
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String name;

	private int groupAmount;

	private int participantAmount;

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	private Set<Partner> partner;

	@OneToMany
	private Set<Subtask> subtask;

	@ManyToOne
	private Project project;

	public Task() {
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

	public Set<Partner> getPartner() {
		return partner;
	}

	public void setPartner(Set<Partner> partner) {
		this.partner = partner;
	}

	public Set<Subtask> getSubtask() {
		return subtask;
	}

	public void setSubtask(Set<Subtask> subtask) {
		this.subtask = subtask;
	}

	public int getGroupAmount() {
		return groupAmount;
	}

	public void setGroupAmount(int groupAmount) {
		this.groupAmount = groupAmount;
	}

	public int getParticipantAmount() {
		return participantAmount;
	}

	public void setParticipantAmount(int participantAmount) {
		this.participantAmount = participantAmount;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

}
