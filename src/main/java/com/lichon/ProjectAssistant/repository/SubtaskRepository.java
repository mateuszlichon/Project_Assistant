package com.lichon.ProjectAssistant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lichon.ProjectAssistant.entity.Subtask;

public interface SubtaskRepository extends JpaRepository<Subtask, Long> {

}
