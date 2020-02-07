/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Nav.style.js";

import styled from "styled-components";
import NavSubPart from "./NavSubPart";

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTop: true
        };
    }
    componentDidMount() {
        document.addEventListener("scroll", () => {
            const isTop = window.scrollY < 50;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop });
                console.log("LOL");
                console.log(this.state.isTop);
            }
        });
    }
    render() {
        return (
            <React.Fragment>
                {this.state.isTop ? (
                    <div
                        style={{
                            position: "sticky",
                            top: "0"
                        }}>
                        <NavSubPart active={this.props.active} />
                    </div>
                ) : (
                    <div
                        style={{
                            position: "sticky",
                            top: "0",
                            background: "white",
                            zIndex: 100,
                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" 
                        }}>
                        <NavSubPart active={this.props.active} />
                    </div>
                )}
            </React.Fragment>
        );
    }
}
