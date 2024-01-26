document.addEventListener('DOMContentLoaded', function () {
    
    const audioContext = new (window.AudioContext || Window)();

    function playAudio(buffer) {
        // Create a buffer source node
        const source = audioContext.createBufferSource();

        // Decode the audio data and set it to the buffer source
        audioContext.decodeAudioData(buffer, function(decodedData) {
            source.buffer = decodedData;

            // Connect the source to the audio context's destination (speakers)
            source.connect(audioContext.destination);

            // Start playing the audio
            source.start();
        });
    }

    // Fetch the "Happy Birthday" audio file as an ArrayBuffer
    fetch('./songs/happy.mp3')
        .then(response => response.arrayBuffer())
        .then(buffer => playAudio(buffer));
});

    