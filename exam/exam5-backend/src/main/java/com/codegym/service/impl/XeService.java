package com.codegym.service.impl;

import com.codegym.model.Xe;
import com.codegym.repository.IXeRepository;
import com.codegym.service.IXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class XeService implements IXeService {
    @Autowired
    private IXeRepository iXeRepository;

    @Override
    public Page<Xe> findAll(Pageable pageable) {
        return iXeRepository.findAllXe(pageable);
    }

    @Override
    public void createXe(Xe xe) {
        iXeRepository.createXe(xe.getBienSoXe(), xe.getDiemDi(), xe.getDiemDen(),
                xe.getGioDi(), xe.getGioDen(), xe.getLoaiXe(), xe.getNhaXe().getId());
    }

    @Override
    public void editXe(Xe xe) {
        iXeRepository.editXe(xe.getBienSoXe(), xe.getLoaiXe(), xe.getGioDi(), xe.getGioDen()
                , xe.getDiemDi(), xe.getDiemDen(), xe.getId());
    }


    @Override
    public Xe findById(int id) {
        return iXeRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(Integer id) {
        iXeRepository.deleteById(id);
    }
}
