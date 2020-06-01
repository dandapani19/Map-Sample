const Cab = require('../models/cab')
const User = require('../models/user')
const Raid = require('../models/raid')

//Get Cab list

const CabList = (req, res, next)=>{
    console.log('---------get cab list------>')
 let data=[];
    Cab.find()
    .then(response =>{
   if(response){
       for(let cab of response){
           if(cab.available == true){
               data.push(cab)
           }
       }
       res.json({message:'The Cabs list', data:data})
      }
    })
    .catch(err =>{
        res.json({message:'The Cabs are not here'})
    })
}

// Get Cabs  avaliable count

const CabListCount = (req, res, next)=>{
    let list=0;
       Cab.find()
       .then(response =>{
      if(response){
          for(let cab of response){
              if(cab.available == true){
                  list= list+1
              }
          }
          res.json({message:'The Cabs list count', data:list})
         }
       })
       .catch(err =>{
           res.json({message:'The Cabs are not here'})
       })
   }


   // Create cabs

   const CreateCab = (req, res, next)=>{
    let cab = new Cab({
        name: req.body.name,
        lan:req.body.lan,
        lon:req.body.lon
    })
       cab.save()
       .then(response =>{
          res.json({message:'Cab created successfully', data:response})
       })
       .catch(err =>{
           res.json({message:'The cab create faild'})
       })
   }

   // Create User

   const CreateUser = (req, res, next)=>{
    let user = new User({
        name: req.body.name,
        lan:req.body.lan,
        lon:req.body.lon
    })
       user.save()
       .then(response =>{
          res.json({message:'User created successfully', data:response})
       })
       .catch(err =>{
           res.json({message:'The user create faild'})
       })
   }

   // Cab booked
//    const CabBook =(req, res, next) =>{
//        let cab_id =req.params.cab_id;
//        let cabdata={
//            available :true
//        }
//        Cab.findandmodify(cab_id, {$set:cabdata})
//        .then(response =>{
//            res.json({message:'User created successfully', data:response})
//        })
//    }

   const CabUnBook =(req, res, next) =>{
    let cab_id =req.params.cab_id;
    let cabdata={
        available :true
    }
    Cab.findandmodify(cab_id, {$set:cabdata})
    .then(response =>{
        res.json({message:'User created successfully', data:response})
    })
}

   // Cab unbooked
   const CabBook =(req, res, next) =>{
    let cab_id =req.params.cab_id;
    let user_id =req.params.user_id;

    let cabdata={
        available :false
    }
    Cab.findandmodify(cab_id, {$set:cabdata})
    .then(response =>{
        User.findById(user_id)
        .then(userdata =>{
            let raid = new Raid({
                username: userdata.name,
                user_id : userdata._id,
                cabname : response.name,
                cab_id  : response._id
            })
            raid.save()
            .then(data =>{
                res.json({message:'Cab booked successfully', data:response})
            })
            .catch(err =>{res.json({message:"Can not booked cab"})})
        })
        
    })
}

const RaidList =(req, res, next) =>{
    let cab_id = req.params.cab_id;
    Raid.find()
    .then(raiddata =>{
        res.json({message:'Raid list ', data:raiddata})
    })
    .catch(err =>{res.json({message:"Raid not allowd"})})
}

module.exports ={
    CabList,
    CabListCount,
    CreateCab,
    CreateUser,
    CabBook,
    CabUnBook,
    RaidList
}