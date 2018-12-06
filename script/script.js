var images = document.getElementsByTagName("indexcontainer");
for(var i = 0; i < images.length; i++) {
    var image = images[i];
    image.onclick = function(event) {
         window.location.href = this.id + '.html';
    };
}