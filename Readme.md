# Mudda Backend Assignment

## Tech stack
1. I used NodeJS,expressJS and MongoDB. 
2. Used Redis for caching.


## Steps for start application
1. firstly install all npm dependencies. because while uploading code I ignored node_modules file.
2. then run the following command: npm server.js
3. then you will see application will start and database connect successfully.


## functional design for project
1. this task totally new for me. finding out solution I took help of google and also checked about third party api or npm packages for language translator.
2. then I got "translate-google" this npm package. then I create a simple application for how this package work and how it will help for our project.
3. after that all works properly then I created database and all this stuff.
4. try and implemented translator in controller for post and get request.
5. after that I installed redis for stored data in cache format.

## Connect api in nodemon for checking 

1. for get request simply put this "http://localhost:4000/translate"
2. for post request we have pass one parameter as a language like this - http://localhost:4000/translate/hi
3. Languages for translate =  
    bn: 'Bengali',
  gu: 'Gujarati',
  kn: 'Kannada',
  ml: 'Malayalam',
  mr: 'Marathi',
  ne: 'Nepali',
  ma: 'Punjabi',
  sn: 'Shona',
  sd: 'Sindhi',
  tg: 'Tajik',
  ta: 'Tamil',
  te: 'Telugu',
  ur: 'Urdu',
4. if we have translate perticuler word in Marathi then we will use "mr" as parameter in API.


## Sample screenshot of post request

1. translated sentence English into Marathi for example.

<img width="527" alt="database" src="https://user-images.githubusercontent.com/87421852/163858962-87804990-7635-492e-a859-b26b3429c791.png">

<img width="442" alt="sample-2" src="https://user-images.githubusercontent.com/87421852/163858965-a58200b2-15ea-4a55-822f-5cce8313a013.png">


## Sample screenshot of get request

1. data will get in caching format

<img width="896" alt="getdata" src="https://user-images.githubusercontent.com/87421852/163858968-df2a411b-7798-40d9-8804-1b3047ad7833.png">



# Thanks for Reading !!!


