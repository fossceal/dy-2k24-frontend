async function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}


function formatData(uid,token){
    let data = JSON.stringify({
        "uid": uid,
        "token": token
      });
      return data;
}

function formatRequest(data,route){
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://server.dakshayanthra.in/api/v2'+route,
        headers: { 
          'Content-Type': 'application/json',
          'allow-origin':'*'
        },
        data : data
      };
      return config;

}
function runAxios(config){
    return axios(config)
    .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
}