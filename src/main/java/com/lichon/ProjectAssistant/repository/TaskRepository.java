package com.lichon.ProjectAssistant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lichon.ProjectAssistant.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

	List<Task> findAllByProjectId(long id);

}
