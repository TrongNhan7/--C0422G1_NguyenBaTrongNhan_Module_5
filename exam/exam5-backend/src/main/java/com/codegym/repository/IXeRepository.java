package com.codegym.repository;

import com.codegym.model.NhaXe;
import com.codegym.model.Xe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Optional;

public interface IXeRepository extends JpaRepository<Xe, Integer> {

    @Query(value = "select * from xe", nativeQuery = true,
            countQuery = "select count(*) from (select * from xe) xe")
    Page<Xe> findAllXe(Pageable pageable);

    @Query(value = "select * from xe where xe.id=:id", nativeQuery = true)
    Optional<Xe> findById(@Param("id") Integer id);

    @Transactional
    @Modifying
    @Query(value = "update xe set xe.bien_so_xe=?1,xe.loai_xe=?2,xe.gio_di=?3,xe.gio_den=?4"
            + ",xe.diem_di=?5,xe.diem_den=?6 where xe.id=?7", nativeQuery = true)
    void editXe(String bienSoXe, String loaiXe, String gioDi, String gioDen, String diemDi, String diemDen, Integer id);

    @Transactional
    @Modifying
    @Query(value = "insert into xe(xe.bien_so_xe,xe.diem_di,xe.diem_den,xe.gio_di,xe.gio_den,xe.loai_xe,xe.nha_xe_id)" +
            " values (?1,?2,?3,?4,?5,?6,?7)", nativeQuery = true)
    void createXe(String bienSoXe, String diemDi, String diemDen, String gioDi, String gioDen, String loaiXe, Integer nhaXeId);

}
