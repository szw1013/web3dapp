
// control x3d model

// Coke control
function cameraCokeFront() {
    document.getElementById('Coke__CameraFront').setAttribute('bind', 'true');
}

function cameraCokeBack() {
    document.getElementById('Coke__CameraBack').setAttribute('bind', 'true');
}

function cameraCokeLeft() {
    document.getElementById('Coke__CameraLeft').setAttribute('bind', 'true');
}

function cameraCokeRight() {
    document.getElementById('Coke__CameraRight').setAttribute('bind', 'true');
}

function cameraCokeTop() {
    document.getElementById('Coke__CameraTop').setAttribute('bind', 'true');
}

function cameraCokeOff() {
    document.getElementById('Coke__CameraDefault').setAttribute('bind', 'true');
}

// Sprite Control
function cameraSpriteFront() {
    document.getElementById('Sprite__CameraFront').setAttribute('bind', 'true');
}

function cameraSpriteBack() {
    document.getElementById('Sprite__CameraBack').setAttribute('bind', 'true');
}

function cameraSpriteLeft() {
    document.getElementById('Sprite__CameraLeft').setAttribute('bind', 'true');
}

function cameraSpriteRight() {
    document.getElementById('Sprite__CameraRight').setAttribute('bind', 'true');
}

function cameraSpriteTop() {
    document.getElementById('Sprite__CameraTop').setAttribute('bind', 'true');
}

function cameraSpriteOff() {
    document.getElementById('Sprite__CameraDefault').setAttribute('bind', 'true');
}

// Pepper Control
function cameraPepperFront() {
    document.getElementById('Pepper__CameraFront').setAttribute('bind', 'true');
}

function cameraPepperBack() {
    document.getElementById('Pepper__CameraBack').setAttribute('bind', 'true');
}

function cameraPepperLeft() {
    document.getElementById('Pepper__CameraLeft').setAttribute('bind', 'true');
}

function cameraPepperRight() {
    document.getElementById('Pepper__CameraRight').setAttribute('bind', 'true');
}

function cameraPepperTop() {
    document.getElementById('Pepper__CameraTop').setAttribute('bind', 'true');
}

function cameraPepperOff() {
    document.getElementById('Pepper__CameraDefault').setAttribute('bind', 'true');
}

$(document).ready(function () {

    // show and hide 3d pages
    $("#homeContents").show();
    $("#x3dTabs").hide();
    $("#cokeContents").hide();
    $("#spriteContents").hide();
    $("#pepperContents").hide();
    $("#CocaColaCard").show();
    $("#SpriteCard").hide();
    $("#PepperCard").hide();
    $("#cameraContents").hide();
    // buttons in navbar links
    $("#btnHome").click(function () {
        $("#homeContents").fadeIn(2000);
        $("#x3dTabs").hide();
        $("#cokeContents").hide();
        $("#spriteContents").hide();
        $("#pepperContents").hide();

        $("#CocaColaCard").show();
        $("#SpriteCard").hide();
        $("#PepperCard").hide();
        $("#cameraContents").hide();
    });
    $("#btnCoke").click(function () {
        $("#x3dTabs").show();
        $("#homeContents").hide();
        $("#cokeContents").show();
        $("#spriteContents").hide();
        $("#pepperContents").hide();

        $("#CocaColaCard").show();
        $("#SpriteCard").hide();
        $("#PepperCard").hide();

        $("#cameraContents").show();
    });
    $("#btnSprite").click(function () {
        $("#x3dTabs").show();
        $("#homeContents").hide();
        $("#cokeContents").hide();
        $("#spriteContents").show();
        $("#pepperContents").hide();

        $("#CocaColaCard").hide();
        $("#SpriteCard").show();
        $("#PepperCard").hide();
        $("#cameraContents").show();
    });
    $("#btnPepper").click(function () {
        $("#x3dTabs").show();
        $("#homeContents").hide();
        $("#cokeContents").hide();
        $("#spriteContents").hide();
        $("#pepperContents").show();

        $("#CocaColaCard").hide();
        $("#SpriteCard").hide();
        $("#PepperCard").show();
        $("#cameraContents").show();
    });

    // buttons in x3d contents tab
    $("#x3dCokeTab").click(function () {
        $("#x3dTabs").show();
        $("#homeContents").hide();
        $("#cokeContents").show();
        $("#spriteContents").hide();
        $("#pepperContents").hide();
        $("#cameraContents").show();
    });
    $("#x3dSpriteTab").click(function () {
        $("#x3dTabs").show();
        $("#homeContents").hide();
        $("#cokeContents").hide();
        $("#spriteContents").show();
        $("#pepperContents").hide();
        $("#cameraContents").show();
    });
    $("#x3dPepperTab").click(function () {
        $("#x3dTabs").show();
        $("#homeContents").hide();
        $("#cokeContents").hide();
        $("#spriteContents").hide();
        $("#pepperContents").show();
        $("#cameraContents").show();
    });

    // show about tab when hang over there
    $('[data-toggle="popover"]').popover();
});
