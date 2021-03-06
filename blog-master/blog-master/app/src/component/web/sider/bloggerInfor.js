import React, { Component } from 'react';
import { Avatar, Row, Col, Icon } from 'antd';
import img from '../../../assets/images/bloger-head.jpg'
class BloggerInfor extends Component {
    render() {
        return (
            <div className='blogger-infor'>
                <Avatar size={110} src={img} />
                <h2 className='name'>路招摇</h2>
                <p className='introduction' >前端BUG开发工程师</p>
                <Row>
                    <Col span={24}>
                        <a href='https://github.com/nasasky' rel="noopener noreferrer" target='_blank' style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                            <Icon type="github" /> github
                        </a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BloggerInfor