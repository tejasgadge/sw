import { createContext } from "react";

const search_input_context=createContext(
    {
        api_data:[],
        filter_data:[]
    }
)

export default search_input_context;