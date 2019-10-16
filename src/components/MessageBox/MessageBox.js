import React from 'react'
import './MessageBox.css'

function MessageBox(props) {
return (

<div id="message-box" className="fixed-bottom">
​
<div id="input-and-button" className="input-group mb-3 mx-auto">
  <input id="message-input" type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
  <div id="send-div" className="input-group-append">
    <button className="w3-button w3-btn w3-blue" style={{borderTopRightRadius: 5, borderBottomRightRadius: 5}} type="button">Send</button>
  </div>
</div>

</div>
        
    )
}

export default MessageBox