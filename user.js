const user={};
const usersStorage= require("./DB");
user.register= (req,res)=>{
if(req.body.username && req.body.accessToken){
	const userData={
  "username": req.body.username,
  "accessToken": req.body.accessToken,
  "creationTime":new Date(),
  "numOfNotificationsPushed": 0
}
try{
usersStorage.save(userData);
res.status(200).send(userData);
}catch(err){
res.status(500).send({
  "errorId": 123400009,
  "errorMsg": "Error registering User",
  "errorCode": "TECH-xx-001",
  "errorType": "Technical"
});
}
}else{
res.status(400).send({
  "errorId": 123456789,
  "errorMsg": "Invalid request",
  "errorCode": "TECH-xx-001",
  "errorType": "Business"
}
);
}
};

user.search= (req,res)=>{

try{
	const list=usersStorage.search()
res.status(200).send(list);
}catch(err){
	res.status(500).send({
  "errorId": 123400009,
  "errorMsg": "Error registering User",
  "errorCode": "TECH-xx-001",
  "errorType": "Technical"
});
}
};
module.exports =user;
