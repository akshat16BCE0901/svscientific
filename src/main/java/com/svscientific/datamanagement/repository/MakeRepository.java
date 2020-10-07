package com.svscientific.datamanagement.repository;

import com.svscientific.datamanagement.models.Make;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MakeRepository extends JpaRepository<Make,Long> {
}
