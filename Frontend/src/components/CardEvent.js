import React, { Component } from "react";
import styled from "styled-components";
import "../pages/styles/Events.css";

export default class CardEvent extends Component {
    render() {
        return (
            <Container>
                <SubContainer>
                    <Heading bg={this.props.bg}>
                        <p style={{ margin: "0", textAlign: "center" }}>
                            Coding Bootcamp 1.0
                        </p>
                    </Heading>
                    <SubHeading bg={this.props.bg}>
                        Learn various technologies and their standards
                    </SubHeading>
                    <About>
                        <p>
                            <bold style={{ fontWeight: "700", color: "black" }}>
                                Topics Covered:
                            </bold>
                            <ul style={{ marginTop: "0" }}>
                                <li>Web/App development</li>
                                <li>Software Dev</li>
                                <li>Data structures and algorithms</li>
                                <li>Blockchain</li>
                                <li>IOT</li>
                                <li>Machine Learning and AI</li>
                            </ul>
                            <bold style={{ fontWeight: "600", color: "black" }}>
                                Date
                            </bold>
                            : Week Long event (TBA)
                            <br />
                            <bold style={{ fontWeight: "600", color: "black" }}>
                                Venue
                            </bold>
                            : Will be Updated
                        </p>
                        <Features>
                            <ul className="features">
                                <li>Certificates</li>
                                <li>Projects</li>
                            </ul>
                            <p>
                                <a className="registerA">Register!</a>
                            </p>
                        </Features>
                    </About>
                </SubContainer>
            </Container>
        );
    }
}
const Container = styled.div`
    background-color: white;
    /* text-align: center; */
    height: fit-content;
    border-radius: 2em;
    width: 40%;
    box-shadow: 16px 16px 16px -16px rgba(0, 0, 0, 0.59);
    margin: 1em;

    /* overflow: hidden; */
`;
const SubContainer = styled.div`
    /* height: 50vh; //change this */
    height: fit-content;
    text-align: center;
    margin-bottom: 1em;
    margin-top: 3em;
`;

const About = styled.div`
    margin-top: 5%;
    margin-left: 5%;
    text-align: left;
    padding-left: 0;
    font-weight: 400;
    display: flex;
    height: fit-content;
`;
const Features = styled.div``;
const Heading = styled.div`
    font-weight: 700;
    font-size: 2em;
    color: black;
    text-align: center;
    margin: 5%;
    margin-bottom: 0.2em;
    /* width: fit-content; */
    color: black 0.8;
    text-shadow: 2px 2px #f3f3f3;
    /* background: linear-gradient(to top, var(--bg-color), transparent 40%); */
`;

const SubHeading = styled.div`
    color: black;
    font-weight: 600;
    font-size: 1em;
    margin-left: 5%;
    /* width: fit-content; */
    /* background: linear-gradient(to top, var(--bg-color), transparent 30%); */

    /* text-align: center; */
`;
