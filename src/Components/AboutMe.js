import React, {Component} from 'react';

export default class AboutMe extends Component{
  render(){
    return(
      <div className="AboutMePage">
      <h1 className="AboutMeHeader">Hello, I'm Dylan Libby</h1>
      <ul style={{
        color: "black",
      }}
      className="MyInfoList">
      <h3> Things About Me  </h3>
      <li> <p> I like Music </p> </li>
      <li> <p> My hobby is Skateboarding </p> </li>
      <li> <p> Good with Time </p> </li>
      <li> <p> I am friendly, good with coworkers </p> </li>
      </ul>
      <ul>
      <li>
      <img src={require("../Images/puppyselfi.jpeg")} style={{
        height: "225px",
      }}
      className="ProfileSelfPic"/>

      </li>
      <li>
      <hr style={{
        height:"500px",
        width: "1px",
        backgroundColor: "black",
      }}
      className="ProfileLineV"/>
      </li>

      <li>
      <hr style={{
        height: "1px",
        width: "200px",
        backgroundColor: "black"
      }}
      className="FullNameHR"/>
      </li>

      <li>
      <div className="InfoFullName" style={{
        backgroundColor: "#6CC4BB",
        width: "200px",
        height: "100px"
      }}>
      <h2 className="InfoNameHeader">
      Full Name
      </h2>

      <p className="FullName"> Dylan James Libby</p>

      </div>
      </li>
      <li>
      <hr style={{
        height: "1px",
        width: "200px",
        backgroundColor: "black"
      }}
      className="AddressHR"/>
      </li>

      <li>
      <div className="InfoAddress" style={{
        backgroundColor: "#6CC4BB",
        width: "200px",
        height: "100px"
      }}>
      <h2 className="AddressHeader">
      Address
      </h2>

      <p className="Adress"> 6 Lambert Circle, Worcester MA </p>

      </div>
      </li>

      <li>
      <hr style={{
        height: "1px",
        width: "200px",
        backgroundColor: "black"
      }}
      className="EmailHR"/>
      </li>

      <li>
      <div className="InfoEmail" style={{
        backgroundColor: "#6CC4BB",
        width: "200px",
        height: "100px"
      }}>
      <h2 className="EmailHeader">
      Email
      </h2>

      <p className="Email"> libbydylan10@gmail.com </p>

      </div>
      </li>
      </ul>
      </div>
    )
  }
}
