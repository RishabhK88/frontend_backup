/** @format */

import React, { Component } from "react";
import Nav from "../components/Nav";
import GoogleAssBg from "../assets/1200px-Google_Assistant_logo.svg.png";
import Logo from "../assets/unnamed.png";
import undrawAbout from "../assets/undraw_dev_productivity_umsq.svg";

import TeamPic from "../assets/undraw_team_spirit_hrr4.svg";
import ContactPic from "../assets/undraw_contact_us_15o2.svg";
import axios from "axios";
import "./styles/Home.css";
import Gallery from "../components/Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    fab,
    faFacebook,
    faTwitter,
    faYoutube,
    faMedium,
    faDev,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import Lazy from "../assets/tom-morel-hkbQnC7FAqU-unsplash.jpg";
import { Link } from "react-router-dom";
axios.defaults.baseURL = "https://dsctiet.pythonanywhere.com/api";


const url = 'https://docs.google.com/document/d/1bbpf78aMSH2ntSZEWR09Q05OVDHFp6IoFlVHtcvC0eQ/edit?usp=sharing';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            loading: false,
            btnText: "Submit"
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        this.setState({ loading: true, btnText: "Sending...." });
        // get our form data out of state
        const { name, email, message } = this.state;

        axios
            .post("/contactus/", { name, email, message })

            .then(res => {
                this.setState({
                    loading: false,
                    name: "",
                    email: "",
                    message: "",
                    btnText: "Submit"
                });
            })

            .catch(err => {
                console.log(err);
                this.setState({
                    loading: false,
                    name: "",
                    email: "",
                    message: "",
                    btnText: "Error"
                });
            });
    };

    render() {
        return (
            <MainContainer>
                <ResponsiveDiv>
                    <img
                        src={Lazy}
                        height="30%"
                        width="50%"
                        style={{ alignSelf: "center", marginTop: "2em" }}></img>
                    <h1>
                        Our Designers and Developers were quite lazy while
                        making the mobile site! Please prefer to use our
                        app(coming soon) or open it up on desktop!
                        <br />
                        -Lazy Developer
                        <br />
                        <br />
                        P.S. We feel like Brad 1 here, and if you can help us
                        get out of the burden, make us the responsive version..
                        <br />
                        <a
                            style={{
                                cursor: "pointer",
                                textDecoration: "none"
                            }}
                            href="https://github.com/developer-student-club-thapar/officialWebsite">
                            Github
                        </a>
                    </h1>
                </ResponsiveDiv>
                <SubMainContainer>
                    <div
                        style={
                            {
                                // position: "sticky",
                                // top: "0",
                                // background: "#f3f3f3",
                                // opacity: "0.7",
                            }
                        }>
                        <Nav />
                    </div>

                    <div
                        className="div1"
                        style={{
                            height: "100vh",
                            overflow: "hidden"
                        }}>
                        <div>
                            <img src={GoogleAssBg} className="imgBg1"></img>
                            <img src={Logo} className="Logo"></img>
                        </div>
                        <div>
                            <p className="HomeText">
                                Thapar Institute of Engineering and Technology
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            height: "100vh",
                            overflow: "hidden",
                            position: "relative"
                        }}>
                        <div className="AboutTextContainer">
                            <h2 className="AboutText">
                                At DSC TIET, our aim is to spread awareness and
                                teach. Developers, come together under one roof
                                to create a community which inspires thousands.
                                Join Us!
                            </h2>
                        </div>
                        <img src={GoogleAssBg} className="imgBg2"></img>
                        <img src={undrawAbout} className="imgAboutUndraw"></img>
                        <button
                            onClick={() => {
                                window.open(url, '_blank');
                            }}
                            className="AboutButton1"
                        >
                            Code of Conduct
                        </button>
                        <Link to="/communityJoin">
                            <button className="AboutButton2">
                                Join our Slack!
                            </button>
                        </Link>
                    </div>

                    <div
                        style={{
                            height: "100vh",
                            width: "100%",
                            overflow: "hidden",
                            position: "relative"
                            // background: "red",
                            // display: "flex",
                        }}>
                        <div className="TeamTextContainer">
                            <h2 className="AboutText">
                                We have a strong{" "}
                                <span style={{ fontWeight: "600" }}>team</span>{" "}
                                filled with{" "}
                                <span style={{ fontWeight: "600" }}>
                                    innovators
                                </span>{" "}
                                and people who want to make this{" "}
                                <span style={{ fontWeight: "600" }}>
                                    world a better place
                                </span>
                            </h2>
                        </div>
                        <img src={TeamPic} className="TeamImage"></img>
                        <button className="TeamButton">Meet our Team</button>
                    </div>

                    <div
                        style={{
                            height: "100vh",
                            width: "auto",
			    backgroundColor:"#c1c1c1",
                            // display: "flex",
                            // alignItems: "center",
                            overflow: "hidden"
                        }}>
                        <Gallery />
                    </div>
                    <div
                        style={{
                            height: "100vh",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                        <h1
                            style={{
                                fontSize: "4.5em",
                                fontWeight: "400",
                                color: "#676C72"
                            }}>
                            Connect With Us!
                        </h1>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "80%"
                            }}>
                            <form className="Form" onSubmit={this.onSubmit}>
                                <ul>
                                    <li>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            value={this.state.name}
                                            onChange={this.onChange}
                                        />
                                    </li>
                                    <li>
                                        <input
                                            type="email"
                                            id="mail"
                                            name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                    </li>
                                    <li className="li">
                                        <textarea
                                            className="textArea"
                                            id="msg"
                                            placeholder="Message"
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.onChange}></textarea>
                                    </li>
                                </ul>
                                <button className="FormButton">
                                    {this.state.loading
                                        ? "Sending...."
                                        : this.state.btnText}
                                </button>
                            </form>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                <img
                                    src={ContactPic}
                                    style={{
                                        height: "65%",
                                        marginTop: "5%",
                                        height: "60%"
                                    }}></img>
                                <div
                                    style={{
                                        display: "flex",
                                        width: "70%",
                                        margin: "auto",
                                        justifyContent: "space-around",
                                        fontSize: "2em"
                                    }}>
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        style={{ cursor: "pointer" }}
                                    />
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        style={{ cursor: "pointer" }}
                                    />
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        style={{ cursor: "pointer" }}
                                    />
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        style={{ cursor: "pointer" }}
                                    />
                                    <FontAwesomeIcon
                                        icon={faMedium}
                                        style={{ cursor: "pointer" }}
                                    />
                                    <FontAwesomeIcon
                                        icon={faDev}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </SubMainContainer>
            </MainContainer>
        );
    }
}

