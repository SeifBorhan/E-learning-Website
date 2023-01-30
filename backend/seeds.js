const mongoose = require("mongoose");
// const questions = require("./models/questions");

// const mongoose = require("mongoose");

// const notes = require("./models/notes");
const problem = require("./models/problem");
const courseReq = require('./models/courseReq')
const courseCompletion = require('./models/courseCompletion')
// const trainee = require("./models/trainee");
// const transaction = require("./models/transaction");
// const instructor = require("./models/instructor");
// const admins = require("./models/admin");
// const courses = require("./models/course");
// const exams = require("./models/exam");
// const exam = require("./models/exam");
// const cc = require("./models/cc");

//onst rating = require("./models/rating")
const cc = require('./models/cc')

const questions = require("./models/questions");
const course = require("./models/course");


const MongoURI =
  "mongodb+srv://nacl:nacl123@aclademy.tijjyrv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MongoURI).then(() => {
  console.log("open");

});

// problem.insertMany({
//   userID: mongoose.Types.ObjectId('63879d4b9c0acdf77120f56d'),
//   description: 'overrated in my opinion, unacceptable',
//   courseID: mongoose.Types.ObjectId('63851c4552d5434018c94b9c'),
//   type: 'other'

// })

// courseReq.insertMany({
//   user: mongoose.Types.ObjectId('63879d4b9c0acdf77120f56d'),
//   course: mongoose.Types.ObjectId('63851c4552d5434018c94b9c'),
// })

// courseCompletion.insertMany({
//   userId: mongoose.Types.ObjectId('638519fe55611a69746ab409'),
//   courseId: mongoose.Types.ObjectId('63851c4552d5434018c94b9c'),
// })



// questions.create({
//   question:"is mina handsome",
//   choice1:"yes",
//   choice2:"no",
//   choice3:"none of the above",
//   choice4: "all of the above",
//   correctanswer:"a",
//   courseID:"63851c4552d5434018c94b9c"
// })
// rating.insertMany({
//   traineeID: "635a68199855290994dc685a",
//   instructorID: "6356dd33cc353130bb028c22",
//   content: "Gamed Gedan",
//   rate: "5"
// // })
// exam.insertMany({
//   userID:"635a68199855290994dc685a",
//   grade:"5/10"
// })

// // instructor.insertMany({
// //   userName: 'Hambozi',
// //   password:'1234hamzo',
// //  })

// //admins.insertMany({ email: "abc@gmail.com", password: "1234" });

// // courses.insertMany({
// //   courseName: "Graphics",
// //   instructorID: "635442a2c77e33cbddeb9552",
// //   listOfVideos: [
// //     {
// //       name: "Starting video",
// //       duration: "56",
// //       rating: "5",
// //       thumbnail:
// //         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fcreate%2Fyoutube-thumbnails%2F&psig=AOvVaw0GS8d32fPEvbkN7iCS4Oq1&ust=1666552007305000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOCajpXE9PoCFQAAAAAdAAAAABAK",
// //     },
// //     {
// //       name: "Second Video",
// //       duration: "125",
// //       rating: "4.5",
// //       thumbnail:
// //         "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftecheconomy.ng%2F2021%2F06%2Finteresting-app-to-help-you-make-youtube-video-thumbnail%2F&psig=AOvVaw0GS8d32fPEvbkN7iCS4Oq1&ust=1666552007305000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOCajpXE9PoCFQAAAAAdAAAAABAO",
// //     },
// //   ],
// //   subscribers: [],
// //   price: 120,
// //   subject: "CSEN",
// //   yearOfUpload: "2021",
// //   rating: "4.7",
// //   certificate:
// //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fcertificates%2Ftemplates%2F&psig=AOvVaw2dOfXYkmVWcGIBkdWxjNok&ust=1666552787235000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJjNjonH9PoCFQAAAAAdAAAAABAE",
// // });
// // notes.insertMany({userID:'63544ebf3ee93c3f6f637de6',videoID:'635449bb315bb68f0793ac96',courseID:'635449bb315bb68f0793ac95',content:"DONT FORGET!!!"})

// // problem.insertMany([{opened:false,userID:'635442a2c77e33cbddeb9552',description:"video low quality",courseID:'635449bb315bb68f0793ac95',type:'Technical'},
// // {opened:false,userID:'635442a2c77e33cbddeb9552',description:"too expensive",courseID:'635449bb315bb68f0793ac95',type:'Financial'}])

// // trainee.insertMany({
// //   firstName: "Individual",
// //   lastName: "Trainee1",
// //   userName: "1234",
// //   email: "indvt1@gmail.com",
// //   password: "12345",
// //   type: false,
// //   photo:
// //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbrazil-people&psig=AOvVaw2rRD4JkD_yfvXQomIXmVx2&ust=1666555515098000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOiw153R9PoCFQAAAAAdAAAAABAE",
// //   wallet: 0.0,
// //   courses: [{ courseID: "635449bb315bb68f0793ac95", completion: 60 }],
// //   country: "Egypt",
// // });

// // trainee.insertMany({
// //   firstName: "Corporate",
// //   lastName: "Trainee1",
// //   userName: "4321",
// //   email: "corpt1@gmail.com",
// //   password: "54321",
// //   type: true,
// //   company: "Meta",
// //   photo:
// //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbrazil-people&psig=AOvVaw2rRD4JkD_yfvXQomIXmVx2&ust=1666555515098000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOiw153R9PoCFQAAAAAdAAAAABAE",
// //   wallet: 0.0,
// //   courses: [{ courseID: "635449bb315bb68f0793ac95", completion: 30 }],
// //   country: "United Kingdom",
// // });

// // exam.insertMany({
// //   courseID: "635449bb315bb68f0793ac95",
// //   videoID: "635449bb315bb68f0793ac96",
// //   questions: [
// //     {
// //       question: "What is a node?",
// //       choice1: "Point",
// //       choice2: "Line",
// //       choice3: "Library",
// //       choice4: "Type of cats",
// //       correctanswer: 3,
// //     },
// //     {
// //       question: "What is a react?",
// //       choice1: "chemical reaction",
// //       choice2: "verb",
// //       choice3: "noun",
// //       choice4: "Library",
// //       correctanswer: 4,
// //     },
// //   ],
// //   takers: [{ userID: "63544ebf3ee93c3f6f637de6", grade: 2 }],
// // });



// questions.create({
//   question:"firsttest",
//   choice1: "1",
//   choice2: "mina",
//   choice3: "karara",
//   choice4: "sehs",
//   correctanswer: "2",
//   courseID:"63851c4552d5434018c94b9c",
// });




// instructor.insertMany({
//   userName: 'Hambozi',
//   password:'1234hamzo',
//  })

//admins.insertMany({ email: "abc@gmail.com", password: "1234" });

// courses.insertMany({
//   courseName: "Graphics",
//   instructorID: "635442a2c77e33cbddeb9552",
//   listOfVideos: [
//     {
//       name: "Starting video",
//       duration: "56",
//       rating: "5",
//       thumbnail:
//         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fcreate%2Fyoutube-thumbnails%2F&psig=AOvVaw0GS8d32fPEvbkN7iCS4Oq1&ust=1666552007305000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOCajpXE9PoCFQAAAAAdAAAAABAK",
//     },
//     {
//       name: "Second Video",
//       duration: "125",
//       rating: "4.5",
//       thumbnail:
//         "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftecheconomy.ng%2F2021%2F06%2Finteresting-app-to-help-you-make-youtube-video-thumbnail%2F&psig=AOvVaw0GS8d32fPEvbkN7iCS4Oq1&ust=1666552007305000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOCajpXE9PoCFQAAAAAdAAAAABAO",
//     },
//   ],
//   subscribers: [],
//   price: 120,
//   subject: "CSEN",
//   yearOfUpload: "2021",
//   rating: "4.7",
//   certificate:
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fcertificates%2Ftemplates%2F&psig=AOvVaw2dOfXYkmVWcGIBkdWxjNok&ust=1666552787235000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJjNjonH9PoCFQAAAAAdAAAAABAE",
// });
// notes.insertMany({userID:'63544ebf3ee93c3f6f637de6',videoID:'635449bb315bb68f0793ac96',courseID:'635449bb315bb68f0793ac95',content:"DONT FORGET!!!"})

