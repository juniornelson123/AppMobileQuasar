import ActionCable from 'actioncable'
import consts from './consts'

var webSocketProtocol = process.env.NODE_ENV === 'production' ? 'wss' : 'ws'

const App = {}

const config = {
  connected: function() {
    console.log("Cliente conectou")
  },
  disconnected: function() {

  },
  received: function(data) {
      console.log(data);
  },
  send_message: function(message, chat_room_id, reference_id, action) {
  var msg = {
        message: message,
        chat_room_id: chat_room_id,
        reference: reference_id,
        action: action
    }
    if(this.perform('send_message', msg)){
        return msg
    }else{
        return false;
    }
  }
}


App.cable = ActionCable.createConsumer(webSocketProtocol + '://localhost:3000/cable')

App.parking = App.cable.subscriptions.create({
    channel: "ParkingChannel",
    chat_room_id: JSON.parse(localStorage.getItem(consts.consts.loginUser)).id
    
}, config);
    
export default App