const MainContainer = styled.div``;
const SubMainContainer = styled.div`
    @media only screen and (max-width: 1000px) {
        display: none;
    }
`;
const ResponsiveDiv = styled.div`
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 0.5em;
    justify-content: center;
    @media only screen and (max-width: 1000px) {
        background-color: #f3f3f3;
        height: 100vh;
        width: 100vw;
    }
    @media only screen and (min-width: 1000px) {
        display: none;
    }
`;

//hahaha

//LOLOL

//ignore the comments below, (for future reference), do not delete pls

// /** @format */
// var mql = window.matchMedia("(max-width: 600px)");

// function media(e) {
//     if (e.matches) {
//         console.log("Matched");
//         // styles.imgBg1 = {
//         //     height: "0vh"
//         // };
//     } else {
//         console.log("Not matched");
//     }

//     mql.addListener(media);

// STYLES

// var styles = {
//     imgBg1: {
//         zIndex: "-100",
//         position: "absolute",
//         left: "-22vw",
//         top: "-20vh",
//         right: "5vw",
//         bottom: "92vh",
//         height: "115vh",
//         // transform: "scale(0.75)",
//         transform: "rotate(5deg)"
//     },
//     Logo: {
//         height: "10vh",
//         marginLeft: "40vw",
//         marginTop: "18vw"
//     },
//     HomeText: {
//         fontSize: "2em",
//         fontWeight: "500",
//         color: "#676C72",
//         marginTop: "0",
//         marginLeft: "50%"
//     },
//     imgBg2: {
//         position: "absolute", //Absolute positioning(so that it doesnt get afffected by other lements) inside relative positioning, so that i can make it absolute to its parent without making it absolute to the whole page, that causes overflow
//         margin: "0",
//         zIndex: "-100",
//         height: "70%",
//         bottom: "20%",
//         left: "83%",
//         right: "25%",
//         transform: "scaleX(-1) rotate(20deg)"
//         // overflow: "hidden",
//     },

