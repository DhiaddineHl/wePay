
import './boxStyle.css'
import useActivities from '../../hooks/useActivities'
import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const ActivitiesBox = () => {

    const userId = localStorage.getItem("userId");
    const userID = userId?.toString();

    const {data : operations} = useActivities(userID);

  return (
    <div className="box" style={{width : "69vw", marginTop :"0"}}>
    <div className="boxHeader">
        <span className='title'>
            Recent Activities
        </span>
    </div>
    <div className="boxBody" style={{margin :"0", padding : "0"}}>
        {operations?.map(op =>
        <div className="boxItem" key={op.StoreName}>
            
            <div style={{display : "flex", justifyContent : "space-between", width : "97%"}}>
                <div style={{display : "flex", flexDirection: "column", justifyContent: "center"}}>
                    <span className="name">{op.StoreName}</span>
                    <span style={{fontWeight : "300", marginLeft: "1rem"}}>{op.Date}</span>
                </div>
                <span>
                    <span style={{fontWeight : "300", fontSize : "25px"}}>-{op.Amount}</span> <b style={{fontSize : "25px"}}>{op.Currency}</b>
                </span>
            </div>
        </div>
            )}
    </div>
</div>
  )
}

export default ActivitiesBox