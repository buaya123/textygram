import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Row, Col, InputGroup, InputGroupAddon, Button, Input, NavItem, NavLink} from 'reactstrap'


const useStyles = makeStyles({
    
    nav:{
        maxWidth: '100%',
        height: '70px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.16)',
        margin:'0px'
    },
    textygramLogo:{
        left: 'calc(50% - 316px/2 - 336px)',
        top: 'calc(50% - 72px/2 - 476px)',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '35px',
        textAlign:'center',
        margin:'auto',
        display:'table',
        flex:'1',
        lineHeight:'70px'
    },
    navOptions:{
        height:'100%',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight:'50px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'right',
        color: '#2D343A',
        
        textDecoration:'none'
    },
    textygramSplash:{ 

        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '36px',
        display: 'flex',
        padding:'0',
        margin:'auto',
        flex:'1',

        color: '#2D343A'
    },
    SplashText:{
        maxWidth:'100%',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '21px',
        lineHeight: '36px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        margin:'auto',
        padding:'0',

        color: 'rgba(45, 52, 58, 0.54)'

    },
    SplashDiv:{
        position:'absolute',
        top:'50%',
        margin:'auto',
        flex:'1',
        textAlign:'center'
    }
  })

const Nav = () => {
    const classes = useStyles();
    return (
        
        <div>
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />
            <Row className={classes.nav}>
                <Col >
                    <span className={classes.textygramLogo}>Textygram</span>
                </Col>
                <Col >
                <Row>
                        <Col>
                            <NavLink className={classes.navOptions} href='#'>Fonts</NavLink>
                        </Col>
                        <Col>
                            <NavLink className={classes.navOptions} href='#'>Caption</NavLink>
                        </Col>
                        <Col>
                            <NavLink className={classes.navOptions} href='#'>Hashtags</NavLink>
                        </Col>
                        <Col>
                            <NavLink className={classes.navOptions} href='#'>Giveaway</NavLink>
                        </Col>
                        <Col>
                            <NavLink className={classes.navOptions} href='#'>News</NavLink>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Nav
