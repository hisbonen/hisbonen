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

// Hard-coded SHA hashes of passwords (e.g., sha256("password1"), sha256("password2"))
const validHashes = [
  "a13861bf27de5c847e59d72c00621c28e4e962e16f4985f387bc09682351fd98", // AK
  "5945bb28058d3310a9884680f0152a75d3347212ef23f05666701c08b0d0ccc7", // JS
];

const _0x23c232=_0x2d95;function _0xe81a(){const _0x2fb388=['value','356guaRVo','toString','keypress','Enter','SHA256','includes','password','572440HLOxVR','CanopyDiv','split','cookie','Invalid\x20Code.\x20Please\x20try\x20again.','getElementById','none','91ddOSea','onload','83690UxpEdy','12744QkmNEj','1690266IDkkzr','key','overlay','addEventListener','10abejGE','appendChild','3009780RGKzlN','querySelector','body','546287NSlWJQ','display','143tNbgWx','removeChild','15567EuCmEz','style','user_sha=','preventDefault'];_0xe81a=function(){return _0x2fb388;};return _0xe81a();}function _0x2d95(_0x14efaa,_0x5e2a02){const _0xe81ada=_0xe81a();return _0x2d95=function(_0x2d9579,_0x24fa5d){_0x2d9579=_0x2d9579-0x197;let _0x295526=_0xe81ada[_0x2d9579];return _0x295526;},_0x2d95(_0x14efaa,_0x5e2a02);}(function(_0x51328c,_0x312c59){const _0x81a6bb=_0x2d95,_0x5ba0c8=_0x51328c();while(!![]){try{const _0x311d52=parseInt(_0x81a6bb(0x19d))/0x1+parseInt(_0x81a6bb(0x1ad))/0x2+-parseInt(_0x81a6bb(0x1a1))/0x3*(-parseInt(_0x81a6bb(0x1a6))/0x4)+-parseInt(_0x81a6bb(0x198))/0x5*(parseInt(_0x81a6bb(0x1b8))/0x6)+parseInt(_0x81a6bb(0x1b4))/0x7*(parseInt(_0x81a6bb(0x1b7))/0x8)+-parseInt(_0x81a6bb(0x19a))/0x9+parseInt(_0x81a6bb(0x1b6))/0xa*(-parseInt(_0x81a6bb(0x19f))/0xb);if(_0x311d52===_0x312c59)break;else _0x5ba0c8['push'](_0x5ba0c8['shift']());}catch(_0x42f79a){_0x5ba0c8['push'](_0x5ba0c8['shift']());}}}(_0xe81a,0x4b4ae));function checkPassword(){const _0xdf4cc0=_0x2d95,_0x1ed724=document[_0xdf4cc0(0x1b2)](_0xdf4cc0(0x1ac)),_0x2376a3=_0x1ed724[_0xdf4cc0(0x1a5)],_0x364b52=CryptoJS[_0xdf4cc0(0x1aa)](_0x2376a3)[_0xdf4cc0(0x1a7)]();validHashes[_0xdf4cc0(0x1ab)](_0x364b52)?(document[_0xdf4cc0(0x1b0)]=_0xdf4cc0(0x1a3)+_0x364b52+';\x20path=/;\x20Secure;\x20SameSite=Lax',document[_0xdf4cc0(0x19c)][_0xdf4cc0(0x199)](window[_0xdf4cc0(0x1ae)]),document[_0xdf4cc0(0x1b2)](_0xdf4cc0(0x1ba))[_0xdf4cc0(0x1a2)][_0xdf4cc0(0x19e)]=_0xdf4cc0(0x1b3)):(alert(_0xdf4cc0(0x1b1)),_0x1ed724[_0xdf4cc0(0x1a5)]='');}window[_0x23c232(0x1b5)]=function(){const _0x55afa1=_0x23c232,_0x33b880=document['cookie'][_0x55afa1(0x1af)](';\x20'),_0x3a4411=_0x33b880['find'](_0x52b1b7=>_0x52b1b7['startsWith'](_0x55afa1(0x1a3)));_0x3a4411?document['getElementById'](_0x55afa1(0x1ba))['style'][_0x55afa1(0x19e)]=_0x55afa1(0x1b3):setTimeout(()=>{const _0x2bd523=_0x55afa1;let _0x20d161=document[_0x2bd523(0x19b)]('#_canopy');window[_0x2bd523(0x1ae)]=_0x20d161,_0x20d161['parentNode'][_0x2bd523(0x1a0)](_0x20d161);},0x1f4),document[_0x55afa1(0x1b2)]('password')[_0x55afa1(0x197)](_0x55afa1(0x1a8),function(_0x194966){const _0x188a34=_0x55afa1;_0x194966[_0x188a34(0x1b9)]===_0x188a34(0x1a9)&&(_0x194966[_0x188a34(0x1a4)](),checkPassword());});};