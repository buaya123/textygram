import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Row, Col, InputGroup, InputGroupAddon, Button, Input, NavItem, NavLink} from 'reactstrap'


const useStyles = makeStyles({

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
        position:'fixed',
        
        flex:'1',
        textAlign:'center',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
        
    }
  })

const SplashBody = () => {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.SplashDiv}>
                    <Row >
                        <Row className={classes.textygramSplash}>
                            <Col md="3"></Col>
                            <Col md="6">
                                TEXTYGRAM
                            </Col>
                            <Col md="3" style={{padding:'0'}}></Col>
                        </Row>
                        <Row className={classes.SplashText}>
                            <Col md="3">
                            </Col>
                            <Col md="6" style={{margin:'10px'}}>Copy change fonts, create caption, add hashtags and let your instagram become the coolest in the world
                            </Col>
                            <Col md="3" style={{padding:'0'}}>
                            </Col>
                        </Row>
                    </Row>
            </Container>
        </div>
    )
}

export default SplashBody
