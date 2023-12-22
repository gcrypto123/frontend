import Cards from "./components/cards";
import {
    Col,
    Row,
    Card,
    Button,
    Form,
    ListGroup,
    ListGroupItem,
    Nav,
    Tab,
    Container,
  } from "react-bootstrap";
const WithdrawalRequest = () =>{
   return <>
   <Card className="mx-5 my-5">
    <Card.Header>Withdrawal Request</Card.Header>
    <Card.Body>
        <Card.Title style={{marginBottom:8}}>Withdrawal Avaliable</Card.Title>
        <Card.Text>
        <Form.Control
                  type="email"
                  name="username"
                  value=""
                  required=""
                  disabled
                />
        </Card.Text>
        <Card.Title style={{marginBottom:8}}>Withdrawal Amount (Min : 5 TRX)</Card.Title>
        <Card.Text>
        <Form.Control
                  type="email"
                  name="username"
                  value=""
                  required=""
                />
        </Card.Text>
        <Button variant="success" className="px-5">Submit</Button>
    </Card.Body>
</Card>
   {/* <Cards /> */}
   </>
}

export default WithdrawalRequest;