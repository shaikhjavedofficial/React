import { Courses } from "./Courses";
import { CoursesReducer } from "./CoursesReducer";
export const CourseLand =()=>{
    console.log(CoursesReducer);
    return(
        <div>
            <table>
                <tr>
                    {CoursesReducer.Data.map((item) =>(
                        <td>
                            <Courses
                            courseName={item.courseName}
                            instituteName={item.instituteName}
                            contact={item.contact}
                            city={item.city}/>
                        </td>
                    )
                    )}
                </tr>
            </table>
        </div>
    );
}