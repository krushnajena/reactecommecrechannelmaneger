import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import MetaTags from 'react-meta-tags';
import { withRouter, Link } from "react-router-dom"
import { Card, CardBody, Col, Container, Row, Modal, Button, ModalHeader, ModalBody } from "reactstrap"
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"

import images from "assets/images"

import { AvForm, AvField } from "availity-reactstrap-validation"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

import { getOrders } from "../../store/orders/actions"
import { isEmpty, size, map } from "lodash"

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      orderListColumns: [
       
        
        {
          text: "Order Date",
          dataField: "date_created",
          sort: true,
         
        },
        {
          text: "Order Id",
          dataField: "orderId",
          sort: true,
         
        },
        {
            text: "Payment",
            dataField: "total",
            sort: true,
            formatter: (cellContent, order) => (
                <>
                  {order.total} <br/>
                  {order.payment_method}
            
                </>
              ),
          },
        
        {
          text: "Customer Details",
          dataField: "name",
          sort: true,
          formatter: (cellContent, order) => (
            <>
              {order.name} <br/>
              {order.phone}
        
            </>
          ),
        },
       
      ]
    }
   
  }


  

  componentDidMount() {
    const { orders, onGetOrders } = this.props
    onGetOrders()
    this.setState({ orders })
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { orders } = this.props
    if (!isEmpty(orders) && size(prevProps.orders) !== size(orders)) {
      this.setState({ orders })
    }
  }

  /* Insert,Update Delete data */

  

  

  
  /* Insert,Update Delete data */

  render() {
    // const { users } = this.state
    const { SearchBar } = Search;

    const { orders } = this.props

    

    const pageOptions = {
      sizePerPage: 100,
      totalSize: orders.length, // replace later with size(users),
      custom: true,
    }

   

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Orders | Channel Manager</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Order" breadcrumbItem="Orders" />
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>

                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField='id'
                      columns={this.state.orderListColumns}
                      data={orders}
                    >
                      {
                        ({
                          paginationProps,
                          paginationTableProps
                        }) => (
                          <ToolkitProvider
                            keyField='_id'
                            columns={this.state.orderListColumns}
                            data={orders}
                            search
                          >
                            {
                              toolkitprops => (
                                <React.Fragment>
                                  <Row className="mb-2">
                                    <Col sm="4">
                                      <div className="search-box ms-2 mb-2 d-inline-block">
                                        <div className="position-relative">
                                          <SearchBar {...toolkitprops.searchProps} />
                                          <i className="bx bx-search-alt search-icon" />
                                        </div>
                                      </div>
                                    </Col>
                                    
                                  </Row>
                                  <Row>
                                    <Col xl="12">
                                      <div className="table-responsive">
                                        <BootstrapTable
                                          {...toolkitprops.baseProps}
                                          {...paginationTableProps}
                                          
                                          classes={
                                            "table align-middle table-nowrap table-hover"
                                          }
                                          bordered={false}
                                          striped={false}
                                          responsive
                                        />

                                        
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row className="align-items-md-center mt-30">
                                    <Col className="pagination pagination-rounded justify-content-end mb-2">
                                      <PaginationListStandalone
                                        {...paginationProps}
                                      />
                                    </Col>
                                  </Row>
                                </React.Fragment>
                              )}
                          </ToolkitProvider>
                        )}
                    </PaginationProvider>
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

Orders.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
}


const mapStateToProps = ({ ordersr }) => 
 ( {orders: ordersr.orders,

  })

const mapDispatchToProps = dispatch => ({
    onGetOrders: () => dispatch(getOrders()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Orders))
