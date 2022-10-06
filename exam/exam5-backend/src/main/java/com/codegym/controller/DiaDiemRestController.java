package com.codegym.controller;

import com.codegym.model.DiaDiem;
import com.codegym.model.Xe;
import com.codegym.service.IDiaDiemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/diaDiemRest")
@CrossOrigin(origins = "*")
public class DiaDiemRestController {
    @Autowired
    private IDiaDiemService iDiaDiemService;

    @GetMapping("")
    public ResponseEntity<List<DiaDiem>> findAllDiaDiem() {
        List<DiaDiem> diaDiems = this.iDiaDiemService.findAllDiaDiem();
        if (diaDiems.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(diaDiems, HttpStatus.OK);
        }
    }
}
