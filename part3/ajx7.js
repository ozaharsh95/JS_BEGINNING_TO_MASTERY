// AJAX -> asynchrouns javscript and xml

/*
   ajax  thi web application data ne server thi receive ne 
   send kari sake chhe asynchronously (run in background)
   without interfering with the display and behaviour of the existing page


*/

/*
    modern jamana ma JSON use thay chhe, AJAX nahi
*/

/**
 *  3 ways to create and send request to server
 *  
 * 1) XHR xmlHTTPRequest (old way)
 * 2) fetch API (modern way)
 * 3) axios (3rd party library)
 * 
 */

//xhr
//2:30:00

// const URL="https://jsonplaceholder.typicode.com/posts";
// const xhr=new XMLHttpRequest();


//step1

// console.log(xhr.readyState);

// xhr.open("GET",URL);

/*
console.log(xhr.readyState);

//onreadystatechange fxn jyare state change thay tyare function chale

xhr.onreadystatechange=function(){
    // console.log(xhr.readyState);
    if(xhr.readyState=== 4){
        // console.log(typeof xhr.response);
        const response=xhr.response;
        const data = JSON.parse(response);
        console.log(data);
    }
}
*/


//onload tyare j chale jyare teni redystate 4 thayi jay

// xhr.onload=function(){
//     // console.log(xhr.readyState);
//     const response=xhr.response;
//     const data = JSON.parse(response);
// }

// xhr.send();

//error handling 
// callback hell

/*
const URL="https://jsonplaceholder.typicode.com/posts/";

const xhr=new XMLHttpRequest();

xhr.open("GET",URL);

xhr.onload=()=>{
    if(xhr.status>=200 && xhr.status<300){
        const data=JSON.parse(xhr.response);
        const id=data[3].id;
        const xhr2=new XMLHttpRequest();
        const URL2=`${URL}/${id}`;

        xhr2.open("GET",URL2);
        xhr2.onload=()=>{
            const data2=JSON.parse(xhr2.response);
            console.log(data2);
        }

        xhr2.send();
    }else{
        console.log("SOMETHING WENT WRONG..!");
    }
}

xhr.onerror=()=>{
    console.log("Network Error...");
}

xhr.send();

*/

//promise thi use karavanu 

const URL="https://jsonplaceholder.typicode.com/posts";


function sendRequest(method,URL){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();

        xhr.open(method,URL);

        xhr.onload=function(){
            if(xhr.status>=200&&xhr.status<300){
                resolve(xhr.response);
            }else{
                reject(new Error("something went wrong.."));
            }
        }

        xhr.onerror=function(){
            reject(new Error("snth went wrong..!"));
        }

        xhr.send();
    });
}


sendRequest("GET",URL).then(response=>{
    const data=JSON.parse(response);
    // console.log(data);
    return data;
}).then(data=>{
    // console.log(data);
    const id=data[3].id;
    return id;
}).then(id=>{
    const url=`${URL}/${id}`;
    console.log(url);
    return sendRequest("GET",url);
    
}).then(newresponse=>{
    const newData=JSON.parse(newresponse);
    console.log(newData);
})