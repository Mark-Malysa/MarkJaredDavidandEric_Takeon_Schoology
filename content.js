var divs = documents.getElementsByTagName('img');
for (var i = 0, l = divs.lenght; i < l; i++){
    divs[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;  
}
