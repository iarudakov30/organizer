import React, { Component } from 'react';

import Notification from '../Common/Notification';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import Breadcrumbs from '../Common/Breadcrumbs';
import Content from '../Common/Content';

export default class Auth extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.checkAuthentication();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.props.checkAuthentication();
        }
    }

    render() {
        return(
            <div>
                <Notification data={this.props.notification}/>
                <Sidebar userdata={this.props.user}/>

                <div id='page-wrapper' className='gray-bg'>

                    <Header/>
                    <Breadcrumbs pathname={this.props.location.pathname}/>

                    <Content>
                        {this.props.children}
                    </Content>

                </div>
            </div>
        );
    }
}

