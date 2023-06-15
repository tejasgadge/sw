import Restaurantlist from "./restaurantlist"
import Nav from "./nav"
import search_input_context from "../context/search_input_context"
const Homepage=()=>{
    const filter_data={
        api_data:[],
        filter_data:[]
      }
    return (
        <>
        <search_input_context.Provider value={filter_data}>
        <Nav/>
        <Restaurantlist/>
        </search_input_context.Provider>
        </>
    )
}

export default Homepage;