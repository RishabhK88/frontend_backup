import React, { Component } from "react";
// import "./Nav.style.js";
import styled from "styled-components";
export default class Nav extends Component {
    render() {
        return (
            <div>
                <Container>Hello</Container>
                <nav>
                    <div>Home</div>
                    <div>About</div>
                    <div>Team</div>
                    <div>Events</div>
                    <div>Contact</div>
                    <div>Forum</div>
                </nav>
            </div>
        );
    }
}

// <View style={styles.container}>
//   <Text style={[styles.title, this.props.isActive && styles.activeTitle]} />
// </View>

// const styles = StyleSheet.create({
//     nav: {
//         borderRadius: 4,
//         borderWidth: 0.5,
//         borderColor: "#d6d7da"
//     }
// });

const Container = styled.nav`
    background: red;
`;
