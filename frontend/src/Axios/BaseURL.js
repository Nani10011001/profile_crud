import axios  from "axios";
const BaseURL=axios.create(
    {
        baseURL:"http://localhost:4001/auth"
    }
)
export default BaseURL