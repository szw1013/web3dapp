$(document).ready(function () {
    $.getJSON('./model/data.json', function (jsonObj) {
        console.log(jsonObj);
        $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
        $('#subTitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');

        $('#title_left').html('<h2>' + jsonObj.pageTextData[1].title + '</h2>');
        $('#subTitle_left').html('<h3>' + jsonObj.pageTextData[1].subTitle + '</h3>');
        $('#description_left').html('<p>' + jsonObj.pageTextData[1].description + '</p>');

        $('#title_centre').html('<h2>' + jsonObj.pageTextData[2].title + '</h2>');
        $('#subTitle_centre').html('<h3>' + jsonObj.pageTextData[2].subTitle + '</h3>');
        $('#description_centre').html('<p>' + jsonObj.pageTextData[2].description + '</p>');

        $('#title_right').html('<h2>' + jsonObj.pageTextData[3].title + '</h2>');
        $('#subTitle_right').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
        $('#description_right').html('<p>' + jsonObj.pageTextData[3].description + '</p>');

        $('#title_coke').html('<h3>' + jsonObj.pageTextData[4].title + '</h3>');
        $('#title_x3dcoke').html('<h3>' + jsonObj.pageTextData[4].x3dModelTitle + '</h3>');
        $('#subTitle_coke').html('<h4>' + jsonObj.pageTextData[4].subTitle + '</h4>');
        $('#description_coke').html('<p>' + jsonObj.pageTextData[4].description + '</p>');

        $('#title_sprite').html('<h3>' + jsonObj.pageTextData[5].title + '</h3>');
        $('#title_x3dsprite').html('<h3>' + jsonObj.pageTextData[5].x3dModelTitle + '</h3>');
        $('#subTitle_sprite').html('<h4>' + jsonObj.pageTextData[5].subTitle + '</h4>');
        $('#description_sprite').html('<p>' + jsonObj.pageTextData[5].description + '</p>');

        $('#title_pepper').html('<h3>' + jsonObj.pageTextData[6].title + '</h3>');
        $('#title_x3dpepper').html('<h3>' + jsonObj.pageTextData[6].x3dModelTitle + '</h3>');
        $('#subTitle_pepper').html('<h4>' + jsonObj.pageTextData[6].subTitle + '</h4>');
        $('#description_pepper').html('<p>' + jsonObj.pageTextData[6].description + '</p>');

        $('#title_gallery').html('<h3>' + jsonObj.pageTextData[7].galleryTitle + '</h3>');
        $('#description_gallery').html('<p>' + jsonObj.pageTextData[7].galleryDescription + '</p>');

        $('#title_camera').html('<h5>' + jsonObj.pageTextData[8].CameraTitle + '</h5>');
        $('#description_camera').html('<p>' + jsonObj.pageTextData[8].CameraSubtitle + '</p>');
    });
});
