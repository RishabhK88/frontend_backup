import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Nav from "../components/Nav";
import axios from "axios";

axios.defaults.baseURL = "https://dsctiet.pythonanywhere.com/api";

export default class Achievments extends Component {

    state = {
        achievements: [],
        isLoading: true
    }

    fetchAchievements = () => {
        axios.get("/achievements/").then(res => {
            let data = res.data
            this.setState({ achievements: data, isLoading: false })
            console.log(this.state.achievements)
        });
    }


    componentWillMount() {
        this.setState({ isLoading: true })
        this.fetchAchievements();
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <Container>
                    <h1 style={{ textAlign: "center", marginBottom: "2em" }}>
                        We are proud of our achievments
                    </h1>
                    <SubContainer>
                        <Card bg="red"></Card>
                        <Card bg="green"></Card>
                        <Card bg="blue"></Card>
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
`;
