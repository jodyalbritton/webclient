import React          from 'react'
import MenuItem       from 'material-ui/MenuItem'
import Drawer         from 'material-ui/Drawer'
import AppBar         from 'material-ui/AppBar'
import { Link }       from 'react-router-dom'

class Sidebar extends React.Component {
    constructor() {
      super()
    }

    render() {
        return (
          <div>
            <Drawer open={true} docked={true} className="app-drawer">
              <AppBar showMenuIconButton={false} />
              <Link className="nav-link"
                activeClassName="active"
                to="/">
                  Home
              </Link>

              <Link className="nav-link"
                activeClassName="active"
                to="/bots">
                  Bots
              </Link>

              <Link className="nav-link"
              activeClassName="active"
              to="/accounts">
                Accounts
              </Link>

              <Link className="nav-link"
              activeClassName="active"
              to="/about">
                About
              </Link>

            </Drawer>
          </div>
        )
    }
}



export default Sidebar