// problem.insertMany([{opened:false,userID:'635442a2c77e33cbddeb9552',description:"video low quality",courseID:'635449bb315bb68f0793ac95',type:'Technical'},
// {opened:false,userID:'635442a2c77e33cbddeb9552',description:"too expensive",courseID:'635449bb315bb68f0793ac95',type:'Financial'}])

// trainee.insertMany({
//   firstName: "Individual",
//   lastName: "Trainee1",
//   userName: "1234",
//   email: "indvt1@gmail.com",
//   password: "12345",
//   type: false,
//   photo:
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbrazil-people&psig=AOvVaw2rRD4JkD_yfvXQomIXmVx2&ust=1666555515098000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOiw153R9PoCFQAAAAAdAAAAABAE",
//   wallet: 0.0,
//   courses: [{ courseID: "635449bb315bb68f0793ac95", completion: 60 }],
//   country: "Egypt",
// });

// trainee.insertMany({
//   firstName: "Corporate",
//   lastName: "Trainee1",
//   userName: "4321",
//   email: "corpt1@gmail.com",
//   password: "54321",
//   type: true,
//   company: "Meta",
//   photo:
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbrazil-people&psig=AOvVaw2rRD4JkD_yfvXQomIXmVx2&ust=1666555515098000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOiw153R9PoCFQAAAAAdAAAAABAE",
//   wallet: 0.0,
//   courses: [{ courseID: "635449bb315bb68f0793ac95", completion: 30 }],
//   country: "United Kingdom",
// });

// exam.insertMany({
//   courseID: "635449bb315bb68f0793ac95",
//   videoID: "635449bb315bb68f0793ac96",
//   questions: [
//     {
//       question: "What is a node?",
//       choice1: "Point",
//       choice2: "Line",
//       choice3: "Library",
//       choice4: "Type of cats",
//       correctanswer: 3,
//     },
//     {
//       question: "What is a react?",
//       choice1: "chemical reaction",
//       choice2: "verb",
//       choice3: "noun",
//       choice4: "Library",
//       correctanswer: 4,
//     },
//   ],
//   takers: [{ userID: "63544ebf3ee93c3f6f637de6", grade: 2 }],
// });

