package com.svscientific.datamanagement.repository;

import com.svscientific.datamanagement.models.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Orders,Long> {

    @Query(value = "SELECT * FROM Orders orders where orders.purchaseorderid = :purchaseorderid",nativeQuery = true)
    List<Orders> findAllByPurchaseorderid(@Param("purchaseorderid") String purchaseorderid);
}
