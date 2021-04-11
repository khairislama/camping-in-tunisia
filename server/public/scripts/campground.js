function timeSince(time){
    var date = new Date();
    var timeDiff = date.getTime() - time;
    if(timeDiff < 60000){
        document.getElementsByClassName("comment-time").innerHTML = "Just now!";
    }else if(timeDiff < (1000 * 60 * 60)){
        // minutes
        var ourTime = Math.floor(timeDiff / (1000 * 60));
        document.getElementsByClassName("comment-time").innerHTML = `${ourTime} minutes ago`;
    }else if(timeDiff < (1000 * 60 * 60 * 24)){
        // hours
        var ourTime = Math.floor(timeDiff / (1000 * 60 * 60));
        document.getElementsByClassName("comment-time").innerHTML = `${ourTime} hours ago`;
    }else if(timeDiff < (1000 * 60 * 60 * 24 * 30)){
        // days
        var ourTime = Math.floor(timeDiff / (1000 * 3600 * 24));
        document.getElementsByClassName("comment-time").innerHTML = `${ourTime} days ago`;
    }else if(timeDiff < (1000 * 60 * 60 * 24 * 12)){
        // months
        var ourTime = Math.floor(timeDiff / (1000 * 3600 * 720));
        document.getElementsByClassName("comment-time").innerHTML = `${ourTime} months ago`;
    }else{
        // years
        var ourTime = Math.floor(timeDiff / (1000 * 3600 * 8640));
        document.getElementsByClassName("comment-time").innerHTML = `${ourTime} years ago`;
    }
}
