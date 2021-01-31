const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I5ZnJGW0RmhL5QRgif8B7YuDF1bGjRJUXdpU91kskKBTgLtA646qYVPC5crZn8vigWOfSu9BXZ0XZzLe06g4hir00PCAOocha')


//API



//App config
const app = express()


//Middleware

app.use(cors({origin : true}));


app.use(express.json());
//API route

app.post('/payments/create',async(request,response)=>{
    const total = request.query.total;
    console.log('payment request recieved !!!!!!!',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })

});
  
exports.api = functions.https.onRequest(app);
