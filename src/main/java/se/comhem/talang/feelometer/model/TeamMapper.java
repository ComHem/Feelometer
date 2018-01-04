package se.comhem.talang.feelometer.model;

public class TeamMapper {

    private String teamName;
    private Double value;

    public TeamMapper(String teamName, Double value) {
        this.teamName = teamName;
        this.value = value;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

}
