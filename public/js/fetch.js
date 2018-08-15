const fetchdata = (method, url, data, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      console.log(xhr.readyState ,xhr.status)
      if (xhr.readyState === 4) {
        console.log(JSON.stringify(xhr.responseText))
        if (xhr.status === 200) {
          var result = JSON.parse(xhr.responseText);
          // if (result.err) {
          //   console.log(45);
          //   cb(result.err);
          // } else {
             return cb(null, result.result);
          // }
        } 
        else {
          
          cb(new TypeError("Something is Error ! "));
          }
      }
   
    };
  
    xhr.open(method, url, true);
    xhr.send(JSON.stringify(data));
  };