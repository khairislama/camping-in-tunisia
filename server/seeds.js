const   mongoose    = require("mongoose"),
        Campground  = require("./models/campground.model"),
        Comment     = require("./models/comment.model"),
        Produit     = require("./models/product.model"),
        User        = require("./models/user.model");

const data = [
    {
        name: "Ohana Hills",
        campgroundImages: [
            {
                link: "https://www.nps.gov/mora/planyourvisit/images/OhanaCampground2016_CMeleedy_01_web.jpeg?maxwidth=1200&maxheight=1200&autorotate=false",
                legend: "premiere photo du site"
            },
            {
                link: "https://q9m3bv0lkc15twiiq99aa1cy-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/TENT.jpeg",
                legend: "deuxieme photo du site"
            },
            {
                link: "https://media.kare11.com/assets/KARE/images/437173820/437173820_750x422.png",
                legend: "troisième photo du camp"
            },
            {
                link: "https://s3.amazonaws.com/socast-superdesk/media/20200525190536/6404f2f2-e5a6-47cb-bb7a-bf11c17f715b.jpg",
                legend: "4eme photo du camp"
            },
            {
                link: "https://365cincinnati.com/wp-content/uploads/2020/05/Camping-at-the-camground-900x525.jpg",
                legend: "5eme photo du camp"
            },
            {
                link: "https://cf.bstatic.com/data/xphoto/1182x887/443/44366236.jpg?size=S",
                legend: "5eme photo du camp"
            }
        ],
        description: "Ohana Hills is the best campground in Ohana. there is no bathrooms and 100% natural espace. So please come and visit us in ohana and don't forget to leave us a comment down bellow to tell us what is you're best campground that you've been to",
        price: "9.50"
    },
    {
        name: "Florida's Magical Lac",
        campgroundImages: [
            {
                link: "https://q9m3bv0lkc15twiiq99aa1cy-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/TENT.jpeg",
                legend: "la 1ere photo du site"
            },
            {
                link: "https://s3.amazonaws.com/socast-superdesk/media/20200525190536/6404f2f2-e5a6-47cb-bb7a-bf11c17f715b.jpg",
                legend: "4eme photo du camp"
            },
            {
                link: "https://365cincinnati.com/wp-content/uploads/2020/05/Camping-at-the-camground-900x525.jpg",
                legend: "5eme photo du camp"
            }
        ],
        description: "This is the most visited campground in florida. People come all over the world to camp in here. It's beautiful view and the magical lac will stay in your memorie for ever. So tell us when you'll come visit us and we'll make you a reservation.",
        price: "6.50"
    },
    {
        name: "Car ground's forest",
        campgroundImages: [
            {
                link: "https://cincinnatiusa.com/sites/default/files/styles/article_full/public/attractionphotos/Winton%20Woods%20Campground.JPG?itok=Iytm6OhO",
                legend: "the number one photo of the camp"
            },
            {
                link: "https://media.kare11.com/assets/KARE/images/437173820/437173820_750x422.png",
                legend: "troisième photo du camp"
            },
            {
                link: "https://s3.amazonaws.com/socast-superdesk/media/20200525190536/6404f2f2-e5a6-47cb-bb7a-bf11c17f715b.jpg",
                legend: "4eme photo du camp"
            },
            {
                link: "https://365cincinnati.com/wp-content/uploads/2020/05/Camping-at-the-camground-900x525.jpg",
                legend: "5eme photo du camp"
            },
            {
                link: "https://cf.bstatic.com/data/xphoto/1182x887/443/44366236.jpg?size=S",
                legend: "5eme photo du camp"
            }
        ],
        description: "If you're searching for a campground where you need to camp with you're car, you're on your way back home but it's getting late? Please came and visit our wonderfull campground in miami where you can found all the needing elements and assists to pass your night away from home. Bathrooms included.",
        price: "8.00"
    },
    {
        name: "Kara main's lac",
        campgroundImages: [
            {
                link: "https://media.kare11.com/assets/KARE/images/437173820/437173820_750x422.png",
                legend: "une vue d'ensenble numero 1"
            },
            {
                link: "https://cincinnatiusa.com/sites/default/files/styles/article_full/public/attractionphotos/Winton%20Woods%20Campground.JPG?itok=Iytm6OhO",
                legend: "the number one photo of the camp"
            },
            {
                link: "https://365cincinnati.com/wp-content/uploads/2020/05/Camping-at-the-camground-900x525.jpg",
                legend: "5eme photo du camp"
            },
            {
                link: "https://cf.bstatic.com/data/xphoto/1182x887/443/44366236.jpg?size=S",
                legend: "5eme photo du camp"
            }
        ],
        description: "Kara main's lac will welcome you to camp you and your familly. It's a familly campground where you can take your kids with you and you can be sure for 100% there well not be and kind of danger. This place is well secured and you'll find all the needs to have the greatest night away from home.",
        price: "10.00"
    }
];
function seedDB(){
    // remove all campgrounds
    Campground.remove({}, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Campgrounds removed");
            // add campgrounds
            data.forEach((seed)=>{
                Campground.create(seed, (err, campground)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log("added campground");
                        // add comments
                        Comment.create({
                            text: "This place is greate, but I wish there was internet"
                        }, (err, comment)=>{
                            if(err){
                                console.log(err);
                            }else{
                                User.findOne({username: "khairi.slama@polytechnicien.tn"}, (err, user)=>{
                                    if(err){
                                        console.error(err);
                                    }else{
                                        comment.author.id = user._id;
                                        comment.author.firstname = user.firstname;
                                        comment.author.lastname = user.lastname;
                                        comment.save();
                                        campground.author.id = user._id;
                                        campground.author.firstname = user.firstname;  
                                        campground.author.lastname = user.lastname;  
                                        campground.comments.push(comment);
                                        campground.save();
                                        console.log("comment added successfully");                                      
                                    }
                                });                            
                            }
                        });
                    }
                });
            });
        }
    });
    //Produit.remove({});
    //User.remove({})
}

module.exports = seedDB;