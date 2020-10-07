package com.svscientific.datamanagement.controllers;

import com.svscientific.datamanagement.models.Login;
import com.svscientific.datamanagement.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired private LoginService loginService;

    @RequestMapping("/verifyandlogin")
    public void login(@RequestBody Login login){
        loginService.login(login.getUsername(),login.getPassword());
    }
}
