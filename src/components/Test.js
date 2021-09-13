
import { StylesProvider, Typography } from "@material-ui/core";
import { Button, ButtonGroup, Card, Fade, Form, FormGroup } from "react-bootstrap";
import {Dash, Pen, Plus} from "react-bootstrap-icons";
import {useState} from "react";


function Test(){
    
    const [showMenu,setShowMenu] = useState(true);
    const [showAdd,setShowAdd] = useState(false);
    const [showEdit,setShowEdit]= useState(false);



    return(
        <div className="bg-green-300">



            <div className="bg-blue-200 flex justify-between my-3 mx-3 rounded-2xl px-3">

                <Fade in={showMenu}>
                    <StylesProvider injectFirst>
                        <Typography className="my-2" variant="h6">My Rooms</Typography>
                    </StylesProvider>
                <ButtonGroup className="my-2 text-gray-900" aria-label="room-action">
                    <Button variant="link"><Plus className="text-gray-900 "/></Button>
                    <Button variant="link"><Pen className="text-gray-900 " /></Button>
                    <Button variant="link"><Dash className="text-gray-900 "/></Button>
                </ButtonGroup>
                </Fade>

                <Fade in={showAdd}>
                    <div className="flex justify-between">
                        <Form className="my-2 bg-blue-200">
                            <Form.Group>
                                <Form.Control placeholder="New Room"/>
                            </Form.Group>
                        </Form>
                        <ButtonGroup size="sm" className="mx-2 my-2 ">
                            <Button variant="success" className="mx-1 " >Add</Button>
                            <Button variant="danger" className="mx-1">Cancel</Button>
                        </ButtonGroup>
                    </div> 
                </Fade>
                <Fade in={showEdit}>
                    <div className="flex justify-between">
                        <Form className="my-2 bg-blue-200">
                            <Form.Group>
                                <Form.Control placeholder="New Room"/>
                            </Form.Group>
                        </Form>
                        <ButtonGroup size="sm" className="mx-2 my-2 ">
                            <Button variant="success" className="mx-1 " >Edit</Button>
                            <Button variant="danger" className="mx-1">Cancel</Button>
                        </ButtonGroup>
                    </div>
                </Fade>
            </div>
            
        </div>
    );
}
export default Test;