//fetch

const URL="https://jsonplaceholder.typicode.com/posts";


//code1
/*
fetch(URL).then(response=>{
        // console.log(response.json());
        if(response.ok){
            return response.json();
        }else{
            throw new Error("snth went wrong..!!");
        }
}).then(data=>{
    console.log(data);
}).catch(error=>{
    console.log("inside catch");
    console.log(error);
})
*/

//post request
/*
fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
}).then(response=>{
    // console.log(response.json());
    if(response.ok){
        return response.json();
    }else{
        throw new Error("snth went wrong..!!");
    }
}).then(data=>{
console.log(data);
}).catch(error=>{
console.log("inside catch");
console.log(error);
})
*/


//async-await

/**
 * 
fetch(URL).then(res=>{
    return res.json()
}).then(data=>{
    console.log(data);
})
 * 
 */

//return ma promise ape
async function getPosts(){
    const response=await fetch(URL);
    if(!response.ok){
        throw new Error("snth went wrong")
    }
    const data =await response.json();
    return data;
}

getPosts().then(myData=>{
    console.log(myData);
}).catch(error=>{
    console.log(error);
})




