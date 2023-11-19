const express = require('express');
const cors = require('cors');
const app = express();

// Use the CORS middleware
app.use(cors());

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/convert', (req, res) => {
  const { value, conversionType } = req.body;
  console.log('Request Data:', req.body);

  let result;

  switch (conversionType) {
    case 'feetToInches':
      result = value * 12;
      break;
    case 'inchesToFeet':
      result = value / 12;
      break;
    case 'literToGallon':
      result = value / 3.78541;
      break;
    case 'gallonToLiter':
      result = value * 3.78541;
      break;
    case 'poundToKilogram':
      result = value / 2.20462;
      break;
    case 'kilogramToPound':
      result = value * 2.20462;
      break;
    case 'celsiusToFahrenheit':
      result = (value * 9/5) + 32;
      break;
    case 'fahrenheitToCelsius':
      result = (value - 32) * 5/9;
      break;
    case 'milesToKilometers':
      result = value * 1.60934;
      break;
    case 'kilometersToMiles':
      result = value / 1.60934;
      break;
    default:
      result = 'Invalid conversion type';
  }

  res.json({ result });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});