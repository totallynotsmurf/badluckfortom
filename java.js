var randNumGen;




function sendBadLuck() {
  document.getElementById('tomrn').innerHTML = "Tom right now:";
    randNumGen = Math.floor(Math.random() * 10);
    document.getElementById('tomrungunned').style.display = "block";
  switch (randNumGen) {
    case 0: document.getElementById('tomrungunned').src=('vid/1.mp4');
    break;
    case 1: document.getElementById('tomrungunned').src=('vid/2.mp4');
    break;
    case 2: document.getElementById('tomrungunned').src=('vid/3.mp4');
    break;
    case 3: document.getElementById('tomrungunned').src=('vid/4.mp4');
    break;
    case 4: document.getElementById('tomrungunned').src=('vid/5.mp4');
    break;
    case 5: document.getElementById('tomrungunned').src=('vid/6.mp4');
    break;
    case 6: document.getElementById('tomrungunned').src=('vid/7.mp4');
    break;
    case 7: document.getElementById('tomrungunned').src=('vid/8.mp4');
    break;
    case 8: document.getElementById('tomrungunned').src=('vid/9.mp4');
    break;
    case 9: document.getElementById('tomrungunned').src=('vid/10.mp4');
    break;
    case 10: document.getElementById('tomrungunned').src=('vid/11.mp4');
    break;
  }
}
