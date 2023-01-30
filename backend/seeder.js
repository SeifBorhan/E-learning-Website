
const mongoose = require("mongoose");
const cc = require("./models/cc");
const instructor = require("./models/instructor");
const MongoURI =
  "mongodb+srv://nacl:nacl123@aclademy.tijjyrv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MongoURI).then(() => {
  console.log("MongoDB is now connected!");
});
// instructor.insertMany({
//   userName: "Hambozi",
//   password: "1234hamzo",
// });



try {
  cc.insertMany([
    {
      country: "Afghanistan",
      currencyCode: "AFN",
    },
    {
      country: "Albania",
      currencyCode: "ALL",
    },
    {
      country: "Algeria",
      currencyCode: "DZD",
    },
    {
      country: "American Samoa",
      currencyCode: "USD",
    },
    {
      country: "Andorra",
      currencyCode: "EUR",
    },
    {
      country: "Angola",
      currencyCode: "AOA",
    },
    {
      country: "Anguilla",
      currencyCode: "XCD",
    },
    {
      country: "Antarctica",
      currencyCode: "XCD",
    },
    {
      country: "Antigua and Barbuda",
      currencyCode: "XCD",
    },
    {
      country: "Argentina",
      currencyCode: "ARS",
    },
    {
      country: "Armenia",
      currencyCode: "AMD",
    },
    {
      country: "Aruba",
      currencyCode: "AWG",
    },
    {
      country: "Australia",
      currencyCode: "AUD",
    },
    {
      country: "Austria",
      currencyCode: "EUR",
    },
    {
      country: "Azerbaijan",
      currencyCode: "AZN",
    },
    {
      country: "Bahamas",
      currencyCode: "BSD",
    },
    {
      country: "Bahrain",
      currencyCode: "BHD",
    },
    {
      country: "Bangladesh",
      currencyCode: "BDT",
    },
    {
      country: "Barbados",
      currencyCode: "BBD",
    },
    {
      country: "Belarus",
      currencyCode: "BYR",
    },
    {
      country: "Belgium",
      currencyCode: "EUR",
    },
    {
      country: "Belize",
      currencyCode: "BZD",
    },
    {
      country: "Benin",
      currencyCode: "XOF",
    },
    {
      country: "Bermuda",
      currencyCode: "BMD",
    },
    {
      country: "Bhutan",
      currencyCode: "BTN",
    },
    {
      country: "Bolivia",
      currencyCode: "BOB",
    },
    {
      country: "Bosnia and Herzegovina",
      currencyCode: "BAM",
    },
    {
      country: "Botswana",
      currencyCode: "BWP",
    },
    {
      country: "Bouvet Island",
      currencyCode: "NOK",
    },
    {
      country: "Brazil",
      currencyCode: "BRL",
    },
    {
      country: "British Indian Ocean Territory",
      currencyCode: "USD",
    },
    {
      country: "Brunei",
      currencyCode: "BND",
    },
    {
      country: "Bulgaria",
      currencyCode: "BGN",
    },
    {
      country: "Burkina Faso",
      currencyCode: "XOF",
    },
    {
      country: "Burundi",
      currencyCode: "BIF",
    },
    {
      country: "Cambodia",
      currencyCode: "KHR",
    },
    {
      country: "Cameroon",
      currencyCode: "XAF",
    },
    {
      country: "Canada",
      currencyCode: "CAD",
    },
    {
      country: "Cape Verde",
      currencyCode: "CVE",
    },
    {
      country: "Cayman Islands",
      currencyCode: "KYD",
    },
    {
      country: "Central African Republic",
      currencyCode: "XAF",
    },
    {
      country: "Chad",
      currencyCode: "XAF",
    },
    {
      country: "Chile",
      currencyCode: "CLP",
    },
    {
      country: "China",
      currencyCode: "CNY",
    },
    {
      country: "Christmas Island",
      currencyCode: "AUD",
    },
    {
      country: "Cocos (Keeling) Islands",
      currencyCode: "AUD",
    },
    {
      country: "Colombia",
      currencyCode: "COP",
    },
    {
      country: "Comoros",
      currencyCode: "KMF",
    },
    {
      country: "Congo",
      currencyCode: "XAF",
    },
    {
      country: "Cook Islands",
      currencyCode: "NZD",
    },
    {
      country: "Costa Rica",
      currencyCode: "CRC",
    },
    {
      country: "Croatia",
      currencyCode: "HRK",
    },
    {
      country: "Cuba",
      currencyCode: "CUP",
    },
    {
      country: "Cyprus",
      currencyCode: "EUR",
    },
    {
      country: "Czech Republic",
      currencyCode: "CZK",
    },
    {
      country: "Denmark",
      currencyCode: "DKK",
    },
    {
      country: "Djibouti",
      currencyCode: "DJF",
    },
    {
      country: "Dominica",
      currencyCode: "XCD",
    },
    {
      country: "Dominican Republic",
      currencyCode: "DOP",
    },
    {
      country: "East Timor",
      currencyCode: "USD",
    },
    {
      country: "Ecuador",
      currencyCode: "ECS",
    },
    {
      country: "Egypt",
      currencyCode: "EGP",
    },
    {
      country: "El Salvador",
      currencyCode: "SVC",
    },
    {
      country: "England",
      currencyCode: "GBP",
    },
    {
      country: "Equatorial Guinea",
      currencyCode: "XAF",
    },
    {
      country: "Eritrea",
      currencyCode: "ERN",
    },
    {
      country: "Estonia",
      currencyCode: "EUR",
    },
    {
      country: "Ethiopia",
      currencyCode: "ETB",
    },
    {
      country: "Falkland Islands",
      currencyCode: "FKP",
    },
    {
      country: "Faroe Islands",
      currencyCode: "DKK",
    },
    {
      country: "Fiji Islands",
      currencyCode: "FJD",
    },
    {
      country: "Finland",
      currencyCode: "EUR",
    },
    {
      country: "France",
      currencyCode: "EUR",
    },
    {
      country: "French Guiana",
      currencyCode: "EUR",
    },
    {
      country: "French Polynesia",
      currencyCode: "XPF",
    },
    {
      country: "French Southern territories",
      currencyCode: "EUR",
    },
    {
      country: "Gabon",
      currencyCode: "XAF",
    },
    {
      country: "Gambia",
      currencyCode: "GMD",
    },
    {
      country: "Georgia",
      currencyCode: "GEL",
    },
    {
      country: "Germany",
      currencyCode: "EUR",
    },
    {
      country: "Ghana",
      currencyCode: "GHS",
    },
    {
      country: "Gibraltar",
      currencyCode: "GIP",
    },
    {
      country: "Greece",
      currencyCode: "EUR",
    },
    {
      country: "Greenland",
      currencyCode: "DKK",
    },
    {
      country: "Grenada",
      currencyCode: "XCD",
    },
    {
      country: "Guadeloupe",
      currencyCode: "EUR",
    },
    {
      country: "Guam",
      currencyCode: "USD",
    },
    {
      country: "Guatemala",
      currencyCode: "QTQ",
    },
    {
      country: "Guinea",
      currencyCode: "GNF",
    },
    {
      country: "Guinea-Bissau",
      currencyCode: "CFA",
    },
    {
      country: "Guyana",
      currencyCode: "GYD",
    },
    {
      country: "Haiti",
      currencyCode: "HTG",
    },
    {
      country: "Heard Island and McDonald Islands",
      currencyCode: "AUD",
    },
    {
      country: "Holy See (Vatican City State)",
      currencyCode: "EUR",
    },
    {
      country: "Honduras",
      currencyCode: "HNL",
    },
    {
      country: "Hong Kong",
      currencyCode: "HKD",
    },
    {
      country: "Hungary",
      currencyCode: "HUF",
    },
    {
      country: "Iceland",
      currencyCode: "ISK",
    },
    {
      country: "India",
      currencyCode: "INR",
    },
    {
      country: "Indonesia",
      currencyCode: "IDR",
    },
    {
      country: "Iran",
      currencyCode: "IRR",
    },
    {
      country: "Iraq",
      currencyCode: "IQD",
    },
    {
      country: "Ireland",
      currencyCode: "EUR",
    },
    {
      country: "Israel",
      currencyCode: "ILS",
    },
    {
      country: "Italy",
      currencyCode: "EUR",
    },
    {
      country: "Ivory Coast",
      currencyCode: "XOF",
    },
    {
      country: "Jamaica",
      currencyCode: "JMD",
    },
    {
      country: "Japan",
      currencyCode: "JPY",
    },
    {
      country: "Jordan",
      currencyCode: "JOD",
    },
    {
      country: "Kazakhstan",
      currencyCode: "KZT",
    },
    {
      country: "Kenya",
      currencyCode: "KES",
    },
    {
      country: "Kiribati",
      currencyCode: "AUD",
    },
    {
      country: "Kuwait",
      currencyCode: "KWD",
    },
    {
      country: "Kyrgyzstan",
      currencyCode: "KGS",
    },
    {
      country: "Laos",
      currencyCode: "LAK",
    },
    {
      country: "Latvia",
      currencyCode: "LVL",
    },
    {
      country: "Lebanon",
      currencyCode: "LBP",
    },
    {
      country: "Lesotho",
      currencyCode: "LSL",
    },
    {
      country: "Liberia",
      currencyCode: "LRD",
    },
    {
      country: "Libyan Arab Jamahiriya",
      currencyCode: "LYD",
    },
    {
      country: "Liechtenstein",
      currencyCode: "CHF",
    },
    {
      country: "Lithuania",
      currencyCode: "LTL",
    },
    {
      country: "Luxembourg",
      currencyCode: "EUR",
    },
    {
      country: "Macao",
      currencyCode: "MOP",
    },
    {
      country: "North Macedonia",
      currencyCode: "MKD",
    },
    {
      country: "Madagascar",
      currencyCode: "MGF",
    },
    {
      country: "Malawi",
      currencyCode: "MWK",
    },
    {
      country: "Malaysia",
      currencyCode: "MYR",
    },
    {
      country: "Maldives",
      currencyCode: "MVR",
    },
    {
      country: "Mali",
      currencyCode: "XOF",
    },
    {
      country: "Malta",
      currencyCode: "EUR",
    },
    {
      country: "Marshall Islands",
      currencyCode: "USD",
    },
    {
      country: "Martinique",
      currencyCode: "EUR",
    },
    {
      country: "Mauritania",
      currencyCode: "MRO",
    },
    {
      country: "Mauritius",
      currencyCode: "MUR",
    },
    {
      country: "Mayotte",
      currencyCode: "EUR",
    },
    {
      country: "Mexico",
      currencyCode: "MXN",
    },
    {
      country: "Micronesia, Federated States of",
      currencyCode: "USD",
    },
    {
      country: "Moldova",
      currencyCode: "MDL",
    },
    {
      country: "Monaco",
      currencyCode: "EUR",
    },
    {
      country: "Mongolia",
      currencyCode: "MNT",
    },
    {
      country: "Montserrat",
      currencyCode: "XCD",
    },
    {
      country: "Morocco",
      currencyCode: "MAD",
    },
    {
      country: "Mozambique",
      currencyCode: "MZN",
    },
    {
      country: "Myanmar",
      currencyCode: "MMR",
    },
    {
      country: "Namibia",
      currencyCode: "NAD",
    },
    {
      country: "Nauru",
      currencyCode: "AUD",
    },
    {
      country: "Nepal",
      currencyCode: "NPR",
    },
    {
      country: "Netherlands",
      currencyCode: "EUR",
    },
    {
      country: "Netherlands Antilles",
      currencyCode: "ANG",
    },
    {
      country: "New Caledonia",
      currencyCode: "XPF",
    },
    {
      country: "New Zealand",
      currencyCode: "NZD",
    },
    {
      country: "Nicaragua",
      currencyCode: "NIO",
    },
    {
      country: "Niger",
      currencyCode: "XOF",
    },
    {
      country: "Nigeria",
      currencyCode: "NGN",
    },
    {
      country: "Niue",
      currencyCode: "NZD",
    },
    {
      country: "Norfolk Island",
      currencyCode: "AUD",
    },
    {
      country: "North Korea",
      currencyCode: "KPW",
    },
    {
      country: "Northern Ireland",
      currencyCode: "GBP",
    },
    {
      country: "Northern Mariana Islands",
      currencyCode: "USD",
    },
    {
      country: "Norway",
      currencyCode: "NOK",
    },
    {
      country: "Oman",
      currencyCode: "OMR",
    },
    {
      country: "Pakistan",
      currencyCode: "PKR",
    },
    {
      country: "Palau",
      currencyCode: "USD",
    },
    {
      country: "Palestine",
      currencyCode: null,
    },
    {
      country: "Panama",
      currencyCode: "PAB",
    },
    {
      country: "Papua New Guinea",
      currencyCode: "PGK",
    },
    {
      country: "Paraguay",
      currencyCode: "PYG",
    },
    {
      country: "Peru",
      currencyCode: "PEN",
    },
    {
      country: "Philippines",
      currencyCode: "PHP",
    },
    {
      country: "Pitcairn",
      currencyCode: "NZD",
    },
    {
      country: "Poland",
      currencyCode: "PLN",
    },
    {
      country: "Portugal",
      currencyCode: "EUR",
    },
    {
      country: "Puerto Rico",
      currencyCode: "USD",
    },
    {
      country: "Qatar",
      currencyCode: "QAR",
    },
    {
      country: "Reunion",
      currencyCode: "EUR",
    },
    {
      country: "Romania",
      currencyCode: "RON",
    },
    {
      country: "Russian Federation",
      currencyCode: "RUB",
    },
    {
      country: "Rwanda",
      currencyCode: "RWF",
    },
    {
      country: "Saint Helena",
      currencyCode: "SHP",
    },
    {
      country: "Saint Kitts and Nevis",
      currencyCode: "XCD",
    },
    {
      country: "Saint Lucia",
      currencyCode: "XCD",
    },
    {
      country: "Saint Pierre and Miquelon",
      currencyCode: "EUR",
    },
    {
      country: "Saint Vincent and the Grenadines",
      currencyCode: "XCD",
    },
    {
      country: "Samoa",
      currencyCode: "WST",
    },
    {
      country: "San Marino",
      currencyCode: "EUR",
    },
    {
      country: "Sao Tome and Principe",
      currencyCode: "STD",
    },
    {
      country: "Saudi Arabia",
      currencyCode: "SAR",
    },
    {
      country: "Scotland",
      currencyCode: "GBP",
    },
    {
      country: "Senegal",
      currencyCode: "XOF",
    },
    {
      country: "Serbia",
      currencyCode: "RSD",
    },
    {
      country: "Seychelles",
      currencyCode: "SCR",
    },
    {
      country: "Sierra Leone",
      currencyCode: "SLL",
    },
    {
      country: "Singapore",
      currencyCode: "SGD",
    },
    {
      country: "Slovakia",
      currencyCode: "EUR",
    },
    {
      country: "Slovenia",
      currencyCode: "EUR",
    },
    {
      country: "Solomon Islands",
      currencyCode: "SBD",
    },
    {
      country: "Somalia",
      currencyCode: "SOS",
    },
    {
      country: "South Africa",
      currencyCode: "ZAR",
    },
    {
      country: "South Georgia and the South Sandwich Islands",
      currencyCode: "GBP",
    },
    {
      country: "South Korea",
      currencyCode: "KRW",
    },
    {
      country: "South Sudan",
      currencyCode: "SSP",
    },
    {
      country: "Spain",
      currencyCode: "EUR",
    },
    {
      country: "Sri Lanka",
      currencyCode: "LKR",
    },
    {
      country: "Sudan",
      currencyCode: "SDG",
    },
    {
      country: "Suriname",
      currencyCode: "SRD",
    },
    {
      country: "Svalbard and Jan Mayen",
      currencyCode: "NOK",
    },
    {
      country: "Swaziland",
      currencyCode: "SZL",
    },
    {
      country: "Sweden",
      currencyCode: "SEK",
    },
    {
      country: "Switzerland",
      currencyCode: "CHF",
    },
    {
      country: "Syria",
      currencyCode: "SYP",
    },
    {
      country: "Tajikistan",
      currencyCode: "TJS",
    },
    {
      country: "Tanzania",
      currencyCode: "TZS",
    },
    {
      country: "Thailand",
      currencyCode: "THB",
    },
    {
      country: "The Democratic Republic of Congo",
      currencyCode: "CDF",
    },
    {
      country: "Togo",
      currencyCode: "XOF",
    },
    {
      country: "Tokelau",
      currencyCode: "NZD",
    },
    {
      country: "Tonga",
      currencyCode: "TOP",
    },
    {
      country: "Trinidad and Tobago",
      currencyCode: "TTD",
    },
    {
      country: "Tunisia",
      currencyCode: "TND",
    },
    {
      country: "Turkey",
      currencyCode: "TRY",
    },
    {
      country: "Turkmenistan",
      currencyCode: "TMT",
    },
    {
      country: "Turks and Caicos Islands",
      currencyCode: "USD",
    },
    {
      country: "Tuvalu",
      currencyCode: "AUD",
    },
    {
      country: "Uganda",
      currencyCode: "UGX",
    },
    {
      country: "Ukraine",
      currencyCode: "UAH",
    },
    {
      country: "United Arab Emirates",
      currencyCode: "AED",
    },
    {
      country: "United Kingdom",
      currencyCode: "GBP",
    },
    {
      country: "United States",
      currencyCode: "USD",
    },
    {
      country: "United States Minor Outlying Islands",
      currencyCode: "USD",
    },
    {
      country: "Uruguay",
      currencyCode: "UYU",
    },
    {
      country: "Uzbekistan",
      currencyCode: "UZS",
    },
    {
      country: "Vanuatu",
      currencyCode: "VUV",
    },
    {
      country: "Venezuela",
      currencyCode: "VEF",
    },
    {
      country: "Vietnam",
      currencyCode: "VND",
    },
    {
      country: "Virgin Islands, British",
      currencyCode: "USD",
    },
    {
      country: "Virgin Islands, U.S.",
      currencyCode: "USD",
    },
    {
      country: "Wales",
      currencyCode: "GBP",
    },
    {
      country: "Wallis and Futuna",
      currencyCode: "XPF",
    },
    {
      country: "Western Sahara",
      currencyCode: "MAD",
    },
    {
      country: "Yemen",
      currencyCode: "YER",
    },
    {
      country: "Zambia",
      currencyCode: "ZMW",
    },
    {
      country: "Zimbabwe",
      currencyCode: "ZWD",
    },
  ]);
} catch (e) {
  print(e);
}
// const mongoose = require("mongoose");
// const cc = require("./models/cc");
// const instructor = require("./models/instructor");
// const MongoURI =
//   "mongodb+srv://nacl:nacl123@aclademy.tijjyrv.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(MongoURI).then(() => {
//   console.log("MongoDB is now connected!");
// });
// // instructor.insertMany({
// //   userName: "Hambozi",
// //   password: "1234hamzo",
// // });
// try {
//   cc.insertMany([
//     {
//       country: "Afghanistan",
//       currencyCode: "AFN",
//     },
//     {
//       country: "Albania",
//       currencyCode: "ALL",
//     },
//     {
//       country: "Algeria",
//       currencyCode: "DZD",
//     },
//     {
//       country: "American Samoa",
//       currencyCode: "USD",
//     },
//     {
//       country: "Andorra",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Angola",
//       currencyCode: "AOA",
//     },
//     {
//       country: "Anguilla",
//       currencyCode: "XCD",
//     },
//     {
//       country: "Antarctica",
//       currencyCode: "XCD",
//     },
//     {
//       country: "Antigua and Barbuda",
//       currencyCode: "XCD",
//     },
//     {
//       country: "Argentina",
//       currencyCode: "ARS",
//     },
//     {
//       country: "Armenia",
//       currencyCode: "AMD",
//     },
//     {
//       country: "Aruba",
//       currencyCode: "AWG",
//     },
//     {
//       country: "Australia",
//       currencyCode: "AUD",
//     },
//     {
//       country: "Austria",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Azerbaijan",
//       currencyCode: "AZN",
//     },
//     {
//       country: "Bahamas",
//       currencyCode: "BSD",
//     },
//     {
//       country: "Bahrain",
//       currencyCode: "BHD",
//     },
//     {
//       country: "Bangladesh",
//       currencyCode: "BDT",
//     },
//     {
//       country: "Barbados",
//       currencyCode: "BBD",
//     },
//     {
//       country: "Belarus",
//       currencyCode: "BYR",
//     },
//     {
//       country: "Belgium",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Belize",
//       currencyCode: "BZD",
//     },
//     {
//       country: "Benin",
//       currencyCode: "XOF",
//     },
//     {
//       country: "Bermuda",
//       currencyCode: "BMD",
//     },
//     {
//       country: "Bhutan",
//       currencyCode: "BTN",
//     },
//     {
//       country: "Bolivia",
//       currencyCode: "BOB",
//     },
//     {
//       country: "Bosnia and Herzegovina",
//       currencyCode: "BAM",
//     },
//     {
//       country: "Botswana",
//       currencyCode: "BWP",
//     },
//     {
//       country: "Bouvet Island",
//       currencyCode: "NOK",
//     },
//     {
//       country: "Brazil",
//       currencyCode: "BRL",
//     },
//     {
//       country: "British Indian Ocean Territory",
//       currencyCode: "USD",
//     },
//     {
//       country: "Brunei",
//       currencyCode: "BND",
//     },
//     {
//       country: "Bulgaria",
//       currencyCode: "BGN",
//     },
//     {
//       country: "Burkina Faso",
//       currencyCode: "XOF",
//     },
//     {
//       country: "Burundi",
//       currencyCode: "BIF",
//     },
//     {
//       country: "Cambodia",
//       currencyCode: "KHR",
//     },
//     {
//       country: "Cameroon",
//       currencyCode: "XAF",
//     },
//     {
//       country: "Canada",
//       currencyCode: "CAD",
//     },
//     {
//       country: "Cape Verde",
//       currencyCode: "CVE",
//     },
//     {
//       country: "Cayman Islands",
//       currencyCode: "KYD",
//     },
//     {
//       country: "Central African Republic",
//       currencyCode: "XAF",
//     },
//     {
//       country: "Chad",
//       currencyCode: "XAF",
//     },
//     {
//       country: "Chile",
//       currencyCode: "CLP",
//     },
//     {
//       country: "China",
//       currencyCode: "CNY",
//     },
//     {
//       country: "Christmas Island",
//       currencyCode: "AUD",
//     },
//     {
//       country: "Cocos (Keeling) Islands",
//       currencyCode: "AUD",
//     },
//     {
//       country: "Colombia",
//       currencyCode: "COP",
//     },
//     {
//       country: "Comoros",
//       currencyCode: "KMF",
//     },
//     {
//       country: "Congo",
//       currencyCode: "XAF",
//     },
//     {
//       country: "Cook Islands",
//       currencyCode: "NZD",
//     },
//     {
//       country: "Costa Rica",
//       currencyCode: "CRC",
//     },
//     {
//       country: "Croatia",
//       currencyCode: "HRK",
//     },
//     {
//       country: "Cuba",
//       currencyCode: "CUP",
//     },
//     {
//       country: "Cyprus",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Czech Republic",
//       currencyCode: "CZK",
//     },
//     {
//       country: "Denmark",
//       currencyCode: "DKK",
//     },
//     {
//       country: "Djibouti",
//       currencyCode: "DJF",
//     },
//     {
//       country: "Dominica",
//       currencyCode: "XCD",
//     },
//     {
//       country: "Dominican Republic",
//       currencyCode: "DOP",
//     },
//     {
//       country: "East Timor",
//       currencyCode: "USD",
//     },
//     {
//       country: "Ecuador",
//       currencyCode: "ECS",
//     },
//     {
//       country: "Egypt",
//       currencyCode: "EGP",
//     },
//     {
//       country: "El Salvador",
//       currencyCode: "SVC",
//     },
//     {
//       country: "England",
//       currencyCode: "GBP",
//     },
//     {
//       country: "Equatorial Guinea",
//       currencyCode: "XAF",
//     },
//     {
//       country: "Eritrea",
//       currencyCode: "ERN",
//     },
//     {
//       country: "Estonia",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Ethiopia",
//       currencyCode: "ETB",
//     },
//     {
//       country: "Falkland Islands",
//       currencyCode: "FKP",
//     },
//     {
//       country: "Faroe Islands",
//       currencyCode: "DKK",
//     },
//     {
//       country: "Fiji Islands",
//       currencyCode: "FJD",
//     },
//     {
//       country: "Finland",
//       currencyCode: "EUR",
//     },
//     {
//       country: "France",
//       currencyCode: "EUR",
//     },
//     {
//       country: "French Guiana",
//       currencyCode: "EUR",
//     },
//     {
//       country: "French Polynesia",
//       currencyCode: "XPF",
//     },
//     {
//       country: "French Southern territories",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Gabon",
//       currencyCode: "XAF",
//     },
//     {
//       country: "Gambia",
//       currencyCode: "GMD",
//     },
//     {
//       country: "Georgia",
//       currencyCode: "GEL",
//     },
//     {
//       country: "Germany",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Ghana",
//       currencyCode: "GHS",
//     },
//     {
//       country: "Gibraltar",
//       currencyCode: "GIP",
//     },
//     {
//       country: "Greece",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Greenland",
//       currencyCode: "DKK",
//     },
//     {
//       country: "Grenada",
//       currencyCode: "XCD",
//     },
//     {
//       country: "Guadeloupe",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Guam",
//       currencyCode: "USD",
//     },
//     {
//       country: "Guatemala",
//       currencyCode: "QTQ",
//     },
//     {
//       country: "Guinea",
//       currencyCode: "GNF",
//     },
//     {
//       country: "Guinea-Bissau",
//       currencyCode: "CFA",
//     },
//     {
//       country: "Guyana",
//       currencyCode: "GYD",
//     },
//     {
//       country: "Haiti",
//       currencyCode: "HTG",
//     },
//     {
//       country: "Heard Island and McDonald Islands",
//       currencyCode: "AUD",
//     },
//     {
//       country: "Holy See (Vatican City State)",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Honduras",
//       currencyCode: "HNL",
//     },
//     {
//       country: "Hong Kong",
//       currencyCode: "HKD",
//     },
//     {
//       country: "Hungary",
//       currencyCode: "HUF",
//     },
//     {
//       country: "Iceland",
//       currencyCode: "ISK",
//     },
//     {
//       country: "India",
//       currencyCode: "INR",
//     },
//     {
//       country: "Indonesia",
//       currencyCode: "IDR",
//     },
//     {
//       country: "Iran",
//       currencyCode: "IRR",
//     },
//     {
//       country: "Iraq",
//       currencyCode: "IQD",
//     },
//     {
//       country: "Ireland",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Israel",
//       currencyCode: "ILS",
//     },
//     {
//       country: "Italy",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Ivory Coast",
//       currencyCode: "XOF",
//     },
//     {
//       country: "Jamaica",
//       currencyCode: "JMD",
//     },
//     {
//       country: "Japan",
//       currencyCode: "JPY",
//     },
//     {
//       country: "Jordan",
//       currencyCode: "JOD",
//     },
//     {
//       country: "Kazakhstan",
//       currencyCode: "KZT",
//     },
//     {
//       country: "Kenya",
//       currencyCode: "KES",
//     },
//     {
//       country: "Kiribati",
//       currencyCode: "AUD",
//     },
//     {
//       country: "Kuwait",
//       currencyCode: "KWD",
//     },
//     {
//       country: "Kyrgyzstan",
//       currencyCode: "KGS",
//     },
//     {
//       country: "Laos",
//       currencyCode: "LAK",
//     },
//     {
//       country: "Latvia",
//       currencyCode: "LVL",
//     },
//     {
//       country: "Lebanon",
//       currencyCode: "LBP",
//     },
//     {
//       country: "Lesotho",
//       currencyCode: "LSL",
//     },
//     {
//       country: "Liberia",
//       currencyCode: "LRD",
//     },
//     {
//       country: "Libyan Arab Jamahiriya",
//       currencyCode: "LYD",
//     },
//     {
//       country: "Liechtenstein",
//       currencyCode: "CHF",
//     },
//     {
//       country: "Lithuania",
//       currencyCode: "LTL",
//     },
//     {
//       country: "Luxembourg",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Macao",
//       currencyCode: "MOP",
//     },
//     {
//       country: "North Macedonia",
//       currencyCode: "MKD",
//     },
//     {
//       country: "Madagascar",
//       currencyCode: "MGF",
//     },
//     {
//       country: "Malawi",
//       currencyCode: "MWK",
//     },
//     {
//       country: "Malaysia",
//       currencyCode: "MYR",
//     },
//     {
//       country: "Maldives",
//       currencyCode: "MVR",
//     },
//     {
//       country: "Mali",
//       currencyCode: "XOF",
//     },
//     {
//       country: "Malta",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Marshall Islands",
//       currencyCode: "USD",
//     },
//     {
//       country: "Martinique",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Mauritania",
//       currencyCode: "MRO",
//     },
//     {
//       country: "Mauritius",
//       currencyCode: "MUR",
//     },
//     {
//       country: "Mayotte",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Mexico",
//       currencyCode: "MXN",
//     },
//     {
//       country: "Micronesia, Federated States of",
//       currencyCode: "USD",
//     },
//     {
//       country: "Moldova",
//       currencyCode: "MDL",
//     },
//     {
//       country: "Monaco",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Mongolia",
//       currencyCode: "MNT",
//     },
//     {
//       country: "Montserrat",
//       currencyCode: "XCD",
//     },
//     {
//       country: "Morocco",
//       currencyCode: "MAD",
//     },
//     {
//       country: "Mozambique",
//       currencyCode: "MZN",
//     },
//     {
//       country: "Myanmar",
//       currencyCode: "MMR",
//     },
//     {
//       country: "Namibia",
//       currencyCode: "NAD",
//     },
//     {
//       country: "Nauru",
//       currencyCode: "AUD",
//     },
//     {
//       country: "Nepal",
//       currencyCode: "NPR",
//     },
//     {
//       country: "Netherlands",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Netherlands Antilles",
//       currencyCode: "ANG",
//     },
//     {
//       country: "New Caledonia",
//       currencyCode: "XPF",
//     },
//     {
//       country: "New Zealand",
//       currencyCode: "NZD",
//     },
//     {
//       country: "Nicaragua",
//       currencyCode: "NIO",
//     },
//     {
//       country: "Niger",
//       currencyCode: "XOF",
//     },
//     {
//       country: "Nigeria",
//       currencyCode: "NGN",
//     },
//     {
//       country: "Niue",
//       currencyCode: "NZD",
//     },
//     {
//       country: "Norfolk Island",
//       currencyCode: "AUD",
//     },
//     {
//       country: "North Korea",
//       currencyCode: "KPW",
//     },
//     {
//       country: "Northern Ireland",
//       currencyCode: "GBP",
//     },
//     {
//       country: "Northern Mariana Islands",
//       currencyCode: "USD",
//     },
//     {
//       country: "Norway",
//       currencyCode: "NOK",
//     },
//     {
//       country: "Oman",
//       currencyCode: "OMR",
//     },
//     {
//       country: "Pakistan",
//       currencyCode: "PKR",
//     },
//     {
//       country: "Palau",
//       currencyCode: "USD",
//     },
//     {
//       country: "Palestine",
//       currencyCode: null,
//     },
//     {
//       country: "Panama",
//       currencyCode: "PAB",
//     },
//     {
//       country: "Papua New Guinea",
//       currencyCode: "PGK",
//     },
//     {
//       country: "Paraguay",
//       currencyCode: "PYG",
//     },
//     {
//       country: "Peru",
//       currencyCode: "PEN",
//     },
//     {
//       country: "Philippines",
//       currencyCode: "PHP",
//     },
//     {
//       country: "Pitcairn",
//       currencyCode: "NZD",
//     },
//     {
//       country: "Poland",
//       currencyCode: "PLN",
//     },
//     {
//       country: "Portugal",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Puerto Rico",
//       currencyCode: "USD",
//     },
//     {
//       country: "Qatar",
//       currencyCode: "QAR",
//     },
//     {
//       country: "Reunion",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Romania",
//       currencyCode: "RON",
//     },
//     {
//       country: "Russian Federation",
//       currencyCode: "RUB",
//     },
//     {
//       country: "Rwanda",
//       currencyCode: "RWF",
//     },
//     {
//       country: "Saint Helena",
//       currencyCode: "SHP",
//     },
//     {
//       country: "Saint Kitts and Nevis",
//       currencyCode: "XCD",
//     },
//     {
//       country: "Saint Lucia",
//       currencyCode: "XCD",
//     },
//     {
//       country: "Saint Pierre and Miquelon",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Saint Vincent and the Grenadines",
//       currencyCode: "XCD",
//     },
//     {
//       country: "Samoa",
//       currencyCode: "WST",
//     },
//     {
//       country: "San Marino",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Sao Tome and Principe",
//       currencyCode: "STD",
//     },
//     {
//       country: "Saudi Arabia",
//       currencyCode: "SAR",
//     },
//     {
//       country: "Scotland",
//       currencyCode: "GBP",
//     },
//     {
//       country: "Senegal",
//       currencyCode: "XOF",
//     },
//     {
//       country: "Serbia",
//       currencyCode: "RSD",
//     },
//     {
//       country: "Seychelles",
//       currencyCode: "SCR",
//     },
//     {
//       country: "Sierra Leone",
//       currencyCode: "SLL",
//     },
//     {
//       country: "Singapore",
//       currencyCode: "SGD",
//     },
//     {
//       country: "Slovakia",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Slovenia",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Solomon Islands",
//       currencyCode: "SBD",
//     },
//     {
//       country: "Somalia",
//       currencyCode: "SOS",
//     },
//     {
//       country: "South Africa",
//       currencyCode: "ZAR",
//     },
//     {
//       country: "South Georgia and the South Sandwich Islands",
//       currencyCode: "GBP",
//     },
//     {
//       country: "South Korea",
//       currencyCode: "KRW",
//     },
//     {
//       country: "South Sudan",
//       currencyCode: "SSP",
//     },
//     {
//       country: "Spain",
//       currencyCode: "EUR",
//     },
//     {
//       country: "Sri Lanka",
//       currencyCode: "LKR",
//     },
//     {
//       country: "Sudan",
//       currencyCode: "SDG",
//     },
//     {
//       country: "Suriname",
//       currencyCode: "SRD",
//     },
//     {
//       country: "Svalbard and Jan Mayen",
//       currencyCode: "NOK",
//     },
//     {
//       country: "Swaziland",
//       currencyCode: "SZL",
//     },
//     {
//       country: "Sweden",
//       currencyCode: "SEK",
//     },
//     {
//       country: "Switzerland",
//       currencyCode: "CHF",
//     },
//     {
//       country: "Syria",
//       currencyCode: "SYP",
//     },
//     {
//       country: "Tajikistan",
//       currencyCode: "TJS",
//     },
//     {
//       country: "Tanzania",
//       currencyCode: "TZS",
//     },
//     {
//       country: "Thailand",
//       currencyCode: "THB",
//     },
//     {
//       country: "The Democratic Republic of Congo",
//       currencyCode: "CDF",
//     },
//     {
//       country: "Togo",
//       currencyCode: "XOF",
//     },
//     {
//       country: "Tokelau",
//       currencyCode: "NZD",
//     },
//     {
//       country: "Tonga",
//       currencyCode: "TOP",
//     },
//     {
//       country: "Trinidad and Tobago",
//       currencyCode: "TTD",
//     },
//     {
//       country: "Tunisia",
//       currencyCode: "TND",
//     },
//     {
//       country: "Turkey",
//       currencyCode: "TRY",
//     },
//     {
//       country: "Turkmenistan",
//       currencyCode: "TMT",
//     },
//     {
//       country: "Turks and Caicos Islands",
//       currencyCode: "USD",
//     },
//     {
//       country: "Tuvalu",
//       currencyCode: "AUD",
//     },
//     {
//       country: "Uganda",
//       currencyCode: "UGX",
//     },
//     {
//       country: "Ukraine",
//       currencyCode: "UAH",
//     },
//     {
//       country: "United Arab Emirates",
//       currencyCode: "AED",
//     },
//     {
//       country: "United Kingdom",
//       currencyCode: "GBP",
//     },
//     {
//       country: "United States",
//       currencyCode: "USD",
//     },
//     {
//       country: "United States Minor Outlying Islands",
//       currencyCode: "USD",
//     },
//     {
//       country: "Uruguay",
//       currencyCode: "UYU",
//     },
//     {
//       country: "Uzbekistan",
//       currencyCode: "UZS",
//     },
//     {
//       country: "Vanuatu",
//       currencyCode: "VUV",
//     },
//     {
//       country: "Venezuela",
//       currencyCode: "VEF",
//     },
//     {
//       country: "Vietnam",
//       currencyCode: "VND",
//     },
//     {
//       country: "Virgin Islands, British",
//       currencyCode: "USD",
//     },
//     {
//       country: "Virgin Islands, U.S.",
//       currencyCode: "USD",
//     },
//     {
//       country: "Wales",
//       currencyCode: "GBP",
//     },
//     {
//       country: "Wallis and Futuna",
//       currencyCode: "XPF",
//     },
//     {
//       country: "Western Sahara",
//       currencyCode: "MAD",
//     },
//     {
//       country: "Yemen",
//       currencyCode: "YER",
//     },
//     {
//       country: "Zambia",
//       currencyCode: "ZMW",
//     },
//     {
//       country: "Zimbabwe",
//       currencyCode: "ZWD",
//     },
//   ]);
// } catch (e) {
//   print(e);
// }
