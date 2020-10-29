const express=require('express');
const cors=require('cors');
const port = process.env.PORT || "3000";
const app=express();
const axios = require('axios');

app.use(cors());

app.get("/api/cityList",(req,res,next)=>{

  axios.get('https://api.mashvisor.com/v1.1/client/city/list?state=ca',{headers:{ 'x-api-key': 'bea8b854-6e6a-4ca1-97d0-37c79adc393f' ,
  'Content-Type': 'application/json',
  'Cookie': '__cfduid=d4ab9691c53e0941925513ae4f934a4b01603740268'}}).then((resp)=>{
    res.json(resp.data);

}).catch(error => {
  console.log(error);
});
})
app.get("/api/prperties/:state/:city",(req,res)=>{
  let url="https://api.mashvisor.com/v1.1/client/city/properties/"+req.params.state+'/'+req.params.city
  axios.get(url,{headers:{ 'x-api-key': 'bea8b854-6e6a-4ca1-97d0-37c79adc393f' ,
  'Content-Type': 'application/json',
  'Cookie': '__cfduid=d4ab9691c53e0941925513ae4f934a4b01603740268'}}).then((resp)=>{
    res.json(resp.data);

}).catch(error => {
  console.log(error);
});})
app.get("/ads",(req,res)=>{
  res.json({
    "content": {
      "properties": [
          {
              "id": 1378380,
              "neighborhood": "Adams",
              "neighborhood_id": 395574,
              "address": "32 Leonard St",
              "zip_code": 1220,
              "zip": 1220,
              "city": "Adams",
              "county": "Berkshire",
              "state": "MA",
              "type": "Single Family Residential",
              "image_url": "http://photos.listhub.net/BCBORMA/232152/1?lm=20200903T162303",
              "list_price": 174500,
              "baths": 2,
              "beds": 3,
              "sqft": 1508,
              "mls_id": "232152",
              "days_on_market": null,
              "next_open_house_date": null,
              "next_open_house_start_time": null,
              "next_open_house_end_time": null,
              "last_sale_date": null,
              "last_sale_price": null,
              "listing_id": "232152",
              "has_pool": null,
              "is_water_front": null,
              "num_of_units": null,
              "latitude": 42.6081,
              "longitude": -73.1233,
              "traditional_ROI": 3.53467,
              "airbnb_ROI": 4.01057,
              "traditional_rental": 1160,
              "airbnb_rental": 1710.94,
              "traditional_cap": 3.53467,
              "airbnb_cap": 4.01057,
              "list_price_formatted": "$174,500",
              "price_per_sqft": 116,
              "country": "United States",
              "COC": {
                  "airbnb": 4.01057,
                  "traditional": 3.53467
              },
              "rental_income": {
                  "airbnb": 1710.94,
                  "traditional": 1160
              },
              "cap_rate": {
                  "airbnb": 4.01057,
                  "traditional": 3.53467
              },
              "image": "http://photos.listhub.net/BCBORMA/232152/1?lm=20200903T162303"
          },
          {
              "id": 1385827,
              "neighborhood": "Adams",
              "neighborhood_id": 395574,
              "address": "37 Leonard St",
              "zip_code": 1220,
              "zip": 1220,
              "city": "Adams",
              "county": "Berkshire",
              "state": "MA",
              "type": "Single Family Residential",
              "image_url": "http://photos.listhub.net/BCBORMA/232220/1?lm=20201019T184920",
              "list_price": 229900,
              "baths": 1,
              "beds": 3,
              "sqft": 1196,
              "mls_id": "232220",
              "days_on_market": null,
              "next_open_house_date": null,
              "next_open_house_start_time": null,
              "next_open_house_end_time": null,
              "last_sale_date": null,
              "last_sale_price": null,
              "listing_id": "232220",
              "has_pool": null,
              "is_water_front": null,
              "num_of_units": null,
              "latitude": 42.6077,
              "longitude": -73.1232,
              "traditional_ROI": 2.47716,
              "airbnb_ROI": 2.83838,
              "traditional_rental": 1160,
              "airbnb_rental": 1710.94,
              "traditional_cap": 2.47716,
              "airbnb_cap": 2.83838,
              "list_price_formatted": "$229,900",
              "price_per_sqft": 192,
              "country": "United States",
              "COC": {
                  "airbnb": 2.83838,
                  "traditional": 2.47716
              },
              "rental_income": {
                  "airbnb": 1710.94,
                  "traditional": 1160
              },
              "cap_rate": {
                  "airbnb": 2.83838,
                  "traditional": 2.47716
              },
              "image": "http://photos.listhub.net/BCBORMA/232220/1?lm=20201019T184920"
          },
          {
              "id": 1175155,
              "neighborhood": "Adams",
              "neighborhood_id": 395574,
              "address": "10 Forest Park Ave",
              "zip_code": 1220,
              "zip": 1220,
              "city": "Adams",
              "county": "Berkshire",
              "state": "MA",
              "type": "Single Family Residential",
              "image_url": "http://photos.listhub.net/BCBORMA/231337/1?lm=20200724T003227",
              "list_price": 199900,
              "baths": 3,
              "beds": 4,
              "sqft": 1456,
              "mls_id": "231337",
              "days_on_market": 1,
              "next_open_house_date": null,
              "next_open_house_start_time": null,
              "next_open_house_end_time": null,
              "last_sale_date": null,
              "last_sale_price": null,
              "listing_id": "231337",
              "has_pool": "true",
              "is_water_front": null,
              "num_of_units": null,
              "latitude": 42.6241,
              "longitude": -73.1221,
              "traditional_ROI": 3.93247,
              "airbnb_ROI": null,
              "traditional_rental": 1350,
              "airbnb_rental": null,
              "traditional_cap": 3.93247,
              "airbnb_cap": null,
              "list_price_formatted": "$199,900",
              "price_per_sqft": 137,
              "country": "United States",
              "COC": {
                  "airbnb": null,
                  "traditional": 3.93247
              },
              "rental_income": {
                  "airbnb": null,
                  "traditional": 1350
              },
              "cap_rate": {
                  "airbnb": null,
                  "traditional": 3.93247
              },
              "image": "http://photos.listhub.net/BCBORMA/231337/1?lm=20200724T003227"
          },
          {
              "id": 1410662,
              "neighborhood": "Adams",
              "neighborhood_id": 395574,
              "address": "8 Summer St",
              "zip_code": 1220,
              "zip": 1220,
              "city": "Adams",
              "county": "Berkshire",
              "state": "MA",
              "type": "Single Family Residential",
              "image_url": "http://photos.listhub.net/BCBORMA/232623/1?lm=20201013T162753",
              "list_price": 239900,
              "baths": 2,
              "beds": 4,
              "sqft": 2400,
              "mls_id": "232623",
              "days_on_market": null,
              "next_open_house_date": null,
              "next_open_house_start_time": null,
              "next_open_house_end_time": null,
              "last_sale_date": null,
              "last_sale_price": null,
              "listing_id": "232623",
              "has_pool": null,
              "is_water_front": null,
              "num_of_units": null,
              "latitude": 42.6194,
              "longitude": -73.1176,
              "traditional_ROI": 3.01542,
              "airbnb_ROI": null,
              "traditional_rental": 1350,
              "airbnb_rental": null,
              "traditional_cap": 3.01542,
              "airbnb_cap": null,
              "list_price_formatted": "$239,900",
              "price_per_sqft": 100,
              "country": "United States",
              "COC": {
                  "airbnb": null,
                  "traditional": 3.01542
              },
              "rental_income": {
                  "airbnb": null,
                  "traditional": 1350
              },
              "cap_rate": {
                  "airbnb": null,
                  "traditional": 3.01542
              },
              "image": "http://photos.listhub.net/BCBORMA/232623/1?lm=20201013T162753"
          },
          {
            "id": 1405762,
            "neighborhood": "Alford",
            "neighborhood_id": 10072,
            "address": "184 Green River Rd",
            "zip_code": 1230,
            "zip": 1230,
            "city": "Alford",
            "county": "Berkshire",
            "state": "MA",
            "type": "Single Family Residential",
            "image_url": "http://photos.listhub.net/BCBORMA/232566/1?lm=20201007T123528",
            "list_price": 625000,
            "baths": 2,
            "beds": 3,
            "sqft": 1440,
            "mls_id": "232566",
            "days_on_market": null,
            "next_open_house_date": null,
            "next_open_house_start_time": null,
            "next_open_house_end_time": null,
            "last_sale_date": null,
            "last_sale_price": null,
            "listing_id": "232566",
            "has_pool": "true",
            "is_water_front": null,
            "num_of_units": null,
            "latitude": 42.2319,
            "longitude": -73.4326,
            "traditional_ROI": 1.05392,
            "airbnb_ROI": 4.66483,
            "traditional_rental": 1520,
            "airbnb_rental": 4558.24,
            "traditional_cap": 1.05392,
            "airbnb_cap": 4.66483,
            "list_price_formatted": "$625,000",
            "price_per_sqft": 434,
            "country": "United States",
            "COC": {
                "airbnb": 4.66483,
                "traditional": 1.05392
            },
            "rental_income": {
                "airbnb": 4558.24,
                "traditional": 1520
            },
            "cap_rate": {
                "airbnb": 4.66483,
                "traditional": 1.05392
            },
            "image": "http://photos.listhub.net/BCBORMA/232566/1?lm=20201007T123528"
        },
        {
            "id": 1392435,
            "neighborhood": "Alford",
            "neighborhood_id": 10072,
            "address": "150 East Rd",
            "zip_code": 1266,
            "zip": 1266,
            "city": "Alford",
            "county": "Berkshire",
            "state": "MA",
            "type": "Single Family Residential",
            "image_url": "http://photos.listhub.net/BCBORMA/232391/1?lm=20201003T202739",
            "list_price": 1750000,
            "baths": 5,
            "beds": 4,
            "sqft": 5285,
            "mls_id": "232391",
            "days_on_market": null,
            "next_open_house_date": null,
            "next_open_house_start_time": null,
            "next_open_house_end_time": null,
            "last_sale_date": null,
            "last_sale_price": null,
            "listing_id": "232391",
            "has_pool": null,
            "is_water_front": null,
            "num_of_units": null,
            "latitude": 42.2551,
            "longitude": -73.4057,
            "traditional_ROI": -0.4808,
            "airbnb_ROI": 2.89831,
            "traditional_rental": 1730,
            "airbnb_rental": 8873.15,
            "traditional_cap": -0.4808,
            "airbnb_cap": 2.89831,
            "list_price_formatted": "$1,750,000",
            "price_per_sqft": 331,
            "country": "United States",
            "COC": {
                "airbnb": 2.89831,
                "traditional": -0.4808
            },
            "rental_income": {
                "airbnb": 8873.15,
                "traditional": 1730
            },
            "cap_rate": {
                "airbnb": 2.89831,
                "traditional": -0.4808
            },
            "image": "http://photos.listhub.net/BCBORMA/232391/1?lm=20201003T202739"
        }

        ]
        }
  })
});
app.listen(port,()=>{
  console.log("working")
})
