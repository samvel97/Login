import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import News from './pages/news'
import Profile from './pages/profile'

const useRoutes = (isAuthenticated)=>{
  if(isAuthenticated){
    return(
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/news' exact>
          <News/>
        </Route>
        <Route path='/profile' exact>
          <Profile/>
        </Route>
        <Redirect to='/' />
      </Switch>
    )
  }
  return(
    <Switch>
      <Route path = '/login' exact>
        <Login/>
      </Route>
      <Redirect to='/login' />
    </Switch>
  )
}

export default useRoutes;