/* Author: 

*/
var no = "";
$(function() {
	$( "#slider-vertical" ).slider({
		orientation: "vertical",
		range: "min",
		min: 220,
		max: 880,
		value: 440,
		slide: function( event, ui ) {
			$( "#amount" ).val( ui.value );
			no = ui.value;
		},
		change: playExample
	});
	$( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
console.log(no);

});

function playExample() {
	var notez = document.getElementById('amount').value;
	console.log(no);
    var AudioletApp = function() {
        this.audiolet = new Audiolet();
        var synth = new Synth(this.audiolet, no); // Passes the group Synth this.audiolet with a frequency of 440
        synth.connect(this.audiolet.output);
    };
    var Synth = function(audiolet, frequency) {
    	AudioletGroup.apply(this, [audiolet, 0,1]);

        this.sine = new Sine(this.audiolet, frequency);
        this.modulator = new Saw(this.audiolet, 2 * frequency);
        this.modulatorMulAdd = new MulAdd(this.audiolet, frequency / 2, frequency);

        this.modulator.connect(this.modulatorMulAdd);
        this.modulatorMulAdd.connect(this.sine);
        this.sine.connect(this.outputs[0]);
    };
    extend(Synth, AudioletGroup);
    this.audioletApp = new AudioletApp();
};












