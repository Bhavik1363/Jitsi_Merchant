import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {deepOrange500} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import Close from 'material-ui/svg-icons/navigation/close'
import CommunicationCall from 'material-ui/svg-icons/communication/call'
import Message from 'material-ui/svg-icons/communication/message'
import Github from './Github'

import ReactMaterialUiNotifications from './reactnotification'
import moment from 'moment'

import {ComponentData, NotificationData} from './Data'

const styles = {
  appbar: {
    background: deepOrange500,
    textAlign: 'left'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  footer: {
    marginTop: 15,
    width: 'calc(100% - 30px)',
    fontSize: 16,
    padding: 15,
    backgroundColor: '#fff'
  },
  logo: {
    width: 48
  },
  paper: {
    width: '100%',
    textAlign: 'left',
    marginBottom: 15,
    padding: 15,
    fontSize: 18
  },
  rightIcon: {
    width: 36,
    height: 36,
    fill: '#fff'
  },
  table: {
    marginTop: 15
  },
  headerStyle: {
    tableLayout: 'auto'
  },
  table1Col1: {
    width: 137
  },
  table1Col2: {
    width: 72
  },
  table1Col3: {
    width: 128
  },
  table1Col2C: {
    width: 72,
    color: deepOrange500
  },
  table2Col3: {
    width: 36
  }
},
muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

export default class Main extends Component {
  state = {
    count: 0
  }

  showNotification = () => {
    ReactMaterialUiNotifications.showNotification({
      title: 'Title',
      additionalText: `Some message to be displayed ${this.state.count}`,
      icon: <Message />,
      iconBadgeColor: deepOrange500,
      overflowText: "joe@gmail.com",
      timestamp: moment().format('h:mm A')
    })
    // update notifications count
    this.setState({
      count: ++this.state.count
    })
  }

//   showPersonalisedNotification = () => {
//     // update notifications count
//     this.setState({
//       count: ++this.state.count
//     })
//     ReactMaterialUiNotifications.showNotification({
//       title: 'Title',
//       additionalText: `Some message to be displayed ${this.state.count}`,
//       icon: <Message />,
//       iconBadgeColor: deepOrange500,
//       overflowText: "me@gmail.com",
//       timestamp: moment().format('h:mm A'),
//       personalised: true,
//       avatar: "demo.png"
//     })
//   }

//   showPriorityNotification = () => {
//     // update notifications count
//     this.setState({
//       count: ++this.state.count
//     })
//     ReactMaterialUiNotifications.showNotification({
//       title: 'Title',
//       additionalText: `Some message to be displayed ${this.state.count}`,
//       icon: <CommunicationCall />,
//       iconBadgeColor: deepOrange500,
//       overflowContent: <div>
//         <FlatButton
//           label="dismiss"
//           icon={<Close />}
//         />
//         <FlatButton
//           label="answer"
//           icon={<CommunicationCall />}
//         />
//       </div>,
//       timestamp: moment().format('h:mm A'),
//       personalised: true,
//       avatar: "demo.png",
//       priority: true,
//       zDepth: 4
//     })
//   }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          
          
          <div style={styles.buttonContainer}>
            <RaisedButton
              label="Show Notification"
              onTouchTap={this.showNotification}
            />
            
          </div>
          
          </div>
          <ReactMaterialUiNotifications
            desktop={true}
            transitionName={{
              leave: 'dummy',
              leaveActive: 'fadeOut',
              appear: 'dummy',
              appearActive: 'zoomInUp'
            }}
            transitionAppear={true}
            transitionLeave={true}
          />
        
      </MuiThemeProvider>
    )
  }
}