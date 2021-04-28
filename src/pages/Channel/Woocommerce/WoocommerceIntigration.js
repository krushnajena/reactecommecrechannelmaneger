import React, { Component } from "react"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap"
import PropTypes from 'prop-types'
import { AvField, AvForm } from "availity-reactstrap-validation"

//Import Breadcrumb
import Breadcrumb from "../../../components/Common/Breadcrumb"

import wocommerce from "../../../assets/images/channels/wc.png"

// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom" 

// actions
import { post_intigrate_woocommerce_channel, post_intigrate_woocommerce_channel_failed } from "../../../store/actions"

const WoocommerceIntigration = props =>  {


  const handleValidSubmit = (event, values) => {
    console.log("sssssssss");
    props.post_intigrate_woocommerce_channel(values, props.history)
  }
        
      return (
        <React.Fragment>
          <div className="page-content">
            <Container fluid>
            <Breadcrumb title="ChannelManager" breadcrumbItem="Channels" />
              
            <Row>
              <Col xl="4">
                <Card>
                  <CardBody>
                  <p>  <img
                            src={wocommerce}
                            alt=""
                            height="60"
                            className="auth-logo-dark"
                          /><br/>
                     
                     <br/></p>
                     <h4 style={{ fontWeight:"bold"}}>WOOCOMMERCE</h4>
                     <h5>Carts</h5>
                     <p>Woocommerce Cart</p>
                     <p style={{color:"orange"}}>Use the following instructions to integrate WooCommerce:</p>
                     <ol>
                         <li>Please enter your store URL.</li>
                         <li>You'll be taken to a page within WooCommerce where you'll need to approve the permissions that Channel Manager needs to operate (i.e. import your orders, push order statuses, etc.). You must click "Approve".</li>
                         <li>Once you approve the connection, you will be redirected to Channel page with your consumer key and consumer secret.</li>
                         <li>Seller can update the order status s/he wants to pull in Channel Manager.</li>
                         <li>Post that, please click on update Channel and test Credentials to create the channel in Channel Manager.</li>
                         <li><strong>Note: </strong>{"Enable REST API in your WooCommerce plugin.To enable REST API in WooCommerce, Navigate to Settings>Advanced>Legacy API. Click on Enable Rest API and save the settings."}</li>
                         
                     </ol>
                  </CardBody>
                </Card>
              </Col>

              <Col xl="8">
              <Card>
                  <CardBody>
                    
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      <h5>General Information</h5>
                    <hr/>
                      <FormGroup className="row mb-4">
                        <Label
                          htmlFor="horizontal-firstname-Input"
                          className="col-sm-5 col-form-label"
                        >
                          Channel Name
                        </Label>
                        <Col sm={7}>
                        <AvField
                          name="channelname"
                          value="WOOCOMMERCE"
                          className="form-control"
                          placeholder="Channel Name"
                          type="text"
                          required
                        />
                        </Col>
                      </FormGroup>


                      <FormGroup className="row mb-4">
                        <Label
                          htmlFor="horizontal-firstname-Input"
                          className="col-sm-5 col-form-label"
                        >
                          Communication Brand Name
                        </Label>
                        <Col sm={7}>
                        <AvField
                          name="brandname"
                        
                          className="form-control"
                          placeholder="Brand Name"
                          type="text"
                        />
                        </Col>
                      </FormGroup>
                      <br/>
                      <h5>Seller Pannel</h5>
                      <p>Please provide below given credentials for WOOCOMMERCE.</p>
                    <hr/>

                    <FormGroup className="row mb-4">
                        <Label
                          htmlFor="horizontal-firstname-Input"
                          className="col-sm-5 col-form-label"
                        >
                          Store Url
                        </Label>
                        <Col sm={7}>
                        <AvField
                          name="storeurl"
                         
                          className="form-control"
                          placeholder="e.g. https://store.woocommerce.com"
                          type="url"
                          required
                        />
                        </Col>
                      </FormGroup>


                      <FormGroup className="row mb-4">
                        <Label
                          htmlFor="horizontal-firstname-Input"
                          className="col-sm-5 col-form-label"
                        >
                          Consumer Key
                        </Label>
                        <Col sm={7}>
                        <AvField
                          name="consumerkey"
                         
                          className="form-control"
                          placeholder="e.g. XXXXXXXXXXXXXX"
                          type="text"
                          required
                        />
                        </Col>
                      </FormGroup>
                      

                      <FormGroup className="row mb-4">
                        <Label
                          htmlFor="horizontal-firstname-Input"
                          className="col-sm-5 col-form-label"
                        >
                          Consumer Secrate
                        </Label>
                        <Col sm={7}>
                        <AvField
                          name="consumersecrate"
                         
                          className="form-control"
                          placeholder="e.g. XXXXXXXXXXXXXX"
                          type="text"
                          required
                        />
                        </Col>
                      </FormGroup>

                      <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
                        >
                       <i className="bx bx-save label-icon "></i>{" Save & Test Connection"}    
                        </button>
                     
                      </AvForm>
                  </CardBody>
                </Card>
             
            
               </Col>
            </Row>
        
            </Container>
          </div>
        </React.Fragment>
    )
    
  }
  
  const mapStateToProps = state => {
    const { error } = state.woocommerce
    return { error }
  }
  
  export default withRouter(
    connect(mapStateToProps, { post_intigrate_woocommerce_channel, post_intigrate_woocommerce_channel_failed })(WoocommerceIntigration)
  )
  
  WoocommerceIntigration.propTypes = {
    error: PropTypes.any,
    history: PropTypes.object,
    post_intigrate_woocommerce_channel: PropTypes.func,
   
  }
  