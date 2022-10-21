package com.codegym.controller;

import com.codegym.model.Xe;
import com.codegym.service.IDiaDiemService;
import com.codegym.service.INhaXeService;
import com.codegym.service.IXeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/xeRest")
@CrossOrigin
public class XeRestController {

    @Autowired
    private IXeService iXeService;

    @Autowired
    private INhaXeService iNhaXeService;

    @GetMapping("")
    public ResponseEntity<Page<Xe>> findAllXe(@RequestParam(defaultValue = "") String keyword,
                                              @PageableDefault(size = 3) Pageable pageable) {
        Page<Xe> xePage = this.iXeService.findAll(keyword, pageable);
        if (!xePage.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(xePage, HttpStatus.OK);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteXe(@PathVariable("id") Integer id) {
        iXeService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Xe> findById(@PathVariable Integer id) {
        Xe xe = this.iXeService.findById(id);
        return new ResponseEntity<>(xe, HttpStatus.OK);
    }

    @PatchMapping("/update")
    public ResponseEntity<?> updateXe(@RequestBody Xe xe) {
        iXeService.editXe(xe);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createXe(@RequestBody Xe xe) {
        iXeService.createXe(xe);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
