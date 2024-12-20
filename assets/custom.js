document.addEventListener("DOMContentLoaded", function() {
    const contactIcon = document.getElementById('contact-icon');

    // Assuming you're working with the current URL
    const url = window.location.href;

    // Create the email parts
    const email = "submissions@hisbonen.org";

    // Find the last segment after the final '/'
    const lastSegment = decodeURIComponent(url.substring(url.lastIndexOf('/') + 1));
    const subject = encodeURIComponent("Submission related to: " + lastSegment);

    // Manually encode only line breaks, forward slashes, and hash symbols in the body
    const body = `Context: ${url.replace(/\//g, '%2F').replace(/#/g, '%23').replace(/\n/g, '%0A')}%0A%0AYour comment/submission:%0A%0A%0A`;

    // Set the href attribute for the mailto link
    contactIcon.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
    // Open link in a new tab
    contactIcon.target = "_blank";
});

const validHashes = [
  "a13861bf27de5c847e59d72c00621c28e4e962e16f4985f387bc09682351fd98", // AK
  "5945bb28058d3310a9884680f0152a75d3347212ef23f05666701c08b0d0ccc7", // JS
  "7a83b2f80a709c1c2d9f8fb09614c86461f69353ca597dfd9985ad734c0788c8", // JS
  "20c3520a6c5b1740d0d468d4cdffe569d8172d9968685816e7f8f513eb03710e", // BW
];

function _0x52bd(_0x5b798e,_0x3fd875){const _0x20d151=_0x20d1();return _0x52bd=function(_0x52bdc6,_0xff1402){_0x52bdc6=_0x52bdc6-0x165;let _0x1f243c=_0x20d151[_0x52bdc6];return _0x1f243c;},_0x52bd(_0x5b798e,_0x3fd875);}(function(_0x33282c,_0x35ea84){const _0x31c9f5=_0x52bd,_0x2138ff=_0x33282c();while(!![]){try{const _0x2d5899=-parseInt(_0x31c9f5(0x174))/0x1*(parseInt(_0x31c9f5(0x16d))/0x2)+-parseInt(_0x31c9f5(0x16a))/0x3*(parseInt(_0x31c9f5(0x17c))/0x4)+parseInt(_0x31c9f5(0x166))/0x5*(-parseInt(_0x31c9f5(0x180))/0x6)+parseInt(_0x31c9f5(0x168))/0x7+-parseInt(_0x31c9f5(0x17b))/0x8+parseInt(_0x31c9f5(0x165))/0x9+-parseInt(_0x31c9f5(0x187))/0xa*(-parseInt(_0x31c9f5(0x179))/0xb);if(_0x2d5899===_0x35ea84)break;else _0x2138ff['push'](_0x2138ff['shift']());}catch(_0x47efa7){_0x2138ff['push'](_0x2138ff['shift']());}}}(_0x20d1,0x50623));function _0x20d1(){const _0x468e6b=['786090GmVuVu','removeChild','includes','key','4330386JyiBSu','200975NPVMYo','display','4003860tEedvn','value','1429797TnZyAp','find','getElementById','519382qFcKiZ','overlay','CanopyDiv','preventDefault','password','toString','Enter','2oDeYFx','cookie',';\x20path=/;\x20Secure;\x20SameSite=Lax','user_sha=','body','110qZQFDK','Invalid\x20Code.\x20Please\x20try\x20again.','1217896PblrlC','4lgKlCA','style','appendChild','startsWith','54saQrtx','overflow','none','split','keypress','#_canopy','parentNode'];_0x20d1=function(){return _0x468e6b;};return _0x20d1();}function checkPassword(){const _0x58fc6a=_0x52bd,_0x2f6b7a=document[_0x58fc6a(0x16c)](_0x58fc6a(0x171)),_0x5a3df9=_0x2f6b7a[_0x58fc6a(0x169)],_0xd990ce=CryptoJS['SHA256'](_0x5a3df9)[_0x58fc6a(0x172)]();validHashes[_0x58fc6a(0x189)](_0xd990ce)?(document[_0x58fc6a(0x175)]=_0x58fc6a(0x177)+_0xd990ce+_0x58fc6a(0x176),document['body'][_0x58fc6a(0x17e)](window[_0x58fc6a(0x16f)]),document['getElementById'](_0x58fc6a(0x16e))[_0x58fc6a(0x17d)]['display']=_0x58fc6a(0x182)):(alert(_0x58fc6a(0x17a)),_0x2f6b7a[_0x58fc6a(0x169)]='');}window['onload']=function(){const _0x26bafc=_0x52bd,_0x1b8007=document['cookie'][_0x26bafc(0x183)](';\x20'),_0xdc9266=_0x1b8007[_0x26bafc(0x16b)](_0x34617e=>_0x34617e[_0x26bafc(0x17f)](_0x26bafc(0x177)));_0xdc9266?(document[_0x26bafc(0x16c)](_0x26bafc(0x16e))[_0x26bafc(0x17d)][_0x26bafc(0x167)]=_0x26bafc(0x182),document[_0x26bafc(0x178)][_0x26bafc(0x17d)][_0x26bafc(0x181)]=''):setTimeout(()=>{const _0x1498bd=_0x26bafc;let _0x1a076a=document['querySelector'](_0x1498bd(0x185));window[_0x1498bd(0x16f)]=_0x1a076a,_0x1a076a[_0x1498bd(0x186)][_0x1498bd(0x188)](_0x1a076a),document[_0x1498bd(0x178)][_0x1498bd(0x17d)][_0x1498bd(0x181)]='hidden';},0x1f4),document[_0x26bafc(0x16c)](_0x26bafc(0x171))['addEventListener'](_0x26bafc(0x184),function(_0x25f927){const _0x41554c=_0x26bafc;_0x25f927[_0x41554c(0x18a)]===_0x41554c(0x173)&&(_0x25f927[_0x41554c(0x170)](),checkPassword());});};


