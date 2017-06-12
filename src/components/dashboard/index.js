// @flow
// Smart Component Template
import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import Demo                   from './demo'




class DefaultDashboard extends React.Component {
    render() {
      return (
        <div>
          Hello World
          <Demo example="XYZ"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultDashboard)
