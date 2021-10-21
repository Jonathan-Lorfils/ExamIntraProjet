package com.example.examintra.controller;

import com.example.examintra.model.CoupDeDee;
import com.example.examintra.service.CoupDeDeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/coupDeDee")
public class CoupDeDeeController {

    @Autowired
    CoupDeDeeService coupDeDeeService;

    @PostMapping("/add")
    public ResponseEntity<CoupDeDee> subscribe(@RequestBody CoupDeDee monitor) {
        return coupDeDeeService.registerMonitor(monitor)
                .map(coupDeDee1 -> ResponseEntity.status(HttpStatus.CREATED).body(coupDeDee1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/get-all-coupDeDee")
    public ResponseEntity<List<CoupDeDee>> getAllMonitors(){
        return coupDeDeeService.getAllCoupDeDee()
                .map(coupDeDees1 -> ResponseEntity.status(HttpStatus.OK).body(coupDeDees1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
}
