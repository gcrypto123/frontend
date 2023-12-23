
import { useCallback, useMemo, useState  } from 'react';
import Team from '../sub-components/dashboard/Teams'
import { getSession } from 'next-auth/react';
import { Container, Col, Row, Button, Modal,Card,Form,Badge } from 'react-bootstrap';
import { BE_HOST } from '../global-const';
import Link from 'next/link';
const UpgradedUsers = ({rowData}) =>{ 

    const [modalShow, setModalShow] = useState(false);
    const [selectedMemberId, setSelectedMemberId] = useState('');
    const ChangePlanModal = (props) => {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Upgrade Action
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="">
            {/* <h4 className="mb-1">Change your plan</h4> */}
            <p>Please Confirm below to upgrade the user with memberId as {props?.memberId}.</p>
          </Modal.Body>
          <Modal.Footer className="justify-content-start">
            <Button>Confirm</Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    };

    const BtnClickHandler = useCallback((e)=>{
        console.log(e.target.dataset.memberid);
        setSelectedMemberId(e.target.dataset.memberid);
        setModalShow(true);
    },[setSelectedMemberId,setModalShow]);


    const formatedRowData = rowData.map((row,index)=>{
        const firstData= index+1;
        const tempObj={ '#':firstData,...row,};
        return {...tempObj,'Action':<Button  onClick={BtnClickHandler} data-memberid={row?.memberId}  >Upgrade</Button>}
    })
    const Columns = useMemo(()=>{
        if(formatedRowData.length>0){
            const obj = formatedRowData[0];
            return Object.keys(obj);
        }
        else{
            return [];
        }
    },[])
    return <><Container fluid className="px-6 py-6 mt-6">
        <Row>
            <Team colConfig={Columns} rowData={formatedRowData} tableName="Upgraded User" />
            <ChangePlanModal
                  show={modalShow}
                  memberId={selectedMemberId}
                  onHide={() => setModalShow(false)}
            />
        </Row>
    </Container></>

}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log("inside server",session);
    const res = await fetch(`${BE_HOST}/user/upgradedUsers`,{
        method: 'Get',
        headers:{
            authorization : `bearer ${session?.user?.data?.token}`,
        }
    });

    const response = await res.json();
    console.log("response",response);
      return {
    props: {
      rowData: response?.data?.length > 0 ? response?.data : []  
    },
  };

}


export default UpgradedUsers;