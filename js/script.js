/* Author: 

*/
var no = "";
var audiolet = new Audiolet();
function playExample() {
    var notez = document.getElementById('amount').value;
    console.log(no);
    var AudioletApp = function() {
        var synth = new Synth(audiolet, no); // Passes the group Synth this.audiolet with a frequency of 440
        synth.connect(audiolet.output);
    };
    var Synth = function (audiolet, frequency) {
        AudioletGroup.apply(this, [audiolet, 0, 1]);
        this.sine = new Sine(this.audiolet, frequency);
        this.modulator = new Saw(this.audiolet, 2 * frequency);
        this.modulatorMulAdd = new MulAdd(this.audiolet, frequency / 2, frequency);
        this.gain = new Gain(this.audiolet);
        this.envelope = new PercussiveEnvelope(this.audiolet, 1, 0.1, 0.1,
            function () {
                this.audiolet.scheduler.addRelative(0, this.remove.bind(this));
            }.bind(this)
            );
        this.modulator.connect(this.modulatorMulAdd);
        this.modulatorMulAdd.connect(this.sine);
        this.envelope.connect(this.gain, 0, 1);
        this.sine.connect(this.gain);
        this.gain.connect(this.outputs[0]);
    };
    extend(Synth, AudioletGroup);
    this.audioletApp = new AudioletApp();
}
$(function () {
	$("#slider-vertical").slider({
		orientation: "vertical",
		range: "min",
		min: 220,
		max: 880,
		value: 440,
		slide: function (event, ui) {
			$("#amount").val(ui.value);
			no = ui.value;
			playExample();
		},
		change: playExample()
	});
	$("#amount").val($("#slider-vertical").slider("value"));
    console.log(no);
});