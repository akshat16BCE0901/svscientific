package com.svscientific.datamanagement.repository;

import com.svscientific.datamanagement.models.Quantity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuantityRepository extends JpaRepository<Quantity,String> {
}
