package com.svscientific.datamanagement.repository;

import com.svscientific.datamanagement.models.Material;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialRepository extends JpaRepository<Material,String> {
}
