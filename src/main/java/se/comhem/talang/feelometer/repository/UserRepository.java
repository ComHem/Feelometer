package se.comhem.talang.feelometer.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import se.comhem.talang.feelometer.model.Score;
import se.comhem.talang.feelometer.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.username = ?1")
    User findUserByUsername(String username);

    @Query("SELECT s FROM Score s WHERE user_id = ?1 AND s.creationDate = current_date")
    Score findIfUserHasPosted(Long userId);
}
