package se.comhem.talang.feelometer.model;

import java.util.Date;

public class TeamScore {

    private Long teamId;
    private String teamName;
    private Double score;
    private Date date;

    public TeamScore(Long teamId, String teamName, Double score, Date date) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.score = score;
        this.date = date;
    }

    public Long getTeamId() {
        return teamId;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
