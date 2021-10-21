package com.example.examintra.repository;

import com.example.examintra.model.CoupDeDee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoupDeDeeRepository extends JpaRepository<CoupDeDee, Integer> {

}
