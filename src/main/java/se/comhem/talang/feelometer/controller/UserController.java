package se.comhem.talang.feelometer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import se.comhem.talang.feelometer.model.User;
import se.comhem.talang.feelometer.service.UserService;

@Controller
@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public Iterable<User> findAll() {
       return userService.findAll();
    }

    @GetMapping("/{id}")
    public User findUserById(@PathVariable("id") Long id) {
        return userService.findUserById(id);
    }

    @GetMapping("/login")
    public User findUserByUsername(@RequestParam String username){return userService.findUserByUsername(username);}

    @PostMapping
    public ResponseEntity<User> saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping("/{id}/score")
    public ResponseEntity<User> saveScore(@PathVariable Long id, @RequestParam Integer score) {
        return userService.saveScore(id, score);
    }

    @GetMapping("/{id}/has-posted")
    public Boolean findIfUserHasPosted(@PathVariable Long id) {
        return userService.findIfUserHasPosted(id);
    }

}