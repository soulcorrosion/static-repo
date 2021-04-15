const fetch = require("node-fetch");

const API_ENDPOINT = "https://www.farfetch.com/shopping/men/clothing-2/items.aspx";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT/*, { headers: { Accept: "application/json" } }*/)
    .then((response) => response.text())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};