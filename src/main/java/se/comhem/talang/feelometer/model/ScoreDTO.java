package se.comhem.talang.feelometer.model;


import java.util.Date;

public class ScoreDTO {

    private Date date;
    private Double value1;
    private Integer value2;

    public ScoreDTO(Double value1, Integer value2, Date date) {
        this.value1 = value1;
        this.date = date;
        this.value2 = value2;
    }

    public Double getValue1() {
        return value1;
    }

    public void setValue1(Double value1) {
        this.value1 = value1;
    }

    public Integer getValue2() {
        return value2;
    }

    public void setValue2(Integer value2) {
        this.value2 = value2;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

}
