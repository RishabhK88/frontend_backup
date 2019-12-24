import React, {Component} from 'react';
import linkedin from './../../assets/linkedin.jpg';
import github from './../../assets/github.png';

export default class CardHead extends Component {
    render() {
        return(
            <div style={styles.container}>
                <div style={styles.circle}>
                    {/* <h6>a</h6> */}
                </div>
                <div style={styles.textContainer}>
                    <b><h1>{this.props.title}</h1></b>
                    <h2>{this.props.name}</h2>
                    <div style={styles.imageContainer}>
                        <a href={this.props.hrefL}>
                            <img src={linkedin} style={styles.image}></img>
                        </a>
                        <a href={this.props.hrefG}>
                            <img src={github} style={styles.image}></img>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}


const styles = {
    container: {
        display: 'flex',
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: '#524e4e',
        flexDirection: "row",
        width: "400px",
        alignItems: 'center',
        height: "200px",
        margin: 60,
        backgroundColor: "white"
    },
    circle: {
        display: 'flex',
        borderStyle: "solid", 
        borderWidth: "1px", 
        borderColor: '#000000', 
        width: "100px", 
        height:"100px", 
        borderRadius: "50%", 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: "5%",
        marginRight: "10%"
    },
    textContainer: {
        // paddingVertical: "50%"   
    },
    imageContainer: {
        display: 'flex', 
        alignItems: "center"
    },
    image: {
        display: "flex", 
        height: 25, 
        width: 25,
        margin: 10
    }
}
