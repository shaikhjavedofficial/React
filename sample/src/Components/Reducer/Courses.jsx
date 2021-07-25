export const Courses=({courseName,instituteName,contact,city} )=>{
    return(
        <table striped bordered hover size="sm">
            <tr>
                <td>Course Name :</td>
                <td>{courseName}</td>
            </tr>
            <tr>
                <td>Institute :</td>
                <td>{instituteName}</td>
            </tr>
            <tr>
                <td>Contact :</td>
                <td>{contact}</td>
            </tr>
            <tr>
                <td>City :</td>
                <td>{city}</td>
            </tr>
        </table>
    );
}