cc.insertMany([
  {
    countryCode: "AD",
    countryName: "Andorra",
    currencyCode: "EUR",
    population: "84000",
    capital: "Andorra la Vella",
    continentName: "Europe"
  },
  {
    countryCode: "AE",
    countryName: "United Arab Emirates",
    currencyCode: "AED",
    population: "4975593",
    capital: "Abu Dhabi",
    continentName: "Asia"
  },
  {
    countryCode: "AF",
    countryName: "Afghanistan",
    currencyCode: "AFN",
    population: "29121286",
    capital: "Kabul",
    continentName: "Asia"
  },
  {
    countryCode: "AG",
    countryName: "Antigua and Barbuda",
    currencyCode: "XCD",
    population: "86754",
    capital: "St. John's",
    continentName: "North America"
  },
  {
    countryCode: "AI",
    countryName: "Anguilla",
    currencyCode: "XCD",
    population: "13254",
    capital: "The Valley",
    continentName: "North America"
  },
  {
    countryCode: "AL",
    countryName: "Albania",
    currencyCode: "ALL",
    population: "2986952",
    capital: "Tirana",
    continentName: "Europe"
  },
  {
    countryCode: "AM",
    countryName: "Armenia",
    currencyCode: "AMD",
    population: "2968000",
    capital: "Yerevan",
    continentName: "Asia"
  },
  {
    countryCode: "AO",
    countryName: "Angola",
    currencyCode: "AOA",
    population: "13068161",
    capital: "Luanda",
    continentName: "Africa"
  },
  {
    countryCode: "AQ",
    countryName: "Antarctica",
    currencyCode: "",
    population: "0",
    capital: "",
    continentName: "Antarctica"
  },
  {
    countryCode: "AR",
    countryName: "Argentina",
    currencyCode: "ARS",
    population: "41343201",
    capital: "Buenos Aires",
    continentName: "South America"
  },
  {
    countryCode: "AS",
    countryName: "American Samoa",
    currencyCode: "USD",
    population: "57881",
    capital: "Pago Pago",
    continentName: "Oceania"
  },
  {
    countryCode: "AT",
    countryName: "Austria",
    currencyCode: "EUR",
    population: "8205000",
    capital: "Vienna",
    continentName: "Europe"
  },
  {
    countryCode: "AU",
    countryName: "Australia",
    currencyCode: "AUD",
    population: "21515754",
    capital: "Canberra",
    continentName: "Oceania"
  },
  {
    countryCode: "AW",
    countryName: "Aruba",
    currencyCode: "AWG",
    population: "71566",
    capital: "Oranjestad",
    continentName: "North America"
  },
  {
    countryCode: "AX",
    countryName: "Åland",
    currencyCode: "EUR",
    population: "26711",
    capital: "Mariehamn",
    continentName: "Europe"
  },
  {
    countryCode: "AZ",
    countryName: "Azerbaijan",
    currencyCode: "AZN",
    population: "8303512",
    capital: "Baku",
    continentName: "Asia"
  },
  {
    countryCode: "BA",
    countryName: "Bosnia and Herzegovina",
    currencyCode: "BAM",
    population: "4590000",
    capital: "Sarajevo",
    continentName: "Europe"
  },
  {
    countryCode: "BB",
    countryName: "Barbados",
    currencyCode: "BBD",
    population: "285653",
    capital: "Bridgetown",
    continentName: "North America"
  },
  {
    countryCode: "BD",
    countryName: "Bangladesh",
    currencyCode: "BDT",
    population: "156118464",
    capital: "Dhaka",
    continentName: "Asia"
  },
  {
    countryCode: "BE",
    countryName: "Belgium",
    currencyCode: "EUR",
    population: "10403000",
    capital: "Brussels",
    continentName: "Europe"
  },
  {
    countryCode: "BF",
    countryName: "Burkina Faso",
    currencyCode: "XOF",
    population: "16241811",
    capital: "Ouagadougou",
    continentName: "Africa"
  },
  {
    countryCode: "BG",
    countryName: "Bulgaria",
    currencyCode: "BGN",
    population: "7148785",
    capital: "Sofia",
    continentName: "Europe"
  },
  {
    countryCode: "BH",
    countryName: "Bahrain",
    currencyCode: "BHD",
    population: "738004",
    capital: "Manama",
    continentName: "Asia"
  },
  {
    countryCode: "BI",
    countryName: "Burundi",
    currencyCode: "BIF",
    population: "9863117",
    capital: "Bujumbura",
    continentName: "Africa"
  },
  {
    countryCode: "BJ",
    countryName: "Benin",
    currencyCode: "XOF",
    population: "9056010",
    capital: "Porto-Novo",
    continentName: "Africa"
  },
  {
    countryCode: "BL",
    countryName: "Saint Barthélemy",
    currencyCode: "EUR",
    population: "8450",
    capital: "Gustavia",
    continentName: "North America"
  },
  {
    countryCode: "BM",
    countryName: "Bermuda",
    currencyCode: "BMD",
    population: "65365",
    capital: "Hamilton",
    continentName: "North America"
  },
  {
    countryCode: "BN",
    countryName: "Brunei",
    currencyCode: "BND",
    population: "395027",
    capital: "Bandar Seri Begawan",
    continentName: "Asia"
  },
  {
    countryCode: "BO",
    countryName: "Bolivia",
    currencyCode: "BOB",
    population: "9947418",
    capital: "Sucre",
    continentName: "South America"
  },
  {
    countryCode: "BQ",
    countryName: "Bonaire",
    currencyCode: "USD",
    population: "18012",
    capital: "Kralendijk",
    continentName: "North America"
  },
  {
    countryCode: "BR",
    countryName: "Brazil",
    currencyCode: "BRL",
    population: "201103330",
    capital: "Brasília",
    continentName: "South America"
  },
  {
    countryCode: "BS",
    countryName: "Bahamas",
    currencyCode: "BSD",
    population: "301790",
    capital: "Nassau",
    continentName: "North America"
  },
  {
    countryCode: "BT",
    countryName: "Bhutan",
    currencyCode: "BTN",
    population: "699847",
    capital: "Thimphu",
    continentName: "Asia"
  },
  {
    countryCode: "BV",
    countryName: "Bouvet Island",
    currencyCode: "NOK",
    population: "0",
    capital: "",
    continentName: "Antarctica"
  },
  {
    countryCode: "BW",
    countryName: "Botswana",
    currencyCode: "BWP",
    population: "2029307",
    capital: "Gaborone",
    continentName: "Africa"
  },
  {
    countryCode: "BY",
    countryName: "Belarus",
    currencyCode: "BYR",
    population: "9685000",
    capital: "Minsk",
    continentName: "Europe"
  },
  {
    countryCode: "BZ",
    countryName: "Belize",
    currencyCode: "BZD",
    population: "314522",
    capital: "Belmopan",
    continentName: "North America"
  },
  {
    countryCode: "CA",
    countryName: "Canada",
    currencyCode: "CAD",
    population: "33679000",
    capital: "Ottawa",
    continentName: "North America"
  },
  {
    countryCode: "CC",
    countryName: "Cocos [Keeling] Islands",
    currencyCode: "AUD",
    population: "628",
    capital: "West Island",
    continentName: "Asia"
  },
  {
    countryCode: "CD",
    countryName: "Democratic Republic of the Congo",
    currencyCode: "CDF",
    population: "70916439",
    capital: "Kinshasa",
    continentName: "Africa"
  },
  {
    countryCode: "CF",
    countryName: "Central African Republic",
    currencyCode: "XAF",
    population: "4844927",
    capital: "Bangui",
    continentName: "Africa"
  },
  {
    countryCode: "CG",
    countryName: "Republic of the Congo",
    currencyCode: "XAF",
    population: "3039126",
    capital: "Brazzaville",
    continentName: "Africa"
  },
  {
    countryCode: "CH",
    countryName: "Switzerland",
    currencyCode: "CHF",
    population: "7581000",
    capital: "Bern",
    continentName: "Europe"
  },
  {
    countryCode: "CI",
    countryName: "Ivory Coast",
    currencyCode: "XOF",
    population: "21058798",
    capital: "Yamoussoukro",
    continentName: "Africa"
  },
  {
    countryCode: "CK",
    countryName: "Cook Islands",
    currencyCode: "NZD",
    population: "21388",
    capital: "Avarua",
    continentName: "Oceania"
  },
  {
    countryCode: "CL",
    countryName: "Chile",
    currencyCode: "CLP",
    population: "16746491",
    capital: "Santiago",
    continentName: "South America"
  },
  {
    countryCode: "CM",
    countryName: "Cameroon",
    currencyCode: "XAF",
    population: "19294149",
    capital: "Yaoundé",
    continentName: "Africa"
  },
  {
    countryCode: "CN",
    countryName: "China",
    currencyCode: "CNY",
    population: "1330044000",
    capital: "Beijing",
    continentName: "Asia"
  },
  {
    countryCode: "CO",
    countryName: "Colombia",
    currencyCode: "COP",
    population: "47790000",
    capital: "Bogotá",
    continentName: "South America"
  },
  {
    countryCode: "CR",
    countryName: "Costa Rica",
    currencyCode: "CRC",
    population: "4516220",
    capital: "San José",
    continentName: "North America"
  },
  {
    countryCode: "CU",
    countryName: "Cuba",
    currencyCode: "CUP",
    population: "11423000",
    capital: "Havana",
    continentName: "North America"
  },
  {
    countryCode: "CV",
    countryName: "Cape Verde",
    currencyCode: "CVE",
    population: "508659",
    capital: "Praia",
    continentName: "Africa"
  },
  {
    countryCode: "CW",
    countryName: "Curacao",
    currencyCode: "ANG",
    population: "141766",
    capital: "Willemstad",
    continentName: "North America"
  },
  {
    countryCode: "CX",
    countryName: "Christmas Island",
    currencyCode: "AUD",
    population: "1500",
    capital: "Flying Fish Cove",
    continentName: "Asia"
  },
  {
    countryCode: "CY",
    countryName: "Cyprus",
    currencyCode: "EUR",
    population: "1102677",
    capital: "Nicosia",
    continentName: "Europe"
  },
  {
    countryCode: "CZ",
    countryName: "Czechia",
    currencyCode: "CZK",
    population: "10476000",
    capital: "Prague",
    continentName: "Europe"
  },
  {
    countryCode: "DE",
    countryName: "Germany",
    currencyCode: "EUR",
    population: "81802257",
    capital: "Berlin",
    continentName: "Europe"
  },
  {
    countryCode: "DJ",
    countryName: "Djibouti",
    currencyCode: "DJF",
    population: "740528",
    capital: "Djibouti",
    continentName: "Africa"
  },
  {
    countryCode: "DK",
    countryName: "Denmark",
    currencyCode: "DKK",
    population: "5484000",
    capital: "Copenhagen",
    continentName: "Europe"
  },
  {
    countryCode: "DM",
    countryName: "Dominica",
    currencyCode: "XCD",
    population: "72813",
    capital: "Roseau",
    continentName: "North America"
  },
  {
    countryCode: "DO",
    countryName: "Dominican Republic",
    currencyCode: "DOP",
    population: "9823821",
    capital: "Santo Domingo",
    continentName: "North America"
  },
  {
    countryCode: "DZ",
    countryName: "Algeria",
    currencyCode: "DZD",
    population: "34586184",
    capital: "Algiers",
    continentName: "Africa"
  },
  {
    countryCode: "EC",
    countryName: "Ecuador",
    currencyCode: "USD",
    population: "14790608",
    capital: "Quito",
    continentName: "South America"
  },
  {
    countryCode: "EE",
    countryName: "Estonia",
    currencyCode: "EUR",
    population: "1291170",
    capital: "Tallinn",
    continentName: "Europe"
  },
  {
    countryCode: "EG",
    countryName: "Egypt",
    currencyCode: "EGP",
    population: "80471869",
    capital: "Cairo",
    continentName: "Africa"
  },
  {
    countryCode: "EH",
    countryName: "Western Sahara",
    currencyCode: "MAD",
    population: "273008",
    capital: "Laâyoune / El Aaiún",
    continentName: "Africa"
  },
  {
    countryCode: "ER",
    countryName: "Eritrea",
    currencyCode: "ERN",
    population: "5792984",
    capital: "Asmara",
    continentName: "Africa"
  },
  {
    countryCode: "ES",
    countryName: "Spain",
    currencyCode: "EUR",
    population: "46505963",
    capital: "Madrid",
    continentName: "Europe"
  },
  {
    countryCode: "ET",
    countryName: "Ethiopia",
    currencyCode: "ETB",
    population: "88013491",
    capital: "Addis Ababa",
    continentName: "Africa"
  },
  {
    countryCode: "FI",
    countryName: "Finland",
    currencyCode: "EUR",
    population: "5244000",
    capital: "Helsinki",
    continentName: "Europe"
  },
  {
    countryCode: "FJ",
    countryName: "Fiji",
    currencyCode: "FJD",
    population: "875983",
    capital: "Suva",
    continentName: "Oceania"
  },
  {
    countryCode: "FK",
    countryName: "Falkland Islands",
    currencyCode: "FKP",
    population: "2638",
    capital: "Stanley",
    continentName: "South America"
  },
  {
    countryCode: "FM",
    countryName: "Micronesia",
    currencyCode: "USD",
    population: "107708",
    capital: "Palikir",
    continentName: "Oceania"
  },
  {
    countryCode: "FO",
    countryName: "Faroe Islands",
    currencyCode: "DKK",
    population: "48228",
    capital: "Tórshavn",
    continentName: "Europe"
  },
  {
    countryCode: "FR",
    countryName: "France",
    currencyCode: "EUR",
    population: "64768389",
    capital: "Paris",
    continentName: "Europe"
  },
  {
    countryCode: "GA",
    countryName: "Gabon",
    currencyCode: "XAF",
    population: "1545255",
    capital: "Libreville",
    continentName: "Africa"
  },
  {
    countryCode: "GB",
    countryName: "United Kingdom",
    currencyCode: "GBP",
    population: "62348447",
    capital: "London",
    continentName: "Europe"
  },
  {
    countryCode: "GD",
    countryName: "Grenada",
    currencyCode: "XCD",
    population: "107818",
    capital: "St. George's",
    continentName: "North America"
  },
  {
    countryCode: "GE",
    countryName: "Georgia",
    currencyCode: "GEL",
    population: "4630000",
    capital: "Tbilisi",
    continentName: "Asia"
  },
  {
    countryCode: "GF",
    countryName: "French Guiana",
    currencyCode: "EUR",
    population: "195506",
    capital: "Cayenne",
    continentName: "South America"
  },
  {
    countryCode: "GG",
    countryName: "Guernsey",
    currencyCode: "GBP",
    population: "65228",
    capital: "St Peter Port",
    continentName: "Europe"
  },
  {
    countryCode: "GH",
    countryName: "Ghana",
    currencyCode: "GHS",
    population: "24339838",
    capital: "Accra",
    continentName: "Africa"
  },
  {
    countryCode: "GI",
    countryName: "Gibraltar",
    currencyCode: "GIP",
    population: "27884",
    capital: "Gibraltar",
    continentName: "Europe"
  },
  {
    countryCode: "GL",
    countryName: "Greenland",
    currencyCode: "DKK",
    population: "56375",
    capital: "Nuuk",
    continentName: "North America"
  },
  {
    countryCode: "GM",
    countryName: "Gambia",
    currencyCode: "GMD",
    population: "1593256",
    capital: "Bathurst",
    continentName: "Africa"
  },
  {
    countryCode: "GN",
    countryName: "Guinea",
    currencyCode: "GNF",
    population: "10324025",
    capital: "Conakry",
    continentName: "Africa"
  },
  {
    countryCode: "GP",
    countryName: "Guadeloupe",
    currencyCode: "EUR",
    population: "443000",
    capital: "Basse-Terre",
    continentName: "North America"
  },
  {
    countryCode: "GQ",
    countryName: "Equatorial Guinea",
    currencyCode: "XAF",
    population: "1014999",
    capital: "Malabo",
    continentName: "Africa"
  },
  {
    countryCode: "GR",
    countryName: "Greece",
    currencyCode: "EUR",
    population: "11000000",
    capital: "Athens",
    continentName: "Europe"
  },
  {
    countryCode: "GS",
    countryName: "South Georgia and the South Sandwich Islands",
    currencyCode: "GBP",
    population: "30",
    capital: "Grytviken",
    continentName: "Antarctica"
  },
  {
    countryCode: "GT",
    countryName: "Guatemala",
    currencyCode: "GTQ",
    population: "13550440",
    capital: "Guatemala City",
    continentName: "North America"
  },
  {
    countryCode: "GU",
    countryName: "Guam",
    currencyCode: "USD",
    population: "159358",
    capital: "Hagåtña",
    continentName: "Oceania"
  },
  {
    countryCode: "GW",
    countryName: "Guinea-Bissau",
    currencyCode: "XOF",
    population: "1565126",
    capital: "Bissau",
    continentName: "Africa"
  },
  {
    countryCode: "GY",
    countryName: "Guyana",
    currencyCode: "GYD",
    population: "748486",
    capital: "Georgetown",
    continentName: "South America"
  },
  {
    countryCode: "HK",
    countryName: "Hong Kong",
    currencyCode: "HKD",
    population: "6898686",
    capital: "Hong Kong",
    continentName: "Asia"
  },
  {
    countryCode: "HM",
    countryName: "Heard Island and McDonald Islands",
    currencyCode: "AUD",
    population: "0",
    capital: "",
    continentName: "Antarctica"
  },
  {
    countryCode: "HN",
    countryName: "Honduras",
    currencyCode: "HNL",
    population: "7989415",
    capital: "Tegucigalpa",
    continentName: "North America"
  },
  {
    countryCode: "HR",
    countryName: "Croatia",
    currencyCode: "HRK",
    population: "4284889",
    capital: "Zagreb",
    continentName: "Europe"
  },
  {
    countryCode: "HT",
    countryName: "Haiti",
    currencyCode: "HTG",
    population: "9648924",
    capital: "Port-au-Prince",
    continentName: "North America"
  },
  {
    countryCode: "HU",
    countryName: "Hungary",
    currencyCode: "HUF",
    population: "9982000",
    capital: "Budapest",
    continentName: "Europe"
  },
  {
    countryCode: "ID",
    countryName: "Indonesia",
    currencyCode: "IDR",
    population: "242968342",
    capital: "Jakarta",
    continentName: "Asia"
  },
  {
    countryCode: "IE",
    countryName: "Ireland",
    currencyCode: "EUR",
    population: "4622917",
    capital: "Dublin",
    continentName: "Europe"
  },
  {
    countryCode: "IL",
    countryName: "Israel",
    currencyCode: "ILS",
    population: "7353985",
    capital: "",
    continentName: "Asia"
  },
  {
    countryCode: "IM",
    countryName: "Isle of Man",
    currencyCode: "GBP",
    population: "75049",
    capital: "Douglas",
    continentName: "Europe"
  },
  {
    countryCode: "IN",
    countryName: "India",
    currencyCode: "INR",
    population: "1173108018",
    capital: "New Delhi",
    continentName: "Asia"
  },
  {
    countryCode: "IO",
    countryName: "British Indian Ocean Territory",
    currencyCode: "USD",
    population: "4000",
    capital: "",
    continentName: "Asia"
  },
  {
    countryCode: "IQ",
    countryName: "Iraq",
    currencyCode: "IQD",
    population: "29671605",
    capital: "Baghdad",
    continentName: "Asia"
  },
  {
    countryCode: "IR",
    countryName: "Iran",
    currencyCode: "IRR",
    population: "76923300",
    capital: "Tehran",
    continentName: "Asia"
  },
  {
    countryCode: "IS",
    countryName: "Iceland",
    currencyCode: "ISK",
    population: "308910",
    capital: "Reykjavik",
    continentName: "Europe"
  },
  {
    countryCode: "IT",
    countryName: "Italy",
    currencyCode: "EUR",
    population: "60340328",
    capital: "Rome",
    continentName: "Europe"
  },
  {
    countryCode: "JE",
    countryName: "Jersey",
    currencyCode: "GBP",
    population: "90812",
    capital: "Saint Helier",
    continentName: "Europe"
  },
  {
    countryCode: "JM",
    countryName: "Jamaica",
    currencyCode: "JMD",
    population: "2847232",
    capital: "Kingston",
    continentName: "North America"
  },
  {
    countryCode: "JO",
    countryName: "Jordan",
    currencyCode: "JOD",
    population: "6407085",
    capital: "Amman",
    continentName: "Asia"
  },
  {
    countryCode: "JP",
    countryName: "Japan",
    currencyCode: "JPY",
    population: "127288000",
    capital: "Tokyo",
    continentName: "Asia"
  },
  {
    countryCode: "KE",
    countryName: "Kenya",
    currencyCode: "KES",
    population: "40046566",
    capital: "Nairobi",
    continentName: "Africa"
  },
  {
    countryCode: "KG",
    countryName: "Kyrgyzstan",
    currencyCode: "KGS",
    population: "5776500",
    capital: "Bishkek",
    continentName: "Asia"
  },
  {
    countryCode: "KH",
    countryName: "Cambodia",
    currencyCode: "KHR",
    population: "14453680",
    capital: "Phnom Penh",
    continentName: "Asia"
  },
  {
    countryCode: "KI",
    countryName: "Kiribati",
    currencyCode: "AUD",
    population: "92533",
    capital: "Tarawa",
    continentName: "Oceania"
  },
  {
    countryCode: "KM",
    countryName: "Comoros",
    currencyCode: "KMF",
    population: "773407",
    capital: "Moroni",
    continentName: "Africa"
  },
  {
    countryCode: "KN",
    countryName: "Saint Kitts and Nevis",
    currencyCode: "XCD",
    population: "51134",
    capital: "Basseterre",
    continentName: "North America"
  },
  {
    countryCode: "KP",
    countryName: "North Korea",
    currencyCode: "KPW",
    population: "22912177",
    capital: "Pyongyang",
    continentName: "Asia"
  },
  {
    countryCode: "KR",
    countryName: "South Korea",
    currencyCode: "KRW",
    population: "48422644",
    capital: "Seoul",
    continentName: "Asia"
  },
  {
    countryCode: "KW",
    countryName: "Kuwait",
    currencyCode: "KWD",
    population: "2789132",
    capital: "Kuwait City",
    continentName: "Asia"
  },
  {
    countryCode: "KY",
    countryName: "Cayman Islands",
    currencyCode: "KYD",
    population: "44270",
    capital: "George Town",
    continentName: "North America"
  },
  {
    countryCode: "KZ",
    countryName: "Kazakhstan",
    currencyCode: "KZT",
    population: "15340000",
    capital: "Astana",
    continentName: "Asia"
  },
  {
    countryCode: "LA",
    countryName: "Laos",
    currencyCode: "LAK",
    population: "6368162",
    capital: "Vientiane",
    continentName: "Asia"
  },
  {
    countryCode: "LB",
    countryName: "Lebanon",
    currencyCode: "LBP",
    population: "4125247",
    capital: "Beirut",
    continentName: "Asia"
  },
  {
    countryCode: "LC",
    countryName: "Saint Lucia",
    currencyCode: "XCD",
    population: "160922",
    capital: "Castries",
    continentName: "North America"
  },
  {
    countryCode: "LI",
    countryName: "Liechtenstein",
    currencyCode: "CHF",
    population: "35000",
    capital: "Vaduz",
    continentName: "Europe"
  },
  {
    countryCode: "LK",
    countryName: "Sri Lanka",
    currencyCode: "LKR",
    population: "21513990",
    capital: "Colombo",
    continentName: "Asia"
  },
  {
    countryCode: "LR",
    countryName: "Liberia",
    currencyCode: "LRD",
    population: "3685076",
    capital: "Monrovia",
    continentName: "Africa"
  },
  {
    countryCode: "LS",
    countryName: "Lesotho",
    currencyCode: "LSL",
    population: "1919552",
    capital: "Maseru",
    continentName: "Africa"
  },
  {
    countryCode: "LT",
    countryName: "Lithuania",
    currencyCode: "EUR",
    population: "2944459",
    capital: "Vilnius",
    continentName: "Europe"
  },
  {
    countryCode: "LU",
    countryName: "Luxembourg",
    currencyCode: "EUR",
    population: "497538",
    capital: "Luxembourg",
    continentName: "Europe"
  },
  {
    countryCode: "LV",
    countryName: "Latvia",
    currencyCode: "EUR",
    population: "2217969",
    capital: "Riga",
    continentName: "Europe"
  },
  {
    countryCode: "LY",
    countryName: "Libya",
    currencyCode: "LYD",
    population: "6461454",
    capital: "Tripoli",
    continentName: "Africa"
  },
  {
    countryCode: "MA",
    countryName: "Morocco",
    currencyCode: "MAD",
    population: "33848242",
    capital: "Rabat",
    continentName: "Africa"
  },
  {
    countryCode: "MC",
    countryName: "Monaco",
    currencyCode: "EUR",
    population: "32965",
    capital: "Monaco",
    continentName: "Europe"
  },
  {
    countryCode: "MD",
    countryName: "Moldova",
    currencyCode: "MDL",
    population: "4324000",
    capital: "Chişinău",
    continentName: "Europe"
  },
  {
    countryCode: "ME",
    countryName: "Montenegro",
    currencyCode: "EUR",
    population: "666730",
    capital: "Podgorica",
    continentName: "Europe"
  },
  {
    countryCode: "MF",
    countryName: "Saint Martin",
    currencyCode: "EUR",
    population: "35925",
    capital: "Marigot",
    continentName: "North America"
  },
  {
    countryCode: "MG",
    countryName: "Madagascar",
    currencyCode: "MGA",
    population: "21281844",
    capital: "Antananarivo",
    continentName: "Africa"
  },
  {
    countryCode: "MH",
    countryName: "Marshall Islands",
    currencyCode: "USD",
    population: "65859",
    capital: "Majuro",
    continentName: "Oceania"
  },
  {
    countryCode: "MK",
    countryName: "Macedonia",
    currencyCode: "MKD",
    population: "2062294",
    capital: "Skopje",
    continentName: "Europe"
  },
  {
    countryCode: "ML",
    countryName: "Mali",
    currencyCode: "XOF",
    population: "13796354",
    capital: "Bamako",
    continentName: "Africa"
  },
  {
    countryCode: "MM",
    countryName: "Myanmar [Burma]",
    currencyCode: "MMK",
    population: "53414374",
    capital: "Naypyitaw",
    continentName: "Asia"
  },
  {
    countryCode: "MN",
    countryName: "Mongolia",
    currencyCode: "MNT",
    population: "3086918",
    capital: "Ulan Bator",
    continentName: "Asia"
  },
  {
    countryCode: "MO",
    countryName: "Macao",
    currencyCode: "MOP",
    population: "449198",
    capital: "Macao",
    continentName: "Asia"
  },
  {
    countryCode: "MP",
    countryName: "Northern Mariana Islands",
    currencyCode: "USD",
    population: "53883",
    capital: "Saipan",
    continentName: "Oceania"
  },
  {
    countryCode: "MQ",
    countryName: "Martinique",
    currencyCode: "EUR",
    population: "432900",
    capital: "Fort-de-France",
    continentName: "North America"
  },
  {
    countryCode: "MR",
    countryName: "Mauritania",
    currencyCode: "MRO",
    population: "3205060",
    capital: "Nouakchott",
    continentName: "Africa"
  },
  {
    countryCode: "MS",
    countryName: "Montserrat",
    currencyCode: "XCD",
    population: "9341",
    capital: "Plymouth",
    continentName: "North America"
  },
  {
    countryCode: "MT",
    countryName: "Malta",
    currencyCode: "EUR",
    population: "403000",
    capital: "Valletta",
    continentName: "Europe"
  },
  {
    countryCode: "MU",
    countryName: "Mauritius",
    currencyCode: "MUR",
    population: "1294104",
    capital: "Port Louis",
    continentName: "Africa"
  },
  {
    countryCode: "MV",
    countryName: "Maldives",
    currencyCode: "MVR",
    population: "395650",
    capital: "Malé",
    continentName: "Asia"
  },
  {
    countryCode: "MW",
    countryName: "Malawi",
    currencyCode: "MWK",
    population: "15447500",
    capital: "Lilongwe",
    continentName: "Africa"
  },
  {
    countryCode: "MX",
    countryName: "Mexico",
    currencyCode: "MXN",
    population: "112468855",
    capital: "Mexico City",
    continentName: "North America"
  },
  {
    countryCode: "MY",
    countryName: "Malaysia",
    currencyCode: "MYR",
    population: "28274729",
    capital: "Kuala Lumpur",
    continentName: "Asia"
  },
  {
    countryCode: "MZ",
    countryName: "Mozambique",
    currencyCode: "MZN",
    population: "22061451",
    capital: "Maputo",
    continentName: "Africa"
  },
  {
    countryCode: "NA",
    countryName: "Namibia",
    currencyCode: "NAD",
    population: "2128471",
    capital: "Windhoek",
    continentName: "Africa"
  },
  {
    countryCode: "NC",
    countryName: "New Caledonia",
    currencyCode: "XPF",
    population: "216494",
    capital: "Noumea",
    continentName: "Oceania"
  },
  {
    countryCode: "NE",
    countryName: "Niger",
    currencyCode: "XOF",
    population: "15878271",
    capital: "Niamey",
    continentName: "Africa"
  },
  {
    countryCode: "NF",
    countryName: "Norfolk Island",
    currencyCode: "AUD",
    population: "1828",
    capital: "Kingston",
    continentName: "Oceania"
  },
  {
    countryCode: "NG",
    countryName: "Nigeria",
    currencyCode: "NGN",
    population: "154000000",
    capital: "Abuja",
    continentName: "Africa"
  },
  {
    countryCode: "NI",
    countryName: "Nicaragua",
    currencyCode: "NIO",
    population: "5995928",
    capital: "Managua",
    continentName: "North America"
  },
  {
    countryCode: "NL",
    countryName: "Netherlands",
    currencyCode: "EUR",
    population: "16645000",
    capital: "Amsterdam",
    continentName: "Europe"
  },
  {
    countryCode: "NO",
    countryName: "Norway",
    currencyCode: "NOK",
    population: "5009150",
    capital: "Oslo",
    continentName: "Europe"
  },
  {
    countryCode: "NP",
    countryName: "Nepal",
    currencyCode: "NPR",
    population: "28951852",
    capital: "Kathmandu",
    continentName: "Asia"
  },
  {
    countryCode: "NR",
    countryName: "Nauru",
    currencyCode: "AUD",
    population: "10065",
    capital: "Yaren",
    continentName: "Oceania"
  },
  {
    countryCode: "NU",
    countryName: "Niue",
    currencyCode: "NZD",
    population: "2166",
    capital: "Alofi",
    continentName: "Oceania"
  },
  {
    countryCode: "NZ",
    countryName: "New Zealand",
    currencyCode: "NZD",
    population: "4252277",
    capital: "Wellington",
    continentName: "Oceania"
  },
  {
    countryCode: "OM",
    countryName: "Oman",
    currencyCode: "OMR",
    population: "2967717",
    capital: "Muscat",
    continentName: "Asia"
  },
  {
    countryCode: "PA",
    countryName: "Panama",
    currencyCode: "PAB",
    population: "3410676",
    capital: "Panama City",
    continentName: "North America"
  },
  {
    countryCode: "PE",
    countryName: "Peru",
    currencyCode: "PEN",
    population: "29907003",
    capital: "Lima",
    continentName: "South America"
  },
  {
    countryCode: "PF",
    countryName: "French Polynesia",
    currencyCode: "XPF",
    population: "270485",
    capital: "Papeete",
    continentName: "Oceania"
  },
  {
    countryCode: "PG",
    countryName: "Papua New Guinea",
    currencyCode: "PGK",
    population: "6064515",
    capital: "Port Moresby",
    continentName: "Oceania"
  },
  {
    countryCode: "PH",
    countryName: "Philippines",
    currencyCode: "PHP",
    population: "99900177",
    capital: "Manila",
    continentName: "Asia"
  },
  {
    countryCode: "PK",
    countryName: "Pakistan",
    currencyCode: "PKR",
    population: "184404791",
    capital: "Islamabad",
    continentName: "Asia"
  },
  {
    countryCode: "PL",
    countryName: "Poland",
    currencyCode: "PLN",
    population: "38500000",
    capital: "Warsaw",
    continentName: "Europe"
  },
  {
    countryCode: "PM",
    countryName: "Saint Pierre and Miquelon",
    currencyCode: "EUR",
    population: "7012",
    capital: "Saint-Pierre",
    continentName: "North America"
  },
  {
    countryCode: "PN",
    countryName: "Pitcairn Islands",
    currencyCode: "NZD",
    population: "46",
    capital: "Adamstown",
    continentName: "Oceania"
  },
  {
    countryCode: "PR",
    countryName: "Puerto Rico",
    currencyCode: "USD",
    population: "3916632",
    capital: "San Juan",
    continentName: "North America"
  },
  {
    countryCode: "PS",
    countryName: "Palestine",
    currencyCode: "ILS",
    population: "3800000",
    capital: "",
    continentName: "Asia"
  },
  {
    countryCode: "PT",
    countryName: "Portugal",
    currencyCode: "EUR",
    population: "10676000",
    capital: "Lisbon",
    continentName: "Europe"
  },
  {
    countryCode: "PW",
    countryName: "Palau",
    currencyCode: "USD",
    population: "19907",
    capital: "Melekeok",
    continentName: "Oceania"
  },
  {
    countryCode: "PY",
    countryName: "Paraguay",
    currencyCode: "PYG",
    population: "6375830",
    capital: "Asunción",
    continentName: "South America"
  },
  {
    countryCode: "QA",
    countryName: "Qatar",
    currencyCode: "QAR",
    population: "840926",
    capital: "Doha",
    continentName: "Asia"
  },
  {
    countryCode: "RE",
    countryName: "Réunion",
    currencyCode: "EUR",
    population: "776948",
    capital: "Saint-Denis",
    continentName: "Africa"
  },
  {
    countryCode: "RO",
    countryName: "Romania",
    currencyCode: "RON",
    population: "21959278",
    capital: "Bucharest",
    continentName: "Europe"
  },
  {
    countryCode: "RS",
    countryName: "Serbia",
    currencyCode: "RSD",
    population: "7344847",
    capital: "Belgrade",
    continentName: "Europe"
  },
  {
    countryCode: "RU",
    countryName: "Russia",
    currencyCode: "RUB",
    population: "140702000",
    capital: "Moscow",
    continentName: "Europe"
  },
  {
    countryCode: "RW",
    countryName: "Rwanda",
    currencyCode: "RWF",
    population: "11055976",
    capital: "Kigali",
    continentName: "Africa"
  },
  {
    countryCode: "SA",
    countryName: "Saudi Arabia",
    currencyCode: "SAR",
    population: "25731776",
    capital: "Riyadh",
    continentName: "Asia"
  },
  {
    countryCode: "SB",
    countryName: "Solomon Islands",
    currencyCode: "SBD",
    population: "559198",
    capital: "Honiara",
    continentName: "Oceania"
  },
  {
    countryCode: "SC",
    countryName: "Seychelles",
    currencyCode: "SCR",
    population: "88340",
    capital: "Victoria",
    continentName: "Africa"
  },
  {
    countryCode: "SD",
    countryName: "Sudan",
    currencyCode: "SDG",
    population: "35000000",
    capital: "Khartoum",
    continentName: "Africa"
  },
  {
    countryCode: "SE",
    countryName: "Sweden",
    currencyCode: "SEK",
    population: "9828655",
    capital: "Stockholm",
    continentName: "Europe"
  },
  {
    countryCode: "SG",
    countryName: "Singapore",
    currencyCode: "SGD",
    population: "4701069",
    capital: "Singapore",
    continentName: "Asia"
  },
  {
    countryCode: "SH",
    countryName: "Saint Helena",
    currencyCode: "SHP",
    population: "7460",
    capital: "Jamestown",
    continentName: "Africa"
  },
  {
    countryCode: "SI",
    countryName: "Slovenia",
    currencyCode: "EUR",
    population: "2007000",
    capital: "Ljubljana",
    continentName: "Europe"
  },
  {
    countryCode: "SJ",
    countryName: "Svalbard and Jan Mayen",
    currencyCode: "NOK",
    population: "2550",
    capital: "Longyearbyen",
    continentName: "Europe"
  },
  {
    countryCode: "SK",
    countryName: "Slovakia",
    currencyCode: "EUR",
    population: "5455000",
    capital: "Bratislava",
    continentName: "Europe"
  },
  {
    countryCode: "SL",
    countryName: "Sierra Leone",
    currencyCode: "SLL",
    population: "5245695",
    capital: "Freetown",
    continentName: "Africa"
  },
  {
    countryCode: "SM",
    countryName: "San Marino",
    currencyCode: "EUR",
    population: "31477",
    capital: "San Marino",
    continentName: "Europe"
  },
  {
    countryCode: "SN",
    countryName: "Senegal",
    currencyCode: "XOF",
    population: "12323252",
    capital: "Dakar",
    continentName: "Africa"
  },
  {
    countryCode: "SO",
    countryName: "Somalia",
    currencyCode: "SOS",
    population: "10112453",
    capital: "Mogadishu",
    continentName: "Africa"
  },
  {
    countryCode: "SR",
    countryName: "Suriname",
    currencyCode: "SRD",
    population: "492829",
    capital: "Paramaribo",
    continentName: "South America"
  },
  {
    countryCode: "SS",
    countryName: "South Sudan",
    currencyCode: "SSP",
    population: "8260490",
    capital: "Juba",
    continentName: "Africa"
  },
  {
    countryCode: "ST",
    countryName: "São Tomé and Príncipe",
    currencyCode: "STD",
    population: "175808",
    capital: "São Tomé",
    continentName: "Africa"
  },
  {
    countryCode: "SV",
    countryName: "El Salvador",
    currencyCode: "USD",
    population: "6052064",
    capital: "San Salvador",
    continentName: "North America"
  },
  {
    countryCode: "SX",
    countryName: "Sint Maarten",
    currencyCode: "ANG",
    population: "37429",
    capital: "Philipsburg",
    continentName: "North America"
  },
  {
    countryCode: "SY",
    countryName: "Syria",
    currencyCode: "SYP",
    population: "22198110",
    capital: "Damascus",
    continentName: "Asia"
  },
  {
    countryCode: "SZ",
    countryName: "Swaziland",
    currencyCode: "SZL",
    population: "1354051",
    capital: "Mbabane",
    continentName: "Africa"
  },
  {
    countryCode: "TC",
    countryName: "Turks and Caicos Islands",
    currencyCode: "USD",
    population: "20556",
    capital: "Cockburn Town",
    continentName: "North America"
  },
  {
    countryCode: "TD",
    countryName: "Chad",
    currencyCode: "XAF",
    population: "10543464",
    capital: "N'Djamena",
    continentName: "Africa"
  },
  {
    countryCode: "TF",
    countryName: "French Southern Territories",
    currencyCode: "EUR",
    population: "140",
    capital: "Port-aux-Français",
    continentName: "Antarctica"
  },
  {
    countryCode: "TG",
    countryName: "Togo",
    currencyCode: "XOF",
    population: "6587239",
    capital: "Lomé",
    continentName: "Africa"
  },
  {
    countryCode: "TH",
    countryName: "Thailand",
    currencyCode: "THB",
    population: "67089500",
    capital: "Bangkok",
    continentName: "Asia"
  },
  {
    countryCode: "TJ",
    countryName: "Tajikistan",
    currencyCode: "TJS",
    population: "7487489",
    capital: "Dushanbe",
    continentName: "Asia"
  },
  {
    countryCode: "TK",
    countryName: "Tokelau",
    currencyCode: "NZD",
    population: "1466",
    capital: "",
    continentName: "Oceania"
  },
  {
    countryCode: "TL",
    countryName: "East Timor",
    currencyCode: "USD",
    population: "1154625",
    capital: "Dili",
    continentName: "Oceania"
  },
  {
    countryCode: "TM",
    countryName: "Turkmenistan",
    currencyCode: "TMT",
    population: "4940916",
    capital: "Ashgabat",
    continentName: "Asia"
  },
  {
    countryCode: "TN",
    countryName: "Tunisia",
    currencyCode: "TND",
    population: "10589025",
    capital: "Tunis",
    continentName: "Africa"
  },
  {
    countryCode: "TO",
    countryName: "Tonga",
    currencyCode: "TOP",
    population: "122580",
    capital: "Nuku'alofa",
    continentName: "Oceania"
  },
  {
    countryCode: "TR",
    countryName: "Turkey",
    currencyCode: "TRY",
    population: "77804122",
    capital: "Ankara",
    continentName: "Asia"
  },
  {
    countryCode: "TT",
    countryName: "Trinidad and Tobago",
    currencyCode: "TTD",
    population: "1228691",
    capital: "Port of Spain",
    continentName: "North America"
  },
  {
    countryCode: "TV",
    countryName: "Tuvalu",
    currencyCode: "AUD",
    population: "10472",
    capital: "Funafuti",
    continentName: "Oceania"
  },
  {
    countryCode: "TW",
    countryName: "Taiwan",
    currencyCode: "TWD",
    population: "22894384",
    capital: "Taipei",
    continentName: "Asia"
  },
  {
    countryCode: "TZ",
    countryName: "Tanzania",
    currencyCode: "TZS",
    population: "41892895",
    capital: "Dodoma",
    continentName: "Africa"
  },
  {
    countryCode: "UA",
    countryName: "Ukraine",
    currencyCode: "UAH",
    population: "45415596",
    capital: "Kiev",
    continentName: "Europe"
  },
  {
    countryCode: "UG",
    countryName: "Uganda",
    currencyCode: "UGX",
    population: "33398682",
    capital: "Kampala",
    continentName: "Africa"
  },
  {
    countryCode: "UM",
    countryName: "U.S. Minor Outlying Islands",
    currencyCode: "USD",
    population: "0",
    capital: "",
    continentName: "Oceania"
  },
  {
    countryCode: "US",
    countryName: "United States",
    currencyCode: "USD",
    population: "310232863",
    capital: "Washington",
    continentName: "North America"
  },
  {
    countryCode: "UY",
    countryName: "Uruguay",
    currencyCode: "UYU",
    population: "3477000",
    capital: "Montevideo",
    continentName: "South America"
  },
  {
    countryCode: "UZ",
    countryName: "Uzbekistan",
    currencyCode: "UZS",
    population: "27865738",
    capital: "Tashkent",
    continentName: "Asia"
  },
  {
    countryCode: "VA",
    countryName: "Vatican City",
    currencyCode: "EUR",
    population: "921",
    capital: "Vatican City",
    continentName: "Europe"
  },
  {
    countryCode: "VC",
    countryName: "Saint Vincent and the Grenadines",
    currencyCode: "XCD",
    population: "104217",
    capital: "Kingstown",
    continentName: "North America"
  },
  {
    countryCode: "VE",
    countryName: "Venezuela",
    currencyCode: "VEF",
    population: "27223228",
    capital: "Caracas",
    continentName: "South America"
  },
  {
    countryCode: "VG",
    countryName: "British Virgin Islands",
    currencyCode: "USD",
    population: "21730",
    capital: "Road Town",
    continentName: "North America"
  },
  {
    countryCode: "VI",
    countryName: "U.S. Virgin Islands",
    currencyCode: "USD",
    population: "108708",
    capital: "Charlotte Amalie",
    continentName: "North America"
  },
  {
    countryCode: "VN",
    countryName: "Vietnam",
    currencyCode: "VND",
    population: "89571130",
    capital: "Hanoi",
    continentName: "Asia"
  },
  {
    countryCode: "VU",
    countryName: "Vanuatu",
    currencyCode: "VUV",
    population: "221552",
    capital: "Port Vila",
    continentName: "Oceania"
  },
  {
    countryCode: "WF",
    countryName: "Wallis and Futuna",
    currencyCode: "XPF",
    population: "16025",
    capital: "Mata-Utu",
    continentName: "Oceania"
  },
  {
    countryCode: "WS",
    countryName: "Samoa",
    currencyCode: "WST",
    population: "192001",
    capital: "Apia",
    continentName: "Oceania"
  },
  {
    countryCode: "XK",
    countryName: "Kosovo",
    currencyCode: "EUR",
    population: "1800000",
    capital: "Pristina",
    continentName: "Europe"
  },
  {
    countryCode: "YE",
    countryName: "Yemen",
    currencyCode: "YER",
    population: "23495361",
    capital: "Sanaa",
    continentName: "Asia"
  },
  {
    countryCode: "YT",
    countryName: "Mayotte",
    currencyCode: "EUR",
    population: "159042",
    capital: "Mamoudzou",
    continentName: "Africa"
  },
  {
    countryCode: "ZA",
    countryName: "South Africa",
    currencyCode: "ZAR",
    population: "49000000",
    capital: "Pretoria",
    continentName: "Africa"
  },
  {
    countryCode: "ZM",
    countryName: "Zambia",
    currencyCode: "ZMW",
    population: "13460305",
    capital: "Lusaka",
    continentName: "Africa"
  },
  {
    countryCode: "ZW",
    countryName: "Zimbabwe",
    currencyCode: "ZWL",
    population: "13061000",
    capital: "Harare",
    continentName: "Africa"
  }
]);


