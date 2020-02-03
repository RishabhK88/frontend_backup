/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Nav.style.js";

import styled from "styled-components";
export default class Nav extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div>
                        <Link to="/" style={styles.noDec}>
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link to="/about" style={styles.noDec}>
                            About
                        </Link>
                    </div>
                    <div>
                        <Link to="/team" style={styles.noDec}>
                            Team
                        </Link>
                    </div>
                    <div>
                        <Link to="/events" style={styles.noDec}>
                            Events
                        </Link>
                    </div>
                    <div>
                        <Link to="/contact" style={styles.noDec}>
                            Contact
                        </Link>
                    </div>

                    <div>
                        <Link to="/achievments" style={styles.noDec}>
                            Achievments
                        </Link>
                    </div>

                    {/* <div>
                        <Link to="/blog" style={styles.noDec}>
                            Projects
                        </Link>
                    </div>
                    <div>
                        <Link to="/blog" style={styles.noDec}>
                            Blog
                        </Link>
                    </div> */}
                </Container>
            </div>
        );
    }
}

// <View style={styles.container}>
//   <Text style={[styles.title, this.props.isActive && styles.activeTitle]} />
// </View>

const styles = {
    noDec: {
        textDecoration: "none",
        color: "black"
    }
};

const Container = styled.nav`
    justify-content: space-around;
    align-items: center;
    display: flex;
    margin: auto;
    width: 70%;
    padding-top: 1%;
    padding-bottom: 1%;
    font-size: 1.3em;
    font-weight: 300;
`;
