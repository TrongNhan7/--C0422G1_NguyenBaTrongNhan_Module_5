package com.codegym.service;

import com.codegym.model.DiaDiem;

import java.util.List;

public interface IDiaDiemService {
    List<DiaDiem> findAllDiaDiem();

    DiaDiem findById(Integer id);
}
