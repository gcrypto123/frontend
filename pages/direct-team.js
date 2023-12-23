
import { useCallback, useMemo } from 'react';
import Team from '../sub-components/dashboard/Teams'
import { getSession } from 'next-auth/react';
import { Container, Col, Row } from 'react-bootstrap';
const DirectTeam = ({rowData}) =>{ 

    const formatedRowData = rowData?.map((row,index)=>{
        const firstData= index+1;
        return { '#':firstData,...row};
    })
    const Columns = useMemo(()=>{
        if(formatedRowData?.length>0){
            const obj = formatedRowData[0];
            return Object.keys(obj);
        }
        else{
            return ['#','Id','Address','Status','Current Package','Date'];
        }
    },[])
    return <><Container fluid className="px-6 py-6 mt-9">
        <Row>
            <Team colConfig={Columns} rowData={formatedRowData} tableName="Direct Team" />
        </Row>
    </Container></>

}

// export async function getServerSideProps(context) {
//     const session = await getSession(context);
//     console.log("inside server",session);
//     const res = await fetch("http://localhost:1000/user/upgradedUsers",{
//         method: 'Get',
//         headers:{
//             authorization : `bearer ${session?.user?.data?.token}`,
//         }
//     });

//     const response = await res.json();
//     console.log("response",response);
//       return {
//     props: {
//       rowData: response?.data?.length > 0 ? response?.data : []  
//     },
//   };

// }


export default DirectTeam;   