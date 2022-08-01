import Card from "react-bootstrap/Card"
const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAMFBMVEXi4uImJiadnZ2SkpLZ2dlsbGxdXV15eXnGxsaoqKiysrKGhoZNTU3Q0NA7Ozu8vLx+CZkfAAAAtElEQVRoge3T2Q6DIBCF4Tkim0t9/7etS22TWg2a3pj834WTcCKDgGYAAAAAAAC4qVbV+Kyj5PtPLc8L1F7zJEHOPbr6XUvzIkFxmiTLmVWq1lqcF8lpfqVVY5bk1zoomEUNe/m5Jq91RaVxaxTWOo02y4J/539pYuHRhaP8QpPtdmQpH+UXmmwPNnTdcol28jOS8/Ku31zRccmN4n5+8jsmzffPNqidDiLv5QAAAAAAALilJ/frBu723vpKAAAAAElFTkSuQmCC"
function ChefCard({chefcardinfo}) {

    return (
        <Card style={{width:'9rem',float:"left",margin:"2px"}}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>
                {chefcardinfo.chef_price}
                </Card.Title>
                <Card.Text>
                {chefcardinfo.first_name+" "+chefcardinfo.last_name}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ChefCard