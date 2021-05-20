import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Fonts from './compiled.json'
import { TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Row, Col, InputGroup, InputGroupAddon, Button, Input} from 'reactstrap'

const useStyles = makeStyles({
    btn: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin: '20px'
    },
    mainCol:{
        marginTop: '20px',
        
    },
    inputField:{
        margin: '20px',
        
    },
    copy:{
        margin:'10px',
        display:'flex',
        flex:'1'
    }
  });

  for(var key in Fonts){
    //if(Fonts.hasOwnProperty(key)){
        console.log(key + "->"+ Fonts[key])
    //}
    //i++
}

const MainBox = () => {
    const classes = useStyles();
    
    return (
        <div>
            <Container className={classes.mainCol}>
                    <Row>
                        <TextField className={classes.inputField} id="outlined-basic" label="Caption" variant="outlined" />
                        <Button className={classes.btn} color="primary">Hello World</Button>
                    </Row>
                    <Row>
                        <h1>Copy a Font</h1>
                    </Row>
                    <Row>
                        <Col md="4" xs="12" className={classes.copy}>
                            <InputGroup>
                                <Input />
                                <InputGroupAddon addonType="append">
                                    <Button color="primary">Copy</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col md="4" xs="12" className={classes.copy}>
                            <InputGroup>
                                <Input />
                                <InputGroupAddon addonType="append">
                                    <Button color="primary">Copy</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col >
                        <Col md="4" xs="12" className={classes.copy}>
                            <InputGroup>
                                <Input />
                                <InputGroupAddon addonType="append">
                                    <Button color="primary">Copy</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" xs="12" className={classes.copy}>
                            <InputGroup>
                                <Input />
                                <InputGroupAddon addonType="append">
                                    <Button color="primary">Copy</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col md="4" xs="12" className={classes.copy}>
                            <InputGroup>
                                <Input />
                                <InputGroupAddon addonType="append">
                                    <Button color="primary">Copy</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col >
                        <Col md="4" xs="12" className={classes.copy}>
                            <InputGroup>
                                <Input />
                                <InputGroupAddon addonType="append">
                                    <Button color="primary">Copy</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default MainBox
