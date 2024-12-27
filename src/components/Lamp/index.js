import {useState} from "react";


function Lamp(){
    const [status, setstatus] = useState(false); 

    const handleClick = ()=>{
        // status= !status;
        // console.log(status);
        setstatus(!status);
    }
    return (
        <>
            <button onClick={handleClick}>Click</button>
            <div>

            </div>
            { status? " turn on": "turn off"}
        </>
    );

}
export default Lamp;