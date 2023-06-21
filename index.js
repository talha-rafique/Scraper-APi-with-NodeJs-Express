const puppeteer = require("puppeteer");
const express = require('express');
//const fs = require("fs/promises")

const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





// app.get('/', (req, res) => {
//     res.send('Hello World, from express');
// });



// app.post('/book', (req, res) => {
//     const book = req.body;



//     // Output the book to the console for debugging
//     console.log(book);
//     books.push(book);

//     res.send('Book is added to the database');


// });

app.post('/data', (req, res) => {
    const data = req.body;




  async function start() {

     console.log('started');
     const browser = await puppeteer.launch({ headless: true,  slowMo: 250 });
    
    

     const page = await browser.newPage();
     await page.setViewport({ width: 1000, height: 3000 });
    
     await page.goto(data.id);

    
     page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));

 

     const list =  await page.evaluate( () => {
        var links = [];
        //Private Account
        var Private = document.getElementsByTagName("article");
        //console.log('in Evaluation');   


        if( "This account is private"  == Private[0].children[0].children[0].children[0].innerText)
        {
            console.log('Account Private')
        
            
        }

   
        else
        {

            var ImagesCount = 0;


            // images
            var posts = document.getElementsByTagName('article');
            console.log(posts);
            posts[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].src;

            var d = posts[0].children[0].children[0].children.length;
   
            for( var z=0 ; z<d ; z++){

                for (i = 0 ; i<3 ; i++){
                    console.log('loop');
                    links.push( posts[0].children[0].children[0].children[z].children[i].children[0].children[0].children[0].children[0].src);
                    
                
                    ImagesCount++;
                }
            }
   
            console.log('Obtained Images : ', ImagesCount )

            return links;

        }

        return 'Private Account';

        

    })


    //console.log(JSON.stringify("List : "list));
    //console.log(JSON.stringify(links));

    console.log(JSON.stringify(list));
    //await page.screenshot({path: "sc.png" , fullPage: true});
    await browser.close()
    
    return list;
    }
    const finalData = start();


    res.send(finalData);

});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))