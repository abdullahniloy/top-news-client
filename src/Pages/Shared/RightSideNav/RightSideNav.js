import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitch, FaFacebookF, FaPhone } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carosel from '../Carosel/Carosel';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find on us</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebookF></FaFacebookF>Facebook F</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> Whats app</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaPhone></FaPhone> Phone</ListGroup.Item>
                </ListGroup>

            </div>
            <div>
                <Carosel></Carosel>
            </div>
        </div>
    );
};

export default RightSideNav;