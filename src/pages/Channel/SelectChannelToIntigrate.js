import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import { MDBDataTable } from "mdbreact"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb"
import "../datatables.scss"
import { Link } from "react-router-dom";
import wocommerce from "../../assets/images/channels/wc.png"
class SelectChannelToIntigrate extends Component {


    constructor(props) {
        super(props)
        this.state = {
          fnm: false,
          lnm: false,
          unm: false,
          city: false,
          stateV: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.changeHandeler.bind(this)
      }
    
      handleSubmit(e) {
        e.preventDefault()
        var fnm = document.getElementById("validationTooltip01").value
        var lnm = document.getElementById("validationTooltip02").value
        var unm = document.getElementById("validationTooltipUsername").value
        var city = document.getElementById("validationTooltip03").value
        var stateV = document.getElementById("validationTooltip04").value
    
        if (fnm === "") {
          this.setState({ fnm: false })
        } else {
          this.setState({ fnm: true })
        }
    
        if (lnm === "") {
          this.setState({ lnm: false })
        } else {
          this.setState({ lnm: true })
        }
    
        if (unm === "") {
          this.setState({ unm: false })
        } else {
          this.setState({ unm: true })
        }
    
        if (city === "") {
          this.setState({ city: false })
        } else {
          this.setState({ city: true })
        }
    
        if (stateV === "") {
          this.setState({ stateV: false })
        } else {
          this.setState({ stateV: true })
        }
    
        var d1 = document.getElementsByName("validate")
    
        document.getElementById("tooltipForm").classList.add("was-validated")
    
        for (var i = 0; i < d1.length; i++) {
          d1[i].style.display = "block"
        }
      }
    
      //for change tooltip display propery
      changeHandeler(event, eleId) {
        if (event.target.value !== "")
          document.getElementById(eleId).style.display = "none"
        else document.getElementById(eleId).style.display = "block"
      }
    
    render() {
        const data = {
            columns: [
              {
                label: "Name",
                field: "name",
                sort: "asc",
                width: 150,
              },
              {
                label: "Parent",
                field: "parent",
                sort: "asc",
                width: 270,
              },
              
            ],
            rows: [
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
              {
                name: "Electronics",
                parent: "Primary",
                
              },
              {
                name: "Fashion",
                parent: "Primary",
              },
              {
                name: "Mobile",
                parent: "Electronics",
              },
             
            ],
          }
      return (
        <React.Fragment>
          <div className="page-content">
            <Container fluid>
            <Breadcrumb title="ChannelManager" breadcrumbItem="Select Your Channel To Intigrate" />
             
            <Row>
           
           <Col xl="3">
             <Card>
               <CardBody>
             <p style={{textAlign:"center"}}>  <img
                            src={wocommerce}
                            alt=""
                            height="60"
                            className="auth-logo-dark"
                          /><br/>
                     WOOCOMMERCE
                     <br/>
                     <br/>
                     <Link
                              type="button"
                              className="btn btn-success waves-effect btn-label waves-light"
                              to="addwoocommerceintigration"
                            >
                              <i className="bx bx-hourglass label-icon "></i>{" "}
                              Intigrate
                            </Link>  
                          
              </p>
                
               </CardBody>
             </Card>
           </Col>
           <Col xl="3">
             <Card>
               <CardBody>
               
               </CardBody>
             </Card>
           </Col>
           <Col xl="3">
             <Card>
               <CardBody>
               
               </CardBody>
             </Card>
           </Col>
           <Col xl="3">
             <Card>
               <CardBody>
               
               </CardBody>
             </Card>
           </Col>
         </Row>
            </Container>
          </div>
        </React.Fragment>
      )
    }
  }
  
  export default SelectChannelToIntigrate;
  