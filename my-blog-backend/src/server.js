import express from 'express';
import {db,connectToDB} from './db.js';
// import fs from 'fs';
// import admin from 'firebase-admin';

// const credentials=JSON.parse(
//         fs.readFileSync('./credentials.json')
// );
    
// admin.initializeApp({
//         credential:admin.credential.cert(credentials),
// })

const app=express();
app.use(express.json());

// app.use(async(req,res,next)=>{
//    const {authToken}=req.headers;

//    if(authToken){
//      try{
//        req.user= await admin.auth().verifyIdToken(authToken);
//      }catch(error){
//        return res.sendStatus(400);
//      }
//    }

//    req.user=req.user||{};
//    next();
// })

app.get('/api/articles/:name',async(req,res)=>{
    const {name}= req.params;
    // const {uid}=req.user;

    const article=await db.collection('articles').findOne({name});                   

    if(article){
        // const upvotesID = article.upvotesID||[];
        // article.canUpvotes = uid && !upvotesID.includes(uid);
        res.json(article);
    }else{
        res.sendStatus(404);
    }
})

// app.use((req,res,next)=>{
//     if(req.user){
//         next();
//     }
//     else{
//         res.sendStatus(401);
//     }
// })

app.put('/api/articles/:name/upvote',async(req,res)=>{
    const {name}= req.params;
    // const {uid}=req.user;

    const article=await db.collection('articles').findOne({name});                   
    if(article){
        // const upvotesID = article.upvotesID||[];
        // const canUpvotes = uid && !upvotesID.includes(uid);
        
        // if(canUpvotes){
        //     await db.collection('articles').updateOne({name},{
        //         $inc:{upvotes:1},
        //         $push:{upvotesID:uid},
        //         // $set:{canUpvotes:true}
        //      });
        // }
        await db.collection('articles').updateOne({name},{
            $inc:{upvotes:1}
        });

        const updateArticle=await db.collection('articles').findOne({name});
        res.json(updateArticle)
    }
    else{
        res.send('That article doesn\'t exist');
    }   
})

app.post('/api/articles/:name/add-comment',async(req,res)=>{
    const {name}= req.params;
    const {username,text}=req.body;
    // const {email}=req.user;

    await db.collection('articles').updateOne({name},{
        // $push:{comments:{postedBy:email,text}}
        $push:{comments:{username,text:text}}
    })

    const article=await db.collection('articles').findOne({name});

    if(article){
        res.send(article)
    }
    else{
        res.send('The article doesn\'t exist.')
    }
})

//call back the function to make sure connect with database then
//output the db for query
connectToDB(()=>{
    console.log('connect to the database successfully');
    app.listen(8000,()=>{
        console.log('server is listening on port 8000');
    });
});
