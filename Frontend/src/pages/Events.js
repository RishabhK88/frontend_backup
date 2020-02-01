import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Nav from "../components/Nav";
import CardEvent from "../components/CardEvent";
export default class Events extends Component {
    render() {
        return (
            <div style={{ overflowX: "hidden" }}>
                <Nav></Nav>
                <Container>
                    <h1
                        style={{
                            textAlign: "center",
                            marginBottom: "2em",
                            fontWeight: "700",
                            textDecoration: "underline"
                        }}>
                        We have a history of conducting successful and useful
                        events!
                    </h1>
                    <h1
                        style={{
                            fontWeight: "500",
                            marginLeft: "2em"
                        }}>
                        Upcoming Events:
                    </h1>

                    <SubContainer>
                        <CardEvent />
                    </SubContainer>
                </Container>
            </div>
        );
    }
}

const Container = styled.div`
    background-color: #f3f3f3;
    color: #707070;
    width: 100vw;
    height: fit-content;
    /* text-align: center; */
`;
const SubContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 2em;
`;
