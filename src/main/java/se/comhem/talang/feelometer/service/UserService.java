package se.comhem.talang.feelometer.service;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import se.comhem.talang.feelometer.model.Score;
import se.comhem.talang.feelometer.model.User;
import se.comhem.talang.feelometer.repository.UserRepository;

import java.util.stream.StreamSupport;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Iterable<User> findAll()  {
        return userRepository.findAll();
    }

    public User findUserById(Long id){
        return userRepository.findOne(id);
    }

    public User findUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }


    public ResponseEntity<User> saveUser(User user) {
        Iterable<User> users = findAll();
        boolean userExists = StreamSupport.stream(users.spliterator(), false)
                .anyMatch(u -> u.getUsername().equals(user.getUsername()));

        if(!userExists){
            String pass = user.getPassword();
            String hashed = BCrypt.hashpw(pass, BCrypt.gensalt());
            user.setPassword(hashed);

            return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    public ResponseEntity<User> saveScore(Long id, Integer score) {
        if(findIfUserHasPosted(id)) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        User user = userRepository.findOne(id);
        Score userScore = new Score(score);
        userScore.setUser(user);
        user.addScore(userScore );

        return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
    }

    public Boolean findIfUserHasPosted(Long userId) {
        return userRepository.findIfUserHasPosted(userId) == null ? false : true;
    }

}
