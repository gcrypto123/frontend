// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
const SignUp = () => {

  const router = useRouter();
  const [userName,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [referralId, setReferralId] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms,setTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const register = useCallback(async(email,password,mobile,referralId)=>{
    let user = null; 
    try{
    const res = await fetch("http://localhost:1000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email :email,
        password:password,
        mobile:mobile,
        referralId:referralId
      }),
    });
    user = await res.json();
    if (user) {
      return user;
    } else {
      return null;
    }
  }catch(e){
    console.log(e);
  }
  },[]);

  const onClickSubmit = useCallback(async(e)=>{
      e.preventDefault();
      if(userName){
        if(email){
          if(password){
            if(confirmPassword){
               if(mobile){
                 if(referralId){
                  if(terms){
                    if(password === confirmPassword){
                     const user = await register(email,password,mobile,referralId);
                     if(!user?.data){
                      setErrorMessage(user?.message);
                     }
                     else{
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
                     } 
                    }   
                    else{
                      setErrorMessage("Password and Confirm Password MisMatch");
                    }
                  }else{
                    setErrorMessage("please check the Terms & conditions");
                  }
                 }else{
                  setErrorMessage("Enter valid referral Id");
                 }
               }else{
                setErrorMessage("Enter valid mobile number");
               } 
            }else{
              setErrorMessage("Enter valid confirm password");
            }
          }else{
            setErrorMessage("Enter valid password");
          }
        }else{
          setErrorMessage("Enter valid Email");  
        }
      }else{
        setErrorMessage("Enter valid username");
      }
  },[userName,mobile,password,confirmPassword,terms,referralId,email]);
  const onChangeMobile = useCallback((text)=>{
    setMobile(text.target.value);
  },[]);
  const onChangeReferralId = useCallback((text)=>{
    setReferralId(text.target.value);
  },[]);
  const onChangeTerms = useCallback(()=>{
    setTerms(prev=>!prev);
  },[]);
  const onChangeUserName = useCallback((text)=>{
    setUserName(text.target.value);
  },[]);
  const onChangeEmail = useCallback((text)=>{
    setEmail(text.target.value);
  },[]);
  const onChangePassword = useCallback((text)=>{
    setPassword(text.target.value);
  },[]);
  const onChangeConfirmPassword = useCallback((text)=>{
    setConfirmPassword(text.target.value);
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
              {errorMessage.length>0 && <p className="text-danger">{errorMessage}</p>}
            </div>
            {/* Form */}
            <Form>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username or email</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="User Name"
                  required=""
                  value={userName}
                  onChange ={onChangeUserName}
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  placeholder="Enter address here"
                  required=""
                />
              </Form.Group>

              {/* mobile No */}
              <Form.Group className="mb-3" controlId="mobile">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control
                  type="number"
                  name="mobile"
                  minLength={10}
                  value={mobile}
                  onChange={onChangeMobile}
                  placeholder="Enter Mobile No here"
                  required=""
                />
              </Form.Group>

              {/* ReferralId */}
              <Form.Group className="mb-3" controlId="referral">
                <Form.Label>Referral Id</Form.Label>
                <Form.Control
                  type="number"
                  name="referral"
                  value={referralId}
                  onChange={onChangeReferralId}
                  placeholder="Enter Referral Id here"
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

              {/* Confirm Password */}
              <Form.Group className="mb-3" controlId="confirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirm-password"
                  value={confirmPassword}
                  onChange={onChangeConfirmPassword}
                  placeholder="**************"
                  required=""
                />
              </Form.Group>

              {/* Checkbox */}
              <div className="mb-3">
                <Form.Check type="checkbox" id="check-api-checkbox">
                  <Form.Check.Input type="checkbox" checked={terms} onChange={onChangeTerms} />
                  <Form.Check.Label>
                    I agree to the <Link href="#"> Terms of Service </Link> and{" "}
                    <Link href="#"> Privacy Policy.</Link>
                  </Form.Check.Label>
                </Form.Check>
              </div>

              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary"  onClick={onClickSubmit} >
                    Create Free Account
                  </Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/" className="fs-5">
                      Already member? Login{" "}
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/authentication/forget-password"
                      className="text-inherit fs-5"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

SignUp.Layout = AuthLayout;

export default SignUp;
