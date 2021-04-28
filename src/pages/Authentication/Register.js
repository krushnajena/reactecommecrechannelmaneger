import React, { Component } from "react"
import PropTypes from "prop-types"
import { Alert, Card, CardBody, Col, Container, Row } from "reactstrap"

import MetaTags from 'react-meta-tags';
// availity-reactstrap-validation
import { AvField, AvForm } from "availity-reactstrap-validation"

// action
import { apiError, registerUser, registerUserFailed } from "../../store/actions"

// Redux
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// import images
import profileImg from "../../assets/images/profile-img.png"
import logoImg from "../../assets/images/logo.svg"
// import images
import logodark from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"
import CarouselPage from "./CarouselPage"

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
  }

  // handleValidSubmit
  handleValidSubmit(event, values) {
    this.props.registerUser(values)
  }

  componentDidMount() {
    //this.props.apiError("")
    //this.props.registerUserFailed("")
  }

  render() {
    return (
      <React.Fragment>
        <div>
        <MetaTags>
            <title>Register | Channel Manager Dashboard</title>
          </MetaTags>
          <Container fluid className="p-0">
            <Row className="g-0">
              <CarouselPage />

              <Col xl={3}>
                <div className="auth-full-page-content p-md-5 p-4">
                  <div className="w-100">
                    <div className="d-flex flex-column h-100">
                      <div className="mb-4 mb-md-5">
                        <Link to="dashboard" className="d-block auth-logo">
                          <img
                            src={logodark}
                            alt=""
                            height="18"
                            className="auth-logo-dark"
                          />
                          <img
                            src={logolight}
                            alt=""
                            height="18"
                            className="auth-logo-light"
                          />
                        </Link>
                      </div>
                      <div className="my-auto">
                        <div>
                          <h5 className="text-primary">Register account</h5>
                          <p className="text-muted">
                            Get your free Skote account now.
                          </p>
                        </div>

                        <div className="mt-4">
                        <AvForm
                        className="needs-validation"
                        onValidSubmit={this.handleValidSubmit}
                      >
                        {this.props.user && this.props.user ? (
                          <Alert color="success">
                            Register User Successfully
                          </Alert>
                        ) : null}
                        {console.log(this.props.user)}
                        {this.props.registrationError &&
                        this.props.registrationError ? (
                          <Alert color="danger">
                            {this.props.registrationError}
                          </Alert>
                        ) : null}

                        <div className="mb-3">
                          <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <AvField
                            name="username"
                            label="Username"
                            type="text"
                            required
                            placeholder="Enter username"
                          />
                        </div>
                        <div className="mb-3">
                          <AvField
                            name="password"
                            label="Password"
                            type="password"
                            required
                            placeholder="Enter Password"
                          />
                        </div>

                        <div className="mt-4 d-grid">
                          <button
                            className="btn btn-primary btn-block waves-effect waves-light"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>

                        <div className="mt-4 text-center">
                          <p className="mb-0">
                            By registering you agree to the Skote{" "}
                            <Link to="#" className="text-primary">
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                      </AvForm>
             
                          <div className="mt-5 text-center">
                            <p>
                              Already have an account ?{" "}
                              <Link
                                to="login"
                                className="fw-medium text-primary"
                              >
                                {" "}
                                Login
                              </Link>{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 mt-md-5 text-center">
                        <p className="mb-0">
                          ©{" "}
                          <script>
                            document.write(new Date().getFullYear())
                          </script>{" "}
                          . Crafted with{" "}
                          <i className="mdi mdi-heart text-danger"></i> by
                          Appman
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

Register.propTypes = {
  apiError: PropTypes.any,
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.any,
  registrationError: PropTypes.any,
  user: PropTypes.object,
}

const mapStateToProps = state => {
  const { user, registrationError, loading } = state.Account
  return { user, registrationError, loading }
}

export default connect(mapStateToProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register)
