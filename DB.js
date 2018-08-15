const userList=[];
const DB={};
DB.save=(userData)=>(userList.push(userData)?true:false);
DB.search=()=>(userList);
module.exports = DB;