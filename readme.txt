Image to Sound

Nik Szafranek

Simple script to convert raw image data into raw audio data by tricking the very simple tag system in Base64.

It doesn't actually work because, sadly.

The jumping off point was an attempt to extend part of a previous project which focused on mixing in sound from various different sources and just muck about with code. It has been made to work with Python, as we can see as can be seen here: https://www.hackster.io/sam1902/encode-image-in-sound-with-python-f46a3f but as I was more familiar with Javascript I thought I'd try my hand at it that way.

The basic order of operations was

//1. Get image
//2. Convert Image to Raw Data
//3. Convert Raw Data into a form that can be coherently turned into sound
//4. Play sound
//5. Save Sound


//Code snippets from:
https://thebestschools.org/magazine/turn-data-images-into-sounds/
https://ilikekillnerds.com/2016/05/removing-character-startend-string-javascript/
https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
https://stackoverflow.com/questions/4366730/how-do-i-check-if-a-string-contains-a-specific-word
https://stackoverflow.com/questions/17762763/play-wav-sound-file-encoded-in-base64-with-javascript
https://justcode.me/how-to/remove-text-from-string-in-javascript/
https://stackoverflow.com/questions/6094117/concat-to-string-at-beginning

https://github.com/higuma/ogg-vorbis-encoder-js
