// import node module libraries
import React from "react";
import Link from 'next/link';
import { Card, Table, Dropdown, Image } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';

// import required data files
import TeamsData from "data/dashboard/TeamsData";

const Teams = ({ colConfig, rowData, tableName}) => {

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        (<Link
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="text-muted text-primary-hover">
            {children}
        </Link>)
    ));

    CustomToggle.displayName = 'CustomToggle';

    const ActionMenu = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <MoreVertical size="15px" className="text-muted" />
                </Dropdown.Toggle>
                <Dropdown.Menu align={'end'}>
                    <Dropdown.Item eventKey="1">
                        Action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                        Another action
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                        Something else here
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    return (
        <Card className="h-100">
            <Card.Header className="bg-white py-4">
                <h4 className="mb-0"> {tableName} </h4>
            </Card.Header>
            <Table responsive className="text-nowrap">
                <thead className="table-light">
                    <tr>{
                            colConfig.length===0 && <th style={{textAlign:"center"}} >No Rows Found</th>
                        }
                        { colConfig?.map((col,index)=>{
                            return <th>{col}</th>
                        })  }
                    </tr>
                </thead>
                <tbody>
                    {rowData.map((item, index) => {
                        return (
                            <tr key={index}>
                                {colConfig.map((col)=>{
                                    return <td className="align-middle">{item[col]}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Card>
    )
}

export default Teams