// Find all instances of <hover> tags and process them
function processHoverTags() {
  // Get all <hover> elements in the document
  const hoverTags = document.querySelectorAll('hover');

  hoverTags.forEach((hoverTag) => {
    // Check if the hover tag has already been processed
    if (hoverTag.dataset.processed) return;

    // Mark this <hover> tag as processed
    hoverTag.dataset.processed = 'true';

    // Get the parent of the <hover> tag
    const td = hoverTag.closest('td');
    const parent = hoverTag.parentNode;

    // Extract the inner content of the <hover> tag
    const hoverContent = hoverTag.innerHTML;

    // Create a span element for the default text
    const defaultText = document.createElement('span');
    defaultText.textContent = 'Hover For Answer';
    defaultText.style.display = 'inline';
    defaultText.style.opacity = '0.6';

    td.style.backgroundColor = '#f4f3f3';

    // Create a span element for the hover content
    const hoverText = document.createElement('span');
    hoverText.innerHTML = hoverContent;
    hoverText.style.display = 'none';

    // Add hover functionality to the parent
    td.addEventListener('mouseenter', () => {
      td.style.backgroundColor = 'unset';
      defaultText.style.display = 'none';
      hoverText.style.display = 'inline';
    });

    td.addEventListener('mouseleave', () => {
      defaultText.style.display = 'inline';
      hoverText.style.display = 'none';
      td.style.backgroundColor = '#f4f3f3';
    });

    // Replace the <hover> tag with the new spans
    parent.replaceChild(defaultText, hoverTag);
    parent.appendChild(hoverText);
  });
}

// Process existing hover tags on DOMContentLoaded
window.addEventListener('DOMContentLoaded', processHoverTags);

// Use a MutationObserver to process newly added hover tags
const observer = new MutationObserver(() => {
  processHoverTags();
});

// Ensure document.body exists before observing
window.addEventListener('DOMContentLoaded', () => {
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    console.error('document.body is not available for MutationObserver.');
  }
});
