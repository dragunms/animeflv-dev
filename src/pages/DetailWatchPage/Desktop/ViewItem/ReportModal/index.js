import './styles.scss';

import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import {FaFlag} from 'react-icons/all';

const ReportModal = ({showReport, onHide}) => {
    return (
        <Modal size='md' className='report-modal' show={showReport} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <span className='flag-icon'>
                        <FaFlag />
                    </span>
                    <span>Reportar</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3' controlId='type'>
                        <Form.Label>Motivo:</Form.Label>
                        <Form.Control as='select'>
                            <option>No Reproduce</option>
                            <option value='1'>Problemas de Audio</option>
                            <option value='2'>Problemas con Subtitulos</option>
                            <option value='3'>No es el episodio</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Explicanos el problema:</Form.Label>
                        <Form.Control as='textarea' style={{height: '100px'}} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={onHide}>
                    Enviar Reporte
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ReportModal;
