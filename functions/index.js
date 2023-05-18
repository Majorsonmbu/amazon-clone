const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51N4QtpLVtgU5sOvy6bmY0xFuUhTivHqygDg0HukumntHsjhqZokTATTAx7kgydBZ3AHRe4iI3qNRFAwDiVL44YcA00lYWtZK34");

// - API


// APP CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors({origin: true}))
app.use(express.json);

// API ROUTES
app.get("/", (req, res) => res.status(200).send("hello world"));


// LISTEN COMMANDS
exports.api = functions.https.onRequest(app);