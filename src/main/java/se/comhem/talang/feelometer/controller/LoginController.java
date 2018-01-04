package se.comhem.talang.feelometer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.comhem.talang.feelometer.model.User;
import se.comhem.talang.feelometer.service.LoginService;

@Controller
@RestController
@RequestMapping("login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping
    public ResponseEntity handleLogin (@RequestBody User user) {
        return loginService.handleLogin(user);
    }
}
