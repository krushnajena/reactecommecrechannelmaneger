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

import { getChannels } from "../../../store/channels/actions"
import { isEmpty, size, map } from "lodash"

class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      channelListColumns: [
       
        
        {
          text: "Channel Name",
          dataField: "channelName",
          sort: true,
         
        },
        {
          text: "Channel Name",
          dataField: "communicationBrandName",
          sort: true,
         
        },
        {
          text: "Last Order Sync",
          dataField: "lastordersync",
          sort: true,
         
        },
        {
          text: "Last Inventory Sync",
          dataField: "lastinventorysync",
          sort: true,
        },
       
        {
          dataField: "_id",
          isDummyField: true,
          editable: false,
          text: "Action",
          formatter: (cellContent, channel) => (
            <div className="d-flex gap-3">
            </div>
          ),
        },
      ]
    }
   
  }


  

  componentDidMount() {
    const { channels, onGetChannels } = this.props
    onGetChannels()
    this.setState({ channels })
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { channels } = this.props
    if (!isEmpty(channels) && size(prevProps.channels) !== size(channels)) {
      this.setState({ channels })
    }
  }

  /* Insert,Update Delete data */

  

  

  
  /* Insert,Update Delete data */

  render() {
    // const { users } = this.state
    const { SearchBar } = Search;

    const { channels } = this.props

    

    const pageOptions = {
      sizePerPage: 10,
      totalSize: channels.length, // replace later with size(users),
      custom: true,
    }

   

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Intigrated Channels | Channel Manager</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Channels" breadcrumbItem="Intigrated Channels" />
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>

                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField='id'
                      columns={this.state.channelListColumns}
                      data={channels}
                    >
                      {
                        ({
                          paginationProps,
                          paginationTableProps
                        }) => (
                          <ToolkitProvider
                            keyField='_id'
                            columns={this.state.channelListColumns}
                            data={channels}
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
                                    <Col sm="8">
                                      <div className="text-sm-end">
                                        <Link
                                          color="primary"
                                          className="font-16 btn-block btn btn-primary"
                                          to="/selectyourchanneltointigrate"
                                        >
                                          <i className="mdi mdi-plus-circle-outline me-1" />
                                      Create New Channel
                                    </Link>
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

Channels.propTypes = {
  channels: PropTypes.array,
  onGetChannels: PropTypes.func,
}


const mapStateToProps = ({ channelsr }) => 
 ( {channels: channelsr.channels,

  })

const mapDispatchToProps = dispatch => ({
  onGetChannels: () => dispatch(getChannels()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Channels))