const request = require("request");
const notifications={};
notifications.options = {
  url: 'https://api.pushbullet.com/v2/pushes',
  method:"POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body:"{\"body\":\"BBC Notification from Adil Khan\",\"title\":\"BBC\",\"type\":\"note\"}"
} 

// Send request
notifications.send=(req,res,accessToken,updateUserNotificationCount)=>{
	notifications.options.headers["Access-Token"]=accessToken;
	request(notifications.options,
(error, response, body)=>{
				    	if(response && response.statusCode==200){
				    		  updateUserNotificationCount(req,res);
				    	}else{
				    		res.status(500).send({
								  "errorId": 123400009,
								  "errorMsg": "User specified Does not have Valid Access-Token "+JSON.parse(body).error.message+"\r\n",
								  "errorCode": "TECH-xx-001",
								  "errorType": "Technical"
									});
						    	}
							}
	);};
module.exports = notifications;