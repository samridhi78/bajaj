const express=require('express');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))


const response={
    is_success:"true",
    user_id: "samridhi_setia_20032003",
    email:"samridhi1256.be21@chitkara.edu.in",
    roll_number:"2110991256",
    odd_numbers:[],
    even_numbers:[],
    alphabets:[]

}

app.post('/bfhl',(req,res)=>{

    for(let i=0;i<req.body.length;i++){
        if(typeof req.body[i] =='number'){
            if(req.body[i]%2==0){
                response.even_numbers.add(req.body[i]);
            }
            else{
                response.odd_numbers.add(req.body[i]);
            }
        }

        else if(typeof req.body[i]=='string'){
            response.alphabets.add(req.body[i]);
        }
    }

    return res.status(200).json(response);
})
app.listen(3000,()=>{
    console.log("running");
})
