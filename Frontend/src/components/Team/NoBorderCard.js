import React, {Component} from 'react';
import linkedin from './../../assets/linkedin.png';
import github from './../../assets/github.png';

export default class CardHead extends Component {
    render() {
        return(
            <div style={styles.container}>
                <div style={styles.circle}>
                    <img src={this.props.image}></img>
                </div>
                <div style={styles.textContainer}>
                    <b><p>{this.props.title}</p></b>
                    <p>{this.props.name}</p>
                    <div style={styles.imageContainer}>
                        <a href={this.props.href}>
                            <img src={linkedin} style={styles.image}></img>
                        </a>
                        <a href={this.props.href}>
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
        flexDirection: "row",
        width: "400px",
        alignItems: 'center',
        height: "200px"
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
        alignItems: "center",
        backgroundColor: "#f3f3f3"
    },
    image: {
        display: "flex", 
        height: 25, 
        width: 25,
        margin: 10
    }
}