// const video = require("./models/video");

// const MongoURI =
//   "mongodb+srv://nacl:nacl123@aclademy.tijjyrv.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(MongoURI).then(() => {
//   console.log("open");
// });

// video.create({
//   name: "Introduction",
//   link: "https://youtu.be/4ORZ1GmjaMc",
//   notes: "I Love You",
//   duration: "10:34",
//   rating: 3,
//   thumbnail:
//     "https://i.ytimg.com/vi/uirRaVjRsf4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBxxkknmbU3pX2cWvcVXA83gFoJoA",
//   description: "React For Dummies",
//   done: false,
// });
// inst.create({
//   firstName: "Hamboli",
//   lastName: "Boli",
//   userName: "Ham",
//   email: "seifborhan0@gmail.com",
//   password: "Ham",
//   country: "Egypt",
//   rating: [2, 4, 3, 4.5, 5, 1, 2.5],
//   courses: [],
//   photo:
//     "https://preview.redd.it/8f3ceu6epnl71.jpg?width=640&crop=smart&auto=webp&s=110353674c82e0a6d1e29a326924186ce8a57202",
//   bio: "I am very big",
// });
// tran.create({
//   firstName: "Hambozo",
//   lastName: "Bozo",
//   userName: "Ham",
//   email: "hussein.hassan335@gmail.com",
//   password: "Ham",
//   type: true,
//   company: "",
//   photo:
//     "https://images.unsplash.com/photo-1630305131239-c8df91783f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8&w=1000&q=80",
//   wallet: 0.5,
//   courses: [],
//   country: "Qatar",
// });
// sub.create({
//   name: "Introduction to Hell",
//   duration: "30:20:30",
//   videos: ["638516b516bfedd60d6cae97"],
//   exam: [],
// });
// cor.create({
//   courseName: "React Introduction",
//   instructorID: "638518c3898c88e0800b18f6",
//   subtitles: ["63851ac322226706ac7b5b0c"],
//   subscribers: ["638519fe55611a69746ab409"],
//   price: 70,
//   discount: 0,
//   discountDuration: "0",
//   subject: "Web Development",
//   yearOfUpload: "2022",
//   rating: 3.5,
//   certificate: "",
//   totalHours: "51",
//   summary: "Best React Course ever",
//   previewVideo: "https://youtu.be/LAUi8pPlcUM",
//   views: 1,
// });
// cor.create({
//   userId: "638519fe55611a69746ab409",
//   courseId: "63851c4552d5434018c94b9c",
//   completion: 30,
// });
// exam.create({
//   courseID: "63851c4552d5434018c94b9c",
//   subtitle: "63851ac322226706ac7b5b0c",
//   done: false,
//   questions: ["6386568a308583dc9649762e", "638656c90386914e5ab2e8de"],
// });
// grade.create({
//   userId: "638519fe55611a69746ab409",
//   examId: "63851dbd3d46f326130c7c53",
//   grade: "4",
// });
// rating.create({
//   traineeID: "638519fe55611a69746ab409",
//   instructorID: "638518c3898c88e0800b18f6",
//   review: "Meya Meya Ya M3alem",
//   rate: 5,
// });
// problem.create({
//   opened: false,
//   userID: "638519fe55611a69746ab409",
//   description: "Course Mohaza2",
//   courseID: "63851c4552d5434018c94b9c",
//   type: "other",
// });

