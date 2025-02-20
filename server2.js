// const { group } = require("console");
// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const app = express();
// const port = 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname));

// mongoose.connect("mongodb://localhost:27017/Vedansh ");
// const db = mongoose.connection;

// db.once("open", () => {
//   console.log("mongodb connection successful..");
// });

// const Userschema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   phone: String,
//   Bloodgroup: String,
//   companyAddress: {
//     street1: String,
//     street2: String,
//     city: String,
//     state: String,
//     postalCode: String
//   },
//   companyWebsite: String,
//   hearAboutUs: {
//     socialMedia: Boolean,
//     wordOfMouth: Boolean,
//     advertisement: Boolean,
//     other: Boolean
//   }
// });

// const Users = mongoose.model("data", Userschema);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "form2.html"));
// });

// app.post("/submit", async (req, res) => {
//   const { firstName, lastName, email, phone, company, companyAddressStreet1, companyAddressStreet2, companyAddressCity, companyAddressState, companyAddressPostalCode, companyWebsite, hearAboutUs } = req.body;

//   // Map the form data into the structure that fits the schema
//   const user = new Users({
//     firstName,
//     lastName,
//     email,
//     phone,
//     Bloodgroup,
//     Donaraddress: {
//       street1: AddressStreet1,
//       street2: AddressStreet2,
//       city: AddressCity,
//       state: AddressState,
//       postalCode: AddressPostalCode
//     },
//     Hemoglobin,
//     hearAboutUs: {
//       socialMedia: hearAboutUs.socialMedia === "on", // Checkboxes are sent as "on" if checked
//       wordOfMouth: hearAboutUs.wordOfMouth === "on",
//       advertisement: hearAboutUs.advertisement === "on",
//       other: hearAboutUs.other === "on"
//     }
//   });

//   await user.save();
//   res.send("Form submitted successfully!");
// });

// app.listen(port, () => {
//   console.log(`server is started on ${port}`);
// });








const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 3008;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

mongoose.connect("mongodb://localhost:27017/Vedansh");
const db = mongoose.connection;

db.once("open", () => {
  console.log("mongodb connection successful..");
});

const Userschema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  company: String,
  companyAddress: {
    street1: String,
    street2: String,
    city: String,
    state: String,
    postalCode: String
  },
  companyWebsite: String,
  hearAboutUs: {
    socialMedia: Boolean,
    wordOfMouth: Boolean,
    advertisement: Boolean,
    other: Boolean
  }
});

const Users = mongoose.model("data", Userschema);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form2.html"));
});

app.post("/submit", async (req, res) => {
  const { firstName, lastName, email, phone, company, companyAddressStreet1, companyAddressStreet2, companyAddressCity, companyAddressState, companyAddressPostalCode, companyWebsite, hearAboutUs } = req.body;

  // Map the form data into the structure that fits the schema
  const user = new Users({
    firstName,
    lastName,
    email,
    phone,
    company,
    companyAddress: {
      street1: companyAddressStreet1,
      street2: companyAddressStreet2,
      city: companyAddressCity,
      state: companyAddressState,
      postalCode: companyAddressPostalCode
    },
    companyWebsite,
    hearAboutUs: {
      socialMedia: hearAboutUs.socialMedia === "on", // Checkboxes are sent as "on" if checked
      wordOfMouth: hearAboutUs.wordOfMouth === "on",
      advertisement: hearAboutUs.advertisement === "on",
      other: hearAboutUs.other === "on"
    }
  });

  await user.save();
  res.send("Form submitted successfully!");
});

app.listen(port, () => {
  console.log(`server is started on ${port}`);
});