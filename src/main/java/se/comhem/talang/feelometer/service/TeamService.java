package se.comhem.talang.feelometer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.comhem.talang.feelometer.model.Team;
import se.comhem.talang.feelometer.repository.TeamRepository;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    public Team findTeamById(Long id) {
        return teamRepository.findOne(id);
    }

    public Iterable<Team> findAll() {
        return teamRepository.findAll();
    }

    public Team saveTeam(Team team) {
        return teamRepository.save(team);
    }

}


