package com.codegym.repository;

import com.codegym.model.NhaXe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface INhaXeRepository extends JpaRepository<NhaXe, Integer> {

    @Query(value = "select * from nha_xe", nativeQuery = true)
    List<NhaXe> findAllDiaDiem();

    @Query(value = "select * from nha_xe where nha_xe.id = :id", nativeQuery = true)
    Optional<NhaXe> findById(@Param("id") Integer id);

    @Transactional
    @Modifying
    @Query(value = "update nha_xe as n set n.email=?1,n.sdt=?2,n.ten_nha_xe=?3 where n.id=?4", nativeQuery = true)
    void editNhaXe(String email, String sdt, String tenNhaXe, Integer id);

}
