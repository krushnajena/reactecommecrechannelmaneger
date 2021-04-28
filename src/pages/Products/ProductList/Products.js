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

import { getProducts } from "../../../store/products/actions"
import { isEmpty, size, map } from "lodash"

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productListColumns: [
       
        
        {
          text: "Category Name",
          dataField: "category",
          sort: true,
         
        },
        {
          text: "SKU",
          dataField: "sku",
          sort: true,
         
        },
        
        {
          text: "PRODUCT NAME",
          dataField: "productName",
          sort: true,
        },
        {
            text: "PRODUCT NAME",
            dataField: "productName",
            sort: true,
          },
          {
            text: "DIMENSIONS",
            dataField: "productName",
            sort: true,
            formatter: (cellContent, product) => (
                <>
                  {product.length} x  {product.width} x {product.height} cm
            
                </>
              ),
          },
       
          {
            text: "LAST MODIFIED ON",
            dataField: "lastModifiedAt",
            sort: true,
          },
      ]
    }
   
  }


  

  componentDidMount() {
    const { products, onGetProducts } = this.props
    onGetProducts()
    this.setState({ products })
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { products } = this.props
    if (!isEmpty(products) && size(prevProps.products) !== size(products)) {
      this.setState({ products })
    }
  }

  /* Insert,Update Delete data */

  

  

  
  /* Insert,Update Delete data */

  render() {
    // const { users } = this.state
    const { SearchBar } = Search;

    const { products } = this.props

    

    const pageOptions = {
      sizePerPage: 10,
      totalSize: products.length, // replace later with size(users),
      custom: true,
    }

   

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Products | Channel Manager</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Inventory" breadcrumbItem="Products" />
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>

                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField='id'
                      columns={this.state.productListColumns}
                      data={products}
                    >
                      {
                        ({
                          paginationProps,
                          paginationTableProps
                        }) => (
                          <ToolkitProvider
                            keyField='_id'
                            columns={this.state.productListColumns}
                            data={products}
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

Products.propTypes = {
  products: PropTypes.array,
  onGetProducts: PropTypes.func,
}


const mapStateToProps = ({ productsr }) => 
 ( {products: productsr.products,

  })

const mapDispatchToProps = dispatch => ({
    onGetProducts: () => dispatch(getProducts()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Products))