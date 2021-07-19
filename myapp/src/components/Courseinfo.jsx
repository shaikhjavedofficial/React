export const CourseInfo=({courseName,institute,city,contact})=>{
    return (
      <table border="5px">
        <tr>
          <td>Course Name :</td>
          <td><span style={{color:"red"}}>{courseName}</span></td>
        </tr>
        <tr>
          <td>Institute :</td>
          <td>{institute}</td>
        </tr>
        <tr>
          <td>City :</td>
          <td>{city}</td>
        </tr>
        <tr>
          <td>Contact :</td>
          <td>{contact}</td>
        </tr>
      </table>

    );
}