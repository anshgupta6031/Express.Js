



const express = require("express")
const app = express()



app.use((req, res, next)=>{                             //  Application level middleware......      //  no matter what URI call is done from the client, this middleware will always execute....
    console.log("Welcome to the middleware demo.")
    next()                                          //  this next function is necessary in order to be able to go to the next middleware.....
})



const middleware_1 = function(req, res, next){              //  defined a middleware function to log the time of the request recieved from the client....

    console.log("Request came at : ", Date.now())
    next()
}



const middleware_2 = function(req, res, next){              //  defined another middleware function to log the time of the response sent from the server....

    console.log("Response sent at : ", Date.now())
    next()
}



app.use("/hello", middleware_1)                     //  Route level middleware......        //  This middleware will only be executed if the passed URI is called......


app.get("/hello", (req, res, next)=>{               //  handeling http GET request with a passed Route level middleware......
    res.send("Message")
    next()
})


app.use("/hello", middleware_2)                     //  Route level middleware......        //  executes after the response is sent by the previous middleware.......




app.listen(8080, ()=>{
    console.log("Server got started.......")
})






/*
An Express application can use the following types of middleware :-

1)  Application-level middleware
2)  Router-level middleware
3)  Error-handling middleware
4)  Built-in middleware
5)  Third-party middleware
*/


