import React, { Component } from "react";
import CardHead from "../components/Team/CardHead";
import NoBorderCard from "../components/Team/NoBorderCard";
import image from '../assets/undraw_positive_attitude_xaae.svg';
import image2 from '../assets/undraw_progressive_app_m9ms.svg';
import iotImage from '../assets/undraw_Firmware_jw6u.svg';
import softwareImage from '../assets/undraw_programming_2svr.svg';
import mlImage from '../assets/undraw_Growing_qwt2.svg';
import publicityImage from '../assets/undraw_social_girl_562b.svg';
// import Nav from "../components/Nav";

export default class Team extends Component {
    render() {
        return(
            <div style={styles.container}>
                {/* <Nav></Nav> */}
                <div style={{...styles.pageContainer, height: "100vh"}}>
                    <h1 style={{fontSize: 40}}>Meet the team</h1>
                    <div style={styles.cardContainer}>
                        <CardHead title={'Lead'} name={'Shubhank Saxena'}/>
                        <CardHead title={'Co Lead'} name={'Aman Arora'}/>
                    </div>
                    <img
                        src={image}
                        style={{height: "375px", width: "800px"}}
                    ></img>
                </div>
                <div style={styles.pageContainer}>
                    <div style={{marginTop: 30}}>
                        <h1>Web and App Team</h1>
                    </div>
                    <div style={styles.cardContainer}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                    <img
                        src={image2}
                        style={{height: "300px", width: "700px"}}
                    ></img>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                </div>
                <div style={styles.pageContainer}>
                    <div style={{marginTop: 30}}>
                        <h1>IOT Team</h1>
                    </div>
                    <div style={styles.cardContainer}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                    <img
                        src={iotImage}
                        style={{height: "300px", width: "700px"}}
                    ></img>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                </div>
                <div style={styles.pageContainer}>
                    <div style={{marginTop: 30}}>
                        <h1>Software Team</h1>
                    </div>
                    <div style={styles.cardContainer}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                    <img
                        src={softwareImage}
                        style={{height: "275px", width: "700px"}}
                    ></img>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                </div>
                <div style={styles.pageContainer}>
                    <div style={{marginTop: 30}}>
                        <h1>Machine Learning Team</h1>
                    </div>
                    <div style={styles.cardContainer}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                    <img
                        src={mlImage}
                        style={{height: "275px", width: "700px"}}
                    ></img>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                </div>
                <div style={styles.pageContainer}>
                    <div style={{marginTop: 30}}>
                        <h1>Social Media & Creativity Team</h1>
                    </div>
                    <div style={styles.cardContainer}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                    <img
                        src={publicityImage}
                        style={{height: "275px", width: "700px"}}
                    ></img>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                        <NoBorderCard title={'Head'} name={'Jaskeerat Singh Randhawa'}/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f3f3f3"
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        margin: 20
    },
    pageContainer: {
        display: "flex", 
        alignItems: "center", 
        flexDirection: "column"
    }
}