import React from 'react'
import '../css/about.css'
import { Col, Toast, ToastBody } from 'reactstrap';

export default function SkillContainer({ icon, content }) {
    return (
        <Col xs="12" sm="3">
            <Toast>
                <ToastBody>
                    <img src={require(`../img/${icon}`)} alt={content} />
                    <span>{content}</span>
                </ToastBody>
            </Toast>
        </Col>
    )
}