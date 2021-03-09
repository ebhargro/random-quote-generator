/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/



let quotes = [
{
  quote: "I did then what I knew how to do. Now that I know better, I do better.",
  source: "Maya Angelou",
  citation: "Interview with Oprah Winfrey",
  year: 2011
},
{
  quote: "For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn’t end.",
  source:"Michelle Obama", 
  citation:"Becoming", 
  year: 2018
},

{
  quote:"You may not control all the events that happen to you, but you can decide not to be reduced by them.", 
  source:"Maya Angelou",
  citation: "Letter To My Daughter",
  year: 2008
},
{
  quote:"I think us here to wonder, myself. To wonder. To ask. And that in wondering bout the big things and asking bout the big things, you learn about the little ones, almost by accident. But you never know nothing more about the big things than you start out with. The more I wonder, the more I love.", 
  source:"Alice Walker",
  citation: "The Color Purple",
  year: 2004
},
{
  quote:"Dreams and reality are opposites. Action synthesizes them.", 
  source:"Assata Shakur", 
  citation:"Assata: An Autobiography", 
  year: 1999 
},
{
  quote:"I am not lucky. You know what I am? I am smart, I am talented, I take advantage of the opportunities that come my way and I work really, really hard. Don’t call me lucky.", 
  source:"Shonda Rhimes", 
  citation:"Year of Yes: How to Dance It Out, Stand In the Sun and Be Your Own Person",
  year: 2015
},
{
  quote:"You wanna fly, you got to give up the stuff that weighs you down", 
  source:"Toni Morrison", 
  citation:"Song of Solomon", 
  year: 2004
},
{
  quote:"You must never behave as if your life belongs to a man. Do you hear me?” Aunty Ifeka said. “Your life belongs to you and you alone.", 
  source:"Chimamanda Ngozi Adichie", 
  citation:"Half of a Yellow Sun", 
  year: 2006
},
{
  quote:"And when we speak, we are afraid our words will not be heard nor welcomed, but when we are silent we are still afraid so it is better to speak...", 
  source:"Audre Lorde", 
  citation:"The Black Unicorn (Poems)", 
  year: 1995
},
{
  quote:"I love myself when I am laughing. . . and then again when I am looking mean and impressive.", 
  source:"Zora Neale Hurston", 
  citation:"I Love Myself When I Am Laughing... And Then Again: A Zora Neale Hurston Reader", 
  year: 1993
},
{
  quote:"You want to know what weakness is? Weakness is treating someone as though they belong to you. Strength is knowing that everyone belongs to themselves.", 
  source:"Yaa Gyasi", 
  citation:"Homegoing", 
  year: 2016
},
{
  quote:"The truth cuts like the sharpest knife I've ever known.", 
  source:"Tomi Adeyemi", 
  citation:"Children of Blood and Bone", 
  year: 2018
},
];


/***
 * `getRandomQuote` function
***/

const getRandomQuote = (arr) => {
  for (let i = 0; i < quotes.length; i++) {

    const num = Math.floor(Math.random()* quotes.length);
    console.log(quotes[num]);
    return `${quotes[num]}`;
}}

console.log(quotes);

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);