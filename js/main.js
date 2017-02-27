$(function() {
	/*
	*Global Vars
	*/

	var input;
	var amp;
	var volSlider;
	var volSliderValue;
	var dist;
	var distAmount;

	/*
	*Metronome
	*/

	/*
	*Make Volume Slider
	*/

	$(function() {
		volSlider = $("#volSlider").slider({
			min: 0,
    		max: 100,
    		change: function(event, ui){
				//p5.sound.masterVolume(volSliderValue);
				console.log(input.getLevel());
			}
		});
		volSliderValue = $( "#volSlider" ).slider( "value" );
	});
	//Adjust Volume
	setInterval(function() {
		volSliderValue = $( "#volSlider" ).slider( "value" );
		p5.prototype.masterVolume(volSliderValue/100);
	}, 30)

	/*
	*Make Effect Sliders
	*/

	$(function() {
		$(".controller").slider({
			orientation: "vertical"
		});	
	});

	/*
	*Accept Input
	*/

	function setup(){
  		input = new p5.AudioIn();
  		input.start();
  		//var sources = input.listSources();
  		//console.log(sources);
  		input.connect();
  		input.amp(0);
  		amp = new p5.Amplitude();
	}
	setup();

	/*
	*Effects Controls / Activation
	*/

	// setInterval(function() {
	// 	dist = new p5.Distortion(0, 'none');
	// 	distAmount = $( "#odAmount" ).slider( "value" );
	// 	dist.setType(distAmount/100, 'none');
	// 	dist.connect(input);
	// }, 30)

});