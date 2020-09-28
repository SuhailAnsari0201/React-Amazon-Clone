const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HU8rIKpodPpARwKlyVyht9DZ7g0Gj8SqYBg8Zx8fq4nALPzguJhQVgfGEbdcQE2BNPJccvDcIPtWozEPYpmARD5008ttmuxPI"
);
// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => {
  response.status(200).send("Hello world");
});
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recived BOOM !!!", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example end point
//(http://localhost:5001/react--clone-84dd2/us-central1/api).
// change it's node engine 8-->10 for updating or vice-versa
//https://us-central1-react--clone-84dd2.cloudfunctions.net/api
