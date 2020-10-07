package com.svscientific.datamanagement.repository;

import com.svscientific.datamanagement.models.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login,Long> {
    void findByUsernameAndPassword(String username,String password);
}
