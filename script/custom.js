
function redNose() {
    if (document.getElementById('Deer__MA_Nose').getAttribute('diffuseColor') != '1 0 0')
        document.getElementById('Deer__MA_Nose').setAttribute('diffuseColor', '1 0 0');
    else
        document.getElementById('Deer__MA_Nose').setAttribute('diffuseColor', '0 0 0');
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
