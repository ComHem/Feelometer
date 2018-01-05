package se.comhem.talang.feelometer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.comhem.talang.feelometer.model.*;
import se.comhem.talang.feelometer.repository.ScoreRepository;
import se.comhem.talang.feelometer.repository.UserRepository;

import java.sql.Date;
import java.time.LocalDate;
import java.util.*;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    @Autowired
    private UserRepository userRepository;

    public Score saveScore(Score score) {
        return scoreRepository.save(score);
    }

    public Double findTeamScoreByUser(Long userId, String creationDate) {
        User user = userRepository.findOne(userId);
        Team team = user.getTeam();
        return calculateTeamScore(scoreRepository.findScoreByTeamAndDate(team.getTeamId(), dateFormatter(creationDate)));
    }

    public List<ScoreDTO> findTeamScores(Long teamId, Long userId) {

        return calculateTeamScoreByDate(scoreRepository.findTeamScores(teamId), userId);
    }

    private Date dateFormatter(String dateToConvert) {
        LocalDate date = LocalDate.parse(dateToConvert);
        return Date.valueOf(date);
    }

    private List<ScoreDTO> calculateTeamScoreByDate(List<Score> teamScores, Long userId) {
        Set<Date> set = new HashSet<>();

        for (Score teamScore : teamScores) {
            set.add(teamScore.getCreationDate());
        }

        List<Date> setList = new ArrayList<>();
        setList.addAll(set);
        List<ScoreDTO> scoreDTOList = new ArrayList<>();

        for(int j = 0; j < set.size(); j++) {
            Double sum = 0.0;
            int divide = 0;
            Integer userScore = null;
            for (Score teamScore : teamScores) {
                if (setList.get(j).equals(teamScore.getCreationDate())) {
                    if(teamScore.getUser().getUserId().equals(userId)){
                        userScore = teamScore.getScore();
                    }
                    divide++;
                    sum = sum + teamScore.getScore();
                }
            }
            scoreDTOList.add(new ScoreDTO(sum/divide, userScore, setList.get(j)));
        }
        scoreDTOList.sort(Comparator.comparing(ScoreDTO::getDate));
        return scoreDTOList;
    }

    private Double calculateTeamScore(List<Score> scoreList) {
        Integer scoreVal = 0;
        for (Score currentScore : scoreList) {
            scoreVal += currentScore.getScore();
        }
        return (double)scoreVal / (scoreList.size());
    }

    public List<Integer> findTeamUserScores(Long userId, String creationDate) {
        User user = userRepository.findOne(userId);
        Team team = user.getTeam();
        return scoreRepository.findTeamUserScores(team.getTeamId(), dateFormatter(creationDate));
    }

    public Map<java.util.Date,Map<String, Double>> findAllTeamScores() {
        List<TeamScore> teamScores = scoreRepository.findAllTeamScores();
        return teamScoreMapper(teamScores);
    }

    private Map<java.util.Date,Map<String, Double>> teamScoreMapper(List<TeamScore> teamScores) {
        /*List<TeamScoreDTO> teamScoreDTOS = new ArrayList<>();

        for(TeamScore currentScore : teamScores){
            if(teamScoreDTOS.size()<1){
                TeamScoreDTO d = new TeamScoreDTO(currentScore.getDate(), new ArrayList<>());
                d.getTeamMapperList().add(new TeamMapper(currentScore.getTeamName(), currentScore.getScore()));
                teamScoreDTOS.add(d);

            }
            else {
                for (TeamScoreDTO dto : teamScoreDTOS)
                    if (dto.getDate() == currentScore.getDate()) {
                        dto.getTeamMapperList().add(new TeamMapper(currentScore.getTeamName(), currentScore.getScore()));
                    } else {
                        if (dto.getTeamMapperList() == null) {
                            dto.setTeamMapperList(new ArrayList<>());
                        }
                        dto.getTeamMapperList().add(new TeamMapper(currentScore.getTeamName(), currentScore.getScore()));
                        teamScoreDTOS.add(dto);
                    }
            }
        }
        return teamScoreDTOS; */
        Map<java.util.Date,Map<String, Double>> map = new TreeMap<>();
        Map<String, Double> preloadNamesForMap = new TreeMap<>();
        for(TeamScore s : teamScores){
            preloadNamesForMap.put(s.getTeamName(), null);
        }
        for(TeamScore teamScore : teamScores){
            if(map.get(teamScore.getDate()) == null){
                map.put(teamScore.getDate(), new TreeMap<String, Double>(preloadNamesForMap));
            }
            map.get(teamScore.getDate()).put(teamScore.getTeamName(), teamScore.getScore());
        }
        return map;
    }
}
