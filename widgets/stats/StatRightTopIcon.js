// Widget : Stat Style 
// Style : Stat widget with right top icon

// import node module libraries
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const StatRightTopIcon = props => {
    const { info } = props;
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="icon-shape icon-md bg-light-primary text-primary rounded-2">
                        {info.icon}
                    </div>
                    <div>
                        <h2 className="">{info.value}</h2>
                    </div>
                </div>
                <div className='d-flex justify-content-end' >
                    <h4 className="mb-0" style={{fontSize:14, color:"gray"}} >{info.title}</h4>
                    {/* <p className="mb-0" dangerouslySetInnerHTML={{ __html: info.statInfo}}></p> */}
                </div>
            </Card.Body>
        </Card>
    )
}

// Typechecking With PropTypes
StatRightTopIcon.propTypes = {
    info: PropTypes.any.isRequired
};

export default StatRightTopIcon