/* globals require */
console.log("Hello, Airtable");


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyNb14EWwLv4CwYS" }).base(
  "appF48rhZpJIaavqn"
);

//get the "rocks" table from the base, select ALL the records, and specify the functions that will receive the data
base("oils").select({}).eachPage(gotPageOfOils, gotAllOils);

// an empty array to hold our book data
const oils = [];

// callback function that receives our data
function gotPageOfOils(records, fetchNextPage) {
  console.log("gotPageOfOils()");
  // add the records from this page to our rocks array
  oils.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllOils(err) {
  console.log("gotAllOils()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading oils");
    console.error(err);
    return;
  }

  // call function to show the rocks
  showOils();
}

/////////////////////////////////////////////////////////////////////////////////



// create the book-spines on the shelf
function showOils() {
  console.log("showOils()");

  // find the shelf element
  const shelf = document.getElementById("shelf");

  // loop through the books loaded from the Airtable API
  oils.forEach((oil) => {
    // create the div, set its text and class
    const div = document.createElement("div");
    div.innerText = oil.fields.name;
    div.classList.add("oil-spine");
    // when the user clicks this book spine, call showBook and send the book data and this spine element
    div.addEventListener("click", () => {
      showOil(oil, div);
    });
    // put the newly created book spine on the shelf
    shelf.appendChild(div);
  });
}

// show the detail info for a book, and highlight the active book-spine
function showOil(oil, div) {
  console.log("showOil()", oil);

  // find the book detail element
  const oilDetail = document.getElementById("oil-detail");

  // populate the template with the data in the provided book
  oilDetail.getElementsByClassName("name")[0].innerText = oil.fields.name; 
  oilDetail.getElementsByClassName("price")[0].innerText =
  oil.fields.price;
  oilDetail.getElementsByClassName("notes")[0].innerText =
    oil.fields.notes;
oilDetail.getElementsByClassName("image")[0].src =
  oil.fields.image[0].url;

  // remove the .active class from any book spines that have it...
  const shelf = document.getElementById("shelf");
  const oilSpines =  shelf.getElementsByClassName("active");
  for (const oilSpine of oilSpines) {
    oilSpine.classList.remove("active");
  }
  // ...and set it on the one just clicked
  div.classList.add("active");

  // reveal the detail element, we only really need this the first time
  // but its not hurting to do it more than once
  oilDetail.classList.remove("hidden");
}
