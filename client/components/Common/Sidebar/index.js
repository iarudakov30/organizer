import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames';

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <nav className='navbar-default navbar-static-side' role='navigation'>
                <div className='sidebar-collapse'>
                    <ul className='nav metismenu' id='side-menu'>
                        <li className='nav-header'>
                            <div className='dropdown profile-element'>
                                <span>
                                    <img alt='image' className='img-circle' src='img/profile_small.jpg' />
                                 </span>
                                <a data-toggle='dropdown' className='dropdown-toggle' href='#'>
                                    <span className='clear'>
                                        <span className='block m-t-xs'>
                                            <strong className='font-bold'>
                                                {this.props.userdata.username}
                                                <b className='caret'></b>
                                            </strong>
                                        </span>
                                    </span>
                                </a>
                                <ul className='dropdown-menu animated fadeInRight m-t-xs'>
                                    <li><Link to='/profile'>Profile</Link></li>
                                    <li className='divider'></li>
                                    <li><Link to='/logout'>Logout</Link></li>
                                </ul>
                            </div>
                            <div className='logo-element'>
                                IR
                            </div>
                        </li>

                        <li className={cx({active: this.props.pathname === '/'})}>

                            <Link to='/' ><i className='fa fa-th-large'></i> <span className='nav-label'>Main</span></Link>
                        </li>
                        <li className={cx({active: this.props.pathname === '/notes'})}>
                            <Link to='/notes'><i className='fa fa-files-o'></i> <span className='nav-label'>Notes</span></Link>
                        </li>
                        <li className={cx({active: this.props.pathname === '/tasklist'})}>
                            <Link to='/tasklist'><i className='fa fa-edit'></i> <span className='nav-label'>Tasklist</span></Link>
                        </li>
                    </ul>

                </div>
            </nav>
        );

    }
}