package se.comhem.talang.feelometer.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import se.comhem.talang.feelometer.model.Team;

@Repository
public interface TeamRepository extends CrudRepository<Team, Long> {

}