//     imgAboutUndraw: {
//         position: "absolute", //Absolute positioning(so that it doesnt get afffected by other lements) inside relative positioning, so that i can make it absolute to its parent without making it absolute to the whole page, that causes overflow
//         margin: "0",
//         zIndex: "-100",
//         height: "50%",
//         bottom: "5%",
//         left: "2%",
//         right: "25%",
//         transform: ""
//         // overflow: "hidden",
//     },

//     AboutTextContainer: {
//         width: "50%",
//         marginLeft: "35%",
//         marginTop: "15%"
//     },
//     AboutText: {
//         fontSize: "1.9em",
//         color: "#676C72",
//         fontWeight: "400"
//     },

//     AboutButton1: {
//         position: "relative",
//         marginLeft: "35%",
//         borderStyle: "solid",
//         borderWidth: "2px",
//         padding: "20px 30px 20px 30px",
//         color: "#f3f3f3",
//         fontSize: "1.5em",
//         background: "#EA4335",
//         borderRadius: "1em",
//         cursor: "pointer"
//     },
//     TeamButton: {
//         position: "absolute",
//         left: 0,
//         marginLeft: "5%",
//         marginTop: "0",
//         borderStyle: "solid",
//         borderWidth: "2px",
//         padding: "20px 30px 20px 30px",
//         color: "#f3f3f3",
//         fontSize: "1.5em",
//         background: "#FBBC05",
//         borderRadius: "1em",
//         cursor: "pointer"
//     },
//     AboutButton2: {
//         position: "relative",
//         marginLeft: "1em",
//         borderStyle: "solid",
//         borderColor: "#EA4335",
//         borderWidth: "2px",
//         padding: "20px 30px 20px 30px",
//         color: "#EA4335",
//         fontSize: "1.5em",
//         background: "#f3f3f3",
//         borderRadius: "1em",
//         cursor: "pointer"
//     },
//     TeamTextContainer: {
//         width: "30%",
//         marginTop: "15%",
//         marginLeft: "5%"
//     },
//     TeamImage: {
//         position: "absolute",
//         top: "10%",
//         height: "70%",
//         marginLeft: "50%",
//         zIndex: "-100"
//     },
//     Form: {
//         height: "90%",
//         // background: "red",
//         // marginTop: "5%",
//         width: "100%",
//         position: "relative"
//         // padding: "1em",
//         // border: "1px solid #CCC",
//         // borderRadius: "1em",
//     },
//     li: {
//         // background: "yellow",
//         listStyle: "none",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         padding: "1em",
//         // margin: "1em",
//         marginLeft: "0",
//         marginBottom: "0"
//     },
//     input: {
//         background: "#f3f3f3",
//         width: "80%",
//         fontSize: "1.2em",
//         fontFamily: "Poppins",
//         border: "none",
//         borderBottomStyle: "solid",
//         borderBottomWidth: "0.1em",
//         borderBottomColor: "#676C72",
//         padding: "1em 0 0.5em 0em",
//         margin: "0.5em",
//         color: "black",
//         marginBottom: "0"
//     },
//     textArea: {
//         background: "#f3f3f3",
//         width: "80%",
//         fontFamily: "Poppins",
//         fontSize: "1.2em",
//         border: "none",
//         borderBottomStyle: "solid",
//         borderBottomWidth: "0.1em",
//         borderBottomColor: "#676C72",
//         padding: "1em 0 0.5em 0em",
//         margin: "0.5em",
//         color: "black",
//         marginBottom: "0",
//         verticalAlign: "top",
//         height: "10em"
//     },
//     label: {
//         background: "pink",
//         fontSize: "1.2em"
//     },
//     ul: {
//         display: "flex",
//         flexDirection: "column",
//         // justifyContent: "space-between",
//         height: "100%",
//         margin: "1em",
//         // background: "grey",
//         padding: "1em"
//     },
//     FormButton: {
//         position: "absolute",
//         marginLeft: "2em",
//         bottom: "0",
//         // marginLeft: "5%",
//         borderStyle: "solid",
//         borderWidth: "2px",
//         padding: "15px 25px 15px 25px",
//         color: "#f3f3f3",
//         fontSize: "1.5em",
//         background: "#34A853",
//         borderRadius: "1em",
//         cursor: "pointer"
//     }
// };
// }
