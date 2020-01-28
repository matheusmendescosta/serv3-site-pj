import React from 'react';
import {
    ContentForm,
    LabelForm,
    InputForm,
 } 
from './styles';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import { Column, Row } from 'simple-flexbox';

export default function Information() {
  return (
    <ContentForm>
        <Row>
            <Column flexGrow={3}>
                <LabelForm>Nome</LabelForm>
                <InputForm />
            </Column>
            <Column flexGrow={3}>
            </Column>
        </Row>

        <Row>
            <Column flexGrow={3}>
                <LabelForm></LabelForm>
                <InputForm />
            </Column>
            <Column flexGrow={3}>
                <LabelForm></LabelForm>
                <InputForm />
            </Column>
        </Row>
    </ContentForm>
  );
}
