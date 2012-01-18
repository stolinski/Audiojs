/* Author: 

*/
$(function() {
	$( "#slider-vertical" ).slider({
		orientation: "vertical",
		range: "min",
		min: 220,
		max: 880,
		value: 440,
		slide: function( event, ui ) {
			$( "#amount" ).val( ui.value );
		}
	});
	$( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
var no = $( "#slider-vertical" ).slider( "value" );
console.log(no);

});

function playExample() {
	var notez = document.getElementById('amount').value;
console.log(notez);
    var AudioletApp = function() {
        this.audiolet = new Audiolet();
        this.sine = new Sine(this.audiolet, 440);
        this.modulator = new Saw(this.audiolet, notez);
        this.modulatorMulAdd = new MulAdd(this.audiolet, 200, 440);

        this.modulator.connect(this.modulatorMulAdd);
        this.modulatorMulAdd.connect(this.sine);
        this.sine.connect(this.audiolet.output);
    };

    this.audioletApp = new AudioletApp();
};












