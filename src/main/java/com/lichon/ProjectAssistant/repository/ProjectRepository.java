package com.lichon.ProjectAssistant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lichon.ProjectAssistant.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
