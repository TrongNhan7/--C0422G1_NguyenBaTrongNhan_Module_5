package com.codegym.service.impl;

import com.codegym.model.DiaDiem;
import com.codegym.model.NhaXe;
import com.codegym.repository.IDiaDiemRepository;
import com.codegym.repository.INhaXeRepository;
import com.codegym.service.INhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhaXeService implements INhaXeService {
    @Autowired
    private INhaXeRepository iNhaXeRepository;


    @Override
    public List<NhaXe> findAllNhaXe() {
        return this.iNhaXeRepository.findAllDiaDiem();
    }

    @Override
    public NhaXe findById(Integer id) {
        return this.iNhaXeRepository.findById(id).orElse(null);
    }

    @Override
    public void editNhaXe(NhaXe nhaXe) {
        iNhaXeRepository.editNhaXe(nhaXe.getEmail(), nhaXe.getSdt(), nhaXe.getTenNhaXe(), nhaXe.getId());
    }
}
