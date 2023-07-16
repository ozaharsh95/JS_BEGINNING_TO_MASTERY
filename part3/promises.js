//promise
//je vastu future ma madase(khabar padase e)
//starting ma value undefined

//promise future value ne represent kare jeni  value atyre nahi khabar in future khabar padase

/* fried rice banavaa chhe  (i promise)

    promise-> fried rice banaanu
    status-> pending
    value-> undefined

    samagri:rice,oil,ghee,jira,vegetable
    kitchen ma jaine rice banavi nakhya

    status-> fulfiiled
    value-> fried rice

 */

/*
    scenerio 2

    promise-> fried rice banaanu
    status-> pending
    value-> undefined

    suppose rice j nahi apade pase tyare

    status-> reject
    value-> "rice is not avalaible"

*/

const bucket=['coffee','chips','vegetables','salt','rice'];


//promise ne create karyu
const bhat=new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice") ){
        resolve('friedRice');
    }else{
        reject("baka bhat to nahi khava made aje :(");
    }
});

//promise ne use karavanu

//way1
/*
bhat.then(
    //jyare promise resolve thay tyare
    (marabhat)=>{
    console.log("lets eat",marabhat);
    },
    //jyare promise reject thay 
    (error)=>{
        console.log(error);
    }
);
*/


//way2

/*
console.log("start");

//promise browser ka feature hai 
//async style

bhat.then(
    (marabhat)=>{
        console.log("lets eat",marabhat);
    }
    ).catch((error)=>{
        console.log(error);
    }
);

//setTimeout na callback function browsers handle kare + tena mate callback queue hoy

//promise na fucntions mate microtask queue hoy chhe

//priority --  microtask >>>>> callback

setTimeout(()=>{
    console.log("inside the setTimeout");
},0);


for(let i=0;i<100;i++){
    console.log(Math.random()*10,i);
}


console.log("end");

*/

//function returning promises

/*
function bhatPromise(){

    const bucket=['coffee','chips','vegetables','salt','rice'];

    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice") ){
            resolve('friedRice');
        }else{
            reject("baka bhat to nahi khava made aje :(");
        }
    });

}


bhatPromise().then(
    (marabhat)=>{
        console.log("lets eat",marabhat);
    }
    ).catch((error)=>{
        console.log(error);
    }
);
*/

//if i want to resolve/rejec

function myPromise(){
    return new Promise((resolve,reject)=>{
        const value=false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000);
    });
}

myPromise().then(()=>{console.log("resolved");}).catch(()=>{console.log("rejected");});