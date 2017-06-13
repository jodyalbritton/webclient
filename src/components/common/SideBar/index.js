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
                  to="/">
                  <MenuItem>
                    Home
                  </MenuItem>
                </Link>


                <Link className="nav-link"
                  to="/bots">
                  <MenuItem>
                    Bots
                  </MenuItem>
                </Link>


                <Link className="nav-link"
                to="/accounts">
                <MenuItem>
                  Accounts
                </MenuItem>
                </Link>


                <Link className="nav-link"
                to="/about">
                <MenuItem>
                  About
                </MenuItem>
                </Link>

            </Drawer>
          </div>
        )
    }
}



export default Sidebar