// // instructor.insertMany({
// //   userName: 'Hambozi',
// //   password:'1234hamzo',
// //  })

// //admins.insertMany({ email: "abc@gmail.com", password: "1234" });

// // courses.insertMany({
// //   courseName: "Graphics",
// //   instructorID: "635442a2c77e33cbddeb9552",
// //   listOfVideos: [
// //     {
// //       name: "Starting video",
// //       duration: "56",
// //       rating: "5",
// //       thumbnail:
// //         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fcreate%2Fyoutube-thumbnails%2F&psig=AOvVaw0GS8d32fPEvbkN7iCS4Oq1&ust=1666552007305000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOCajpXE9PoCFQAAAAAdAAAAABAK",
// //     },
// //     {
// //       name: "Second Video",
// //       duration: "125",
// //       rating: "4.5",
// //       thumbnail:
// //         "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftecheconomy.ng%2F2021%2F06%2Finteresting-app-to-help-you-make-youtube-video-thumbnail%2F&psig=AOvVaw0GS8d32fPEvbkN7iCS4Oq1&ust=1666552007305000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOCajpXE9PoCFQAAAAAdAAAAABAO",
// //     },
// //   ],
// //   subscribers: [],
// //   price: 120,
// //   subject: "CSEN",
// //   yearOfUpload: "2021",
// //   rating: "4.7",
// //   certificate:
// //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fcertificates%2Ftemplates%2F&psig=AOvVaw2dOfXYkmVWcGIBkdWxjNok&ust=1666552787235000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJjNjonH9PoCFQAAAAAdAAAAABAE",
// // });
// // notes.insertMany({userID:'63544ebf3ee93c3f6f637de6',videoID:'635449bb315bb68f0793ac96',courseID:'635449bb315bb68f0793ac95',content:"DONT FORGET!!!"})

