package com.codegym.controller;


import com.codegym.model.DiaDiem;
import com.codegym.model.NhaXe;
import com.codegym.model.Xe;
import com.codegym.service.INhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/nhaXeRest")
@CrossOrigin(origins = "*")
public class NhaXeRestController {
    @Autowired
    private INhaXeService iNhaXeService;

    @GetMapping("")
    public ResponseEntity<List<NhaXe>> findAllNhaXe() {
        List<NhaXe> nhaXes = this.iNhaXeService.findAllNhaXe();
        if (nhaXes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(nhaXes, HttpStatus.OK);
        }
    }

    @PatchMapping("/update")
    public ResponseEntity<?> updateNhaXe(@RequestBody NhaXe nhaXe) {
        iNhaXeService.editNhaXe(nhaXe);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<NhaXe> findById(@PathVariable Integer id) {
        NhaXe nhaXe = this.iNhaXeService.findById(id);
        return new ResponseEntity<>(nhaXe, HttpStatus.OK);
    }
}
