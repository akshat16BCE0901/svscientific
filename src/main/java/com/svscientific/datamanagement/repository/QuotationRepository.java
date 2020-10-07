package com.svscientific.datamanagement.repository;

import com.svscientific.datamanagement.models.Quotation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuotationRepository extends JpaRepository<Quotation,Long> {
}
