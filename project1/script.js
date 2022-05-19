var audio;
$(document).ready
audio = $(".audioDemo");
    addEventHandlers();

function addEventHandlers(){
    $("a.load").click(loadAudio);
    $("a.start").click(startAudio);
    $("a.pause").click(pauseAudio);
    $("a.stop").click(stopAudio);
}

function loadAudio(){
    audio.bind("load",function(){
        $(".alert-success").html("Audio Loaded succesfully");
    });
    audio.trigger('load');
}

function startAudio(){
    audio.trigger('play');
}

function pauseAudio(){
    audio.trigger('pause');
}

function stopAudio(){
    pauseAudio();
    audio.prop("currentTime",0);
}