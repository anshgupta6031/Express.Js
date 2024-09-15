



const express = require("express")              //  express is imported as a function........
console.log(typeof(express))


const app = express()




const students = {              //  Dummy data.......
    1 : {
        name : "Ansh",
        age : 21,
        subject : "Maths",
        id : 1,
    },

    2 : {
        name : "kamlesh",
        age : 20,
        subject : "English",
        id : 2,
    },

    3 : {
        name : "Rohan",
        age : 23,
        subject : "Physics",
        id : 3,
    },
}




//  Demonstration of using path param in a URI.......

//  GET localhost:8080/api/v1/students/123                  //  code for this URI........
//  whenever we call "localhost:8080/api/v1/students/123" from the browser, it is a GET http request by default.....

app.get("/api/v1/students/:id", (req, res)=>{               //  here, ':id' is the representation of path param in express......              
    console.log(req.params)                                 //  the passed parameter is logged as a object.......

    let std_id = req.params.id                      //  id path param is stored.......

    const std_obj = students[std_id]                //  object's value with the key std_id is stored in std_obj.......

    if(std_obj != null){
        res.status(200).send(std_obj)          //  response send by the server if the status is 200(success).....
    }

    else{
        res.status(500).send({error : "Student not found...."})          //  response send by the server if the status is 500(failure).....
    }

})




//  Demonstration of using query param in a URI.......

//  GET localhost:8080/api/v1/students?id=2                  //  code for this URI........

app.get("/api/v1/students", (req, res)=>{
    console.log(req.query)                                 //  the passed query is logged as a object.......

    let stud_id = req.query.id                     //  id query param is stored.......

    const stud_obj = students[stud_id]                //  object's value with the key std_id is stored in std_obj.......

    if(stud_obj != null){
        res.status(200).send(stud_obj)          //  response send by the server if the status is 200(success).....
    }

    else{
        res.status(500).send({error : "Student not found...."})          //  response send by the server if the status is 500(failure).....
    }
})





//  POST localhost:8080/api/v1/students                  //  code for this URI........
/*
{                                           //  request body having data in JSON format.......
    "name" : "Ansh",
    "age" : 21,
    "subject" : "Maths",
    "id" : 1,
}
*/

app.use(express.json())                 //  A built-in middleware to convert the JSON object sent by the client to a js object.......

app.post("/api/v1/students", (req, res)=>{
    console.log("Calling inside the post route....")

    console.log(req.body)                   //  the request body sent by the client is logged as a js object......

    students[req.body.id] = req.body                //  setting the recieved object into the student obj....

    console.log(students)                   //  updated students object.....

    res.status(201).send(students[req.body.id])          //  response send by the server if the status is 201(data accepted).....
})






app.listen(8080, ()=>{                          //  created a server using express, which also uses the http module to make the server internally.....
    console.log("The server got started.......")
})




