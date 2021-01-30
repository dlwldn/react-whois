import { Col, Row, Typography } from 'antd';
import React from 'react';
import Settings from '../component/Settings';

export default function Search() {
    const logout = () => {
        
    }

    return (
        <>
        <Row justify="end" style={{padding: 20}}>
            <Col>
                <Settings logout={logout} />
            </Col>
        </Row>
        <Row justify="center" style={{marginTop: 100}}>
            <Col>
                <Typography.Title style={{fontFamily: 'Caligrahhy'}}>
                    찾 아 야 한 다
                </Typography.Title>
            </Col>
        </Row>
        <Row justify="center" style={{marginTop: 50}}>
            <Col>검색</Col>
        </Row>
        </>
    )
}

