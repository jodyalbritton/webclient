import React                    from 'react'
import AppBar                   from 'material-ui/AppBar'



import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/svg-icons/navigation/menu'



// @flow

export default class Header extends React.Component {
  componentDidMount() {
  }

  props: {
    title: string,
    sidebar: Boolean,
    handleSidebarLeft: Function,
    handleSideBarRight: Function,
  }


  handleSidebarLeft() {
    this.props.handleSidebarLeft()
  }


  render() {
    return (
      <AppBar
         title={this.props.title}
         onLeftIconButtonTouchTap={::this.handleSidebarLeft}
         iconElementLeft={<IconButton><Menu /></IconButton>}
         style={{ margin: 0, position: 'fixed'}}
       />
    )
  }
}
