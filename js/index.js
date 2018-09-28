var input, button, rawOutput, rawOutput2, rawOutput3;
//Input Image
function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(imgGet);

  subm = createElement('h2', 'Convert Image to Sound. Image URL(Jpg, Gif, Png)');
  subm.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

//Convert Image To Raw Data (Base64)
function imgGet() {
  var imgFile = input.value();
  var imgOutput = createDiv('<img src="'+ imgFile + '" alt="img"></img>');
  input.value('');
  function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  toDataURL(imgFile, function(dataUrl) {

    rawOutput = dataUrl;
     rawOutput = rawOutput.replace('image','audio');
      rawOutput3 = rawOutput.substr(25);
      rawOutput2 = 'data:audio/wav;base64,' + rawOutput3
})

function convertDataURIToBinary(dataURI) {
  var BASE64_MARKER = ';base64,';
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for(i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

//Replace image markers with audio markers create audio output(Doesn't work)
$("#btn").click(function(){
  var binary= convertDataURIToBinary(rawOutput2);
  var blob=new Blob([binary], {type : 'audio/ogg'});
  var blobUrl = URL.createObjectURL(blob);
  $('body').append('<br> Blob URL : <a href="'+blobUrl+'" target="_blank">'+blobUrl+'</a><br>');
  $("#source").attr("src", blobUrl);
  $("#audio")[0].pause();
  $("#audio")[0].load();//suspends and restores all audio element
  $("#audio")[0].oncanplaythrough =  $("#audio")[0].play();
});


}
