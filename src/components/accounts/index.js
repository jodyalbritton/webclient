// @flow
// Smart Component Template
import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import Header                 from '../common/AppBar'



class AccountsView extends React.Component {
    render() {
      return (
        <div>
          <Header title="Accounts" />
          <div className="body-content">
            Accounts Page
          </div>
        </div>
      )
    }

}

function mapStateToProps(state) {
  return {
    // Map state to props here
  }
}

function mapDispatchToProps(dispatch: Object) {
  return {
    // Map Dispatch to props here
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsView)
