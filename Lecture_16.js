const express =  require('express');
const app = express();
const userModel = require('./models/user2');
const postModel = require('./models/post');

app.get('/',(req , res)=>{
    res.send("Hello");
});
app.get('/create' , async (req ,res)=>{
    let user = await userModel.create({
        username:'girish',
        age : 25 ,
        email : "thoratgirish286@gmail.com"
    })
    res.send(user);
})
 
app.get("/create/post" , async (req , res)=>{
    let post = await postModel.create({
        postdata : "Hello how are you",
        data : "68ac920c564eeec649ec2d87"
    });
    let userdata = await userModel.findOne({_id : "68ac920c564eeec649ec2d87"});
    userdata.post.push(post._id);
    await userdata.save();
    res.send({post, userdata});
});

app.listen(3000);