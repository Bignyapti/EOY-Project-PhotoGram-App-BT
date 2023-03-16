let mostPopularPhotos = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80", "https://i.pinimg.com/736x/e4/47/6c/e4476c0d5314dac9e6ec1df0188a1691.jpg"];
let mostLikedPhoto = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"];

let pictures = [];

$("button").click(function() {
    $(".posts").empty();
    let userPic = $("input").val();
    pictures.push(userPic);
    console.log(pictures);

    for (let picture of pictures) {
        $(".posts").append("<img src=" + picture + ">");
    }
    $("input").val("");
    
    if (pictures.length===3){
        $(".message") .text ("Congrats, you are a Silver Level user!");}
    if (pictures.length===5){
        $(".message") .text ("Congrats, you are a Gold Level user!");}
    if (pictures.length>5){
        $(".message") .text ("Congrats, you are a Platinum Level user!");}

});