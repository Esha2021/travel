package DodoData.models;


import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@Table(name="User")
public class User extends IdAbstract {

    private String username;

    private String password;

    @OneToOne
    private Profile userProfile;

    //constructors
    public User(String username, String password){
        this.username = username;
        this.password = password;
    }

    public User(){};

    //Getters and Setters:

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
