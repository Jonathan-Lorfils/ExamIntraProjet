package com.example.examintra.service;

import com.example.examintra.model.CoupDeDee;
import com.example.examintra.repository.CoupDeDeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CoupDeDeeService {

    CoupDeDeeRepository coupDeDeeRepository;

    public CoupDeDeeService(CoupDeDeeRepository coupDeDeeRepository){
        this.coupDeDeeRepository = coupDeDeeRepository;
    }

    public Optional<CoupDeDee> registerMonitor(CoupDeDee coupDeDee) {
        try {
            return Optional.of(coupDeDeeRepository.save(coupDeDee));
        } catch (Exception exception) {
            return Optional.empty();
        }
    }

    public Optional<List<CoupDeDee>> getAllCoupDeDee() {
        try {
            return Optional.of(coupDeDeeRepository.findAll());
        } catch (Exception exception) {
            return Optional.empty();
        }
    }
}
