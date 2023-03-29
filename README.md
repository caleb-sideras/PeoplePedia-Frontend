<h1>PeoplePedia</h1>
<p>The front-end for PeoplePedia, an AI powered search engine that summarizes and visualizes information for anyone who has data on the internet.</p>

<p align="left"> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="dart"  height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="flutter" width="40" height="40"/> </a> </p>

[Visit PeoplePedia](https://aipeoplepedia.com/)
![image](https://user-images.githubusercontent.com/66019710/228403877-bea9568f-96d1-4897-b5e8-01dcece7a52e.png)
![image](https://user-images.githubusercontent.com/66019710/228404612-d4bacfc7-566a-476a-8619-5a019b86f508.png)


<h2>Properties</h2>
<p>This JSON object returned from the back-end provides visuals based on various GPT-3.5 powered analysis.</p>
<ul>
  <li><strong>age:</strong> a string representing the age of the person</li>
  <li><strong>analysis:</strong> an array of JSON objects representing different types of analysis. Each JSON object in the analysis array contains the following keys:
    <ul>
      <li><strong>attribute:</strong> a string representing the type of analysis being performed</li>
      <li><strong>confidence:</strong> a string representing the level of confidence in the analysis (e.g. "HIGH", "MEDIUM", "LOW")</li>
      <li><strong>explanation:</strong> a string explaining the results of the analysis</li>
      <li><strong>score:</strong> a float representing the score or value associated with the analysis</li>
      <li><strong>url_list:</strong> an array of strings representing relevant URLs for the analysis</li>
    </ul>
  </li>
  <li><strong>conclusion:</strong> a string summarizing the person's background or profile</li>
  <li><strong>education:</strong> a JSON object representing the person's educational background. The education object contains the following keys:
    <ul>
      <li><strong>institution:</strong> a string representing the name of the educational institution attended</li>
      <li><strong>degree:</strong> a string representing the degree(s) earned</li>
      <li><strong>graduation_year:</strong> a string representing the year of graduation</li>
    </ul>
  </li>
  <li><strong>location:</strong> a string representing the person's current location</li>
  <li><strong>msc:</strong> an array of JSON objects representing the person's goals, interests, and skills. Each JSON object in the msc array contains the following keys:
    <ul>
      <li><strong>category:</strong> a string representing the category of the goal, interest, or skill</li>
      <li><strong>details:</strong> an array of strings representing specific details about the goal, interest, or skill</li>
    </ul>
  </li>
  <li><strong>name:</strong> a string representing the name of the person</li>
  <li><strong>occupation:</strong> a string representing the person's occupation or profession</li>
  <li><strong>photo:</strong> a string representing the URL of a photo of the person</li>
</ul>


<h2>Example Object</h2>
<pre>{
"age": "50",
"analysis": [
{
"attribute": "Political Alignment",
"confidence": "HIGH",
"explanation": "Elon Musk has not publicly expressed a political alignment.",
"score": 0,
"url_list": [
"https://twitter.com/elonmusk",
"https://www.cnn.com/2023/03/28/tech/elon-musk-verified-only-for-you-feed/index.html",
"https://www.britannica.com/biography/Elon-Musk",
"https://en.wikipedia.org/wiki/Elon_Musk"
]
},
{
"attribute": "Sentiment",
"confidence": "LOW",
"explanation": "Elon Musk is a well-respected entrepreneur, innovator and philanthropist.",
"score": 0.45,
"url_list": [
"https://twitter.com/elonmusk",
"https://www.cnn.com/2023/03/28/tech/elon-musk-verified-only-for-you-feed/index.html",
"https://www.britannica.com/biography/Elon-Musk",
"https://en.wikipedia.org/wiki/Elon_Musk"
]
}
],
"conclusion": "Elon Musk is an American entrepreneur responsible for co-founding the electronic-payment firm PayPal, forming SpaceX and being one of the first significant investors in, as well as chief executive officer of, the electric car manufacturer Tesla. In addition, he acquired Twitter in 2022.",
"education": {
"institution": "University of Pennsylvania",
"degree": "B.S. Economics & B.S. Physics",
"graduation_year": "1995"
},
"location": "Pretoria, South Africa & United States",
"msc": [
{
"category": "Goals",
"details": [
"Democratize space transportation",
"Sustainably reduce the cost of building and launching rockets",
"Construct a human colony on Mars"
]
},
{
"category": "Interests",
"details": [
"Innovative technology",
"Business and venture capital"
]
},
{
"category": "Skills",
"details": [
"Business acumen",
"Programming expertise",
"Advanced knowledge of electric engine mechanics"
]
}
],
"name": "Elon Musk",
"occupation": "Entrepreneur",
"photo": "https://tse4.mm.bing.net/th?id=OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ&pid=Api"
}</pre>
