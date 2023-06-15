import { useParams } from "react-router-dom";
const Restaurnatid=()=>{
    const {id}=useParams();
    {console.log(id)}
    return(
        <>
        <h2>This is  a restaurant specific component</h2>
        <h3>{id}</h3>
        </>
    )
}
export default Restaurnatid;