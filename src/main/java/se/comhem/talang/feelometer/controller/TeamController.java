package se.comhem.talang.feelometer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.comhem.talang.feelometer.model.Team;
import se.comhem.talang.feelometer.service.TeamService;

@RestController
@RequestMapping("team")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @GetMapping
    public Iterable<Team> findAll() {
        return teamService.findAll();
    }

    @GetMapping("/{id}")
    public Team findTeamById(@PathVariable("id")Long id) {
        return teamService.findTeamById(id);
    }

    @PostMapping
    public Team saveTeam(@RequestBody Team team) {
        return teamService.saveTeam(team);
    }

}
