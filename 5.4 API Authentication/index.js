import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "";
const yourPassword = "";
const yourAPIKey = "";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch {
    res.status(404).send(error.message);
  }
  //TODO 2: Use axios to hit up the /random endpoint

  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(
      API_URL + "/all?page=2",
      {},
      {
        auth: {
          username: yourUsername,
          password: yourPassword,
        },
      }
    );
    res.render("index.ejs",{cotent: JSON.stringify(result.data)});
  } catch {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try{
    const result =await axios.get(API_URL + "/filter",{params:{
      score:5,
      apiKey:yourAPIKey,
    },
  });
  }catch{
    res.status(404).send(error.message);
  }
});
const config ={
headers:{Authorization: `Bearerv ${yourBearerToken}`},
};
app.get("/bearerToken", async(req, res) => {
  try{
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch{
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
