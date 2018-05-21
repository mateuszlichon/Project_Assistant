package com.lichon.ProjectAssistant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lichon.ProjectAssistant.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