// // problem.insertMany([{opened:false,userID:'635442a2c77e33cbddeb9552',description:"video low quality",courseID:'635449bb315bb68f0793ac95',type:'Technical'},
// // {opened:false,userID:'635442a2c77e33cbddeb9552',description:"too expensive",courseID:'635449bb315bb68f0793ac95',type:'Financial'}])

// // trainee.insertMany({
// //   firstName: "Individual",
// //   lastName: "Trainee1",
// //   userName: "1234",
// //   email: "indvt1@gmail.com",
// //   password: "12345",
// //   type: false,
// //   photo:
// //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbrazil-people&psig=AOvVaw2rRD4JkD_yfvXQomIXmVx2&ust=1666555515098000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOiw153R9PoCFQAAAAAdAAAAABAE",
// //   wallet: 0.0,
// //   courses: [{ courseID: "635449bb315bb68f0793ac95", completion: 60 }],
// //   country: "Egypt",
// // });

// // trainee.insertMany({
// //   firstName: "Corporate",
// //   lastName: "Trainee1",
// //   userName: "4321",
// //   email: "corpt1@gmail.com",
// //   password: "54321",
// //   type: true,
// //   company: "Meta",
// //   photo:
// //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbrazil-people&psig=AOvVaw2rRD4JkD_yfvXQomIXmVx2&ust=1666555515098000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOiw153R9PoCFQAAAAAdAAAAABAE",
// //   wallet: 0.0,
// //   courses: [{ courseID: "635449bb315bb68f0793ac95", completion: 30 }],
// //   country: "United Kingdom",
// // });

// // exam.insertMany({
// //   courseID: "635449bb315bb68f0793ac95",
// //   videoID: "635449bb315bb68f0793ac96",
// //   questions: [
// //     {
// //       question: "What is a node?",
// //       choice1: "Point",
// //       choice2: "Line",
// //       choice3: "Library",
// //       choice4: "Type of cats",
// //       correctanswer: 3,
// //     },
// //     {
// //       question: "What is a react?",
// //       choice1: "chemical reaction",
// //       choice2: "verb",
// //       choice3: "noun",
// //       choice4: "Library",
// //       correctanswer: 4,
// //     },
// //   ],
// //   takers: [{ userID: "63544ebf3ee93c3f6f637de6", grade: 2 }],
// // });

// mongoose.connection.close().then(() => {
//   console.log("done");
// });

// course.updateOne(mongoose.Types.ObjectId('63851c4552d5434018c94b9c'), { a })