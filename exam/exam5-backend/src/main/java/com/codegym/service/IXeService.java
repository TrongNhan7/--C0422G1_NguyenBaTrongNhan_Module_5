package com.codegym.service;

import com.codegym.model.Xe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IXeService {

    Page<Xe> findAll(String keyword, Pageable pageable);

    void createXe(Xe xe);

    void editXe(Xe xe);

    Xe findById(int id);

    void deleteById(Integer id);
}
