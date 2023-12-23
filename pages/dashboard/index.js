// import node module libraries
import { Fragment , useRef} from "react";
import Link from 'next/link';
import { Container, Col, Row, Card, Form, Button } from 'react-bootstrap';
import Tables from "../components/tables";
// import widget/custom components
import { StatRightTopIcon } from "widgets";
import { FE_HOST } from "../../global-const";
// import sub components
import { ActiveProjects, Teams, TasksPerformance } from "sub-components";

// import required data files
import ProjectsStatsData from "data/dashboard/ProjectsStatsData";

const Home = () => {
    const textBoxRef = useRef(null);
    const handleCopyClick = () => {
        // Select the text in the text box
        textBoxRef.current.select();
        // Copy the selected text to the clipboard
        document.execCommand('copy');
        // Deselect the text to avoid unwanted text selection
        window.getSelection().removeAllRanges();
        alert('Referral Link Copied Successfully');
      };
    return (
        <Fragment>
            <div className=" pt-5 pb-21"></div>
            <Container fluid className="mt-n22 px-6">
                <Card className="mx-5 my-5 mt-1">
    <Card.Header style={{fontWeight:'bold'}} >Referral Link</Card.Header>
    <Card.Body>
        <Card.Text className="d-flex">
        <Form.Control
                  style={{borderRadius:0}}
                  type="text"
                  name="referral"
                  value={`${FE_HOST}/authentication/sign-up?ref=12345`}
                  readOnly
                  ref={textBoxRef}
                />
                <Button onClick={handleCopyClick} style={{borderRadius:0}}>Copy</Button>
        </Card.Text>
    </Card.Body>
</Card>
               
                <Row>
                    {ProjectsStatsData.map((item, index) => {
                        return (
                            <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>
                                <StatRightTopIcon info={item} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </Fragment>
    )
}
export default Home;
