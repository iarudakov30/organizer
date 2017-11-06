import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import breadcrumbs from '../../../router/breadcrumbs';

export default class Breadcrumbs extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const pathname = this.props.pathname;
        let title = 'Home';
        let breadcrumbUrls = [];

        breadcrumbs.map((value) => {
            if (value.location === pathname) {
                title = value.title;
                breadcrumbUrls = value.breadcrumbs;
            }
        });

        return (
            <div className='row wrapper border-bottom white-bg page-heading'>
                <div className='col-lg-10'>
                    <h2>{title}</h2>
                    <ol className='breadcrumb'>

                        {
                            breadcrumbUrls.map((item, key) =>{
                                return (
                                    <li key={key}>
                                        <Link to={item.url}> {item.title} </Link>
                                    </li>
                                )
                            })
                        }
                        {
                            breadcrumbUrls.length ? (
                                <li className='active'>
                                    <strong>{title}</strong>
                                </li>
                                ) : ''
                        }

                    </ol>
                </div>
            </div>
        );
    }
}

