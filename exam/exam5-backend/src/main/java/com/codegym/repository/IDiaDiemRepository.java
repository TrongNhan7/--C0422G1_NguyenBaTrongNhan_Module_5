package com.codegym.repository;

import com.codegym.model.DiaDiem;
import com.codegym.model.NhaXe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IDiaDiemRepository extends JpaRepository<DiaDiem, Integer> {
    @Query(value = "select * from dia_diem", nativeQuery = true)
    List<DiaDiem> findAllDiaDiem();

    @Query(value = "select dia_diem where dia_diem.id = :id", nativeQuery = true)
    Optional<DiaDiem> findById(@Param("id") Integer id);
}
