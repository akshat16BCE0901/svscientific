package com.svscientific.datamanagement.services;

import com.svscientific.datamanagement.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired private LoginRepository loginRepository;

    public void login(String username, String password){
        loginRepository.findByUsernameAndPassword(username,password);
    }
}
