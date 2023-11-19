// unit-converter-backend/app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/convert', (req, res) => {
  const { value, conversionType } = req.body;
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
    default:
      result = 'Invalid conversion type';
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
