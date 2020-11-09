import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default class Footer extends Component {
    render() {
        return (
            <footer className="footer font-small unique-color-dark">
                <div className="container text-center text-md-left mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Ghezal-A Bridal Gown Shop</h6>
                            <hr className="hr deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic
                            </p>
                       </div>
                       <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="hr deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <p>
                            <a href="#!">Press Room</a>
                            </p>
                            <p>
                            <a href="#!">Careers</a>
                            </p>
                            <p>
                            <a href="#!">Shipping Rates</a>
                            </p>
                            <p>
                            <a href="#!">Help and FAQs</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="hr deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <p>
                            <i className="fa fa-home mr-3"></i> Seattle, WA 98000</p>
                            <p>
                            <i className="fa fa-envelope mr-3"></i> fakecompant@example.com</p>
                            <p>
                            <i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p>
                            <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">get social</h6>
                            <hr className="hr deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <a className="fb-ic">
                                <i className="fa fa-facebook-f white-text mr-4"> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fa fa-twitter white-text mr-4"> </i>
                            </a>
                            <a className="gplus-ic">
                                <i className="fa fa-google-plus white-text mr-4"> </i>
                            </a>
                            <a className="li-ic">
                                <i className="fa fa-linkedin white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fa fa-instagram white-text"> </i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-2">© 2020 Copyright:
                    <h5> firshtashefa</h5>
                </div>
            </footer>

        )
    }
}

    