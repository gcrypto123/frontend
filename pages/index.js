"use client";
// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
const SignIn = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const onClickSubmit = useCallback(async(e)=>{
             e.preventDefault();
             if(email){
                if(password){
                    setErrorMessage("");
                    const result = await signIn("credentials", {
                        email: email,
                        password: password,
                        redirect: false,
                      });
                      if(result?.status == 200){
                         router.push('/dashboard');
                      }else{
                        setErrorMessage(result?.error);
                      }
                }else{
                    setErrorMessage("Enter valid password");
                }
             }
             else{
                setErrorMessage("Enter valid email");
             }       
    },[email,password]);
    
    const onChangeEmail= useCallback((text)=>{
        setEmail(text.target.value);
    },[]);
    const onChangePassword = useCallback((text)=>{
        setPassword(text.target.value);
    },[]);

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/images/brand/logo/logo-primary.svg"
                  className="mb-2"
                  alt=""
                />
              </Link>
              <p className="mb-6">Please enter your user information.</p>
              {errorMessage.length>0 && <p className="text-danger">{errorMessage}</p> }
            </div>
            {/* Form */}
            <Form>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username or email</Form.Label>
                <Form.Control
                  type="email"
                  name="username"
                  value={email}
                  onChange={onChangeEmail}
                  placeholder="Enter address here"
                  required=""
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  placeholder="**************"
                  required=""
                />
              </Form.Group>

              {/* Checkbox */}
              <div className="d-lg-flex justify-content-between align-items-center mb-4">
                <Form.Check type="checkbox" id="rememberme">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>Remember me</Form.Check.Label>
                </Form.Check>
              </div>
              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" onClick={onClickSubmit} >
                    Sign In
                  </Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/authentication/sign-up" className="fs-5">
                      Create An Account{" "}
                    </Link>
                  </div>
                  {/* <div>
                    <Link
                      href="/authentication/forget-password"
                      className="text-inherit fs-5"
                    >
                      Forgot your password?
                    </Link>
                  </div> */}
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

SignIn.Layout = AuthLayout;

export default SignIn;
