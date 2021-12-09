//login加载开始==================
var cSpeed = 9;
var cWidth = 64;
var cHeight = 64;
var cTotalFrames = 8;
var cFrameWidth = 64;
var cImageSrc = 'data:image/gif;base64,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';

var cImageTimeout = false;
var cIndex = 0;
var cXpos = 0;
var cPreloaderTimeout = false;
var SECONDS_BETWEEN_FRAMES = 0;

function startAnimation() {

    document.getElementById('loaderImage').style.backgroundImage = 'url(' + cImageSrc + ')';
    document.getElementById('loaderImage').style.width = cWidth + 'px';
    document.getElementById('loaderImage').style.height = cHeight + 'px';

    //FPS = Math.round(100/(maxSpeed+2-speed));
    FPS = Math.round(100 / cSpeed);
    SECONDS_BETWEEN_FRAMES = 1 / FPS;

    cPreloaderTimeout = setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES / 1000);

}

function continueAnimation() {

    cXpos += cFrameWidth;
    //increase the index so we know which frame of our animation we are currently on
    cIndex += 1;

    //if our cIndex is higher than our total number of frames, we're at the end and should restart
    if (cIndex >= cTotalFrames) {
        cXpos = 0;
        cIndex = 0;
    }

    if (document.getElementById('loaderImage'))
        document.getElementById('loaderImage').style.backgroundPosition = (-cXpos) + 'px 0';

    cPreloaderTimeout = setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES * 1000);
}

function stopAnimation() {
    //stops animation
    clearTimeout(cPreloaderTimeout);
    cPreloaderTimeout = false;
}

function imageLoader(s, fun) //Pre-loads the sprites image
{
    clearTimeout(cImageTimeout);
    cImageTimeout = 0;
    genImage = new Image();
    genImage.onload = function() {
        cImageTimeout = setTimeout(fun, 0)
    }
    ;
    genImage.onerror = new Function('alert(\'Could not load the image\')');
    genImage.src = s;
}

//The following code starts the animation
new imageLoader(cImageSrc,'startAnimation()');

/*******************************************/

//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight
  , _PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0
  , _LoadingLeft = _PageWidth > 61 ? (_PageWidth - 61) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: fixed; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px;"><div id="loaderImage"></div></div></div>';
//呈现loading效果
document.write(_LoadingHtml);

//window.onload = function () {
//    var loadingMask = document.getElementById('loadingDiv');
//    loadingMask.parentNode.removeChild(loadingMask);
//};

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loadingDiv');
        loadingMask.parentNode.removeChild(loadingMask);
    }
}
// 结束
