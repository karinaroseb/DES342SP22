$(".audioDemo").bind("load", function () {
    $(".alert-success").html("Audio Loaded succesfully");
});

//starts playing
$(".audioDemo").trigger('play');
//pause playing
$(".audioDemo").trigger('pause');

function stopAudio() {
    //pause playing
    $(".audioDemo").trigger('pause');
    //set play time to 0
    $(".audioDemo").prop("currentTime", 0);
}

function volumeUp() {
    var volume = $(".audioDemo").prop("volume") + 0.2;
    if (volume > 1) {
        volume = 1;
    }
    $(".audioDemo").prop("volume", volume);
}

function volumeDown() {
    var volume = $(".audioDemo").prop("volume") - 0.2;
    if (volume < 0) {
        volume = 0;
    }
    $(".audioDemo").prop("volume", volume);
}

function toggleMuteAudio() {
    $(".audioDemo").prop("muted", !$(".audioDemo").prop("muted"));
}