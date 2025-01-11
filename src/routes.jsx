import Home from "./pages/Home/Home"
import UserList from "./pages/users/UserList"
import NewUeser from './pages/newUser/NewUser'
import Products from './pages/Products/Products'
let routes=[
    {path:'/', element:<Home/>},
    {path:'/users', element:<UserList/>},
    {path:'/newUser', element:<NewUeser/>},
    {path:'/Products', element:<Products/>},
    {path:'/UserList', element:<UserList/>},
]
export default routes