package com.codegym.service;

import com.codegym.model.NhaXe;

import java.util.List;

public interface INhaXeService {
    List<NhaXe> findAllNhaXe();

    NhaXe findById(Integer id);

    void editNhaXe(NhaXe nhaXe);
}
