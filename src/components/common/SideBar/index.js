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
                <MenuItem onClick={console.log('clicked')}>
                  Home
                </MenuItem>
              </Link>

              <Link className="nav-link"
                activeClassName="active"
                to="/bots">
                <MenuItem onClick={console.log('clicked')}>
                  Bots
                </MenuItem>
              </Link>

              <Link className="nav-link"
              activeClassName="active"
              to="/accounts">
              <MenuItem onClick={console.log('clicked')}>
                Accounts
              </MenuItem>
              </Link>

              <Link className="nav-link"
              activeClassName="active"
              to="/about">
              <MenuItem onClick={console.log('clicked')}>
                About
              </MenuItem>
              </Link>

            </Drawer>
          </div>
        )
    }
}



export default Sidebar
