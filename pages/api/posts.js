// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

require('dotenv').config();

const Instagram = require('instagram-web-api');

const FileCookieStore = require('tough-cookie-filestore2');

const cookieStore = new FileCookieStore('./cookies.json');

export default function handler(req, res) {

    if(req.method === 'POST'){
        
        const { name , limit } = req.body;
    
        const { apikey } = req.headers;
    
        if (process.env.API_KEY == apikey){
    
            const { USER_NAME: username, PASS: password } = process.env;
    
            const client = new Instagram({
                username: username,
                password: password,
                cookieStore
            });

            init();

            async function init(){

                try {
                    
                    let login = await client.login();
    
                    let result = await client.getPhotosByUsername({ username: name, limit});

                    res.status(200).json(result);
    
                }catch (err) {
    
                    console.log(err);
    
                }

            }
    
        }
    }

}
