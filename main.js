noseX=0;
noseY=0;
function preload(){
    mustache_face= loadImage('https://i.postimg.cc/jdnNvj7m/pop.png');


    }
    
    function setup(){
        canvas=createCanvas(400, 400);
    canvas.center();
    video= createCapture (VIDEO),
video.size (400, 400);
video.hide();
posenet=ml5.poseNet(video, modelloaded);
posenet.on("pose",gotposes);
    }
    
    function draw(){
        image(video,0,0,400,400);
        image(mustache_face,noseX,noseY, 60, 60 );

    }
    
    function snapshot(){
        save("blabla20001.png");
    }
    
    function modelloaded(){
        console.log("model has been loaded");
    }

    function gotposes(results){
        if(results.length>0){
            console.log(results);
            noseX=results[0].pose.nose.x -25 ;
        noseY=results[0].pose.nose.y -10 ; 

        console.log("nose x="+results[0].pose.nose.x );
        console.log("nose y="+results[0].pose.nose.y );
        
    }
           
    }