package se.comhem.talang.feelometer.model;

import com.fasterxml.jackson.annotation.JsonUnwrapped;

import java.util.Date;
import java.util.List;

public class TeamScoreDTO {

    private Date date;
    @JsonUnwrapped
    private List<TeamMapper> teamMapperList;

    public TeamScoreDTO(Date date, List<TeamMapper> teamMapperList) {
        this.date = date;
        this.teamMapperList = teamMapperList;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;

    }

}
