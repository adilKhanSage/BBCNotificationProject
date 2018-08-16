const request = require("request");
const notifications={};
notifications.send=(req,res,updateUserNotificationCount)=>{
		// Send request
				request({
				    url: "http://localhost:3000/bbc/api/v1/users",
				    method: "GET",
				    }, function (error, response, body) {
				    	if(response.statusCode==200){
				    		  updateUserNotificationCount(req,res);
				    	}else{
				    		res.status(500).send({
								  "errorId": 123400009,
								  "errorMsg": "Error Sending notification to User"+error.toString()+"\r\n"+response.body,
								  "errorCode": "TECH-xx-001",
								  "errorType": "Technical"
									});
						    	}
							});

	
};
module.exports = notifications;