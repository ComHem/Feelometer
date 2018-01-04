package se.comhem.talang.feelometer.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import se.comhem.talang.feelometer.model.TeamScore;
import se.comhem.talang.feelometer.model.Score;

import java.util.Date;
import java.util.List;

@Repository
public interface ScoreRepository extends CrudRepository<Score, Integer> {

    @Query("SELECT s FROM User u, Score s WHERE team_id= ?1 AND s.user = u.userId AND s.creationDate = ?2")
    List<Score> findScoreByTeamAndDate(Long teamId, Date creationDate);

    @Query("SELECT s.score FROM User u, Score s WHERE team_id= ?1 AND s.user = u.userId AND s.creationDate = ?2")
    List<Integer> findTeamUserScores (Long teamId, Date creationDate);

    @Query("SELECT s FROM User u, Score s WHERE team_id = ?1 AND s.user = u.userId")
    List<Score> findTeamScores (Long teamId);

    @Query("SELECT new se.comhem.talang.feelometer.model.TeamScore(t.teamId, t.teamName, AVG(s.score), s.creationDate) FROM Score AS s LEFT JOIN s.user AS u LEFT JOIN u.team AS t GROUP BY t.teamId, s.creationDate")
    List<TeamScore> findAllTeamScores();

}
