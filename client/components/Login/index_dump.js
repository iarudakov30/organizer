import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import Breadcrumbs from '../Common/Breadcrumbs';
import LoginForm from '../../components/Login/loginForm'

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            isFetching: props.fetching
        }
    }

    submit = (values) => {
        console.log(values);
    };

    onBtnClick() {
        this.setState( { isFetching: true } );
    }

    render() {

        const { breadcrumbs } = this.props;

        return (
            <div>
                <Sidebar/>

                <div id='page-wrapper' className='gray-bg'>

                    <Header/>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />

                    <div className='wrapper wrapper-content'>
                        <div className='row  border-bottom white-bg'>
                            <div className='col-sm-12'>
                                <div className='ibox float-e-margins'>
                                    <div className='ibox-content'>
                                        <div className='row'>
                                            <div className='col-sm-6 b-r'>
                                                {
                                                    this.state.isFetching ?
                                                        <p>Загрузка...</p>
                                                        : (
                                                            <div>
                                                                <button onClick={::this.onBtnClick}>Click</button>
                                                                <LoginForm onSubmit={::this.submit} />
                                                            </div>
                                                        )
                                                }
                                            </div>
                                            <div className='col-sm-6'><h4>Not a member?</h4>
                                                <p>You can create an account:</p>
                                                <p className='text-center'>
                                                    <a href='#'><i className='fa fa-sign-in big-icon'></i></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

Login.propTypes = {
    fetching: PropTypes.bool
};