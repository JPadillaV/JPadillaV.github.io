
var osc, env, carrier, modulator;
var buttonuP, buttonDown;
var octaveUp, octaveDown;
var sliderFreq, sliderDepth;
var selCarrier, selModulator;
var itemCar = 'sine';
var itemMod = 'sine';
var item;
var frecuencia, depth;

var octave = 0;
var playing = false;
var freq = 220;

var modMaxFreq = 112;
var modMinFreq = 0;
var modMaxDepth = 150;
var modMinDepth = -150;

console.log("Hello");

function setup(){
console.log("setup");


// BOTONES
buttonuP = createButton('UP');
buttonuP.position(739, 150);
buttonuP.mousePressed(octaveUp);

buttonDown = createButton('DOWN');
buttonDown.position(465, 150);
buttonDown.mousePressed(octaveDown);


// SLIDERS
sliderFreq = createSlider(modMinFreq, modMaxFreq, 100);
sliderFreq.position(482, 420);
sliderFreq.style('width', '80px');

sliderDepth = createSlider(modMinDepth, modMaxDepth, 100);
sliderDepth.position(482, 575);
sliderDepth.style('width', '80px');

// SELECT

textAlign(CENTER);
selCarrier = createSelect();
selCarrier.position(688, 275);
selCarrier.option('sine');
selCarrier.option('square');
selCarrier.option('triangle');
selCarrier.option('sawtooth');
selCarrier.changed(waveCar);

textAlign(CENTER);
selModulator = createSelect();
selModulator.position(493, 275);
selModulator.option('sine');
selModulator.option('square');
selModulator.option('triangle');
selModulator.option('sawtooth');
selModulator.changed(waveMod);

//Carrier
osc = new p5.Oscillator(itemCar);
console.log(item);
osc.amp(0); //Set Amplitude
osc.freq(freq); //Set frequency
osc.start(); //start oscillating

//Try changing the type to 'square', 'sine' or 'triangle'
modulator = new p5.Oscillator(itemMod);
modulator.freq(25);
modulator.amp(50);
modulator.start();

//Add the modulator's output to modulate the carrier's frequency
modulator.disconnect();
osc.freq(modulator);

//Instantiate the envelope
env = new p5.Env();

//Set atteckTime, decayTime, sustainRatio, releaseTime
env.setADSR(0.001, 0, 0.8, 0.5);

//Set attackLevel releaseLevel
env.setRange(1, 0);

}

//-------------------------------------------------------------------------------------------------------------------------------

function  draw(){
//map museY to modulator freq between a maximum and a minimum frequency
var frecuencia = sliderFreq.value();

var depth = sliderDepth.value();


modulator.freq(frecuencia);

//change the amplitude of the modulator
//negative amp reverse the sawtooth waveform, and sounds percussive

modulator.amp(depth);


}

function waveCar() {
  var itemCar = selCarrier.value();
  osc.setType(itemCar);
  console.log(itemCar);
}

function waveMod() {
  var itemMod = selModulator.value();
  osc.setType(itemMod);
  console.log(itemMod)
}


function octaveUp() {
  octave = octave + 1;
}

function octaveDown(){
  octave = octave - 1;
}

function keyPressed(){
var freq = 0;

switch(octave){

  case 0:

  console.log("0");

switch(key){
  case "Q":
  freq = midiToFreq(60);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case "2":
  freq = midiToFreq(61);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case "W":
  freq =  midiToFreq(62);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case"3":
  freq = midiToFreq(63);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case "E":
  freq = midiToFreq(64);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case "R":
  freq = midiToFreq(65);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case "5":
  freq = midiToFreq(66);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case "T":
  freq = midiToFreq(67);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case "6":
  freq = midiToFreq(68);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case "Y":
  freq = midiToFreq(69);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case "7":
  freq = midiToFreq(70);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case "U":
  freq = midiToFreq(71);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  case "I":
  freq = midiToFreq(72);
  osc.freq(freq);
  env.triggerAttack(osc);
  break;
  }




break;
  
  case 1:

switch(key){
    case "Q":
    freq = midiToFreq(72);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "2":
    freq = midiToFreq(73);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "W":
    freq =  midiToFreq(74);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case"3":
    freq = midiToFreq(75);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "E":
    freq = midiToFreq(76);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "R":
    freq = midiToFreq(77);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "5":
    freq = midiToFreq(78);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "T":
    freq = midiToFreq(79);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "6":
    freq = midiToFreq(80);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "Y":
    freq = midiToFreq(81);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "7":
    freq = midiToFreq(82);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "U":
    freq = midiToFreq(83);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "I":
    freq = midiToFreq(84);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    }





break;

  case -1:

  switch(key){
    case "Q":
    freq = midiToFreq(48);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "2":
    freq = midiToFreq(49);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "W":
    freq =  midiToFreq(50);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case"3":
    freq = midiToFreq(51);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "E":
    freq = midiToFreq(52);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "R":
    freq = midiToFreq(53);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "5":
    freq = midiToFreq(54);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "T":
    freq = midiToFreq(55);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "6":
    freq = midiToFreq(56);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "Y":
    freq = midiToFreq(57);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "7":
    freq = midiToFreq(58);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "U":
    freq = midiToFreq(59);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    case "I":
    freq = midiToFreq(60);
    osc.freq(freq);
    env.triggerAttack(osc);
    break;
    }

break;
}

}
function 
keyReleased(){
env.triggerRelease(osc);
//osc.amp(0);
}

