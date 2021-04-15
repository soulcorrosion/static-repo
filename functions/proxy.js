const fetch = require("node-fetch");
const DomParser = require('dom-parser');

const parser = new DomParser();
const API_ENDPOINT = "https://www.farfetch.com/shopping/men/clothing-2/items.aspx";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT/*, { headers: { Accept: "application/json" } }*/)
    .then((response) => response.text())
    .then((data) => {
      const dom = parser.parseFromString(data);
      /*const products = dom.getElementsByAttribute("itemtype", "http://schema.org/Product") || [];
      let html = '';
      if (products.length > 0) {
        let url = products[0].getAttribute("href");
        html = url;
      }*/
      const html = dom;
      return {
      statusCode: 200,
      body: html
    };
  })
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};