package net.notices.springboot.muralnoticescrud.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "notices")
public class Notice {

    private long id;
    private String title;
    private String description;
    private Date publishedOn;
    private Date viewedOn;

    public Notice() {

    }

    public Notice(String title, String description, Date publishedOn, Date viewDate){
        this.title = title;
        this.description = description;
        this.publishedOn = publishedOn;
        this.viewedOn = viewDate;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "title", nullable = false)
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    @Column(name = "description", nullable = false, length = 3000)
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    @Column(name = "published_on", nullable = false)
    public Date getPublishedOn() {
        return publishedOn;
    }
    public void setPublishedOn(Date publishedOn) {
        this.publishedOn = publishedOn;
    }

    @Column(name = "viewed_on", nullable = true)
    public Date getViewedOn() {
        return viewedOn;
    }
    public void setViewedOn(Date viewedOn) {
        this.viewedOn = viewedOn;
    }

    @Override
    public String toString() {
        return "Notice [id=" + id + ", title=" + title + ", description=" + description + ", publishedOn=" + publishedOn +
                ", viewedOn=" + viewedOn + "]";
    }
}
