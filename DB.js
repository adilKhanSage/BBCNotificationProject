const userList={};
const DB={};
DB.save=(userData)=>{try{userList[userData["username"]]=(userData);return true;}catch(error){return false;}};
DB.search=()=>(Object.keys(userList).map((k) => userList[k]));
DB.getUser=(username)=>(userList[username]);
module.exports = DB;