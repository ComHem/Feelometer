package se.comhem.talang.feelometer.service;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import se.comhem.talang.feelometer.model.User;
import se.comhem.talang.feelometer.repository.UserRepository;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<User> handleLogin (User user) {
        User userInDB = userRepository.findUserByUsername(user.getUsername());
       if(user.getUsername().equals(userInDB.getUsername())
               && BCrypt.checkpw(user.getPassword(), userInDB.getPassword())) {
           return new ResponseEntity<>(userInDB, HttpStatus.OK);
       }
       return new ResponseEntity<>(userInDB, HttpStatus.UNAUTHORIZED);
    }

}
