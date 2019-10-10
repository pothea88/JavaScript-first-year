//image to base64
function encode() {
    if ( this.files && this.files[0] ) {
        var FR= new FileReader();
        FR.addEventListener("load",function(e) {
            document.getElementById("i-t-b").innerHTML=e.target.result;
        });       
        FR.readAsDataURL( this.files[0] );
    }
}
document.getElementById("img").addEventListener("change", encode, false);
//base64 to image
function decode() {
    var base64 = document.getElementById("i-t-b").innerHTML;
    document.getElementById("images").src=base64;
}
var btn = document.getElementById("bs64");
btn.addEventListener('click', decode);
