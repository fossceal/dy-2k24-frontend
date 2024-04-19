async function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

var _libDEBUG = false;

function formatData(type="login",uid,token){

  if(type == "login"){
    let data = JSON.stringify({
        "uid": uid,
        "token": token
      });
      if(_libDEBUG){
        console.log(data);
      }
      return data;
    }else if(type == "register"){
      let data = JSON.stringify({
        "uid": uid,
        "token": token
      });
      if(_libDEBUG){
        console.log(data);
      }
      return data;
    }
}


function elem(id){
    return document.getElementById(id);

}

function formatRequest(data,route,method){
    let config = {
        method: method || 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/v2'+route,
        headers: { 
          'Content-Type': 'application/json',
          'allow-origin':'*'
        },
        withCredentials: true,
        // ,
        data : data
      };
      if(_libDEBUG){
        console.log(config);}
      return config;

}
function runAxios(config){
    return axios(config)
    .then(function (response) {
      if(_libDEBUG){
        console.log(response.data);
      }
        return response.data;
      })
      .catch(function (error) {
        if(_libDEBUG){
        console.log(error);
        }
        return error;
      });
}


async function ME(){
  return await fetch("http://localhost:3000/api/v2/me",{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "allow-origin":"*",
      "same-origin":"*"
      ,
      "credentials":"include"
    }
  }).then(res => res.json())
}