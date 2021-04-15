const fetch = require("node-fetch");
const DomParser = require('dom-parser');

const parser = new DomParser();
const API_ENDPOINT = "https://www.farfetch.com/uk/shopping/men/clothing-2/items.aspx";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT/*, { headers: { Accept: "application/json" } }*/)
    .then((response) => response.text())
    .then((data) => {      
      const productRegex = /itemID=\"(.*?)\"/mgi;
      const matches = [...data.matchAll(productRegex)];
      let html = '';
      if (matches.length > 0) {        
        html = `<a href="https://www.farfetch.com/uk/${matches.find(match => match[1].includes(".aspx?storeid="))[0].split('="')[1]}">Click Me</a>`;
        
      }
      return {
      statusCode: 200,
      body: html
    };
  })
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};