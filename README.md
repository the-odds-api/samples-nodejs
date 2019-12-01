# The Odds API Code Samples (v3) - NodeJS

The Odds API provides live odds for loads of sports from bookmakers in the US, UK and AU, in an easy to use JSON format.

Before getting started, be sure to get a free API key from [https://the-odds-api.com](https://the-odds-api.com)

For more info on the API, [see the docs](https://the-odds-api.com/liveapi/guides/v3/)

<br />

## Get Started

```
node sample.js YOUR-API-KEY-HERE
```

This will print:
- A list of in-season sports
- Events and odds for the next 8 upcoming games (across all sports)
- Requests used & remaining for your api key

To change the sport, region and market, see the top of sample.js

Make sure the axios library is installed `npm install axios`

Running sample.js once will use 1 request from the quota.

<br />

---

<br />

## Using Docker (Mac and Linux)

Build the image

```
docker build -t theoddsapi/sample:latest .

```

Run the node script in the container
```
docker run -t -i --rm -v "$(pwd)":/usr/src/app/ theoddsapi/sample:latest node sample.js YOUR-API-KEY-HERE
```
