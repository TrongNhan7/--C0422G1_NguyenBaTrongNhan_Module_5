package com.codegym.service.impl;

import com.codegym.model.DiaDiem;
import com.codegym.repository.IDiaDiemRepository;
import com.codegym.service.IDiaDiemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiaDiemService implements IDiaDiemService {
    @Autowired
    private IDiaDiemRepository iDiaDiemRepository;


    @Override
    public List<DiaDiem> findAllDiaDiem() {
        return this.iDiaDiemRepository.findAllDiaDiem();
    }

    @Override
    public DiaDiem findById(Integer id) {
        return this.iDiaDiemRepository.findById(id).orElse(null);
    }
}
