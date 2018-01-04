package se.comhem.talang.feelometer.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.comhem.talang.feelometer.model.*;
import se.comhem.talang.feelometer.service.ScoreService;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("score")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @PostMapping
    public Score saveScore(@RequestBody Score score) {
        return scoreService.saveScore(score);
    }


    @GetMapping("/all-team-score-by-user-and-date")
    public Double findTeamScoreByUser(@RequestParam Long userId, @RequestParam String creationDate) {
        return scoreService.findTeamScoreByUser(userId, creationDate);
    }

    @GetMapping("/team-user-scores")
    public List<Integer> findTeamUserScores(@RequestParam Long userId, @RequestParam String creationDate) {
        return scoreService.findTeamUserScores(userId, creationDate);
    }

    @GetMapping("/team-scores")
    public List<ScoreDTO> findTeamScores(@RequestParam Long teamId, @RequestParam Long userId) {
        return scoreService.findTeamScores(teamId, userId);
    }

    @GetMapping("/all-team-scores")
    public String findAllTeamScores() {
        Map<Date,Map<String, Double>> map = scoreService.findAllTeamScores();
        ObjectMapper mapper = new ObjectMapper();
        ArrayNode nodes = mapper.createArrayNode();
        for(Date d : map.keySet()){
            ObjectNode node = mapper.createObjectNode();
            node.put("date", d.toString());
            for(Map.Entry<String,Double> e: map.get(d).entrySet()){
                node.put(e.getKey(), e.getValue());
            }
            nodes.add(node);
        }

        return nodes.toString();
    }

}
