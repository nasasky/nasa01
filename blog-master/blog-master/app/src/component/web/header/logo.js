import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Logo extends Component {
    render() {
        return (
            <Link to="/">
                <div className='logo'><span className='blogger-title'>路招摇的博客</span></div>
            </Link>
        )
    }
}

export default Logo