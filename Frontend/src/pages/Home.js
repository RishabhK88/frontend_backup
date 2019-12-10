import React, { Component } from "react";
import Nav from "../components/Nav";
import GoogleAssBg from "../assets/1200px-Google_Assistant_logo.svg.png";
import Logo from "../assets/unnamed.png";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                    <img
                        src={GoogleAssBg}
                        style={{
                            zIndex: "-100",
                            position: "absolute",
                            left: "-22vw",
                            top: "-20vh",
                            right: "5vw",
                            bottom: "92vh",
                            height: "115vh",
                            // transform: "scale(0.75)",
                            transform: "rotate(5deg)"
                        }}></img>

                    <img
                        src={Logo}
                        style={{
                            height: "10vh",
                            marginLeft: "40vw",
                            marginTop: "18vw"
                        }}></img>
                </div>

                <div style={{ marginLeft: "50%" }}>
                    <p
                        style={{
                            fontSize: "2em",
                            fontWeight: "500",
                            color: "#676C72",
                            marginTop: "0"
                        }}>
                        Thapar Institute of Engineering and Technology
                    </p>
                </div>
            </div>
        );
    }
}
