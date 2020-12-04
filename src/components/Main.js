import React, {useState} from 'react' 
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


export default function Main() {
    AOS.init({
        delay: 5000
    });

    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const toggle = () => setModal(!modal);

    function onNameChange(e) {
        setName(e.target.value)
    }

    function onEmailChange(e){
        setEmail(e.target.value)
    }

    function onMessageChange(e){
        setMessage(e.target.value)
    }

    function resetForm(){
        setName('');
        setEmail('');
        setName('');
    }

    function handleSubmit(e){
        e.preventDefault();
        axios({
            method: 'POST',
            url:"https://jremailsender.herokuapp.com/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((res) => {
            if(res.data.status === 'success'){
                alert("Message Sent.");
                resetForm()
            }else if (res.data.status === 'fail') {
                alert("Message failed to send")
            }
        })
    }

    return (
        <div>
        <div className="typewriter">
        <p>Hi, I'm <span>Jose</span>. Welcome to my portfolio!</p>
        <button type="button" onClick={toggle} data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="3000">Contact Me</button>
        </div>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Contact Me</ModalHeader>
        <ModalBody>
        <Form>
        <FormGroup>
        <Label for="name">Name</Label>
        <Input type="name" name="name" id="name" placeholder="Enter your name" onChange={onNameChange}/>
        </FormGroup>
        <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter your email" onChange={onEmailChange}/>
        </FormGroup>
        <FormGroup>
        <Label for="message">Message</Label>
        <Input type="textarea" name="message" id="message" onChange={onMessageChange}/>
        </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
        <Button onClick={handleSubmit}>Submit</Button>
        </ModalFooter>
        </Modal>
        </div>
    )
}
