package com.svscientific.datamanagement.repository;

import com.svscientific.datamanagement.models.CounterParty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CounterPartyRepository extends JpaRepository<CounterParty,Long> {
}
