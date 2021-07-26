import React, { useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export const Counter=()=>{
    const [cntr,setCntr] = useState(0);
    return(
        <div>
            <table text-align="center">
                <tr>
                    <td>
                        <Button variant="danger" disabled={!(cntr > 0)} onClick={()=>cntr>0 && setCntr(cntr - 5)}>
                            <h1>-</h1>
                        </Button>
                    </td>
                    <td><h1>{cntr}</h1></td>
                    <td>
                        <Button variant="success" disabled={!(cntr < 10)} onClick={()=>cntr<100  && setCntr(cntr + 5)}>
                            <h1>+</h1>
                        </Button>
                    </td>
                </tr>
            </table>
        </div>
    );
}