(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Camel = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.Cttmovie.stop();
		
		
		function cttplay()
		{
		this.Cttmovie.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(299));

	// レイヤー 2
	this.Cttmovie = new lib.Ctt();
	this.Cttmovie.setTransform(271,101);

	this.timeline.addTween(cjs.Tween.get(this.Cttmovie).wait(1).to({regX:29.1,regY:-39.7,x:300.1,y:61.2},0).wait(218).wait(1).to({regX:0,regY:0,x:271,y:101},0).wait(1).to({regX:29.1,regY:-39.7,x:300.1,y:62.8},0).wait(1).to({y:64.4},0).wait(1).to({y:66.1},0).wait(1).to({y:67.7},0).wait(1).to({y:69.3},0).wait(1).to({y:70.9},0).wait(1).to({y:72.5},0).wait(1).to({y:74.2},0).wait(1).to({y:75.8},0).wait(1).to({y:77.4},0).wait(1).to({y:79},0).wait(1).to({y:80.6},0).wait(1).to({y:82.3},0).wait(1).to({y:83.9},0).wait(1).to({y:85.5},0).wait(1).to({y:87.1},0).wait(1).to({y:88.8},0).wait(1).to({y:90.4},0).wait(1).to({y:92},0).wait(1).to({y:93.6},0).wait(1).to({y:95.2},0).wait(1).to({y:96.9},0).wait(1).to({y:98.5},0).wait(1).to({y:100.1},0).wait(1).to({y:101.7},0).wait(1).to({y:103.3},0).wait(1).to({y:105},0).wait(1).to({y:106.6},0).wait(1).to({y:108.2},0).wait(51));

	// レイヤー 1
	this.Camelwalk = new lib.camelwalk();
	this.Camelwalk.setTransform(87.6,181.4,0.381,0.413,0,0,0,266.8,194.5);

	this.timeline.addTween(cjs.Tween.get(this.Camelwalk).wait(1).to({regX:277.5,regY:220.8,x:91.7,y:192.2},0).wait(1).to({x:94.4},0).wait(1).to({x:97.2},0).wait(1).to({x:99.9},0).wait(1).to({x:102.6},0).wait(1).to({x:105.3},0).wait(1).to({x:108},0).wait(1).to({x:110.7},0).wait(1).to({x:113.5},0).wait(1).to({x:116.2},0).wait(1).to({x:118.9},0).wait(1).to({x:121.6},0).wait(12).wait(1).to({regX:266.8,regY:194.5,x:117.6,y:181.4},0).wait(1).to({regX:277.5,regY:220.8,x:124.6,y:192.2},0).wait(1).to({x:127.6},0).wait(1).to({x:130.6},0).wait(1).to({x:133.6},0).wait(1).to({x:136.6},0).wait(1).to({x:139.6},0).wait(1).to({x:142.6},0).wait(1).to({x:145.6},0).wait(1).to({x:148.6},0).wait(1).to({x:151.6},0).wait(12).wait(1).to({regX:266.8,regY:194.5,x:147.6,y:181.4},0).wait(1).to({regX:277.5,regY:220.8,x:154.4,y:192.2},0).wait(1).to({x:157.1},0).wait(1).to({x:159.8},0).wait(1).to({x:162.6},0).wait(1).to({x:165.3},0).wait(1).to({x:168},0).wait(1).to({x:170.7},0).wait(1).to({x:173.5},0).wait(1).to({x:176.2},0).wait(1).to({x:178.9},0).wait(1).to({x:181.6},0).wait(13).wait(1).to({regX:266.8,regY:194.5,x:177.6,y:181.4},0).wait(1).to({regX:277.5,regY:220.8,x:185,y:192.2},0).wait(1).to({x:188.3},0).wait(1).to({x:191.6},0).wait(1).to({x:195},0).wait(1).to({x:198.3},0).wait(1).to({x:201.6},0).wait(1).to({x:205},0).wait(1).to({x:208.3},0).wait(1).to({x:211.6},0).wait(12).wait(1).to({regX:266.8,regY:194.5,x:207.6,y:181.4},0).wait(1).to({regX:277.5,regY:220.8,x:214.6,y:192.2},0).wait(1).to({x:217.6},0).wait(1).to({x:220.6},0).wait(1).to({x:223.6},0).wait(1).to({x:226.6},0).wait(1).to({x:229.6},0).wait(1).to({x:232.6},0).wait(1).to({x:235.6},0).wait(1).to({x:238.6},0).wait(1).to({x:241.6},0).wait(13).wait(1).to({regX:266.8,regY:194.5,x:237.6,y:181.4},0).wait(1).to({regX:277.5,regY:220.8,x:245,y:192.2},0).wait(1).to({x:248.3},0).wait(1).to({x:251.6},0).wait(1).to({x:255},0).wait(1).to({x:258.3},0).wait(1).to({x:261.6},0).wait(1).to({x:265},0).wait(1).to({x:268.3},0).wait(1).to({x:271.6},0).wait(12).wait(1).to({regX:266.8,regY:194.5,x:267.6,y:181.4},0).wait(1).to({regX:277.5,regY:220.8,x:274.6,y:192.2},0).wait(1).to({x:277.6},0).wait(1).to({x:280.6},0).wait(1).to({x:283.6},0).wait(1).to({x:286.6},0).wait(1).to({x:289.6},0).wait(1).to({x:292.6},0).wait(1).to({x:295.6},0).wait(1).to({x:298.6},0).wait(1).to({x:301.6},0).wait(13).wait(1).to({regX:0,regY:0,x:196,y:101.1},0).wait(1).to({regX:277.5,regY:220.8,x:304.5,y:192.3},0).wait(1).to({x:307.3},0).wait(1).to({x:310.1},0).wait(1).to({x:312.9},0).wait(1).to({x:315.7},0).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.5,103.2,154,157);


// symbols:
(lib.lsd_10のコピー8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#794504").s().p("AiYFfQAOgrAUg0IAKgZIAVg5IAfhbIAWhJIAKgoIAEggIAIgzIAHghQgMhBAZhgQAOgqArg1QAyhEAqAFQAIAAAGAFQAcA4gcBOQgSAngDAVQgQBegcA3QgWArgRAwIgdBKIgCADIgeBUIgZBHQgQAqgYAmIgLAOIhBBNQgnAugKAsQAIgsAYhIg");
	this.shape.setTransform(2.5,-93.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#794504").s().p("AiwFXIAqhaIANgZIAXg3IAmhZIAbhIIANgoIAIgfIAMgxIAHggQgDhCAjhdQAQgpAugzQAzg/AqAGQAHABAIAFQAYA5gfBNQgUArgGAVQgaBYghA1QgZAqgWAuIgiBHIgCADIgiBRIgfBFQgTAqgbAlIgMANIhJBGQgpAngPAnQAOgpAchBg");
	this.shape_1.setTransform(-0.8,-94.5,1,1,0,0,0,0,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#794504").s().p("AjJFLQAWgnAeguIAOgYQAPgaANgZIAthWIAhhGIARgnIALgeIAOgvIALgfQAHhBArhaQASgnAvgwQA2g8ApAIQAIABAGAFQAXA7giBLIghBDQgkBTgkAyQgdAogaAsIgpBDIgCADIgpBNIgkBCQgXAqgfAiIgNALQgWAUg7AqQgsAggVAkQAUgmAjg7g");
	this.shape_2.setTransform(-4.7,-96.7,1,1,0,0,0,-0.1,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#794504").s().p("AjlE9IA+hOIASgVIAggvIA2hSIAphBIAVgkIALgdIAUgtQAFgQAIgPQAQg+AyhXQAVglAwgtQA2g5ApAKQAIACAGAFQAVA7glBKIgoBGQgsBLgoAwQggAmgeAnIgwBCIgDADIgxBIIgrA9QgcApgiAdIgPAJQgZARhAAhQgsAXgaAcIBBhQg");
	this.shape_3.setTransform(-8.7,-99.5,1,1,0,0,0,-0.4,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#794504").s().p("AkAEsIBHhFIAVgTIAjgrIA/hMIAwg9IAVghIAQgcIAXgrIAQgdQAZg7A4hSQAXgkAxgqQA3g1ApALQAHABAHAGQARA9gnBIQgjA3gNARQgzBDgrAsQgjAlghAkIg3A9IgDADIg5BCIgwA5QggAmgmAZIgQAIQgaAPhFAXQgqAOgcAVQAdgaAogng");
	this.shape_4.setTransform(-12.2,-102.6,1,1,0,0,0,-0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#794504").s().p("AkWEZIBOg9IAWgQQATgTASgVQAngqAfgeIA1g4IAYggIASgZIAcgoIARgcQAig3A/hMQAYgiAxgnQA4gzApANQAHACAGAGQAQA9grBHQgpA5gOAQQg5A6gvApIhLBDIg8A4IgDACIg+A9Ig0A0QgkAmgoAUIgRAGQgcANhHAOQgqAIgeARQAfgWAsggg");
	this.shape_5.setTransform(-15.1,-105.8,1,1,0,0,0,-1,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#794504").s().p("AkpEHIBSg2IAXgPQATgQAUgVQApgoAggcIA5g1IAbgfIAVgXIAegmIATgZQArgyBEhGQAaggAyglQA4gvAoAOQAHACAGAGQANA+gtBFQgwA8gQANQg9AygzAkIhQA9Ig/AzIgDACIhCA5Ig2AxQgnAkgqASIgRAEQgdALhIAIQgnADgeAMQAggRArgbg");
	this.shape_6.setTransform(-17.3,-108.6,1,1,0,0,0,-1.3,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#794504").s().p("AkWEZIBOg9IAWgQIAmgoIBFhHIA1g4IAZgiIASgYIAbgoIARgcQAig3A/hMQAZgiAxgnQA4gzAoANQAHACAHAGQAPA9gqBHQgpA6gPAPQg4A6gwApIhKBDIg8A4IgDACIg+A9Ig0A0QglAlgoAVIgRAGQgcANhHAOQgqAIgeARQAfgWAsggg");
	this.shape_7.setTransform(-15.1,-105.8,1,1,0,0,0,-1,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#794504").s().p("Aj/EqIBIhEIAUgSIAkgsIA/hLIAwg8IAWgiIAPgcIAYgrIAPgcQAag8A4hSQAXgkAwgqQA3g1ApALQAIABAGAGQASA8gnBJQgjA3gNARQgzBEgrAsQgkAkghAkIg3A9IgCADIg5BCIgxA4QggAngnAYIgQAIQgaAOhFAXQgsAOgdAXIBIhDg");
	this.shape_8.setTransform(-12.4,-102.7,1,1,0,0,0,-0.7,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#794504").s().p("AjmE8IBAhNIASgVQARgXAPgYIA4hQQAZgjAQgeIATgkIANgdIAUgtIAOgeQAQg/AxhWQAVgmAwgtQA2g5ApAKQAIACAGAFQAVA7glBKIgoBHQgsBKgoAwQggAngeAnIgwBBIgDADIgyBIIgsA9QgcAogjAcIgPAKQgZAQhBAgQguAWgaAdIBDhQg");
	this.shape_9.setTransform(-8.9,-99.8,1,1,0,0,0,-0.3,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#794504").s().p("AjLFJQAXgmAfgtIAQgXIAdgzIAvhVQAVgmANgeIASgnIAIgeIARgvIALgfQAGhBArhaQASgnAvgwQA1g9ApAIQAHACAIAFQAWA6ghBMIghBDQgjBTglAyQgdApgaApIgpBFIgCADIgrBNIgnBBQgYApggAhIgOALQgWATg8AoQguAfgWAkQAVglAmg7g");
	this.shape_10.setTransform(-5.1,-97,1,1,0,0,0,0,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#794504").s().p("AixFUQASgpAagxIANgYIAZg2IAohYQARgnAKggIAOgpIAIgfIAKgwIAJggQgChBAiheQAQgpAtgyQA0hBAqAHQAHAAAHAFQAZA6gfBNQgUAsgGAUQgaBZghA1QgZAqgWAtIgjBGIgCAEIglBRIgfBEQgUAqgcAkIgNANIhKBEQgtAngQAqQAPgqAhhDg");
	this.shape_11.setTransform(-1.4,-94.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#794504").s().p("AiaFeQAOgqAXgzIALgaIAWg4IAihaQAOgnAJghIAJgpIAFgfIAIgyIAFghQgKhBAYhgQAOgqArg2QAxhEArAFQAHAAAHAFQAbA4gbBOQgRAogDAVQgQBdgcA4QgVAsgTAvIgdBJIgBAEIggBUIgbBGQgSAqgZAmIgMANIhDBLQgpArgLAsQAKgrAahHg");
	this.shape_12.setTransform(1.9,-93.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#794504").s().p("AiaFeIAlhdIALgZIAWg5IAihZQAOgoAJghIAJgpIAFgfIAIgyIAFghQgKhBAYhgQAOgqArg2QAxhEArAFQAHAAAHAFQAbA4gbBOQgRAogDAVQgQBdgcA4QgVAsgTAvIgdBJIgBAEIggBUIgbBGQgSAqgZAmIgLAOIhEBKQgoAsgMArQAKgrAahHg");
	this.shape_13.setTransform(1.9,-93.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#794504").s().p("AiaFeQAPgqAVgzIAMgZIAWg5IAihZQAOgoAIghIAKgpIAFgfIAIgyIAFghQgKhBAYhgQAOgqArg2QAxhEArAFQAGAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgUAsgTAvIgdBJIgCAEIgfBUIgbBGQgSAqgZAmIgLAOIhEBKQgoAsgMArQAKgrAahHg");
	this.shape_14.setTransform(2,-93.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#794504").s().p("AiaFeIAlhdIALgaIAWg4IAihaQANgnAJghIAKgpIAFggIAIgxIAFghQgKhCAYhfQANgqAsg2QAxhEAqAEQAHABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgVAsgTAvIgcBKIgCADIgfBUIgbBHQgSAqgZAmIgLANIhEBLQgoArgLAsQAJgrAahHg");
	this.shape_15.setTransform(2,-93.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#794504").s().p("AiaFeQAPgqAVgzIALgaIAXg4IAhhaQAOgnAJghIAKgpIAFggIAHgxIAGghQgKhCAYhfQANgqArg2QAyhEAqAEQAHABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgVAsgTAvIgdBKIgBADIggBUIgbBHQgRAqgZAmIgMANIhCBLQgqAsgKArQAJgrAahHg");
	this.shape_16.setTransform(2,-93.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#794504").s().p("AiaFeQAPgqAVgzIALgaIAXg4IAhhaQAOgnAJghIAJgpIAFggIAIgxIAGghQgLhCAYhfQAOgqArg2QAxhEArAEQAHABAHAEQAbA5gbBOQgRAngDAVQgQBegcA3QgVAsgTAvIgdBKIgBADIggBUIgbBHQgSAqgYAmIgLANIhEBLQgoAsgLArQAJgrAahHg");
	this.shape_17.setTransform(2,-93.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#794504").s().p("AiaFfQAPgrAWgzIALgZIAWg5IAhhaQAOgnAJghIAJgpIAFggIAIgxIAGghQgLhCAYhfQAOgqArg2QAxhEArAEQAHABAHAEQAbA5gbBOQgRAngDAVQgQBegcA3QgVAsgTAvIgdBKIgBADIggBUIgaBHQgSAqgZAmIgLANIhDBLQgoAtgMAqQAKgrAZhGg");
	this.shape_18.setTransform(2,-93.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#794504").s().p("AiZFeQAOgqAWgzIALgaIAVg4IAihaQAOgoAIghIAKgpIAFgfIAIgyIAGghQgLhBAYhgQAOgqArg2QAxhEArAFQAGAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgUAsgTAvIgdBJIgCAEIgfBTIgaBHQgTAqgYAmIgLAOIhDBLQgoAsgLArQAJgrAahHg");
	this.shape_19.setTransform(2.1,-93.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#794504").s().p("AiaFeQAPgqAWgzIAKgaIAWg4IAihaQANgoAJghIAKgpIAFgfIAIgyIAGghQgLhBAYhgQANgqAsg2QAxhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVAsgTAvIgcBJIgCAEIgfBTIgbBHQgRAqgZAmIgLAOIhDBLQgpAtgKAqQAJgrAZhHg");
	this.shape_20.setTransform(2.1,-93.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#794504").s().p("AiaFeQAPgqAVgzIALgaIAXg4IAghaQAOgoAJghIAKgpIAFgfIAHgyIAHghQgLhBAYhgQANgqArg2QAyhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVAsgTAvIgdBJIgBAEIgfBTIgbBHQgRAqgZAmIgMAOIhCBLQgoAsgLAsQAJgrAZhIg");
	this.shape_21.setTransform(2.1,-93.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#794504").s().p("AiZFfQAOgrAVgzIALgZIAWg5IAihaQANgoAJghIAJgpIAFgfIAIgyIAHghQgMhBAYhgQAOgqArg2QAxhEArAFQAHAAAHAFQAbA4gbBOQgRAogDAVQgQBdgcA4QgVAsgTAvIgdBJIgBAEIgfBTIgbBHQgSArgYAmIgLANIhDBLQgoAsgLAsQAJgsAahGg");
	this.shape_22.setTransform(2.1,-93.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#794504").s().p("AiZFfQAOgrAWgzIAKgZIAWg5IAihaQANgoAJghIAJgpIAFgfIAIgyIAHghQgMhBAYhgQAOgqArg2QAxhEArAFQAHAAAHAFQAbA4gbBOQgRAogDAVQgQBdgcA4QgVAsgTAvIgdBJIgBAEIgfBTIgbBHQgRArgZAmIgLANIhDBLQgnAtgMArQAJgsAahGg");
	this.shape_23.setTransform(2.1,-93.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#794504").s().p("AiZFeQAOgqAWgzIALgaIAVg4IAhhaQAOgoAIghIAKgpIAFggIAIgxIAHghQgMhCAYhfQAOgqArg2QAxhEArAEQAGABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgUAsgTAvIgdBKIgCADIgfBUIgaBHQgRAqgZAmIgLAOIhCBLQgpAsgKAsQAJgrAZhIg");
	this.shape_24.setTransform(2.2,-93.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#794504").s().p("AiZFfQAOgrAWgzIAKgaIAWg4IAhhaQANgoAJghIAKgpIAFggIAIgxIAGghQgLhCAYhfQANgqAsg2QAxhEAqAEQAHABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgVAsgTAvIgcBKIgCADIgfBUIgaBHQgRAqgZAmIgLAOIhDBLQgoAtgKArQAJgsAZhGg");
	this.shape_25.setTransform(2.2,-93.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#794504").s().p("AiZFfQAPgrAUgzIALgZIAWg5IAhhaQANgoAJghIAKgpIAFggIAHgxIAHghQgLhCAYhfQANgqArg2QAyhEAqAEQAHABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgVAsgTAvIgdBKIgBADIgfBUIgaBHQgRAqgYAmIgMAOIhDBLQgnAtgLArQAJgsAZhGg");
	this.shape_26.setTransform(2.2,-93.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#794504").s().p("AiZFfQAOgrAVgzIALgZIAWg5IAhhaQANgoAJghIAJgpIAFggIAIgxIAHghQgMhCAYhfQAOgqArg2QAxhEArAEQAHABAHAEQAbA5gbBOQgRAngDAVQgQBegcA3QgVAsgTAvIgdBKIgBADIgfBUIgaBHQgSAqgYAmIgLAOIhCBMQgoAtgLAqQAJgrAZhHg");
	this.shape_27.setTransform(2.2,-93.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#794504").s().p("AiZFfQAPgrAVgzIAKgaIAWg4IAhhbQANgoAJghIAJgpIAFgfIAIgyIAHghQgMhBAYhgQAOgqArg2QAxhEArAFQAHAAAHAFQAbA4gbBOQgRAogDAVQgQBdgcA4QgVAsgTAvIgdBJIgBAEIgfBTIgaBIQgRAqgYAmIgMAOIhCBLQgoAtgLArQAKgsAYhGg");
	this.shape_28.setTransform(2.2,-93.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#794504").s().p("AiYFfQANgrAWgzIAKgaIAWg4IAghbQAOgoAIghIAKgpIAFgfIAIgyIAHghQgMhBAYhgQAOgqArg2QAxhEArAFQAGAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgUAsgTAvIgdBJIgCAEIgeBTIgaBIQgSAqgYAmIgLAOIhCBLQgoAtgLArQAJgrAahHg");
	this.shape_29.setTransform(2.3,-93.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#794504").s().p("AiZFfQAOgrAWgzIAKgaIAWg4IAghbQANgoAJghIAKgpIAFgfIAIgyIAGghQgLhBAYhgQANgqAsg2QAxhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVAsgTAvIgcBJIgCAEIgeBTIgaBIQgRAqgYAmIgMAOIhCBLQgoAtgKAsQAJgsAYhHg");
	this.shape_30.setTransform(2.3,-93.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#794504").s().p("AiZFfQAOgrAVgzIALgZIAWg5IAghaQANgpAJghIAKgpIAFgfIAHgyIAHghQgLhBAYhgQANgqArg2QAyhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVAsgTAvIgdBJIgBAEIgeBTIgbBIQgQApgYAnIgMAOIhCBMQgnAsgLAsQAJgsAYhHg");
	this.shape_31.setTransform(2.3,-93.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#794504").s().p("AiZFfQAOgrAVgzIALgZIAVg5IAhhaQAOgpAIghIAJgpIAFgfIAIgyIAHghQgMhBAYhgQAOgqArg2QAxhEArAFQAHAAAHAFQAbA4gbBOQgRAogDAVQgQBdgcA4QgVAsgTAvIgdBJIgBAEIgfBTIgZBIQgSAqgYAmIgLAOIhCBMQgoAtgKArQAJgrAYhIg");
	this.shape_32.setTransform(2.3,-93.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#794504").s().p("AiZFfQAOgrAWgzIAKgaIAVg4IAghbQAPgoAHghIAKgpIAFggIAIgxIAHghQgMhCAYhfQAOgqArg2QAxhEArAEQAGABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgUAsgTAvIgdBKIgCADIgeBUIgaBHQgQArgZAmIgLANIhBBMQgoAtgLAsQAJgsAYhHg");
	this.shape_33.setTransform(2.4,-93.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#794504").s().p("AiYFfQANgrAWgzIAKgaIAVg4IAghbQAPgoAHghIAKgpIAFggIAIgxIAHghQgMhCAYhfQAOgqArg2QAxhEArAEQAGABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgUAsgTAvIgdBKIgCADIgeBUIgaBHQgQArgZAmIgLAOIhBBMQgoAsgLAsQAKgsAYhHg");
	this.shape_34.setTransform(2.4,-93.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#794504").s().p("AiYFfQAOgrAVgzIAKgZIAVg5IAghbQAOgoAIghIAKgpIAFggIAIgxIAGghQgLhCAYhfQANgqAsg2QAxhEAqAEQAHABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgVAsgTAvIgcBKIgCADIgeBUIgZBHQgRArgYAmIgMAOIhBBMQgoAtgKArQAJgrAYhIg");
	this.shape_35.setTransform(2.4,-93.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#794504").s().p("AiYFfQAOgrAUgzIALgZIAVg5IAghbQAOgoAIghIAKgpIAFggIAHgxIAHghQgLhCAYhfQANgqArg2QAyhEAqAEQAHABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgVAsgTAvIgdBKIgBADIgeBUIgZBHQgSArgYAmIgKAOIhCBMQgoAtgKArQAIgrAZhIg");
	this.shape_36.setTransform(2.4,-93.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#794504").s().p("AiYFfIAiheIALgaIAVg5IAghaQAOgpAIggIAJgqIAFgfIAIgyIAHghQgMhBAYhgQAOgqArg2QAxhEArAFQAHAAAHAFQAbA4gbBOQgRAogDAVQgQBdgcA4QgVAsgTAvIgdBJIgBAEIgeBTIgaBIQgRAqgXAmIgMAOIhBBMQgoAugKArQAJgsAYhHg");
	this.shape_37.setTransform(2.4,-93.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#794504").s().p("AiYFfQANgqAVg0IAKgaIAWg4IAfhbQAPgpAHggIAKgqIAFgfIAIgyIAHghQgMhBAYhgQAOgqArg2QAxhEArAFQAGAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgUAsgTAvIgdBJIgCAEIgeBTIgZBIQgRAqgXAmIgMAOIhBBNQgoAtgJArQAIgrAYhIg");
	this.shape_38.setTransform(2.5,-93.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#794504").s().p("AiYFfQAPgrATgzIALgaIAVg4IAfhbQAPgpAHggIAKgqIAFgfIAIgyIAHghQgMhBAYhgQAOgqArg2QAxhEArAFQAGAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgUAsgTAvIgdBJIgCAEIgeBTIgZBIQgQAqgYAnIgMANIhBBNQgnAtgKArQAIgrAYhIg");
	this.shape_39.setTransform(2.5,-93.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#794504").s().p("AiYFfQAOgrAUgzIALgZIAVg5IAfhbQAOgpAIggIAKgqIAFgfIAIgyIAGghQgLhBAYhgQANgqAsg2QAxhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVAsgTAvIgcBJIgCAEIgdBTIgaBIQgQAqgYAnIgLANIhCBNQgnAtgKAsQAIgsAYhIg");
	this.shape_40.setTransform(2.5,-93.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#794504").s().p("AiXFgQANgrAVg0IAKgZIAUg5IAhhbIAVhJIAKgqIAFgfIAHgyIAHghQgLhBAYhgQANgqArg2QAyhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVAsgTAvIgdBJIgBAEIgdBTIgaBIQgRAqgXAnIgLANIhBBNQgoAtgKAsQAIgsAZhHg");
	this.shape_41.setTransform(2.5,-93.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#794504").s().p("AiYFfQAOgqAUg0IALgaIAVg5IAfhaIAWhKIAJgpIAFggIAIgxIAHghQgMhCAYhfQAOgqArg2QAxhEArAEQAHABAHAEQAbA5gbBOQgRAngDAVQgQBegcA3QgVAsgTAvIgdBKIgBADIgeBUIgZBIQgRApgXAnIgLAOIhCBNQgnAtgKAsQAIgsAYhIg");
	this.shape_42.setTransform(2.5,-93);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#794504").s().p("AiYFfQAPgrATgzIAKgaIAWg5IAfhaIAVhKIAKgpIAFggIAIgxIAHghQgMhCAYhfQAOgqArg2QAxhEArAEQAGABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgUAsgTAvIgdBKIgCADIgdBUIgZBIQgRApgXAnIgMAOIhBBNQgmAtgKAsQAIgsAXhIg");
	this.shape_43.setTransform(2.6,-93);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#794504").s().p("AiXFfQAOgrATgzIAKgZIAWg5IAfhbIAVhKIAKgpIAFggIAIgxIAHghQgMhCAYhfQAOgqArg2QAxhEArAEQAGABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgUAsgTAvIgdBJIgBAEIgeBUIgZBIQgRAqgXAmIgLAOIhBBNQgnAtgKAsQAIgsAYhIg");
	this.shape_44.setTransform(2.6,-93);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#794504").s().p("AiXFgIAhhfIALgZIAUg5IAghbIAVhKIAKgpIAFggIAIgxIAGghQgLhCAYhfQANgqAsg2QAxhEAqAEQAHABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgVAsgTAvIgcBJIgBAEIgeBUIgZBIQgQAqgYAmIgLAOIhBBNQgnAugKArQAIgsAYhHg");
	this.shape_45.setTransform(2.6,-93);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#794504").s().p("AiXFgQANgrAVg0IAKgZIAUg5IAghbIAVhKIAKgpIAFggIAHgxIAHghQgLhCAYhfQANgqArg2QAyhEAqAEQAHABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgVAsgTAvIgdBJIgBAEIgdBUIgZBIQgQAqgYAmIgLAOIhBBNQgnAugKArQAIgsAYhHg");
	this.shape_46.setTransform(2.6,-93);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#794504").s().p("AiXFfQANgrAUgzIAKgaIAVg5IAfhbIAWhJIAJgqIAFgfIAIgyIAHghQgMhBAYhgQAOgqArg2QAxhEArAFQAHAAAHAFQAbA4gbBOQgRAogDAVQgQBdgcA4QgVAsgTAvIgdBJIgBAEIgdBTIgZBIQgRArgXAmIgLAOIhBBNQgnAugKArQAJgsAXhIg");
	this.shape_47.setTransform(2.6,-93);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#794504").s().p("AiXFgQAOgsATgzIAKgaIAVg5IAfhbIAVhJIAKgqIAFgfIAIgyIAHghQgMhBAYhgQAOgqArg2QAxhEArAFQAGAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgUAsgTAvIgdBJIgBAEIgeBTIgZBIQgPAqgYAnIgLAOIhBBNQgmAugLArQAJgsAXhHg");
	this.shape_48.setTransform(2.7,-93);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#794504").s().p("AiXFgQANgrAUg0IAKgZIAVg5IAfhcIAVhJIAKgqIAFgfIAIgyIAGghQgLhBAYhgQANgqAsg2QAxhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVAsgTAvIgcBJIgBAEIgeBTIgYBIQgRAqgXAnIgLAOIhBBNQgnAugJAsQAHgtAYhHg");
	this.shape_49.setTransform(2.7,-93);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#794504").s().p("AiXFgIAhhfIAKgZIAVg5IAfhbIAVhKIAKgqIAFgfIAIgyIAGghQgLhBAYhgQANgqAsg2QAxhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVAsgTAvIgcBJIgBAEIgeBTIgYBIQgQAqgYAnIgLAOIhABNQgnAugKAsQAIgsAXhIg");
	this.shape_50.setTransform(2.7,-93);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#794504").s().p("AiXFgQANgsAVgzIAKgaIAUg5IAfhbIAVhKIAKgpIAFggIAHgxIAHghQgLhCAYhfQANgqArg2QAyhEAqAEQAHABAIAEQAbA5gbBOQgRAngDAVQgRBegcA3QgVAsgTAvIgdBJIgBAEIgdBUIgYBIQgQAqgYAnIgLAOIhBBNQgmAugKAsQAIgtAXhHg");
	this.shape_51.setTransform(2.7,-92.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#794504").s().p("AiXFgQANgrAVg0IAKgZIAUg5IAfhbIAVhKIAKgqIAFgfIAHgyIAHghQgLhBAYhgQANgqArg2QAyhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVArgTAwIgdBJIgBADIgdBUIgYBIQgQAqgYAnIgLAOIhBBNQgmAugKAsQAIgsAXhIg");
	this.shape_52.setTransform(2.7,-87.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#794504").s().p("AiXFgQANgrAVg0IAKgZIAUg5IAfhcIAVhKIAKgpIAFgfIAHgyIAHghQgLhBAYhgQANgqArg2QAyhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVArgTAwIgdBJIgBADIgdBUIgYBIQgQAqgYAnIgLAOIhBBNQgmAugKAsQAIgsAXhIg");
	this.shape_53.setTransform(2.7,-75.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#794504").s().p("AiXFgQANgrAVg0IAKgZIAUg6IAfhbIAVhKIAKgpIAFgfIAHgyIAHghQgLhBAYhgQANgqArg2QAyhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVArgTAwIgdBJIgBADIgdBUIgYBIQgQArgYAmIgLAOIhBBNQgmAugKAsQAIgsAXhIg");
	this.shape_54.setTransform(2.7,-63.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#794504").s().p("AiXFgQANgrAVg0IAKgZIAUg6IAfhbIAVhKIAKgpIAFgfIAHgyIAHghQgLhBAYhgQANgqArg2QAyhEAqAFQAHAAAIAFQAbA4gbBOQgRAogDAVQgRBdgcA4QgVArgTAvIgdBKIgBADIgdBUIgYBIQgQArgYAmIgLAOIhBBNQgmAugKAsQAIgsAXhIg");
	this.shape_55.setTransform(2.7,-57.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#794504").s().p("AiXFgQANgrAVg0IAKgZIAUg6IAfhbIAVhKIAKgpIAFgfIAHgyIAHghQgLhBAYhgQANgqArg2QAyhEAqAFQAHABAIADQAbA5gbBOQgRAogDAVQgRBdgcA4QgVArgTAvIgdBKIgBADIgdBUIgYBIQgQArgYAmIgLAOIhBBNQgmAugKAsQAIgtAXhHg");
	this.shape_56.setTransform(2.7,-52);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#794504").s().p("AiXFgQANgsAVgzIAKgaIAUg5IAfhbIAVhKIAKgpIAFgfIAHgyIAHghQgLhBAYhgQANgqArg2QAyhEAqAEIAPAFQAbA5gbBOQgRAngDAWQgRBdgcA4QgVArgTAvIgdBKIgBADIgdBUIgYBIQgQArgYAmIgLAOIhBBNQgmAugKAsQAIgtAXhHg");
	this.shape_57.setTransform(2.7,-46.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#794504").s().p("AiXFgQANgsAVgzIAKgaIAUg5IAfhbIAVhKIAKgpIAFggIAHgxIAHghQgLhCAYhfQANgqArg2QAyhEAqAEQAHABAIAEQAbA5gbBOQgRAngDAWQgRBdgcA4QgVArgTAvIgdBKIgBADIgdBUIgYBIQgQAqgYAnIgLAOIhBBNQgmAugKAsQAIgtAXhHg");
	this.shape_58.setTransform(2.7,-40.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#794504").s().p("AiXFgQANgsAVgzIAKgaIAUg5IAfhbIAVhKIAKgpIAFggIAHgxIAHghQgLhCAYhfQANgqArg2QAyhEAqAEQAHABAIAEQAbA5gbBOQgRAngDAVQgRBfgcA2QgVAsgTAvIgdBKIgBADIgdBUIgYBIQgQAqgYAnIgLAOIhBBNQgmAugKAsQAIgtAXhHg");
	this.shape_59.setTransform(2.7,-34.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#794504").s().p("AiXFgQANgsAVgzIAJgaIAUg5IAghbIAVhKIAJgpIAGggIAHgxIAGghQgLhCAZhfQANgqArg2QAyhEApAEQAIABAIAEQAbA5gbBOQgSAngDAVQgQBegcA3QgWAsgSAvIgdBJIgBAEIgdBUIgYBIQgQAqgYAnIgLAOIhBBNQgmAugKAsQAIgtAXhHg");
	this.shape_60.setTransform(3.2,-16.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#794504").s().p("AiXFgQAOgsATgzIAKgaIAVg5IAfhbIAVhKIAJgpIAFggIAJgxIAGghQgMhCAZhfQANgqAsg2QAxhEAqAEQAIABAGAEQAcA5gbBOQgSAngDAVQgQBegcA3QgWAsgSAvIgcBJIgCAEIgdBUIgYBIQgQAqgYAnIgLAOIhABNQgoAugJAsQAIgtAXhHg");
	this.shape_61.setTransform(3.6,-9.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#794504").s().p("AiWFgQANgsATgzIAKgaIAVg5IAehbIAWhKIAJgpIAFggIAJgxIAGghQgMhCAZhfQANgqAsg2QAwhEArAEQAHABAHAEQAbA5gbBOQgRAngDAVQgPBegdA3QgWAsgRAvIgdBJIgCAEIgdBUIgYBIQgQAqgYAnIgLAOIhBBNQgmAugKAsQAIgtAYhHg");
	this.shape_62.setTransform(4,-3.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#794504").s().p("AiWFgQANgsATgzIAKgaIAVg5IAehbIAWhKIAJgpIAGggIAIgxIAGghQgMhCAYhfQAOgqAsg2QAwhEArAEQAHABAHAEQAbA5gbBOQgRAngDAVQgQBegcA3QgVAsgTAvIgcBJIgCAEIgdBUIgZBIQgPAqgYAnIgLAOIhBBNQgmAugKAsQAIgtAYhHg");
	this.shape_63.setTransform(4.5,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51,p:{y:-92.9}}]},1).to({state:[{t:this.shape_52,p:{y:-87.1}}]},1).to({state:[{t:this.shape_52,p:{y:-81.3}}]},1).to({state:[{t:this.shape_53,p:{y:-75.4}}]},1).to({state:[{t:this.shape_53,p:{y:-69.6}}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59,p:{y:-34.5}}]},1).to({state:[{t:this.shape_59,p:{y:-28.6}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_51,p:{y:-22.8}}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_10のコピー5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#794504").s().p("AiWFgQANgsATgzIAKgaIAVg5IAehbIAWhKIAJgpIAGggIAIgxIAGghQgMhCAYhfQAOgqAsg2QAwhEArAEQAHABAHAEQAbA5gbBOQgRAngDAVQgQBegcA3QgVAsgTAvIgcBJIgCAEIgdBUIgZBIQgPAqgYAnIgLAOIhBBNQgmAugKAsQAIgtAYhHg");
	this.shape.setTransform(4.5,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#794504").s().p("AiwFWIArhaIAMgZIAYg2IAmhZIAbhIIANgpIAIgfIALgwIAIghQgChBAiheQAQgoAugzQAzhAAqAGQAIABAGAFQAaA5gfBNQgVAsgFAUQgaBZghA1QgZAqgXAuIgiBGIgCADIgjBRIgeBGQgUAqgbAkIgMANIhJBGQgqAogQAoQAPgpAdhDg");
	this.shape_1.setTransform(0.7,1.4,1,1,0,0,0,0,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#794504").s().p("AjJFLIA0hVIAPgXIAcgzIAthWIAihFIASgnIAJgeIAQgvIALgfQAGhBArhaQASgoAvgvQA1g9ApAIQAHABAIAFQAWA7ghBLIghBEQgjBTglAyQgdAogaAsIgpBCIgCAEQgXAmgTAnIglBCQgYAqgeAhIgOALIhRA9QgtAggVAjQAVglAkg7g");
	this.shape_2.setTransform(-3.1,-0.6,1,1,0,0,0,-0.1,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#794504").s().p("AjkE8IA+hOIASgVQARgXAPgYIA2hSQAZgkAQgdIAVgkIALgeIAUgtIAOgeQAQg+AxhXQAVglAwgtQA2g5ApAJQAIACAGAFQAVA8glBKIgoBGQgsBLgoAwQggAmgeAnIgwBBIgDADIgxBJIgqA9QgcApgjAdIgPAJQgYARhBAiQguAXgaAeIBDhTg");
	this.shape_3.setTransform(-6.9,-3.3,1,1,0,0,0,-0.3,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#794504").s().p("Aj+EsIBHhFIAUgTQASgVARgXIA/hMIAwg9IAVghIAQgcIAYgrIAPgdQAZg7A4hSQAXgkAxgqQA3g2ApALQAHACAHAGQARA7gnBKQgiA3gNARQgzBDgsAsQgjAlghAkIg3A9IgDACIg4BDIgwA5QghAnglAYIgQAIQgaAPhFAXQgsAPgdAXIBIhDg");
	this.shape_4.setTransform(-10.5,-6.4,1,1,0,0,0,-0.7,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#794504").s().p("AkVEZIBNg9IAWgQQATgTATgVQAngqAegeIA1g4IAZgiIARgYIAcgoIARgcQAig3A/hMQAYgiAygnQA3gzApANQAHACAGAGQAQA9gqBHQgqA6gOAPQg5A6gvApIhLBDIg8A4IgDACIg+A9IgzA1QgkAlgoAVIgRAGQgcAMhHAPQgrAJgdARQAfgWAsghg");
	this.shape_5.setTransform(-13.3,-9.5,1,1,0,0,0,-1,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#794504").s().p("AkpEHIBSg2IAXgPQATgQAUgVQApgoAggcIA5g1IAbgfIAVgXIAegmIATgZQArgyBEhGQAaggAyglQA4gvAoAOQAHACAGAGQANA+gtBFQgwA8gQANQg9AygzAkIhQA9Ig/AzIgDACIhCA5Ig2AxQgnAkgqASIgRAEQgdALhIAIQgnADgeAMQAggRArgbg");
	this.shape_6.setTransform(-15.5,-12.4,1,1,0,0,0,-1.3,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_9のコピー13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7E6308").p("AWHmBIAFAXQAHAxgCA6QgEBCgWA+QgeBRhMA0IgMAGQhEAlgOgxQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8QAMgMAPgMQDOiwBWksQALgsABgpQABgjgEgiIgCgVIgHgjQgKgsgNgqIgWhNQgbhrAThsIk3BJQBBBdAoBuQANAlAHAng");
	this.shape.setTransform(-7.5,-118.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,17.5,7.6,219.9).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAxBEglIAMgGQBMg0AehRQAWg+AEhCQACg6gHgxIgFgXQgHgngNglQgohuhBhdIE3hJQgTBsAbBrIAWBNQANAqAKAsIAHAjIACAVQAEAigBAjQgBApgLAsQhWEsjOCwQgPAMgMAMQiQC8i7CBIgRALQoxFDqKAGIgZAAQiBAAiAgNg");
	this.shape_1.setTransform(-7.5,-118.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7E6308").p("AUWp9QA/BeAmBuQAMAmAHAmIAEAYQAGAxgCA6QgGBBgWA/QggBQhNAyIgMAGQhFAkgNgyQhQglguhgQgggzgegyQgmg6gygoQg0grg+geQh0g7iBgsQh7g1hmhdQikiriLiIQichwj7BDQi2A9hxCUQh+CEiFB+QidB4jCAvQguATgsAXIgjAUQjkCPggEPQgYB1AoBfQBaDxEdCQQBKAxBRAoQEOCHFBAoQCMARCOACQKKAFI3k5IARgLQC+h9CSi6IAcgYQDSisBakrQANgrABgpQACgkgDghIgDgVIgGgjQgJgsgMgrIgUhNQgbhrAWhsg");
	this.shape_2.setTransform(-7.3,-110.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.4,9.2,7.4,211.6).s().p("AjyPwQiNgCiNgRQlAgokPiHQhRgohKgxQkdiQhajxQgohfAZh1QAfkPDliPIAigUQAtgXAtgTQDCgvCdh4QCGh+B9iEQByiUC1g9QD7hDCcBwQCLCICkCrQBmBdB7A1QCBAsB0A7QA9AeA1ArQAzAoAmA6IA9BlQAtBgBRAlQANAyBFgkIALgGQBOgyAfhQQAXg/AFhBQADg6gGgxIgEgYQgHgmgMgmQgmhug/heIE4hEQgVBsAZBrIAUBNQANArAJAsIAGAjIADAVQADAhgCAkQgBApgNArQhaErjSCsIgcAYQiSC6i+B9IgRALQotE0p9AAIgXAAg");
	this.shape_3.setTransform(-7.3,-110.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7E6308").p("AUhpiQA9BeAkBwQAMAmAGAnIADAXQAGAxgEA6QgHBBgXA+QgiBPhOAyIgLAGQhGAjgNgzQhPgogshfQgegzgdgzQgmg7gxgpQg0gsg9geQhzg9iAgvQh5g3hlhfQihiuiIiKQibhzj7A+Qi3A6h0CSQiACCiHB8QihB2jCAqQguASgsAXIgjATQjoCKgkEPQgZB1AlBgQBWDyEaCVQBJAyBRAqQELCLFAAuQCMAUCPAEQKJARI7kvIASgLQDAh6CWi3IAcgXQDVipBgkoQANgsACgoQADgjgDgjIgCgVIgGgjQgIgsgMgrIgThNQgXhrAXhsg");
	this.shape_4.setTransform(-7,-102);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.1,0.9,7.1,203.4).s().p("AkDPvQiPgEiMgUQlAgukLiLQhRgqhJgyQkaiVhWjyQglhgAZh1QAkkPDoiKIAjgTQAsgXAugSQDCgqChh2QCHh8CAiCQB0iSC3g6QD7g+CbBzQCICKChCuQBlBfB5A3QCAAvBzA9QA9AeA0AsQAxApAmA7IA7BmQAsBfBPAoQANAzBGgjIALgGQBOgyAihPQAXg+AHhBQAEg6gGgxIgDgXQgGgngMgmQgkhwg9heIE5g+QgXBsAXBrIATBNQAMArAIAsIAGAjIACAVQADAjgDAjQgCAogNAsQhgEojVCpIgcAXQiWC3jAB6IgSALQoeEfpjAAIhDgBg");
	this.shape_5.setTransform(-7,-102);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#7E6308").p("AUrpHQA8BfAiBxQALAlAGAnIADAYQAEAxgFA6QgHBBgZA+QgjBNhPAxIgLAGQhHAigMgzQhOgpgqhgQgeg1gcgyQgkg8gxgqQgzgtg8gfQhzg/h+gxQh5g6hjhgQidixiHiNQiYh2j9A6Qi3A3h3CQQiCB/iKB6QiiBzjDAnQgvASgsAVIgkATQjqCGgoEOQgcB0AkBhQBRD0EYCZQBJA0BPArQEJCQE/A0QCLAWCPAHQKJAcJBklIARgKQDDh3CZi0IAcgXQDYilBlkmQAOgsADgoQADgkgCgiIgCgVIgFgjQgHgsgLgrIgShOQgVhsAZhrg");
	this.shape_6.setTransform(-6.9,-93.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7,-7.3,7,195.1).s().p("AkVPuQiPgHiLgWQk/g0kJiQQhPgrhJg0QkYiZhRj0QgkhhAch0QAokODqiGIAkgTQAsgVAvgSQDDgnCihzQCKh6CCh/QB3iQC3g3QD9g6CYB2QCHCNCdCxQBjBgB5A6QB+AxBzA/QA8AfAzAtQAxAqAkA8IA6BnQAqBgBOApQAMAzBHgiIALgGQBPgxAjhNQAZg+AHhBQAFg6gEgxIgDgYQgGgngLglQgihxg8hfIE7g5QgZBrAVBsIASBOQALArAHAsIAFAjIACAVQACAigDAkQgDAogOAsQhlEmjYClIgcAXQiZC0jDB3IgRAKQoOELpKAAQg5AAg5gCg");
	this.shape_7.setTransform(-6.9,-93.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#7E6308").p("AOqj4Qgzgvg8ggQhxhBh+gzQh3g8hihiQiaiziEiQQiWh4j9A1Qi5A0h5CNQiFB+iLB3QikBwjEAjQgvASgtAUIgkASQjtCCgtENQgeBzAjBiQBMD2EVCeQBIA1BPAtQEGCUE+A5QCLAZCPAJQKIApJGkbIASgKQDEhzCciyIAdgWQDbihBqklQAPgrAEgoQAEgkgCgiIgBgVIgFgjQgGgsgKgsIgRhOQgUhsAchrIk8AzQA6BhAgBxQAKAmAFAnIADAXQADAygFA6QgJBAgaA+QglBMhPAwIgMAFQhGAhgLgzQhOgrgphgQgdg1gagzQgkg9gvgqg");
	this.shape_8.setTransform(-6.7,-85.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.8,-15.6,6.8,186.7).s().p("AknPrQiPgJiLgZQk+g5kGiUQhPgthIg1QkViehMj2QgjhiAehzQAtkNDtiCIAkgSQAtgUAvgSQDEgjCkhwQCLh3CFh+QB5iNC5g0QD9g1CWB4QCECQCaCzQBiBiB3A8QB+AzBxBBQA8AgAzAvQAvAqAkA9IA3BoQApBgBOArQALAzBGghIAMgFQBPgwAlhMQAag+AJhAQAFg6gDgyIgDgXQgFgngKgmQgghxg6hhIE8gzQgcBrAUBsIARBOQAKAsAGAsIAFAjIABAVQACAigEAkQgEAogPArQhqEljbChIgdAWQicCyjEBzIgSAKQn9D3ovAAQhRAAhRgFg");
	this.shape_9.setTransform(-6.7,-85.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#7E6308").p("AU/oTQA5BiAeByQAJAlAEAoIACAXQADAygHA6QgKBAgbA7QgmBOhQAuIgMAGQhHAfgKgzQhNgtgnhhQgcg1gag0Qgig9gvgrQgygwg7ghQhwhCh8g2Qh3g+hghkQiXi2iBiRQiUh8j+AxQi6Axh8CLQiHB7iNB0QimBtjFAhQgvAQgtATIgkASQjvB+gyEMQggBzAhBiQBID2ESCkQBHA2BOAuQEDCaE9A+QCLAcCOALQKIA0JKkQIATgKQDGhvCfivIAdgWQDeidBwklQAPgpAEgoQAFgkgBgiIgBgVIgEgjQgGgsgJgsIgPhOQgShtAdhqg");
	this.shape_10.setTransform(-6.7,-77);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.8,-24,6.8,178.3).s().p("Ak5PoQiOgLiLgcQk9g+kDiaQhOguhHg2QkSikhIj2QghhiAghzQAykMDvh+IAkgSQAtgTAvgQQDFghCmhtQCNh0CHh7QB8iLC6gxQD+gxCUB8QCBCRCXC2QBgBkB3A+QB8A2BwBCQA7AhAyAwQAvArAiA9QAaA0AcA1QAnBhBNAtQAKAzBHgfIAMgGQBQguAmhOQAbg7AKhAQAHg6gDgyIgCgXQgEgogJglQgehyg5hiIE8gtQgdBqASBtIAPBOQAJAsAGAsIAEAjIABAVQABAigFAkQgEAogPApQhwEljeCdIgdAWQifCvjGBvIgTAKQnsDloXAAQhnAAhogJg");
	this.shape_11.setTransform(-6.7,-77);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#7E6308").p("AVJn4QA3BiAbByQAJAnAEAnIABAXQADAzgJA5QgLBAgcA6QgnBOhRAsIgMAGQhIAdgJgzQhNgtgkhkQgcg0gYg0Qgig+gugsQgwgwg7giQhvhFh8g4Qh1hAhehlQiUi5h+iUQiSh+j/AsQi7Auh+CJQiJB4iQByQioBqjFAdQgvAPguATIgkARQjxB5g3EOQgiBwAfBjQBED3EPCpQBFA3BOAwQEBCeE8BEQCKAeCOAOQKHA/JPkGIASgJQDJhsCiisIAdgVQDhiZB0kjQARgqAFgnQAEgjAAgiIAAgVIgDgkQgFgtgJgrIgNhPQgRhsAghqg");
	this.shape_12.setTransform(-6.7,-68.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.8,-32.4,6.8,169.9).s().p("AlKPlQiOgOiKgeQk8hEkBieQhOgwhFg3QkPiphEj3QgfhjAihwQA3kODxh5IAkgRQAugTAvgPQDFgdCohqQCQhyCJh4QB+iJC7guQD/gsCSB+QB+CUCUC5QBeBlB1BAQB8A4BvBFQA7AiAwAwQAuAsAiA+QAYA0AcA0QAkBkBNAtQAJAzBIgdIAMgGQBRgsAnhOQAcg6ALhAQAJg5gDgzIgBgXQgEgngJgnQgbhyg3hiIE9goQggBqARBsIANBPQAJArAFAtIADAkIAAAVQAAAigEAjQgFAngRAqQh0EjjhCZIgdAVQiiCsjJBsIgSAJQndDToAAAQh8AAh9gMg");
	this.shape_13.setTransform(-6.7,-68.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#7E6308").p("AVRneQA2BkAZByQAIAmADAoIABAXQABAygJA5QgMA+gdA8QgpBNhRArIgMAFQhJAdgIg0QhMgvgjhkQgag0gYg1Qggg+gtgtQgwgxg6gjQhuhHh6g6Qh1hChchnQiQi8h8iWQiQiAkAAnQi7AqiBCHQiLB2iRBwQiqBnjGAZQgvAOguASIglAQQjyB2g9EMQgkBwAeBjQA/D5EMCtQBFA5BMAxQD+CiE7BKQCJAgCOARQKFBLJUj8IATgJQDKhoClipIAegVQDkiVB5khQARgqAGgmQAGgkAAgiIAAgUIgCgkIgNhYIgMhPQgOhtAhhpg");
	this.shape_14.setTransform(-6.7,-60.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.8,-40.9,6.8,161.5).s().p("AlcPhQiOgRiJggQk7hKj+iiQhMgxhFg5QkMitg/j5QgehjAkhwQA9kMDyh2IAlgQQAugSAvgOQDGgZCqhnQCRhwCLh2QCBiHC7gqQEAgnCQCAQB8CWCQC8QBcBnB1BCQB6A6BuBHQA6AjAwAxQAtAtAgA+IAyBpQAjBkBMAvQAIA0BJgdIAMgFQBRgrAphNQAdg8AMg+QAJg5gBgyIgBgXQgDgogIgmQgZhyg2hkIE+giQghBpAOBtIAMBPIANBYIACAkIAAAUQAAAigGAkQgGAmgRAqQh5EhjkCVIgeAVQilCpjKBoIgTAJQnLDCnoAAQiSAAiUgRg");
	this.shape_15.setTransform(-6.7,-60.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#7E6308").p("ACWuLQiPiDj/AjQi8AniDCEQiNB0iUBtQirBkjGAVQgwAOguARIglAQQj1BxhBELQgmBvAcBkQA6D6EKCyQBDA6BMAyQD7CmE5BQQCJAjCNATQKEBXJZjyIASgIQDMhlCpimIAegUQDliRCAkfQARgqAHgoQAGghABgiIAAgVIgBgkIgLhYIgLhPQgMhuAjhoIk+AdQAzBkAYBzQAHAnACAnIABAXQAAAzgKA4QgNA+gfA8QgqBMhSApIgMAFQhJAbgHgzQhLgxghhlIgwhpQggg/gsguQgvgxg5glQhthJh5g8Qh0hEhahpQiNi9h5iZg");
	this.shape_16.setTransform(-6.6,-51.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.8,-49.4,6.8,153).s().p("AluPcQiNgTiJgjQk5hQj7imQhMgyhDg6QkKiyg6j6QgchkAmhvQBBkLD1hxIAlgQQAugRAwgOQDGgVCrhkQCUhtCNh0QCDiEC8gnQD/gjCPCDQB5CZCNC9QBaBpB0BEQB5A8BtBJQA5AlAvAxQAsAuAgA/IAwBpQAhBlBLAxQAHAzBJgbIAMgFQBSgpAqhMQAfg8ANg+QAKg4AAgzIgBgXQgCgngHgnQgYhzgzhkIE+gdQgjBoAMBuIALBPIALBYIABAkIAAAVQgBAigGAhQgHAogRAqQiAEfjlCRIgeAUQipCmjMBlIgSAIQm6CynQAAQioAAirgXg");
	this.shape_17.setTransform(-6.7,-51.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#7E6308").p("AJtl7QhyhGhZhqQiJjBh3iaQiNiGj/AfQi9AjiFCCQiPBxiWBqQitBhjGATQgwAMgvARIglAPQj4BthFEJQgnBuAZBlQA2D7EGC3QBDA6BLA0QD4CrE3BVQCJAmCNAVQKCBiJdjmIASgIQDPhiCqiiIAfgUQDoiNCEkdQATgpAHgoQAHgjABggIABgVIgBgkQgDgtgGgrIgJhQQgLhtAlhoIk/AXQAyBlAWB0QAGAmACAoIAAAXQAAAygMA5QgOA+gfA6QgsBLhTApIgMAEQhKAbgGg0QhKgygfhmQgYg2gWg0Qgfg/grgvQgugzg5glQhrhLh4g+g");
	this.shape_18.setTransform(-6.3,-43.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.6,-57.8,6.6,144.5).s().p("AmDPXQiNgViJgmQk2hVj5irQhLg0hDg6QkFi3g3j7QgZhlAohuQBFkJD3htIAlgPQAvgRAwgMQDHgTCthhQCVhqCPhxQCGiCC8gjQD/gfCNCGQB3CaCKDBQBYBqByBGQB5A+BrBLQA4AlAvAzQArAvAeA/QAWA0AYA2QAgBmBKAyQAGA0BKgbIALgEQBUgpArhLQAfg6AOg+QAMg5ABgyIgBgXQgCgogGgmQgWh0gxhlIE+gXQgkBoAKBtIAJBQQAGArADAtIACAkIgCAVQgBAggGAjQgIAogSApQiEEdjpCNIgeAUQirCijOBiIgTAIQmpChm6AAQi8AAjAgdg");
	this.shape_19.setTransform(-6.5,-43.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#7E6308").p("AJwlvQhxhIhWhsQiGjCh0idQiLiIkAAaQi9AgiHB/QiSBviXBnQivBejHAPQgwAMgvAPIglAPQj5BohKEJQgqBvAYBjQAxD8EDC7QBCA8BKA1QD0CwE3BaQCHAoCNAYQKBBtJgjbIATgIQDQhdCtigIAfgTQDriJCJkaQATgpAIgoQAIgjACgiIABgTIAAgkQgCgtgGgsIgIhPQgIhuAmhnIk/ARQAwBmAUB0QAGAnAAAnIABAYQgCAygMA3QgQA/ggA6QgtBLhUAmIgMAFQhKAZgFg0QhKg0gdhmQgYg3gUg0QgdhAgrgvQgtgzg4gnQhqhNh3hAg");
	this.shape_20.setTransform(-6.1,-34.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.4,-66.4,6.4,136).s().p("AmYPRQiNgYiHgoQk2haj1iwQhKg1hBg8QkDi7gyj8QgYhjAqhvQBKkJD5hoIAmgPQAvgPAwgMQDGgPCwheQCXhnCRhvQCHh/C+ggQD/gaCLCIQB0CdCGDCQBWBsBxBIQB4BABqBNQA3AnAuAzQAqAvAdBAQAVA0AYA3QAdBmBJA0QAGA0BKgZIAMgFQBTgmAthLQAhg6APg/QAMg3ACgyIAAgYQgBgngGgnQgTh0gwhmIE/gRQgmBnAIBuIAIBPQAFAsACAtIAAAkIgBATQgCAigHAjQgIAogTApQiJEajrCJIgfATQiuCgjQBdIgTAIQmWCSmmAAQjQAAjVgkg");
	this.shape_21.setTransform(-6.3,-34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#7E6308").p("AGvoaQiDjFhxifQiIiKkAAVQi+AdiKB9QiTBsiZBlQixBajHALQgwAMgvAOIgmAOQj7BkhOEHQgsBvAWBjQAuD9D/DAQBAA9BJA2QDyC0E0BgQCHAqCMAbQJ/B5JkjRIATgIQDShaCwicQAPgLAQgIQDtiFCPkXQATgpAJgnQAIgjADgjIABgUIABgiQgCgtgEgsIgHhPQgGhuAohnIk/AMQAuBnARB0QAGAnAAAnIgBAYQgCAxgNA3QgRA/ghA6QgvBJhUAmIgMAEQhKAXgFg0QhIg0gchnQgWg4gUg0QgchAgqgwQgtg0g2goQjRicjSisg");
	this.shape_22.setTransform(-6,-26.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.2,-74.9,6.2,127.4).s().p("AmtPLQiMgbiHgqQk0hgjyi0QhJg2hAg9Qj/jAguj9QgWhjAshvQBOkHD7hkIAmgOQAvgOAwgMQDHgLCxhaQCZhlCThsQCKh9C+gdQEAgVCICKQBxCfCDDFQDSCsDRCcQA2AoAtA0QAqAwAcBAQAUA0AWA4QAcBnBIA0QAFA0BKgXIAMgEQBUgmAvhJQAhg6ARg/QANg3ACgxIABgYQAAgngGgnQgRh0guhnIE/gMQgoBnAGBuIAHBPQAEAsACAtIgBAiIgBAUQgDAjgIAjQgJAngTApQiPEXjtCFQgQAIgPALQiwCcjSBaIgTAIQmECEmPAAQjlAAjrgsg");
	this.shape_23.setTransform(-6.1,-26.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#7E6308").p("AG1oSQh/jHhuihQiGiNkAARQi/AZiMB7QiVBpibBiQiyBYjHAHQgwALgwANIgmANQj8BghUEGQgtBtAUBkQAoD+D8DEQBAA/BIA3QDuC4EzBmQCGAsCMAdQJ8CEJojFIATgHQDThWCziaIAggSQDwiACSkWQAVgoAJgnQAJgjADgiIACgVIABgkQAAgrgEgsIgFhPQgFhuAqhmIk/AGQAsBoAQB0QAEAnAAAnIgBAYQgEAwgOA4QgSA/giA5QgvBJhVAjIgNAEQhLAWgDg0QhHg1gahnQgWg4gTg3Qgag/gpgxQgsg1g2goQjOihjPivg");
	this.shape_24.setTransform(-5.9,-17.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.1,-83.5,6.1,118.8).s().p("AnBPDQiMgdiGgsQkzhmjui4QhIg3hAg/Qj8jEgoj+QgUhkAthtQBUkGD8hgIAmgNQAwgNAwgLQDHgHCyhYQCbhiCVhpQCMh7C/gZQEAgRCGCNQBuChB/DHQDPCvDOChQA2AoAsA1QApAxAaA/QATA3AWA4QAaBnBHA1QADA0BLgWIANgEQBVgjAvhJQAig5ASg/QAOg4AEgwIABgYQAAgngEgnQgQh0gshoIE/gGQgqBmAFBuIAFBPQAEAsAAArIgBAkIgCAVQgDAigJAjQgJAngVAoQiSEWjwCAIggASQizCajTBWIgTAHQlxB2l5AAQj6AAkAg1g");
	this.shape_25.setTransform(-6,-17.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#7E6308").p("AG1oSQh/jHhuihQiGiNkAARQi/AZiMB7QiVBpibBiQiyBYjHAHQgwALgwANIgmANQj8BghUEGQgtBtAUBkQAoD+D8DEQBAA/BIA3QDuC4EzBmQCGAsCMAdQJ8CEJojFIATgIQDThVCziaIAggSQDwiACSkWQAVgoAJgnQAJgjADgiIACgVIABgkQAAgrgEgsIgFhPQgFhuAqhmIk/AGQAsBoAQB0QAEAnAAAnIgBAYQgEAwgOA4QgSA/giA5QgvBJhVAjIgNAEQhLAWgDg0QhHg1gahnQgWg4gTg3Qgag/gpgxQgsg1g2goQjOihjPivg");
	this.shape_26.setTransform(-5.9,-17.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.1,-83.5,6.1,118.8).s().p("AnBPDQiMgdiGgsQkzhmjui4QhIg3hAg/Qj8jEgoj+QgUhkAthtQBUkGD8hgIAmgNQAwgNAwgLQDHgHCyhYQCbhiCVhpQCMh7C/gZQEAgRCGCNQBuChB/DHQDPCvDOChQA2AoAsA1QApAxAaA/QATA3AWA4QAaBnBHA1QADA0BLgWIANgEQBVgjAvhJQAig5ASg/QAOg4AEgwIABgYQAAgngEgnQgQh0gshoIE/gGQgqBmAFBuIAFBPQAEAsAAArIgBAkIgCAVQgDAigJAjQgJAngVAoQiSEWjwCAIggASQizCajTBVIgTAIQlxB2l5AAQj6AAkAg1g");
	this.shape_27.setTransform(-6,-17.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#7E6308").p("AJtl4QhxhHhYhrQiJjAh2icQiMiGj/AeQi9AiiGCCQiQBwiWBpQiuBgjGASQgwAMgvAQIglAPQj4BshGEJQgpBuAaBlQA1D7EFC4QBCA7BLA0QD3CtE3BWQCIAmCNAWQKDBlJdjjIATgJQDOhgCsiiIAegUQDqiLCFkcQATgpAHgoQAHgjACghIAAgVIAAgjQgDgtgGgsIgJhPQgKhuAmhnIk/AVQAxBlAVB0QAGAnABAnIABAYQgBAxgMA3QgOBAggA7QgrBKhUAoIgMAFQhKAZgGgzQhJgygfhmQgZg3gVg0Qgeg/grgvQgugzg5glQhqhMh5g+g");
	this.shape_28.setTransform(-6.3,-12.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.5,-88.3,6.5,114.1).s().p("AmJPVQiNgWiIgmQk3hWj3itQhLg0hCg7QkFi4g1j7QgahlAphuQBGkJD4hsIAlgPQAvgQAwgMQDGgSCuhgQCWhpCQhwQCGiCC9giQD/geCMCGQB2CcCJDAQBYBrBxBHQB5A+BqBMQA5AlAuAzQArAvAeA/QAVA0AZA3QAfBmBJAyQAGAzBKgZIAMgFQBUgoArhKQAgg7AOhAQAMg3ABgxIgBgYQgBgngGgnQgVh0gxhlIE/gVQgmBnAKBuIAJBPQAGAsADAtIAAAjIAAAVQgCAhgHAjQgHAogTApQiFEcjqCLIgeAUQisCijOBgIgTAJQmjCdm1AAQjCAAjGgfg");
	this.shape_29.setTransform(-6.4,-12.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#7E6308").p("AJgmaQh1hBhdhnQiSi6h+iVQiQh/kAAqQi7Arh/CIQiKB3iRBxQipBpjFAbQgvAOguATIglAQQjyB4g5ENQgjBvAeBkQBBD4EOCrQBFA4BNAwQD/CgE7BHQCKAgCOAPQKGBFJSkAIASgJQDKhrCjiqIAegVQDiiXB3kiQARgqAFgmQAGgjAAgjIAAgVIgDgjQgFgtgIgsIgNhOQgPhtAghpIk9AkQA2BjAaBzQAJAmADAnIACAYQABAygJA5QgMBAgcA6QgoBNhRAsIgMAFQhIAegJg0QhMgugkhkIgzhpQggg+gugsQgxgxg6gjQhuhFh7g5g");
	this.shape_30.setTransform(-6.6,-7.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.7,-93.2,6.7,109.2).s().p("AlUPjQiOgPiKggQk7hHj/igQhNgwhFg4QkOirhBj4QgehkAjhvQA5kNDyh4IAlgQQAugTAvgOQDFgbCphpQCRhxCKh3QB/iIC7grQEAgqCQB/QB+CVCSC6QBdBnB1BBQB7A5BuBFQA6AjAxAxQAuAsAgA+IAzBpQAkBkBMAuQAJA0BIgeIAMgFQBRgsAohNQAcg6AMhAQAJg5gBgyIgCgYQgDgngJgmQgahzg2hjIE9gkQggBpAPBtIANBOQAIAsAFAtIADAjIAAAVQAAAjgGAjQgFAmgRAqQh3EijiCXIgeAVQijCqjKBrIgSAJQnUDKn0AAQiHAAiJgPg");
	this.shape_31.setTransform(-6.6,-7.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#7E6308").p("ABSudQiXh3j9A2Qi5A1h4CNQiFB+iKB4QikBwjEAlQguARgtAVIgkASQjsCDgsENQgdB0AiBhQBOD2EVCdQBIA0BPAtQEICUE9A3QCMAYCOAJQKJAmJEkeIASgKQDEhzCbizIAdgWQDaiiBpklQAPgsADgnQAEgkgCgjIgBgUIgEgkQgHgsgLgrIgQhOQgUhsAbhrIk7AzQA6BhAgBxQAKAnAFAmIADAYQAEAygGA5QgJBBgZA9QgkBNhPAwIgMAGQhHAggLgyQhOgsgphfIg4hoQgkg8gvgrQgzgtg8ghQhxhAh+gzQh4g7hihiQibiziEiPg");
	this.shape_32.setTransform(-6.8,-2.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],6.9,-98.3,6.9,104).s().p("AkjPsQiOgJiMgYQk9g3kIiUQhPgthIg0QkVidhOj2QgihhAdh0QAskNDsiDIAkgSQAtgVAugRQDEglCkhwQCKh4CFh+QB4iNC5g1QD9g2CXB3QCECPCbCzQBiBiB4A7QB+AzBxBAQA8AhAzAtQAvArAkA8IA4BoQApBfBOAsQALAyBHggIAMgGQBPgwAkhNQAZg9AJhBQAGg5gEgyIgDgYQgFgmgKgnQgghxg6hhIE7gzQgbBrAUBsIAQBOQALArAHAsIAEAkIABAUQACAjgEAkQgDAngPAsQhpEljaCiIgdAWQibCzjEBzIgSAKQoAD8o0AAQhMAAhNgEg");
	this.shape_33.setTransform(-6.8,-2.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#7E6308").p("AI0njQh7g2hmhcQikiriLiJQichwj6BDQi2A9hyCUQh+CEiEB+QieB4jCAuQguAUgsAXIgjAUQjkCOggEPQgYB1AoBgQBaDxEdCPQBJAxBSApQEOCHFAAoQCNARCOACQKKAGI2k6IARgKQC/h+CSi5IAbgYQDSisBbkrQANgrABgoQACgkgDgiIgCgVIgGgjIgWhXIgUhNQgahqAWhtIk4BCQA/BeAlBwQAMAmAHAmIAEAYQAGAxgDA6QgFBBgWA/QggBQhNAyIgMAGQhFAkgOgyQhQglgthgQgggzgegyQgmg7gygnQg0gsg+gdQh0g7iBgsg");
	this.shape_34.setTransform(-7.3,2.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.4,-103.7,7.4,98.6).s().p("AjyPwQiOgCiMgRQlBgokOiHQhSgphJgxQkdiPhajxQgohgAZh1QAfkPDliOIAigUQAtgXAtgUQDCguCeh4QCFh+B9iEQByiUC2g9QD6hDCcBwQCLCJCkCrQBmBcB7A2QCBAsB0A7QA+AdA0AsQAyAnAnA7QAcAyAhAzQAtBgBQAlQAOAyBFgkIALgGQBOgyAfhQQAXg/AFhBQADg6gGgxIgEgYQgHgmgMgmQglhwhAheIE5hCQgWBtAZBqIAUBNIAXBXIAGAjIACAVQADAigCAkQgBAogNArQhbErjSCsIgbAYQiTC5i+B+IgRAKQorE0p9AAIgYAAg");
	this.shape_35.setTransform(-7.3,2.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#7E6308").p("AI0njQh7g2hmhcQikiriLiJQichwj6BDQi2A9hyCUQh+CEiEB+QieB4jCAuQguAUgsAXIgjAUQjkCOggEPQgYB1AoBgQBaDxEdCPQBJAxBSApQEOCHFAAoQCNARCOACQKKAGI2k6IARgKQC/h+CSi5IAbgYQDSisBbkrQAMgrACgoQACgkgDgiIgCgVIgGgjIgWhXIgUhNQgahqAWhtIk4BCQA/BeAlBwQAMAmAHAmIAEAYQAGAxgDA6QgFBBgWA/QggBQhNAyIgMAGQhFAkgOgyQhQglgthgQgggzgegyQgmg7gygnQg1gsg9gdQh0g7iBgsg");
	this.shape_36.setTransform(-7.3,2.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.4,-103.7,7.4,98.6).s().p("AjyPwQiOgCiMgRQlBgokOiHQhSgphJgxQkdiPhajxQgohgAZh1QAfkPDliOIAigUQAtgXAtgUQDCguCeh4QCFh+B9iEQByiUC2g9QD6hDCcBwQCLCJCkCrQBmBcB7A2QCBAsB0A7QA9AdA1AsQAyAnAnA7QAcAyAhAzQAtBgBQAlQAOAyBFgkIALgGQBOgyAfhQQAXg/AFhBQADg6gGgxIgEgYQgIgmgLgmQglhwhAheIE5hCQgWBtAZBqIAUBNIAXBXIAGAjIACAVQADAigCAkQgCAogMArQhbErjSCsIgbAYQiTC5i+B+IgRAKQorE0p9AAIgYAAg");
	this.shape_37.setTransform(-7.3,2.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#7E6308").p("AI0njQh7g2hmhcQikiriLiJQichwj6BDQi2A9hyCUQh+CEiEB+QieB4jCAuQguAUgsAXIgjAUQjkCOggEPQgYB1AoBgQBaDxEdCPQBJAxBSApQEOCHFAAoQCNARCOACQKKAGI1k6IASgKQC/h+CSi5IAbgYQDSisBbkrQAMgrACgoQACgkgDgiIgCgVIgGgjIgWhXIgUhNQgbhqAXhtIk4BCQA/BeAlBwQAMAmAHAmIAEAYQAGAxgDA6QgFBBgWA/QghBQhMAyIgMAGQhFAkgOgyQhQglgthgQgggzgegyQgmg7gygnQg1gsg9gdQh0g7iBgsg");
	this.shape_38.setTransform(-7.3,2.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.4,-103.7,7.4,98.6).s().p("AjyPwQiOgCiMgRQlBgokOiHQhSgphJgxQkdiPhajxQgohgAZh1QAfkPDliOIAigUQAtgXAtgUQDCguCeh4QCFh+B9iEQByiUC2g9QD6hDCcBwQCLCJCkCrQBmBcB7A2QCBAsB0A7QA9AdA1AsQAyAnAnA7QAcAyAhAzQAtBgBQAlQANAyBGgkIALgGQBNgyAghQQAXg/AFhBQADg6gGgxIgEgYQgIgmgLgmQglhwhAheIE5hCQgWBtAZBqIAUBNIAXBXIAGAjIACAVQADAigCAkQgCAogMArQhbErjSCsIgbAYQiTC5i+B+IgRAKQorE0p9AAIgYAAg");
	this.shape_39.setTransform(-7.3,2.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#7E6308").p("AI0njQh7g2hmhcQikiriLiJQichwj6BDQi2A9hyCUQh+CEiEB+QieB4jCAuQguAUgsAXIgjAUQjkCOggEPQgYB1AoBgQBaDxEdCPQBJAxBSApQEOCHFAAoQCMARCPACQKKAGI1k6IASgKQC+h+CSi5IAcgYQDSisBbkrQAMgrABgoQADgkgEgiIgCgVIgGgjIgWhXIgUhNQgahqAXhtIk5BCQA/BeAlBwQAMAmAIAmIAEAYQAGAxgDA6QgFBBgXA/QghBQhMAyIgLAGQhGAkgNgyQhQglguhgQgggzgdgyQgng7gxgnQg1gsg9gdQh1g7iAgsg");
	this.shape_40.setTransform(-7.2,2.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.3,-103.7,7.3,98.6).s().p("AjyPwQiPgCiMgRQlAgokOiHQhSgphJgxQkdiPhajxQgohgAYh1QAgkPDkiOIAjgUQAsgXAugUQDCguCeh4QCEh+B+iEQByiUC2g9QD6hDCcBwQCLCJCkCrQBmBcB7A2QCAAsB1A7QA9AdA1AsQAxAnAnA7QAdAyAgAzQAuBgBQAlQANAyBGgkIALgGQBMgyAhhQQAXg/AFhBQADg6gGgxIgEgYQgIgmgMgmQglhwg/heIE5hCQgXBtAaBqIAUBNIAWBXIAGAjIACAVQAEAigDAkQgBAogMArQhbErjSCsIgcAYQiSC5i+B+IgSAKQoqE0p9AAIgYAAg");
	this.shape_41.setTransform(-7.2,2.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#7E6308").p("AI0njQh7g2hmhcQikiriLiJQichwj6BDQi2A9hyCUQh+CEiEB+QieB4jCAuQguAUgsAXIgjAUQjkCOggEPQgYB1AoBgQBaDxEdCPQBJAxBSApQEOCHFAAoQCMARCPACQKKAGI1k6IASgKQC+h+CSi5IAcgYQDSisBbkrQAMgrABgoQADgkgEgiIgCgVIgGgjQgJgsgNgrIgUhNQgahqAXhtIk5BCQA/BeAlBwQAMAmAIAmIAEAYQAGAxgDA6QgFBBgXA/QggBQhNAyIgLAGQhGAkgNgyQhQglguhgIg9hlQgng7gxgnQg1gsg9gdQh1g7iAgsg");
	this.shape_42.setTransform(-7.2,2.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.3,-103.7,7.3,98.6).s().p("AjyPwQiPgCiMgRQlAgokOiHQhSgphJgxQkdiPhajxQgohgAYh1QAgkPDkiOIAjgUQAsgXAugUQDCguCeh4QCEh+B+iEQByiUC2g9QD6hDCcBwQCLCJCkCrQBmBcB7A2QCAAsB1A7QA9AdA1AsQAxAnAnA7IA9BlQAuBgBQAlQANAyBGgkIALgGQBNgyAghQQAXg/AFhBQADg6gGgxIgEgYQgIgmgMgmQglhwg/heIE5hCQgXBtAaBqIAUBNQANArAJAsIAGAjIACAVQAEAigDAkQgBAogMArQhbErjSCsIgcAYQiSC5i+B+IgSAKQoqE0p9AAIgYAAg");
	this.shape_43.setTransform(-7.2,2.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#7E6308").p("AI0njQh7g2hmhcQikiriLiJQichwj6BDQi2A9hyCUQh+CEiEB+QieB4jCAuQguAUgsAXIgjAUQjkCOggEPQgYB1AoBgQBaDxEdCPQBJAxBSApQEOCHFAAoQCMARCPACQKKAGI1k6IASgKQC+h+CSi5IAcgYQDSisBbkrQAMgrABgoQADgkgEgiIgCgVIgGgjQgJgsgNgrIgUhNQgahqAXhtIk5BCQA/BeAlBwQAMAmAIAmIAEAYQAGAxgDA6QgFBBgXA/QggBQhNAyIgLAGQhGAkgNgyQhQglguhgQgggzgdgyQgmg7gygnQg1gsg9gdQh1g7iAgsg");
	this.shape_44.setTransform(-7.2,2.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.3,-103.7,7.3,98.6).s().p("AjyPwQiPgCiMgRQlAgokOiHQhSgphJgxQkdiPhajxQgohgAYh1QAgkPDkiOIAjgUQAsgXAugUQDCguCeh4QCEh+B+iEQByiUC2g9QD6hDCcBwQCLCJCkCrQBmBcB7A2QCAAsB1A7QA9AdA1AsQAyAnAmA7QAdAyAgAzQAuBgBQAlQANAyBGgkIALgGQBNgyAghQQAXg/AFhBQADg6gGgxIgEgYQgIgmgMgmQglhwg/heIE5hCQgXBtAaBqIAUBNQANArAJAsIAGAjIACAVQAEAigDAkQgBAogMArQhbErjSCsIgcAYQiSC5i+B+IgSAKQoqE0p9AAIgYAAg");
	this.shape_45.setTransform(-7.2,2.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#7E6308").p("AI0njQh7g2hmhcQikiriLiJQichwj6BDQi2A9hyCUQh+CEiEB+QieB4jCAuQguAUgsAXIgjAUQjkCOggEPQgXB1AnBgQBaDxEdCPQBJAxBSApQEOCHFAAoQCMARCPACQKKAGI1k6IASgKQC+h+CSi5IAcgYQDSisBbkrQAMgrABgoQADgkgEgiIgCgVIgGgjQgJgsgNgrIgUhNQgahqAXhtIk5BCQA/BeAlBwQAMAmAIAmIAEAYQAGAxgDA6QgGBBgWA/QggBQhNAyIgLAGQhGAkgNgyQhQglguhgQgggzgdgyQgmg7gygnQg1gsg9gdQh1g7iAgsg");
	this.shape_46.setTransform(-7.2,2.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.3,-103.7,7.3,98.6).s().p("AjyPwQiPgCiMgRQlAgokOiHQhSgphJgxQkdiPhajxQgnhgAXh1QAgkPDkiOIAjgUQAsgXAugUQDCguCeh4QCEh+B+iEQByiUC2g9QD6hDCcBwQCLCJCkCrQBmBcB7A2QCAAsB1A7QA9AdA1AsQAyAnAmA7QAdAyAgAzQAuBgBQAlQANAyBGgkIALgGQBNgyAghQQAWg/AGhBQADg6gGgxIgEgYQgIgmgMgmQglhwg/heIE5hCQgXBtAaBqIAUBNQANArAJAsIAGAjIACAVQAEAigDAkQgBAogMArQhbErjSCsIgcAYQiSC5i+B+IgSAKQorE0p8AAIgYAAg");
	this.shape_47.setTransform(-7.2,2.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#7E6308").p("AI0njQh7g2hmhcQikiriLiJQichwj6BDQi2A9hyCUQh+CEiEB+QieB4jCAuQguAUgsAXIgjAUQjkCOggEPQgXB1AnBgQBaDxEcCPQBLAxBRApQEOCHFAAoQCMARCPACQKKAGI1k6IASgKQC+h+CSi5IAbgYQDTisBbkrQAMgrABgoQADgkgEgiIgCgVIgGgjQgJgsgNgrIgUhNQgahqAXhtIk5BCQA/BeAlBwQAMAmAHAmIAEAYQAHAxgDA6QgGBBgWA/QggBQhNAyIgMAGQhFAkgNgyQhQglguhgQgggzgdgyQgmg7gygnQg1gsg9gdQh1g7iAgsg");
	this.shape_48.setTransform(-7.2,2.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.3,-103.7,7.3,98.6).s().p("AjyPwQiPgCiMgRQlAgokOiHQhRgphLgxQkciPhajxQgnhgAXh1QAgkPDkiOIAjgUQAsgXAugUQDCguCeh4QCEh+B+iEQByiUC2g9QD6hDCcBwQCLCJCkCrQBmBcB7A2QCAAsB1A7QA9AdA1AsQAyAnAmA7IA9BlQAuBgBQAlQANAyBFgkIAMgGQBNgyAghQQAWg/AGhBQADg6gHgxIgEgYQgHgmgMgmQglhwg/heIE5hCQgXBtAaBqIAUBNQANArAJAsIAGAjIACAVQAEAigDAkQgBAogMArQhbErjTCsIgbAYQiSC5i+B+IgSAKQorE0p8AAIgYAAg");
	this.shape_49.setTransform(-7.2,2.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#7E6308").p("AI0njQh7g2hmhcQikiriLiJQichwj6BDQi2A9hyCUQh+CEiEB+QieB4jCAuQguAUgsAXIgjAUQjkCOggEPQgXB1AnBgQBaDxEcCPQBLAxBRApQEOCHFAAoQCMARCPACQKKAGI1k6IASgKQC+h+CSi5IAbgYQDTisBbkrQAMgrABgoQADgkgEgiIgCgVIgGgjQgJgsgNgrIgUhNQgahqAXhtIk5BCQA/BeAlBwQAMAmAHAmIAEAYQAHAxgDA6QgGBBgWA/QggBQhNAyIgMAGQhFAkgNgyQhRglgthgQgggzgdgyQgmg7gygnQg1gsg+gdQh0g7iAgsg");
	this.shape_50.setTransform(-7.2,2.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.3,-103.7,7.3,98.6).s().p("AjyPwQiPgCiMgRQlAgokOiHQhRgphLgxQkciPhajxQgnhgAXh1QAgkPDkiOIAjgUQAsgXAugUQDCguCeh4QCEh+B+iEQByiUC2g9QD6hDCcBwQCLCJCkCrQBmBcB7A2QCAAsB0A7QA+AdA1AsQAyAnAmA7IA9BlQAtBgBRAlQANAyBFgkIAMgGQBNgyAghQQAWg/AGhBQADg6gHgxIgEgYQgHgmgMgmQglhwg/heIE5hCQgXBtAaBqIAUBNQANArAJAsIAGAjIACAVQAEAigDAkQgBAogMArQhbErjTCsIgbAYQiSC5i+B+IgSAKQorE0p8AAIgYAAg");
	this.shape_51.setTransform(-7.2,2.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#7E6308").p("AI0njQh6g2hnhcQijiriLiJQidhwj6BDQi2A9hxCUQh+CEiFB+QieB4jCAuQgtAUgsAXIgjAUQjlCOgfEPQgXB1AnBgQBZDxEdCPQBKAxBSApQENCHFBAoQCLARCPACQKKAGI2k6IARgKQC+h+CSi5IAcgYQDSisBbkrQAMgrACgoQABgkgDgiIgCgVIgGgjIgWhXIgUhNQgZhqAWhtIk5BCQA/BeAmBwQAMAmAHAmIAEAYQAHAxgEA6QgGBBgWA/QggBQhNAyIgLAGQhFAkgOgyQhQglguhgQgfgzgegyQgmg7gygnQg1gsg9gdQh1g7iAgsg");
	this.shape_52.setTransform(-7.3,2.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.4,-103.7,7.4,98.6).s().p("AjyPwQiPgCiLgRQlBgokNiHQhSgphKgxQkdiPhZjxQgnhgAXh1QAfkPDliOIAjgUQAsgXAtgUQDCguCeh4QCFh+B+iEQBxiUC2g9QD6hDCdBwQCLCJCjCrQBnBcB6A2QCAAsB1A7QA9AdA1AsQAyAnAmA7IA9BlQAuBgBQAlQAOAyBFgkIALgGQBNgyAghQQAWg/AGhBQAEg6gHgxIgEgYQgHgmgMgmQgmhwg/heIE5hCQgWBtAZBqIAUBNIAWBXIAGAjIACAVQADAigBAkQgCAogMArQhbErjSCsIgcAYQiSC5i+B+IgRAKQorE0p9AAIgYAAg");
	this.shape_53.setTransform(-7.3,2.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#7E6308").p("AI0njQh6g2hnhcQijiriLiJQidhwj6BDQi2A9hxCUQh+CEiFB+QieB4jCAuQgtAUgsAXIgjAUQjlCOgfEPQgXB1AnBgQBZDxEdCPQBKAxBRApQEOCHFBAoQCLARCPACQKKAGI2k6IARgKQC+h+CSi5IAcgYQDSisBbkrQANgrABgoQABgkgDgiIgCgVIgGgjIgWhXIgUhNQgZhqAWhtIk5BCQA/BeAmBwQAMAmAHAmIAEAYQAGAxgDA6QgFBBgXA/QggBQhNAyIgLAGQhFAkgOgyQhQglguhgQgfgzgegyQgng7gxgnQg1gsg9gdQh1g7iAgsg");
	this.shape_54.setTransform(-7.3,2.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.4,-103.7,7.4,98.6).s().p("AjyPwQiPgCiLgRQlBgokOiHQhRgphKgxQkdiPhZjxQgnhgAXh1QAfkPDliOIAjgUQAsgXAtgUQDCguCeh4QCFh+B+iEQBxiUC2g9QD6hDCdBwQCLCJCjCrQBnBcB6A2QCAAsB1A7QA9AdA1AsQAxAnAnA7IA9BlQAuBgBQAlQAOAyBFgkIALgGQBNgyAghQQAXg/AFhBQADg6gGgxIgEgYQgHgmgMgmQgmhwg/heIE5hCQgWBtAZBqIAUBNIAWBXIAGAjIACAVQADAigBAkQgBAogNArQhbErjSCsIgcAYQiSC5i+B+IgRAKQorE0p9AAIgYAAg");
	this.shape_55.setTransform(-7.3,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_9のコピー12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8QAMgMAPgMQDOiwBWksQALgsABgpQABgjgEgiIgCgVIgHgjQgKgsgNgqIgWhNQgbhrAThsIk3BJQBBBdAoBuQANAlAHAnIAFAXQAHAxgCA6QgEBCgWA+QgeBRhMA0IgMAGQhEAlgOgxQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape.setTransform(-7.5,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-112.4,7.6,89.9).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAxBEglIAMgGQBMg0AehRQAWg+AEhCQACg6gHgxIgFgXQgHgngNglQgohuhBhdIE3hJQgTBsAbBrIAWBNQANAqAKAsIAHAjIACAVQAEAigBAjQgBApgLAsQhWEsjOCwQgPAMgMAMQiQC8i7CBIgRALQoxFDqKAGIgZAAQiBAAiAgNg");
	this.shape_1.setTransform(-7.5,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7E6308").p("AIfnrQh8g0hnhcQilipiNiHQidhvj6BFQi1BAhwCVQh9CFiDCAQidB5jBAxQgtATgsAYIgjAUQjkCRgcEQQgWB1ApBfQBbDwEfCNQBLAwBRAnQEQCEFAAlQCNAQCOAAQKKgBIzk/IARgLQC9h/CLi6IAcgYQDXioBukcQAOgrAEgmQAEgjgBgjIgBgUIgDgkQgGgtgLguIgUhQQgYhrAXhrIk5A/QA+BeAlBuQALAlAGAmIACAUQACAygHA6QgJBBgZA5QgnBOhSAyIgLAFQhHAhgXgsQhRgkguhgQghgzgdgxQgng6gygnQg2grg9gdQh2g5iAgrg");
	this.shape_2.setTransform(-5.7,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],5.8,-113.4,5.8,88.9).s().p("AoTPgQlAglkQiEQhRgnhLgwQkfiNhbjwQgphfAWh1QAckQDkiRIAjgUQAsgYAtgTQDBgxCdh5QCDiAB9iFQBwiVC1hAQD6hFCdBvQCNCHClCpQBnBcB8A0QCAArB2A5QA9AdA2ArQAyAnAnA6QAdAxAhAzQAuBgBRAkQAXAsBHghIALgFQBSgyAnhOQAZg5AJhBQAHg6gCgyIgCgUQgGgmgLglQglhug+heIE5g/QgXBrAYBrIAUBQQALAuAGAtIADAkIABAUQABAjgEAjQgEAmgOArQhuEcjXCoIgcAYQiLC6i9B/IgRALQozE/qKABQiOAAiNgQg");
	this.shape_3.setTransform(-5.7,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7E6308").p("AIQnlQh7g1hnhdQikiqiKiIQiehwj6BDQi2A/hxCTQh9CFiFB+QidB5jCAvQgtATgsAXIgjAUQjlCQgeEPQgXB1AnBfQBaDwEeCQQBKAxBSAoQEOCFFAAoQCNARCOABQKKAEI1k7IARgLQC+h+CIi4IAdgWQDdihCHkGQASgqAHgkQAHgiADgjIABgVIgBgkQgCgtgHgyQgGgogNgrQgVhsAchqIk7A0QA6BgAjBtQAJAnAFAlQABAMgCAEQgCAygNA5QgOA/gdAzQgwBJhYAxIgMAFQhJAcgggnQhQglguhfQggg0gdgxQgng7gxgnQg2gsg9gdQh1g6iAgsg");
	this.shape_4.setTransform(-3.8,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],3.9,-114.4,3.9,88).s().p("AkSPwQiOgBiNgRQlAgokOiFQhSgohKgxQkeiQhajwQgnhfAXh1QAekPDliQIAjgUQAsgXAtgTQDCgvCdh5QCFh+B9iFQBxiTC2g/QD6hDCeBwQCKCICkCqQBnBdB7A1QCAAsB1A6QA9AdA2AsQAxAnAnA7QAdAxAgA0QAuBfBQAlQAgAnBJgcIAMgFQBYgxAwhJQAdgzAOg/QANg5ACgyQACgEgBgMQgFglgJgnQgjhtg6hgIE7g0QgcBqAVBsQANArAGAoQAHAyACAtIABAkIgBAVQgDAjgHAiQgHAkgSAqQiHEGjdChIgdAWQiIC4i+B+IgRALQouE3qAAAIgRAAg");
	this.shape_5.setTransform(-3.8,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#7E6308").p("AIAnfQh7g2hmheQiiiriJiJQiehyj6BCQi2A9hzCTQh+CDiGB+QifB3jBAtQguAUgsAWIgjAUQjmCNggEPQgYB1AnBgQBYDxEcCRQBKAyBRApQEOCIFAApQCLASCPADQKKAJI4k3IARgLQC/h8CDi3IAegVQDkiYCfjuQAWgpAJghQALghAGgkIADgUIADgkQACgtgEg3QgEgngNgvQgShsAghpIk9AqQA4BiAhBsQAHAnADAkQAAAMgDAAQgGAygSA3QgVA9gfAtQg4BChgAwIgNAEQhLAWgpghQhQgmgthgQgfgzgdgyQgng7gxgoQg1gsg9gdQh0g7iAgtg");
	this.shape_6.setTransform(-1.7,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],1.8,-115.4,1.8,87).s().p("AkuPwQiPgDiLgSQlAgpkOiIQhRgphKgyQkciRhYjxQgnhgAYh1QAgkPDmiNIAjgUQAsgWAugUQDBgtCfh3QCGh+B+iDQBziTC2g9QD6hCCeByQCJCJCiCrQBmBeB7A2QCAAtB0A7QA9AdA1AsQAxAoAnA7IA8BlQAtBgBQAmQApAhBLgWIANgEQBggwA4hCQAfgtAVg9QASg3AGgyQADAAAAgMQgDgkgHgnQghhsg4hiIE9gqQggBpASBsQANAvAEAnQAEA3gCAtIgDAkIgDAUQgGAkgLAhQgJAhgWApQifDujkCYIgeAVQiDC3i/B8IgRALQooEup1AAIglAAg");
	this.shape_7.setTransform(-1.7,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#7E6308").p("AHqnZQh6g3hlheQihitiIiKQidhzj7BAQi2A7h0CSQh/CDiHB9QifB2jDAsQgtASgtAWIgjAUQjnCMgiEOQgaB1AnBgQBWDyEcCTQBJAzBRApQEMCKFAAsQCMATCOAEQKKANI6kyIASgKQC/h7CAi2QAOgLAQgJQDqiPC1jWQAYgjAMgfQAPghAJgjIAFgUIAHgjQAGgsAAg8QgDgngMgyQgPhsAkhoIk+AfQA0BkAgBsQAFAnACAjQgBAMgEgEQgKAxgYAzQgaA8ggAmQhBA4hoAwIgNADQhMARgzgdQhQgogshfQgggzgcgzQgmg6gxgpQg1gsg8geQh0g8iAgug");
	this.shape_8.setTransform(0.8,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],-0.6,-116.3,-0.6,86).s().p("AlOPwQiOgEiMgTQlAgskMiKQhRgphJgzQkciThWjyQgnhgAah1QAikODniMIAjgUQAtgWAtgSQDDgsCfh2QCHh9B/iDQB0iSC2g7QD7hACdBzQCICKChCtQBlBeB6A3QCAAuB0A8QA8AeA1AsQAxApAmA6QAcAzAgAzQAsBfBQAoQAzAdBMgRIANgDQBogwBBg4QAggmAag8QAYgzAKgxQAEAEABgMQgCgjgFgnQgghsg0hkIE+gfQgkBoAPBsQAMAyADAnQAAA8gGAsIgHAjIgFAUQgJAjgPAhQgMAfgYAjQi1DWjqCPQgQAJgOALQiAC2i/B7IgSAKQoiElprAAIg3AAg");
	this.shape_9.setTransform(0.7,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#7E6308").p("AHVnTQh6g4hkhfQigiuiGiLQidh0j7A+Qi3A6h1CRQiACBiIB8QigB1jDAqQgtASgtAWIgjAUQjoCKglEOQgaB0AmBhQBUDyEaCWQBKAyBQArQELCLFAAvQCLAVCPAEQKKATI8kuIARgKQBhg9A+haQBGhTBYhGIAfgSQDviGDHi6QAbgkAOgcQARgdAOgiIAGgUIAKgiQAKgsAFg+QgBgpgMgzQgMhuAphlIk/AUQAxBmAdBrQADAnABAiQgBAMgFgIQgOAwgdAxQgfA4ghAgQhGAxhxAsIgNACQhNALg9gaQhQgogrhfQgfg0gcgyQgmg7gxgpQgzgtg9geQh0g9h/gvg");
	this.shape_10.setTransform(3.4,16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],-3.1,-117.3,-3.1,85).s().p("AluPvQiOgEiMgVQk/gvkLiLQhRgrhJgyQkbiWhUjyQglhhAah0QAlkODniKIAkgUQAsgWAugSQDCgqChh1QCHh8CBiBQB0iRC3g6QD8g+CcB0QCHCLCfCuQBlBfB6A4QB/AvBzA9QA9AeA0AtQAxApAlA7IA7BmQAsBfBPAoQA+AaBNgLIAMgCQBxgsBHgxQAgggAgg4QAdgxAOgwQAFAIAAgMQAAgigDgnQgehrgxhmIE/gUQgoBlAMBuQAMAzAAApQgFA+gKAsIgJAiIgHAUQgNAigSAdQgNAcgbAkQjIC6juCGIggASQhXBGhHBTQg+BahgA9IgSAKQoZEcpeAAIhPgBg");
	this.shape_11.setTransform(3.2,16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#7E6308").p("AHDnOQh5g4hkhgQieiviGiNQibh0j8A7Qi3A5h2CQQiBCBiJB6QihB0jDApQguASgtAVIgjAUQjpCIgnEOQgbBzAlBiQBTDzEZCYQBJAyBQArQEJCOFAAxQCLAWCPAFQKKAYI+kpIASgKQBhg8A7hcQBEhTBZhDIAggSQDzh7DWihQAeghAOgZQAUgeARgfIAIgTIAMghQAPgrAJhBQACgogLg3QgKhuAthjIk/AJQAtBoAcBqQACAngBAiQgCALgFgMQgSAughAvQgkA2ggAaQhLAqh4AmIgNACQhOAFhHgXQhPgpgrhfQgeg1gcgyQglg7gxgqQgzgtg9gfQhzg+h/gwg");
	this.shape_12.setTransform(5.6,17.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],-5.3,-118.3,-5.3,84).s().p("AmLPuQiOgFiMgWQk/gxkKiOQhQgrhJgyQkZiYhSjzQglhiAbhzQAnkODoiIIAkgUQAtgVAtgSQDEgpChh0QCIh6CCiBQB1iQC4g5QD8g7CbB0QCFCNCfCvQBjBgB6A4QB/AwBzA+QA8AfA0AtQAxAqAkA7IA7BnQArBfBOApQBIAXBOgFIANgCQB3gmBMgqQAfgaAkg2QAigvASguQAFAMABgLQABgigBgnQgdhqgthoIFAgJQgtBjAJBuQALA3gBAoQgKBBgOArIgMAhIgJATQgQAfgVAeQgNAZgeAhQjWChjzB7IghASQhYBDhFBTQg7BchhA8IgSAKQoTETpUAAQgwAAgxgCg");
	this.shape_13.setTransform(5.4,17.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#7E6308").p("AHVnUQh6g4hkhfQigiuiGiLQidhzj7A9Qi3A6h1CRQiACCiIB7QigB1jDArQgtASgtAWIgjATQjoCKglEPQgaB0AmBgQBUDzEaCWQBKAyBQAqQELCMFAAvQCLAUCPAFQKKATI8kuIARgLQBhg8A+haQBGhTBYhGIAfgTQDviFDHi6QAbgkAOgcQARgdAOgiIAGgUIAKgjQAKgrAFg/QgBgngMg1QgMhtAphlIk/AUQAxBmAdBrQADAmABAjQgBAMgFgIQgOAwgdAwQgfA5ghAgQhGAwhxAsIgNADQhNALg9gaQhQgpgrhfIg7hmQgmg7gxgpQgzgsg9gfQh0g9h/gvg");
	this.shape_14.setTransform(3.4,14.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],-3.1,-115.5,-3.1,86.8).s().p("AluPvQiOgFiMgUQk/gvkLiMQhRgqhJgyQkbiWhUjzQglhgAah0QAlkPDniKIAkgTQAsgWAugSQDCgrChh1QCHh7CBiCQB0iRC3g6QD8g9CcBzQCHCLCfCuQBlBfB6A4QB/AvBzA9QA9AfA0AsQAxApAlA7IA7BmQAsBfBPApQA+AaBNgLIAMgDQBxgsBHgwQAgggAgg5QAdgwAOgwQAFAIAAgMQAAgjgDgmQgehrgxhmIE/gUQgoBlAMBtQAMA1AAAnQgFA/gKArIgJAjIgHAUQgNAigSAdQgNAcgbAkQjIC6juCFIggATQhXBGhHBTQg+BahgA8IgSALQoaEcpfAAIhNgBg");
	this.shape_15.setTransform(3.2,14.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#7E6308").p("AHqnaQh6g3hlheQihitiIiKQidhyj7BAQi2A7h0CSQh/CDiHB8QifB2jDAsQgtATgtAWIgjAUQjnCLgiEPQgaB1AnBgQBWDxEcCUQBJAyBRAqQEMCJFAAtQCMATCOADQKKAPI6kzIASgLQC/h6CAi3IAegUQDqiOC1jWQAYgkAMgfQAPggAJgjIAFgUIAHgjQAGgtAAg7QgDgogMgxQgPhtAkhnIk+AfQA0BkAgBsQAFAmACAkQgBAMgEgEQgKAxgYAzQgaA8ggAlQhBA5hoAwIgNADQhMAQgzgdQhQgngshfQggg0gcgyQgmg7gxgoQg1gsg8geQh0g9iAgug");
	this.shape_16.setTransform(0.8,11.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],-0.6,-112.7,-0.6,89.7).s().p("AlOPvQiOgDiMgTQlAgtkMiJQhRgqhJgyQkciUhWjxQgnhgAah1QAikPDniLIAjgUQAtgWAtgTQDDgsCfh2QCHh8B/iDQB0iSC2g7QD7hACdByQCICKChCtQBlBeB6A3QCAAuB0A9QA8AeA1AsQAxAoAmA7QAcAyAgA0QAsBfBQAnQAzAdBMgQIANgDQBogwBBg5QAgglAag8QAYgzAKgxQAEAEABgMQgCgkgFgmQgghsg0hkIE+gfQgkBnAPBtQAMAxADAoQAAA7gGAtIgHAjIgFAUQgJAjgPAgQgMAfgYAkQi1DWjqCOIgeAUQiAC3i/B6IgSALQogElppAAIg7gBg");
	this.shape_17.setTransform(0.7,11.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#7E6308").p("AIAnfQh7g2hmhdQiiisiJiJQiehxj6BBQi2A9hzCTQh+CDiGB+QifB4jBAtQguATgsAWIgjAUQjmCOggEPQgYB0AnBgQBYDxEcCSQBKAxBRApQEOCIFAApQCLATCPACQKKAJI4k3IARgKQC/h9CDi3IAegVQDkiYCfjuQAWgoAJghQALgiAGgjIADgVIADgjQACgtgEg3QgEgpgNgtQgShtAghoIk9ApQA4BjAhBsQAHAmADAlQAAAMgDAAQgGAxgSA3QgVA9gfAtQg4BChgAwIgNAEQhLAWgpghQhQglgthhIg8hlQgng7gxgnQg1gsg9geQh0g7iAgtg");
	this.shape_18.setTransform(-1.7,8.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],1.8,-109.8,1.8,92.5).s().p("AkuPwQiPgCiLgTQlAgpkOiIQhRgphKgxQkciShYjxQgnhgAYh0QAgkPDmiOIAjgUQAsgWAugTQDBgtCfh4QCGh+B+iDQBziTC2g9QD6hBCeBxQCJCJCiCsQBmBdB7A2QCAAtB0A7QA9AeA1AsQAxAnAnA7IA8BlQAtBhBQAlQApAhBLgWIANgEQBggwA4hCQAfgtAVg9QASg3AGgxQADAAAAgMQgDglgHgmQghhsg4hjIE9gpQggBoASBtQANAtAEApQAEA3gCAtIgDAjIgDAVQgGAjgLAiQgJAhgWAoQifDujkCYIgeAVQiDC3i/B9IgRAKQooEup1AAIglAAg");
	this.shape_19.setTransform(-1.7,8.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#7E6308").p("AIQnlQh7g1hnhdQikiqiKiIQiehwj6BDQi2A+hxCUQh9CFiFB+QidB5jCAvQgtATgsAXIgjAUQjlCQgeEPQgXB0AnBgQBaDwEeCQQBKAwBSApQEOCFFAAoQCNARCOABQKKAEI1k7IARgLQC+h+CIi4IAdgWQDdihCHkHQASgpAHgkQAHgjADgiIABgVIgBgkQgCgtgHgyQgGgpgNgqQgVhsAchqIk7A0QA6BhAjBsQAJAnAFAlQABAMgCAEQgCAxgNA6QgOA/gdAzQgwBIhYAyIgMAFQhJAbgggmQhQgkguhhQgggzgdgxQgng7gxgnQg2gsg9gdQh1g6iAgsg");
	this.shape_20.setTransform(-3.8,6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],3.9,-107,3.9,95.3).s().p("AkSPwQiOgBiNgRQlAgokOiFQhSgphKgwQkeiQhajwQgnhgAXh0QAekPDliQIAjgUQAsgXAtgTQDCgvCdh5QCFh+B9iFQBxiUC2g+QD6hDCeBwQCKCICkCqQBnBdB7A1QCAAsB1A6QA9AdA2AsQAxAnAnA7QAdAxAgAzQAuBhBQAkQAgAmBJgbIAMgFQBYgyAwhIQAdgzAOg/QANg6ACgxQACgEgBgMQgFglgJgnQgjhsg6hhIE7g0QgcBqAVBsQANAqAGApQAHAyACAtIABAkIgBAVQgDAigHAjQgHAkgSApQiHEHjdChIgdAWQiIC4i+B+IgRALQotE3p/AAIgTAAg");
	this.shape_21.setTransform(-3.8,6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#7E6308").p("AIfnrQh8g0hnhcQilipiNiHQidhvj6BFQi1BAhwCUQh9CGiDCAQidB5jBAxQgtATgsAYIgjAUQjkCRgcEQQgWB0ApBgQBbDwEfCNQBLAvBRAoQEQCEFAAlQCNAQCOAAQKKgBIzk/IARgLQC9iACLi5IAcgYQDXioBukcQAOgrAEgmQAEgkgBgiIgBgVIgDgjQgGgtgLguIgUhQQgYhrAXhrIk5A+QA+BfAlBtQALAnAGAlIACAUQACAygHA6QgJBBgZA5QgnBOhSAyIgLAFQhHAhgXgsQhRgkguhgQghgzgdgxQgng6gygnQg2grg9gdQh2g5iAgrg");
	this.shape_22.setTransform(-5.7,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],5.8,-104.2,5.8,98.1).s().p("AoTPgQlAglkQiEQhRgohLgvQkfiNhbjwQgphgAWh0QAckQDkiRIAjgUQAsgYAtgTQDBgxCdh5QCDiAB9iGQBwiUC1hAQD6hFCdBvQCNCHClCpQBnBcB8A0QCAArB2A5QA9AdA2ArQAyAnAnA6QAdAxAhAzQAuBgBRAkQAXAsBHghIALgFQBSgyAnhOQAZg5AJhBQAHg6gCgyIgCgUQgGglgLgnQglhtg+hfIE5g+QgXBrAYBrIAUBQQALAuAGAtIADAjIABAVQABAigEAkQgEAmgOArQhuEcjXCoIgcAYQiLC5i9CAIgRALQozE/qKABQiOAAiNgQg");
	this.shape_23.setTransform(-5.7,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAxBEglIAMgGQBMg0AehRQAWg+AEhCQACg6gHgxIgFgXQgHgngNglQgohuhBhdIE3hJQgTBsAbBrIAWBNQANAqAKAsIAHAjIACAVQAEAigBAjQgBApgLAsQhWEsjOCwQgPAMgMAMQiQC8i7CBIgRALQoxFDqKAGIgaAAQiBAAh/gNg");
	this.shape_24.setTransform(-7.5,0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8QAMgMAPgMQDOiwBWksQALgsABgpQABgkgEghIgCgVIgHgjQgKgsgNgqIgWhNQgbhrAThsIk3BJQBBBdAoBuQANAlAHAnIAFAXQAHAxgCA6QgEBBgWA/QgeBRhMA0IgMAGQhEAlgOgxQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_25.setTransform(-7.5,0.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAxBEglIAMgGQBMg0AehRQAWg/AEhBQACg6gHgxIgFgXQgHgngNglQgohuhBhdIE3hJQgTBsAbBrIAWBNQANAqAKAsIAHAjIACAVQAEAhgBAkQgBApgLAsQhWEsjOCwQgPAMgMAMQiQC8i7CBIgRALQoxFDqKAGIgaAAQiBAAh/gNg");
	this.shape_26.setTransform(-7.5,0.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8QAMgMAPgMQDOiwBWksQALgsABgpQABgkgEghIgDgVIgGgjQgKgsgNgqIgWhNQgbhrAThsIk3BJQBBBdAoBuQANAlAHAnIAFAXQAHAxgCA6QgEBBgWA/QgeBRhMA0IgMAGQhEAlgOgxQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_27.setTransform(-7.5,0.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAxBEglIAMgGQBMg0AehRQAWg/AEhBQACg6gHgxIgFgXQgHgngNglQgohuhBhdIE3hJQgTBsAbBrIAWBNQANAqAKAsIAGAjIADAVQAEAhgBAkQgBApgLAsQhWEsjOCwQgPAMgMAMQiQC8i7CBIgRALQoxFDqKAGIgaAAQiBAAh/gNg");
	this.shape_28.setTransform(-7.5,0.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8QANgMAOgMQDOiwBWksQALgsABgpQABgkgEghIgDgVIgGgjQgKgsgNgqIgWhNQgbhrAThsIk3BJQBBBdAoBuQANAlAHAnIAFAXQAHAxgCA6QgEBBgWA/QgeBRhMA0IgMAGQhEAlgOgxQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_29.setTransform(-7.5,0.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAxBEglIAMgGQBMg0AehRQAWg/AEhBQACg6gHgxIgFgXQgHgngNglQgohuhBhdIE3hJQgTBsAbBrIAWBNQANAqAKAsIAGAjIADAVQAEAhgBAkQgBApgLAsQhWEsjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiBAAh/gNg");
	this.shape_30.setTransform(-7.5,0.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8QANgMAOgMQDOiwBWksQALgsABgpQABgkgEghIgDgVIgGgjQgKgsgNgqIgWhNQgbhrAThsIk3BJQBBBdAoBuQANAlAHAnIAFAXQAHAxgCA6QgFBBgVA/QgfBRhLA0IgMAGQhEAmgOgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_31.setTransform(-7.5,0.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAyBEgmIAMgGQBLg0AfhRQAVg/AFhBQACg6gHgxIgFgXQgHgngNglQgohuhBhdIE3hJQgTBsAbBrIAWBNQANAqAKAsIAGAjIADAVQAEAhgBAkQgBApgLAsQhWEsjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiBAAh/gNg");
	this.shape_32.setTransform(-7.5,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBWksQALgsABgpQABgkgEghIgDgVIgGgjQgKgsgNgqIgWhNQgbhrAThsIk3BJQBBBdAoBuQANAlAHAnIAFAXQAHAxgCA6QgFBBgVA/QgfBRhLA0IgMAGQhEAmgOgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_33.setTransform(-7.5,0.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBVksQAMgsABgpQABgkgEgiIgDgUIgGgjIgXhWIgWhNQgbhrAUhsIk4BJQBBBdAoBuQANAlAHAnIAFAXQAHAxgCA6QgFBBgVA/QgfBRhLA0IgMAGQhEAmgOgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_34.setTransform(-7.5,0.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAyBEgmIAMgGQBLg0AfhRQAVg/AFhBQACg6gHgxIgFgXQgHgngNglQgohuhBhdIE4hJQgUBsAbBrIAWBNIAXBWIAGAjIADAUQAEAigBAkQgBApgMAsQhVEsjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiBAAh/gNg");
	this.shape_35.setTransform(-7.5,0.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBVksQAMgsABgpQABgkgEgiIgDgUIgGgjIgXhWIgWhNQgbhrAUhsIk4BJQBBBcAoBvQANAlAHAnIAFAXQAHAxgCA6QgFBBgVA/QgfBRhLA0IgMAGQhEAmgOgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_36.setTransform(-7.5,0.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAyBEgmIAMgGQBLg0AfhRQAVg/AFhBQACg6gHgxIgFgXQgHgngNglQgohvhBhcIE4hJQgUBsAbBrIAWBNIAXBWIAGAjIADAUQAEAigBAkQgBApgMAsQhVEsjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_37.setTransform(-7.5,0.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBVksQAMgsABgpQABgkgEgiIgDgUIgGgjIgXhWIgWhNQgbhrAUhrIk4BIQBBBcAoBvQANAlAHAnIAEAXQAIAxgCA6QgFBBgVA/QgfBRhLA0IgMAGQhEAmgOgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_38.setTransform(-7.5,0.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAyBEgmIAMgGQBLg0AfhRQAVg/AFhBQACg6gIgxIgEgXQgHgngNglQgohvhBhcIE4hIQgUBrAbBrIAWBNIAXBWIAGAjIADAUQAEAigBAkQgBApgMAsQhVEsjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_39.setTransform(-7.5,0.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBVksQAMgsABgpQABgkgEgiIgDgUIgGgjIgXhWIgWhNQgbhrAUhrIk4BIQBBBcAoBvQAMAlAIAnIAEAXQAIAxgCA6QgFBBgVA/QgfBRhLA0IgMAGQhEAmgOgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_40.setTransform(-7.5,0.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAyBEgmIAMgGQBLg0AfhRQAVg/AFhBQACg6gIgxIgEgXQgIgngMglQgohvhBhcIE4hIQgUBrAbBrIAWBNIAXBWIAGAjIADAUQAEAigBAkQgBApgMAsQhVEsjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_41.setTransform(-7.5,0.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBVksQAMgsABgpQABgkgEgiIgDgUIgGgjIgXhWIgWhNQgbhrAUhrIk3BIQBABcAoBvQAMAlAIAnIAEAXQAIAxgCA6QgFBBgVA/QgfBRhLA0IgMAGQhFAmgNgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_42.setTransform(-7.5,0.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQANAyBFgmIAMgGQBLg0AfhRQAVg/AFhBQACg6gIgxIgEgXQgIgngMglQgohvhAhcIE3hIQgUBrAbBrIAWBNIAXBWIAGAjIADAUQAEAigBAkQgBApgMAsQhVEsjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_43.setTransform(-7.5,0.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBVktQAMgrABgpQABgkgEgiIgDgUIgGgjIgXhWIgWhNQgbhrAUhrIk3BIQBABcAoBvQAMAlAIAnIAEAXQAIAxgCA6QgFBBgVA/QgfBRhMA0IgLAGQhFAmgNgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_44.setTransform(-7.5,0.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQANAyBFgmIALgGQBMg0AfhRQAVg/AFhBQACg6gIgxIgEgXQgIgngMglQgohvhAhcIE3hIQgUBrAbBrIAWBNIAXBWIAGAjIADAUQAEAigBAkQgBApgMArQhVEtjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_45.setTransform(-7.5,0.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBVktQAMgrABgpQABgkgEgiIgDgUIgGgjQgLgsgNgqIgVhNQgbhrAUhrIk3BHQBABdAoBvQAMAlAIAnIAEAXQAHAxgBA6QgFBBgVA/QgfBRhMA0IgLAGQhFAmgNgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_46.setTransform(-7.5,0.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQANAyBFgmIALgGQBMg0AfhRQAVg/AFhBQABg6gHgxIgEgXQgIgngMglQgohvhAhdIE3hHQgUBrAbBrIAVBNQANAqALAsIAGAjIADAUQAEAigBAkQgBApgMArQhVEtjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_47.setTransform(-7.5,0.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBVktQAMgrABgpQABgkgEgiIgDgUIgGgjQgLgsgNgqIgVhNQgbhrAUhrIk3BHQBABdAnBvQANAlAIAnIAEAXQAHAxgBA6QgFBBgVA/QgfBRhMA0IgLAGQhFAmgNgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_48.setTransform(-7.5,0.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQANAyBFgmIALgGQBMg0AfhRQAVg/AFhBQABg6gHgxIgEgXQgIgngNglQgnhvhAhdIE3hHQgUBrAbBrIAVBNQANAqALAsIAGAjIADAUQAEAigBAkQgBApgMArQhVEtjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_49.setTransform(-7.5,0.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBVktQAMgrABgpQABgkgEgiIgDgUIgGgjQgLgsgNgrIgVhMQgbhrAUhrIk3BHQBABdAnBvQANAlAIAmIAEAYQAHAxgBA6QgFBBgVA/QgfBRhMA0IgLAGQhFAmgNgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_50.setTransform(-7.5,0.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQANAyBFgmIALgGQBMg0AfhRQAVg/AFhBQABg6gHgxIgEgYQgIgmgNglQgnhvhAhdIE3hHQgUBrAbBrIAVBMQANArALAsIAGAjIADAUQAEAigBAkQgBApgMArQhVEtjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_51.setTransform(-7.5,0.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBVktQAMgrABgpQABgkgEgiIgDgUIgGgjQgLgsgNgrIgVhMQgbhrAUhrIk3BHQBABdAnBuQANAmAIAmIAEAYQAHAxgBA6QgFBBgVA/QgfBRhMA0IgLAGQhFAmgNgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_52.setTransform(-7.5,0.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQANAyBFgmIALgGQBMg0AfhRQAVg/AFhBQABg6gHgxIgEgYQgIgmgNgmQgnhuhAhdIE3hHQgUBrAbBrIAVBMQANArALAsIAGAjIADAUQAEAigBAkQgBApgMArQhVEtjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_53.setTransform(-7.5,0.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOiwBVktQAMgrABgpQABgkgEgiIgDgUIgGgjIgYhXIgVhMQgbhrAUhrIk3BHQBABdAnBuQANAmAIAmIAEAYQAHAxgBA6QgFBBgVA/QgfBRhMA0IgLAGQhFAmgNgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_54.setTransform(-7.5,0.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQANAyBFgmIALgGQBMg0AfhRQAVg/AFhBQABg6gHgxIgEgYQgIgmgNgmQgnhuhAhdIE3hHQgUBrAbBrIAVBMIAYBXIAGAjIADAUQAEAigBAkQgBApgMArQhVEtjOCwIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_55.setTransform(-7.5,0.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOixBVksQAMgrABgpQABgkgEgiIgDgUIgHgjQgJgsgOgrIgVhMQgbhrAUhrIk3BHQBABdAnBuQANAmAIAmIAEAYQAHAxgCA6QgDBBgWA/QgfBRhMA0IgLAGQhFAmgNgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_56.setTransform(-7.5,0.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQANAyBFgmIALgGQBMg0AfhRQAWg/ADhBQACg6gHgxIgEgYQgIgmgNgmQgnhuhAhdIE3hHQgUBrAbBrIAVBMQAOArAJAsIAHAjIADAUQAEAigBAkQgBApgMArQhVEsjOCxIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_57.setTransform(-7.5,0.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOixBVksQAMgrABgpQABgjgEgjIgDgUIgHgjQgJgsgOgrIgVhMQgbhrAUhrIk3BHQBABdAnBuQANAmAIAmIAEAYQAHAxgCA6QgDBBgWA/QgfBRhMA0IgLAGQhFAmgNgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_58.setTransform(-7.5,0.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQANAyBFgmIALgGQBMg0AfhRQAWg/ADhBQACg6gHgxIgEgYQgIgmgNgmQgnhuhAhdIE3hHQgUBrAbBrIAVBMQAOArAJAsIAHAjIADAUQAEAjgBAjQgBApgMArQhVEsjOCxIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_59.setTransform(-7.5,0.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8IAbgYQDOixBVksQAMgrABgpQABgjgEgjIgDgVIgHgiQgJgsgOgrIgVhMQgbhrAUhrIk3BHQBABdAnBuQANAmAIAmIAEAYQAHAxgCA6QgDBBgWA/QgfBRhMA0IgLAGQhFAmgNgyQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape_60.setTransform(-7.5,0.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQANAyBFgmIALgGQBMg0AfhRQAWg/ADhBQACg6gHgxIgEgYQgIgmgNgmQgnhuhAhdIE3hHQgUBrAbBrIAVBMQAOArAJAsIAHAiIADAVQAEAjgBAjQgBApgMArQhVEsjOCxIgbAYQiQC8i7CBIgRALQoxFDqKAGIgaAAQiAAAiAgNg");
	this.shape_61.setTransform(-7.5,0.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiNiGQifhtj5BHQi0BBhvCVQh8CHiCCBQicB6jBAyQgtAVgsAXIgiAVQjiCTgbEPQgVB2ApBeQBeDvEgCLQBKAwBTAnQEPCBFCAjQCNAPCOgCQKKgGIwlDIARgLQC8iBCPi8IAbgYQDPixBVksQALgrABgpQABgjgEgjIgCgVIgHgiQgKgsgNgrIgWhMQgbhrAVhrIk4BHQBBBcAnBvQANAmAHAmIAFAYQAHAxgCA6QgEBBgWA/QgeBRhMA0IgLAGQhFAmgOgyQhRgkgvhfQghgzgegxQgog6gygnQg2gqg9gcQh2g5iBgqg");
	this.shape_62.setTransform(-7.5,0.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkPiBQhTgnhKgwQkgiLhejvQgpheAVh2QAbkPDiiTIAigVQAsgXAtgVQDBgyCch6QCCiBB8iHQBviVC0hBQD5hHCfBtQCNCGCnCoQBoBbB8AzQCBAqB2A5QA9AcA2AqQAyAnAoA6QAeAxAhAzQAvBfBRAkQAOAyBFgmIALgGQBMg0AehRQAWg/AEhBQACg6gHgxIgFgYQgHgmgNgmQgnhvhBhcIE4hHQgVBrAbBrIAWBMQANArAKAsIAHAiIACAVQAEAjgBAjQgBApgLArQhVEsjPCxIgbAYQiPC8i8CBIgRALQowFDqKAGIgaAAQiBAAiAgNg");
	this.shape_63.setTransform(-7.5,0.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiNiGQifhtj5BHQi0BBhvCVQh8CHiCCBQicB6jBAyQgtAVgsAXIgiAVQjiCTgbEPQgVB2ApBeQBeDvEgCLQBKAwBTAnQEPCBFCAjQCNAPCOgCQKKgGIwlDIARgLQC8iBCPi8IAbgYQDPixBVksQALgrABgpQABgjgEgjIgCgVIgHgjQgKgrgNgrIgWhMQgbhrAVhrIk4BHQBBBcAnBvQANAmAHAmIAFAYQAHAxgCA6QgEBBgWA/QgeBRhMA0IgLAGQhFAmgOgyQhRgkgvhfQghgzgegxQgog6gygnQg2gqg9gcQh2g5iBgqg");
	this.shape_64.setTransform(-7.5,0.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkPiBQhTgnhKgwQkgiLhejvQgpheAVh2QAbkPDiiTIAigVQAsgXAtgVQDBgyCch6QCCiBB8iHQBviVC0hBQD5hHCfBtQCNCGCnCoQBoBbB8AzQCBAqB2A5QA9AcA2AqQAyAnAoA6QAeAxAhAzQAvBfBRAkQAOAyBFgmIALgGQBMg0AehRQAWg/AEhBQACg6gHgxIgFgYQgHgmgNgmQgnhvhBhcIE4hHQgVBrAbBrIAWBMQANArAKArIAHAjIACAVQAEAjgBAjQgBApgLArQhVEsjPCxIgbAYQiPC8i8CBIgRALQowFDqKAGIgaAAQiBAAiAgNg");
	this.shape_65.setTransform(-7.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{y:11.4}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_24},{t:this.shape,p:{y:0.3}}]},1).to({state:[{t:this.shape_24},{t:this.shape,p:{y:0.3}}]},1).to({state:[{t:this.shape_24},{t:this.shape,p:{y:0.3}}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_33}]},1).to({state:[{t:this.shape_32},{t:this.shape_33}]},1).to({state:[{t:this.shape_32},{t:this.shape_33}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_9のコピー9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7E6308").p("AIsnxQh8gzhohbQinioiOiGQiehtj5BHQi1BBhuCVQh8CHiCCBQidB6jAAyQgtAVgsAXIgjAVQjhCTgbEPQgVB2ApBeQBeDvEfCLQBLAwBSAnQEQCBFCAjQCMAPCOgCQKKgGIxlDIARgLQC7iBCQi8QAMgMAPgMQDOiwBWksQALgsABgpQABgjgEgiIgCgVIgHgjQgKgsgNgqIgWhNQgbhrAThsIk3BJQBBBdAoBuQANAlAHAnIAFAXQAHAxgCA6QgEBCgWA+QgeBRhMA0IgMAGQhEAlgOgxQhRgkgwhfQghgzgdgxQgpg6gygnQg2gqg9gcQh1g5iBgqg");
	this.shape.setTransform(-7.5,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],7.6,-101.4,7.6,101).s().p("An6PjQlCgjkQiBQhSgnhLgwQkfiLhejvQgpheAVh2QAbkPDhiTIAjgVQAsgXAtgVQDAgyCdh6QCCiBB8iHQBuiVC1hBQD5hHCeBtQCOCGCnCoQBoBbB8AzQCBAqB1A5QA9AcA2AqQAyAnApA6QAdAxAhAzQAwBfBRAkQAOAxBEglIAMgGQBMg0AehRQAWg+AEhCQACg6gHgxIgFgXQgHgngNglQgohuhBhdIE3hJQgTBsAbBrIAWBNQANAqAKAsIAHAjIACAVQAEAigBAjQgBApgLAsQhWEsjOCwQgPAMgMAMQiQC8i7CBIgRALQoxFDqKAGIgaAAQiBAAh/gNg");
	this.shape_1.setTransform(-7.5,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7E6308").p("AIfnrQh8g0hnhcQilipiNiHQidhvj6BFQi1BAhwCVQh9CFiDCAQidB5jBAxQgtATgsAYIgjAUQjkCRgcEQQgWB1ApBfQBbDwEfCNQBLAwBRAnQEQCEFAAlQCNAQCOAAQKKgBIzk/IARgLQC9h/CLi6IAcgYQDXioBukcQAOgrAEgmQAEgjgBgjIgBgUIgDgkQgGgtgLguIgUhQQgYhrAXhrIk5A/QA+BeAlBuQALAlAGAmIACAUQACAygHA6QgJBBgZA5QgnBOhSAyIgLAFQhHAhgXgsQhRgkguhgQghgzgdgxQgng6gygnQg2grg9gdQh2g5iAgrg");
	this.shape_2.setTransform(-5.7,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],5.8,-102.4,5.8,100).s().p("AoTPgQlAglkQiEQhRgnhLgwQkfiNhbjwQgphfAWh1QAckQDkiRIAjgUQAsgYAtgTQDBgxCdh5QCDiAB9iFQBwiVC1hAQD6hFCdBvQCNCHClCpQBnBcB8A0QCAArB2A5QA9AdA2ArQAyAnAnA6QAdAxAhAzQAuBgBRAkQAXAsBHghIALgFQBSgyAnhOQAZg5AJhBQAHg6gCgyIgCgUQgGgmgLglQglhug+heIE5g/QgXBrAYBrIAUBQQALAuAGAtIADAkIABAUQABAjgEAjQgEAmgOArQhuEcjXCoIgcAYQiLC6i9B/IgRALQozE/qKABQiOAAiNgQg");
	this.shape_3.setTransform(-5.7,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7E6308").p("AIQnlQh7g1hnhdQikiqiKiIQiehwj6BDQi2A/hxCTQh9CFiFB+QidB5jCAvQgtATgsAXIgjAUQjlCQgeEPQgXB1AnBfQBaDwEeCQQBKAxBSAoQEOCFFAAoQCNARCOABQKKAEI1k7IARgLQC+h+CIi4IAdgWQDdihCHkGQASgqAHgkQAHgiADgjIABgVIgBgkQgCgtgHgyQgGgogNgrQgVhsAchqIk7A0QA6BgAjBtQAJAnAFAlQABAMgCAEQgCAygNA5QgOA/gdAzQgwBJhYAxIgMAFQhJAcgggnQhQglguhfQggg0gdgxQgng7gxgnQg2gsg9gdQh1g6iAgsg");
	this.shape_4.setTransform(-3.8,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],3.9,-103.3,3.9,99).s().p("AkSPwQiOgBiNgRQlAgokOiFQhSgohKgxQkeiQhajwQgnhfAXh1QAekPDliQIAjgUQAsgXAtgTQDCgvCdh5QCFh+B9iFQBxiTC2g/QD6hDCeBwQCKCICkCqQBnBdB7A1QCAAsB1A6QA9AdA2AsQAxAnAnA7QAdAxAgA0QAuBfBQAlQAgAnBJgcIAMgFQBYgxAwhJQAdgzAOg/QANg5ACgyQACgEgBgMQgFglgJgnQgjhtg6hgIE7g0QgcBqAVBsQANArAGAoQAHAyACAtIABAkIgBAVQgDAjgHAiQgHAkgSAqQiHEGjdChIgdAWQiIC4i+B+IgRALQouE3qAAAIgRAAg");
	this.shape_5.setTransform(-3.8,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#7E6308").p("AIAnfQh7g2hmheQiiiriJiJQiehyj6BCQi2A9hzCTQh+CDiGB+QifB3jBAtQguAUgsAWIgjAUQjmCNggEPQgYB1AnBgQBYDxEcCRQBKAyBRApQEOCIFAApQCLASCPADQKKAJI4k3IARgLQC/h8CDi3IAegVQDkiYCfjuQAWgpAJghQALghAGgkIADgUIADgkQACgtgEg3QgEgngNgvQgShsAghpIk9AqQA4BiAhBsQAHAnADAkQAAAMgDAAQgGAygSA3QgVA9gfAtQg4BChgAwIgNAEQhLAWgpghQhQgmgthgQgfgzgdgyQgng7gxgoQg1gsg9gdQh0g7iAgtg");
	this.shape_6.setTransform(-1.7,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],1.8,-104.3,1.8,98).s().p("AkuPwQiPgDiLgSQlAgpkOiIQhRgphKgyQkciRhYjxQgnhgAYh1QAgkPDmiNIAjgUQAsgWAugUQDBgtCfh3QCGh+B+iDQBziTC2g9QD6hCCeByQCJCJCiCrQBmBeB7A2QCAAtB0A7QA9AdA1AsQAxAoAnA7IA8BlQAtBgBQAmQApAhBLgWIANgEQBggwA4hCQAfgtAVg9QASg3AGgyQADAAAAgMQgDgkgHgnQghhsg4hiIE9gqQggBpASBsQANAvAEAnQAEA3gCAtIgDAkIgDAUQgGAkgLAhQgJAhgWApQifDujkCYIgeAVQiDC3i/B8IgRALQooEup1AAIglAAg");
	this.shape_7.setTransform(-1.7,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#7E6308").p("AHqnZQh6g3hlheQihitiIiKQidhzj7BAQi2A7h0CSQh/CDiHB9QifB2jDAsQgtASgtAWIgjAUQjnCMgiEOQgaB1AnBgQBWDyEcCTQBJAzBRApQEMCKFAAsQCMATCOAEQKKANI6kyIASgKQC/h7CAi2QAOgLAQgJQDqiPC1jWQAYgjAMgfQAPghAJgjIAFgUIAHgjQAGgsAAg8QgDgngMgyQgPhsAkhoIk+AfQA0BkAgBsQAFAnACAjQgBAMgEgEQgKAxgYAzQgaA8ggAmQhBA4hoAwIgNADQhMARgzgdQhQgogshfQgggzgcgzQgmg6gxgpQg1gsg8geQh0g8iAgug");
	this.shape_8.setTransform(0.8,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],-0.6,-105.3,-0.6,97.1).s().p("AlOPwQiOgEiMgTQlAgskMiKQhRgphJgzQkciThWjyQgnhgAah1QAikODniMIAjgUQAtgWAtgSQDDgsCfh2QCHh9B/iDQB0iSC2g7QD7hACdBzQCICKChCtQBlBeB6A3QCAAuB0A8QA8AeA1AsQAxApAmA6QAcAzAgAzQAsBfBQAoQAzAdBMgRIANgDQBogwBBg4QAggmAag8QAYgzAKgxQAEAEABgMQgCgjgFgnQgghsg0hkIE+gfQgkBoAPBsQAMAyADAnQAAA8gGAsIgHAjIgFAUQgJAjgPAhQgMAfgYAjQi1DWjqCPQgQAJgOALQiAC2i/B7IgSAKQoiElprAAIg3AAg");
	this.shape_9.setTransform(0.7,4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#7E6308").p("AHVnTQh6g4hkhfQigiuiGiLQidh0j7A+Qi3A6h1CRQiACBiIB8QigB1jDAqQgtASgtAWIgjAUQjoCKglEOQgaB0AmBhQBUDyEaCWQBKAyBQArQELCLFAAvQCLAVCPAEQKKATI8kuIARgKQBhg9A+haQBGhTBYhGIAfgSQDviGDHi6QAbgkAOgcQARgdAOgiIAGgUIAKgiQAKgsAFg+QgBgpgMgzQgMhuAphlIk/AUQAxBmAdBrQADAnABAiQgBAMgFgIQgOAwgdAxQgfA4ghAgQhGAxhxAsIgNACQhNALg9gaQhQgogrhfQgfg0gcgyQgmg7gxgpQgzgtg9geQh0g9h/gvg");
	this.shape_10.setTransform(3.4,5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],-3.1,-106.3,-3.1,96.1).s().p("AluPvQiOgEiMgVQk/gvkLiLQhRgrhJgyQkbiWhUjyQglhhAah0QAlkODniKIAkgUQAsgWAugSQDCgqChh1QCHh8CBiBQB0iRC3g6QD8g+CcB0QCHCLCfCuQBlBfB6A4QB/AvBzA9QA9AeA0AtQAxApAlA7IA7BmQAsBfBPAoQA+AaBNgLIAMgCQBxgsBHgxQAgggAgg4QAdgxAOgwQAFAIAAgMQAAgigDgnQgehrgxhmIE/gUQgoBlAMBuQAMAzAAApQgFA+gKAsIgJAiIgHAUQgNAigSAdQgNAcgbAkQjIC6juCGIggASQhXBGhHBTQg+BahgA9IgSAKQoZEcpeAAIhPgBg");
	this.shape_11.setTransform(3.2,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#7E6308").p("AHDnOQh5g4hkhgQieiviGiNQibh0j8A7Qi3A5h2CQQiBCBiJB6QihB0jDApQguASgtAVIgjAUQjpCIgnEOQgbBzAlBiQBTDzEZCYQBJAyBQArQEJCOFAAxQCLAWCPAFQKKAYI+kpIASgKQBhg8A7hcQBEhTBZhDIAggSQDzh7DWihQAeghAOgZQAUgeARgfIAIgTIAMghQAPgrAJhBQACgogLg3QgKhuAthjIk/AJQAtBoAcBqQACAngBAiQgCALgFgMQgSAughAvQgkA2ggAaQhLAqh4AmIgNACQhOAFhHgXQhPgpgrhfQgeg1gcgyQglg7gxgqQgzgtg9gfQhzg+h/gwg");
	this.shape_12.setTransform(5.6,6.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.463,0.627,0.749,0.843,0.925,0.996,1],-5.3,-107.3,-5.3,95.1).s().p("AmLPuQiOgFiMgWQk/gxkKiOQhQgrhJgyQkZiYhSjzQglhiAbhzQAnkODoiIIAkgUQAtgVAtgSQDEgpChh0QCIh6CCiBQB1iQC4g5QD8g7CbB0QCFCNCfCvQBjBgB6A4QB/AwBzA+QA8AfA0AtQAxAqAkA7IA7BnQArBfBOApQBIAXBOgFIANgCQB3gmBMgqQAfgaAkg2QAigvASguQAFAMABgLQABgigBgnQgdhqgthoIFAgJQgtBjAJBuQALA3gBAoQgKBBgOArIgMAhIgJATQgQAfgVAeQgNAZgeAhQjWChjzB7IghASQhYBDhFBTQg7BchhA8IgSAKQoTETpUAAQgwAAgxgCg");
	this.shape_13.setTransform(5.4,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_4のコピー10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-23.3,-48.5,-23.3,172.2).p("AhnuNQiaiSiyBGQiWA+gDDqQARCcBjCFQBZCBB5BiQBhBSB7A+QBwBCBaBaQAGAIgFgUQCaEZhjF2IgFAlQgRB/BFAbQAqAWCYAYQB1AKAPhKQgLg0g7gXQgxgegpgjQgIgLgIgXQhEicA5jSQAgjEAFiqIgFggQgYhwhihnQhThqhChqQh1j6iVjtg");
	this.shape.setTransform(23.5,-61.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D39111").s().p("AHJPvQiYgYgqgWQhFgbARh/IAFglQBjl2iakZQAFAUgGgIQhahahwhCQh7g+hhhSQh5hihZiBQhjiFgRicQADjqCWg+QCyhGCaCSQCVDtB1D6QBCBqBTBqQBiBnAYBwIAFAgQgFCqggDEQg5DSBECcQAIAXAIALQApAjAxAeQA7AXALA0QgNBChdAAIgagCg");
	this.shape_1.setTransform(23.5,-61.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-18.7,-49.7,-18.7,171).p("AgyuPQiUiYi1A+QiYA4gNDqQAKCdBdCIQBUCFB1BnQBdBWB4BDQBtBHBXBeQAEAHgEgWQBFCQgYCzQgMCtgiClIgFAkQgUCABMAhQArAUCZAUQB1AHANhKQgNg0g8gTQgygagogjQgIgLgGgUQg3igBKjOQAvjDARipIgDgfQgRhxhfhtQhPhug+htQhrj/iKjzg");
	this.shape_2.setTransform(18.9,-60.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D39111").s().p("AGfP7QiZgUgrgUQhMghAUiAIAFgkQAiilAMitQAYizhFiQQAEAWgEgHQhXhehthHQh4hDhdhWQh1hnhUiFQhdiIgKidQANjqCYg4QC1g+CUCYQCKDzBrD/QA+BtBPBuQBfBtARBxIADAfQgRCpgvDDQhKDOA3CgQAGAUAIALQAoAjAyAaQA8ATANA0QgMBEhjAAIgTgBg");
	this.shape_3.setTransform(18.9,-60.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-14.1,-50.5,-14.1,170.2).p("AABuNQiLiei4A2QiaAxgYDpQAECdBXCMQBOCJBxBrQBZBbB1BHQBrBMBSBiQAEAHgDgaQA7CUgsCzQgeCsgqCkIgGAlQgYB/BUAmQAsAUCZAQQB1AEAMhLQgOgzg+gOQg0gXgngjQgIgLgEgQQgqikBbjJQA/i/AcioIgCgfQgJhxhchyQhLhyg6hwQhgkDiBj5g");
	this.shape_4.setTransform(14.2,-59.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D39111").s().p("AF0QEQiZgQgsgUQhUgmAYh/IAGglQAqikAeisQAsizg7iUQADAagEgHQhShihrhMQh1hHhZhbQhxhrhOiJQhXiMgEidQAYjpCagxQC4g2CLCeQCBD5BgEDQA6BwBLByQBcByAJBxIACAfQgcCog/C/QhbDJAqCkQAEAQAIALQAnAjA0AXQA+AOAOAzQgLBHhsAAIgKAAg");
	this.shape_5.setTransform(14.2,-59.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-10.2,-51.1,-10.2,169.6).p("AF1ibQhGh2g2hzQhVkGh3j+QiEiki6AuQicAqghDoQgDCeBRCPQBICMBsBwQBVBeByBNQBnBQBOBlQAFAIgDgdQAyCWhCCwQguCrgyCjIgIAkQgbB+BcAtQAtATCZAMQB1AAAKhLQgQgzg/gJQg1gTgngiQgGgMgEgMQgdinBsjDQBPi6AmilIAAgfQgChxhYh4g");
	this.shape_6.setTransform(10.4,-59.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D39111").s().p("AFBQKQiZgMgtgTQhcgtAbh+IAIgkQAyijAuirQBCiwgyiWQADAdgFgIQhOhlhnhQQhyhNhVheQhshwhIiMQhRiPADieQAhjoCcgqQC6guCECkQB3D+BVEGQA2BzBGB2QBYB4ACBxIAAAfQgmClhPC6QhsDDAdCnQAEAMAGAMQAnAiA1ATQA/AJAQAzQgKBLh0AAIgBAAg");
	this.shape_7.setTransform(10.4,-59.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-8.3,-51.3,-8.3,169.4).p("ACfCRQAoCZhWCsQhACog3ChIgJAkQgeB8BhAzQAsASCaAIQB1gDAIhLQgRgyhBgFQg2gQgmghQgHgMgBgIQgRipB9i7QBdi1AxihIADgfQAEhwhTh9QhCh6gyh1QhKkKhskDQh9iqi7AmQieAkgrDnQgJCdBKCSQBCCPBnB1QBSBhBvBSQBjBUBKBpQAEAHgBggg");
	this.shape_8.setTransform(8.5,-58.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D39111").s().p("AA0PyQhhgzAeh8IAJgkQA3ihBAioQBWisgoiZQABAggEgHQhKhphjhUQhvhShShhQhnh1hCiPQhKiSAJidQArjnCegkQC7gmB9CqQBsEDBKEKQAyB1BCB6QBTB9gEBwIgDAfQgxChhdC1Qh9C7ARCpQABAIAHAMQAmAhA2AQQBBAFARAyQgIBLh1ADQiagIgsgSg");
	this.shape_9.setTransform(8.5,-58.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-6.3,-51.3,-6.3,169.4).p("ACMCdQAfCahrCnQhOCjhBCdIgJAkQgiB8BpA5QAsAQCZAEQB1gGAGhLQgTgyhCgBQg3gMglghQgHgLAAgEQgDiqCMiyQBsiuA7idIAEgeQAMhyhPiAQg9h9gth4Qg+kNhikHQh1ivi9AfQifAdg1DkQgRCcBFCWQA8CSBiB4QBNBlBrBWQBgBZBFBsQADAHACgig");
	this.shape_10.setTransform(6.5,-58.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D39111").s().p("AgRP3Qhpg5Aih8IAJgkQBBidBOijQBringfiaQgCAigDgHQhFhshghZQhrhWhNhlQhih4g8iSQhFiWARicQA1jkCfgdQC9gfB1CvQBiEHA+ENQAtB4A9B9QBPCAgMByIgEAeQg7CdhsCuQiMCyADCqQAAAEAHALQAlAhA3AMQBCABATAyQgGBLh1AGQiZgEgsgQg");
	this.shape_11.setTransform(6.5,-58.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-4.3,-50.9,-4.3,169.8).p("AB3tmQhwi0i8AWQihAXg+DiQgXCbA+CZQA2CUBdB9QBJBoBnBaQBcBdBABuQADAIAEglQAVCah+CgQhfCfhHCZIgLAjQgkB5BvBAQAuAPCXAAQB1gIAEhMQgUgxhEAEQg5gJgkggQgGgMAAAAQAKipCbioQB6imBGiYIAGgeQARhwhJiEQg4iCgoh6QgaiHgSiOQgaiKhDh7g");
	this.shape_12.setTransform(4.5,-59.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D39111").s().p("AhWP4QhvhAAkh5IALgjQBHiZBfifQB+iggViaQgEAlgDgIQhAhuhchdQhnhahJhoQhdh9g2iUQg+iZAXibQA+jiChgXQC8gWBwC0QBDB7AaCKQASCOAaCHQAoB6A4CCQBJCEgRBwIgGAeQhGCYh6CmQibCogKCpIAGAMQAkAgA5AJQBEgEAUAxQgEBMh1AIQiXAAgugPg");
	this.shape_13.setTransform(4.5,-59.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-2.1,-49.1,-2.1,171.6).p("ACStqQhoi5i9AOQihAPhJDfQgdCaA2CbQAwCWBWCBQBEBsBjBfQBXBhA8BxQADAIACgeQAWCdhuCnQhTClhACcIgJAkQggB7BuA7QAuAOCYgCQB0gLADhLQgVgyhDAEQg5gIglggQgHgLAAgCQACipCPisQBviqBDiaIAGgfQAShyhCiDQgxiBghh6QgUiJgLiOQgUiLg9h+g");
	this.shape_14.setTransform(2.2,-61.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D39111").s().p("AhFQLQhug7Agh7IAJgkQBAicBTilQBuingWidQgCAegDgIQg8hxhXhhQhjhfhEhsQhWiBgwiWQg2ibAdiaQBJjfChgPQC9gOBoC5QA9B+AUCLQALCOAUCJQAhB6AxCBQBCCDgSByIgGAfQhDCahvCqQiPCsgCCpQAAACAHALQAlAgA5AIQBDgEAVAyQgDBLh0ALIgrAAQhzAAgogMg");
	this.shape_15.setTransform(2.2,-61.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],0.2,-47.2,0.2,173.5).p("ACttsQhfi9i9AFQiiAHhTDbQgkCZAvCeQAoCYBRCFQA/BuBfBkQBSBlA2BzQADAJACgWQAXCfhgCuQhHCpg3CgIgIAkQgcB8BuA2QAuAOCYgFQB0gNABhLQgVgxhDAEQg4gIgngfQgHgLAAgDQgHipCBixQBlisBBidIAGgfQARhzg5iCQgqiAgbh6QgNiJgFiPQgNiMg4iBg");
	this.shape_16.setTransform(-0.1,-63);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D39111").s().p("AgyQbQhug2Ach8IAIgkQA3igBHipQBgiugXifQgCAWgDgJQg2hzhShlQhfhkg/huQhRiFgoiYQgvieAkiZQBTjbCigHQC9gFBfC9QA4CBANCMQAFCPANCJQAbB6AqCAQA5CCgRBzIgGAfQhBCdhlCsQiBCxAHCpQAAADAHALQAnAfA4AIQBDgEAVAxQgBBLh0ANIhMABQhZAAghgKg");
	this.shape_17.setTransform(-0.1,-63);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],2.6,-45,2.6,175.7).p("ADJtsQhXjBi9gEQiiAAhdDXQgsCXApCgQAhCaBKCIQA6BxBaBoQBOBpAxB2QABAIADgNQAXCfhOC1Qg9CvgvCiIgHAkQgYB+BtAxQAtANCZgIQB1gOgBhMQgWgwhCAEQg4gIgogeQgHgLgBgEQgPipB0i0QBZivA/ifIAGgfQARh0gxiAQgjh/gUh6QgGiKABiPQgHiMgxiEg");
	this.shape_18.setTransform(-2.5,-65.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D39111").s().p("AggQqQhtgxAYh+IAHgkQAviiA9ivQBOi1gXifQgDANgBgIQgxh2hOhpQhahog6hxQhKiIghiaQgpigAsiXQBdjXCiAAQC9AEBXDBQAxCEAHCMQgBCPAGCKQAUB6AjB/QAxCAgRB0IgGAfQg/CfhZCvQh0C0APCpQABAEAHALQAoAeA4AIQBCgEAWAwQABBMh1AOQg6ADgrAAQhEAAgdgIg");
	this.shape_19.setTransform(-2.5,-65.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],5.1,-42.7,5.1,178).p("AEQpXQgBiNgriFQhNjFi9gNQiigIhmDTQgzCUAhCiQAaCbBECMQA0BzBWBsQBKBtAqB4QABAIACgFQAYCgg/C6QgwC0gnCkIgFAlQgUB/BsAsQAsAMCagKQB0gRgBhLQgXgwhCAEQg4gHgpgeQgHgKgCgGQgYioBmi2QBPiyA8ihIAGgfQARh0gph/Qgch9gNh6QAAiKAIiOg");
	this.shape_20.setTransform(-5,-67.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D39111").s().p("AgMQ2QhsgsAUh/IAFglQAnikAwi0QA/i6gYigQgCAFgBgIQgqh4hKhtQhWhsg0hzQhEiMgaibQghiiAziUQBmjTCiAIQC9ANBNDFQArCFABCNQgICOAACKQANB6AcB9QApB/gRB0IgGAfQg8ChhPCyQhmC2AYCoQACAGAHAKQApAeA4AHQBCgEAXAwQABBLh0ARQhGAEgvAAQg6AAgXgGg");
	this.shape_21.setTransform(-5,-67.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],7.4,-40.2,7.4,180.5).p("AEcpSQAGiMgliHQhEjJi8gVQihgPhxDNQg5CTAaCiQASCcA+CPQAvB2BQBwQBFBwAkB6IAEALQAYCggwDAQgkC3geCnIgEAkQgPCABpAoQAuALCZgNQB0gSgChMQgYgvhBAEQg4gHgqgcQgIgLgCgHQghimBZi5QBDizA5iiIAGggQARh1ggh8QgWh8gFh5QAGiKAOiOg");
	this.shape_22.setTransform(-7.3,-70);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D39111").s().p("AAERAQhpgoAPiAIAEgkQAeinAki3QAwjAgYigIgEgLQgkh6hFhwQhQhwgvh2Qg+iPgSicQgaiiA5iTQBxjNChAPQC8AVBEDJQAlCHgGCMQgOCOgGCKQAFB5AWB8QAgB8gRB1IgGAgQg5CihDCzQhZC5AhCmQACAHAIALQAqAcA4AHQBBgEAYAvQACBMh0ASQhSAHg0AAQgsAAgVgFg");
	this.shape_23.setTransform(-7.3,-70);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],8.1,-37.5,8.1,183.2).p("AEZpKQAMiMgfiJQg7jLi8geQifgWh6DIQg/CPARCkQAMCdA3CRQApB4BLBzQBBBzAgB8IACATQAZChgiDEIgtFjIgDAkQgLCBBoAjQAuAKCZgPQBzgUgDhMQgZgvhAAFQg4gHgrgcQgIgKgDgIQgqikBLi7QA3i1A3ijIAGgfQAQh1gXh6QgOh6ABh4QANiKAViNg");
	this.shape_24.setTransform(-8,-72.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D39111").s().p("AAGRIQhogjALiBIADgkIAtljQAijEgZihIgCgTQggh8hBhzQhLhzgph4Qg3iRgMidQgRikA/iPQB6jICfAWQC8AeA7DLQAfCJgMCMQgVCNgNCKQgBB4AOB6QAXB6gQB1IgGAfQg3Cjg3C1QhLC7AqCkQADAIAIAKQArAcA4AHQBAgFAZAvQADBMhzAUQhcAJg1AAQgkAAgSgEg");
	this.shape_25.setTransform(-8,-72.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],1.1,-45.2,1.1,175.5).p("AC4t3Qhci/i9ACQiiAFhXDaQgnCXAtCfQAlCZBPCGQA9BvBdBlQBRBnA1B0QABAIACgIQAiCeg4C6QgoCzgiClIgGAkQgSCABlApQAuANCZgFQB0gNABhMQgVgwhBAAQg3gKgpgeQgIgLgCgIQgginBgi8QBIi1AzikIAEgfQAKh2gzh7Qgmh8gWh5QgLiKgDiOQgLiNg1iBg");
	this.shape_26.setTransform(-1,-65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D39111").s().p("AAwQsQhlgpASiAIAGgkIBKlYQA4i6giieQgCAIgBgIQg1h0hRhnQhdhlg9hvQhPiGgliZQgtifAniXQBXjaCigFQC9gCBcC/QA1CBALCNQADCOALCKQAWB5AmB8QAzB7gKB2IgEAfQgzCkhIC1QhgC8AgCnQACAIAIALQApAeA3AKQBBAAAVAwQgBBMh0ANIhRABQhWAAgggJg");
	this.shape_27.setTransform(-1,-65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-7.2,-51.6,-7.2,169.1).p("ACTCXQApCZhOCwQg6CrgzCiIgFAkQgaB+BiAwQAtAQCaADQB1gFAFhMQgTgyhAgDQg3gOgnggQgHgMgCgIQgVioB1i9QBXi2AviiIACggQAEhxhOh8Qg/h6gth2QhEkLhlkGQh5iti8AiQifAggxDlQgNCdBHCUQA/CRBkB3QBPBjBsBUQBiBYBHBpQADAJAAgcg");
	this.shape_28.setTransform(7.3,-58.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D39111").s().p("ABEP/QhigwAah+IAFgkQAziiA6irQBOiwgpiZQAAAcgDgJQhHhphihYQhshUhPhjQhkh3g/iRQhHiUANidQAxjlCfggQC8giB5CtQBlEGBEELQAtB2A/B6QBOB8gEBxIgCAgQgvCihXC2Qh1C9AVCoQACAIAHAMQAnAgA3AOQBAADATAyQgFBMh1AFQiagDgtgQg");
	this.shape_29.setTransform(7.3,-58.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-14.5,-56.5,-14.5,164.2).p("ADiBzQAvCShkCnQhKCjhCCeIgKAkQgfB8BeA2QAtATCZAMQB1ACAKhLQgQgzhAgHQg2gRgkgjQgHgMgBgIQgLiqCHi+QBmi2ArifIABgeQgChuhph2QhVh1hEhvQhvj8iOjxQiWiVi0BAQiXA7gKDqQANCcBfCHQBWCDB3BlQBeBVB3BAQBxBGBYBcQAEAIgEgug");
	this.shape_30.setTransform(14.6,-53.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D39111").s().p("AEbPiQiZgMgsgTQhfg2Agh8IAKgkQBCieBKijQBkingviSQAEAugEgIQhZhchwhGQh3hAhehVQh3hlhWiDQhfiHgNicQAKjqCXg7QC0hACVCVQCPDxBvD8QBDBvBWB1QBpB2ACBuIgBAeQgrCfhmC2QiHC+ALCqQABAIAHAMQAkAjA2ARQBAAHAPAzQgJBJhxAAIgFAAg");
	this.shape_31.setTransform(14.7,-53.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-21,-60.2,-21,160.5).p("AGmjUQhqhrhZhlQiYjmi0jVQith7imBeQiLBTAdDoQAnCZB1B0QBqB0CGBPQBrBECAArQB8AyBmBMQADADgFggQgDgXAAgFQA1CJh7CfQhbCbhRCbIgLAjQgqB6BeA7QArAWCYAWQB0AIAPhKQgMgzhAgLQg1gVgiglQgGgMgBgIQAAiqCZjAQBzi2AniaIgBgdQgIhoiBhsg");
	this.shape_32.setTransform(21.1,-50);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D39111").s().p("AEkOlQiYgWgrgWQheg7Aqh6IALgjQBRibBbibQB7ifg1iJIADAcQAFAggDgDQhmhMh8gyQiAgrhrhEQiGhPhqh0Qh1h0gniZQgdjoCLhTQCmheCtB7QC0DVCYDmQBZBlBqBrQCBBsAIBoIABAdQgnCahzC2QiZDAAACqQABAIAGAMQAiAlA1AVQBAALAMAzQgNBDhfAAIgXgBg");
	this.shape_33.setTransform(21.1,-50);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-26,-62.7,-26,158).p("ADUm4Qi8jKjWi0Qi/hbiUB4Qh8BpBEDgQBACQCHBfQB8BgCRA4QB1AxCGAVQCCAcByA7QAEADgQhOQA4B+iQCXQhtCUheCYIgOAiQgxB2BaBCQApAYCXAfQB0AQAThJQgJg1g/gOQgzgYghgnQgFgNAAgIQAKipCpjBQB/i2AkiQIgDgbQgMhkiXheQh9hfhrhXg");
	this.shape_34.setTransform(26.1,-47.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D39111").s().p("AEmNbQiXgfgpgYQhahCAxh2IAOgiQBeiYBtiUQCQiXg4h+QAQBOgEgDQhyg7iCgcQiGgVh1gxQiRg4h8hgQiHhfhAiQQhEjgB8hpQCUh4C/BbQDWC0C8DKQBrBXB9BfQCXBeAMBkIADAbQgkCQh/C2QipDBgKCpQAAAIAFANQAhAnAzAYQA/AOAJA1QgQA8hSAAQgRAAgUgDg");
	this.shape_35.setTransform(26.1,-47.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-29.5,-64.3,-29.5,156.4).p("ADCnHQjZinjyiNQjMg7h+CQQhoB8BoDSQBXCCCVBIQCLBKCYAfQB6AdCJgDQCBAIB2AiQADgQAAgPQgGgTgJgjQAOAbABAbQAIAjgDgBQgEgCgEgBQgPBPhpBbQh9CMhsCVIgQAhQg4B0BWBGQAoAbCUAoQBzAXAYhIQgGg1g+gTQgygagegpQgEgNAAgIQAUipC3jBQCLi1AgiHIgDgZQgRhbiphOQiNhOh8hIg");
	this.shape_36.setTransform(29.7,-45.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D39111").s().p("AEfMIQiUgogogbQhWhGA4h0IAQghQBsiVB9iMQBphbAPhPIAIADQADABgIgjQgBgbgOgbIAPA2QAAAPgDAQQh2giiBgIQiJADh6gdQiYgfiLhKQiVhIhXiCQhojSBoh8QB+iQDMA7QDyCNDZCnQB8BICNBOQCpBOARBbIADAZQggCHiLC1Qi3DBgUCpQAAAIAEANQAeApAyAaQA+ATAGA1QgSA2hHAAQgWAAgcgFg");
	this.shape_37.setTransform(29.7,-45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_4のコピー7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],26,-102.9,26,117.8).p("AjkNKQA9icDAhvQCkh3B1h6IAQgaQA3hlgRiVQgEiIAKh/QAbiIAliKQAciKgQiLQgkjRi4gzQidgoiNC6QhQCIAACkQgGCeAnCXQAcB8A+B7QAxB5ASB/QAAAIANgcQghCairB4QiPB+hpCAIgSAgQg+BsBlBgQArAWCXAXQB1AKAQhKQgMg0hIgEQg5gQgcglQgCgGAAgCQgBgBAAAD");
	this.shape.setTransform(-25.9,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D59211").s().p("Ai+P/QiXgXgrgWQhlhgA+hsIASggQBpiACPh+QCrh4AhiaQgNAcAAgIQgSh/gxh5Qg+h7gch8QgniXAGieQAAikBQiIQCNi6CdAoQC4AzAkDRQAQCLgcCKQglCKgbCIQgKB/AECIQARCVg3BlIgQAaQh1B6ikB3QjABvg9CcIgBAAIAAAAIAAAAIAAAAIAAAAIAAACIAAgCIAAAAIAAAAIAAAAIAAAAIABAAIACAIQAcAlA5AQQBIAEAMA0QgOBBhdAAIgagBg");
	this.shape_1.setTransform(-25.9,-7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],12.1,-104.1,12.1,116.6).p("AEtsuQhHjIi+gUQiggNhuDPQg4CTAcCjQAUCcBACOQAwB2BRBvQBFBvAnB6QACAIAMglQgOCbigB9QiFCDhoCEIgSAgQg/BuBeBZQAqAYCWAiQB0ARAShJQgHg1hEgLQg2gVgcgnQgDgMAAAAQAyiiC9h+QCeiFBmiEIANgcQArhpgsiUQgaiJgNiAQAFiLANiOQAEiMgmiHg");
	this.shape_2.setTransform(-12,-6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D59211").s().p("AiBQJQiWgigqgYQhehZA/huIASggQBoiECFiDQCgh9AOibQgMAlgCgIQgnh6hFhvQhRhvgwh2QhAiOgUicQgcijA4iTQBujPCgANQC+AUBHDIQAmCHgECMQgNCOgFCLQANCAAaCJQAsCUgrBpIgNAcQhmCEieCFQi9B+gyCiIADAMQAcAnA2AVQBEALAHA1QgOA7hQAAQgSAAgWgDg");
	this.shape_3.setTransform(-12,-6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-1.8,-103.7,-1.8,117).p("ACVtYQhni6i9ANQihAOhKDeQgfCbA2CbQAuCXBXCCQBDBrBjBfQBWBjA7ByQADAHAIgtQAFCZiUCDQh6CHhoCIIgSAgQg+BwBWBRQAoAbCTArQBxAYAYhIQgFg1g+gRQgygagcgqQgDgMAAgFQAnilC3iPQCWiSBXiLIAJgdQAehshFiNQgxiIgjh+QgTiJgLiOQgTiLg8h/g");
	this.shape_4.setTransform(2,-6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D59211").s().p("AhMQBQiTgrgogbQhWhRA+hwIASggQBoiIB6iHQCUiDgFiZQgIAtgDgHQg7hyhWhjQhjhfhDhrQhXiCguiXQg2ibAfibQBKjeChgOQC9gNBnC6QA8B/ATCLQALCOATCJQAjB+AxCIQBFCNgeBsIgJAdQhXCLiWCSQi3CPgnClQAAAFADAMQAcAqAyAaQA+ARAFA1QgSA2hDAAQgXAAgdgGg");
	this.shape_5.setTransform(2,-6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-9.7,-101.8,-9.7,118.9).p("AD6loQhSkHh0kBQiDili5AsQidApgkDnQgFCeBQCQQBGCNBrBxQBUBgByBNQBmBSBNBmQAEAIADg3QAWCViKCKQhsCLhoCLIgSAhQg/BwBPBKQAmAeCPAzQBxAfAdhGQgCg1g8gYQgvgfgbgrQgDgOAAgJQAbinCyigQCNieBHiSIAGgdQAQhshdiFQhIiAg5h4g");
	this.shape_6.setTransform(9.8,-8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D59211").s().p("AAePqQiPgzgmgeQhPhKA/hwIASghQBoiLBsiLQCKiKgWiVQgDA3gEgIQhNhmhmhSQhyhNhUhgQhrhxhGiNQhQiQAFieQAkjnCdgpQC5gsCDClQB0EBBSEHQA5B4BICAQBdCFgQBsIgGAdQhHCSiNCeQiyCggbCnQAAAJADAOQAbArAvAfQA8AYACA1QgUAxg9AAQgaAAgjgKg");
	this.shape_7.setTransform(9.8,-8.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-16.7,-98.4,-16.7,122.3).p("AIJAxQADhqhzh5Qheh2hMhuQh9j2icjpQieiNiwBKQiUBDAEDqQAVCcBnCBQBdB/B8BeQBjBQB7A6QB0A/BdBYQADAEgCg8QAnCPh+CQQhjCQhkCPIgSAgQg+ByBGBBQAkAgCLA8QBvAmAhhEQACg1g3gfQgrgkgbgtQgEgMABgQQAPioCpiwQCDirA2iVg");
	this.shape_8.setTransform(16.9,-11.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D59211").s().p("ACEPFQiLg8gkggQhGhBA+hyIASggQBkiPBjiQQB+iQgniPQACA8gDgEQhdhYh0g/Qh7g6hjhQQh8hehdh/QhniBgVicQgEjqCUhDQCwhKCeCNQCcDpB9D2QBMBuBeB2QBzB5gDBqIgCAdQg2CViDCrQipCwgPCoQgBAQAEAMQAbAtArAkQA3AfgCA1QgVAsg1AAQgeAAgogOg");
	this.shape_9.setTransform(16.9,-11.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-22.8,-93.7,-22.8,127).p("ABggWQB9ArBrBHQADADgGgjQgEgZAAgGQA2CGhxCYQhYCUhkCSIgSAgQg8BxA9A6QAiAiCJBFQBsAtAlhCQAFg1gygmQgogogagvQgDgNAAgUQADiqCfi/QB3i3AmiVIgCgdQgJhoiJhoQhwhnhfhiQiljei/jLQi0hxihBnQiHBaAqDnQAwCWB6BuQByBuCJBIQBvA+CDAkg");
	this.shape_10.setTransform(22.9,-16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D59211").s().p("ADkOTQiJhFgigiQg9g6A8hxIASggQBkiSBYiUQBxiYg2iGIAEAfQAGAjgDgDQhrhHh9grQiDgkhvg+QiJhIhyhuQh6hugwiWQgqjnCHhaQChhnC0BxQC/DLClDeQBfBiBwBnQCJBoAJBoIACAdQgmCVh3C3QifC/gDCqQAAAUADANQAaAvAoAoQAyAmgFA1QgWAngvAAQggAAgsgSg");
	this.shape_11.setTransform(22.9,-16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-27.5,-87.9,-27.5,132.8).p("ADNnkQjHi/jfipQjEhRiOCAQh1BvBQDdQBHCLCMBZQCBBaCUAvQB2ArCJAOQCDAXB1AyQAEAEgVhGQBEB5hkCfQhMCZhiCUIgRAgQg9ByA1AwQAgAkCFBOQBpAzApg/QAIg1gugrQgjgugZgwQgEgNABgZQgJipCSjPQBqjCAWiVIgFgbQgVhkibhUQiBhWhvhRg");
	this.shape_12.setTransform(27.6,-22.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D59211").s().p("AE8NVQiFhOgggkQg1gwA9hyIARggQBiiUBMiZQBkifhEh5QAVBGgEgEQh1gyiDgXQiJgOh2grQiUgviBhaQiMhZhHiLQhQjdB1hvQCOiADEBRQDfCpDHC/QBvBRCBBWQCbBUAVBkIAFAbQgWCVhqDCQiSDPAJCpQgBAZAEANQAZAwAjAuQAuArgIA1QgXAjgqAAQgiAAgvgXg");
	this.shape_13.setTransform(27.6,-22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-26,-90.8,-26,129.9).p("ADTneQi8jLjUi2Qi+hdiVB3Qh9BoBDDhQA/CQCFBhQB8BhCRA5QB1AyCGAWQCCAfBxA5QAEADgSg9QBGB9hVCkQg+CdhWCZIgQAhQg2B1A4AuQAiAiCKBFQBsAsAlhBQAFg1gwgpQgmgsgdguQgEgMgBgaQgTioCEjSQBejDAUiaIgFgcQgWhniShYQh7hahohWg");
	this.shape_14.setTransform(26.2,-19.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D59211").s().p("AFiN3QiKhFgigiQg4guA2h1IAQghQBWiZA+idQBVikhGh9QASA9gEgDQhxg5iCgfQiGgWh1gyQiRg5h8hhQiFhhg/iQQhDjhB9hoQCVh3C+BdQDUC2C8DLQBoBWB7BaQCSBYAWBnIAFAcQgUCaheDDQiEDSATCoQABAaAEAMQAdAuAmAsQAwApgFA1QgWAngwAAQggAAgrgSg");
	this.shape_15.setTransform(26.2,-19.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-24.4,-93.5,-24.4,127.2).p("ABtgoQB/AnBuBAQAGAGgRg5QBICDhFCoQgxChhLCcIgNAiQgvB4A7ArQAkAfCNA9QBvAmAhhEQACg1gzgmQgogpgggsQgFgMgCgaQgdinB2jSQBSjGARidIgFgdQgXhriJhcQh0hehhhaQivjWjJjCQi4hpicBuQiDBgA1DlQA2CUCABoQB2BoCNBCQBxA5CFAeg");
	this.shape_16.setTransform(24.6,-16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D59211").s().p("AGGOVQiNg9gkgfQg7grAvh4IANgiQBLicAxihQBFiohIiDQARA5gGgGQhuhAh/gnQiFgehxg5QiNhCh2hoQiAhog2iUQg1jlCDhgQCchuC4BpQDJDCCvDWQBhBaB0BeQCJBcAXBrIAFAdQgRCdhSDGQh2DSAdCnQACAaAFAMQAgAsAoApQAzAmgCA1QgVAsg1AAQgdAAgpgOg");
	this.shape_17.setTransform(24.6,-16.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-22.6,-95.9,-22.6,124.8).p("ABYglQB9AsBpBJQAGAGgOgwQBKCGg0CsQgkCkg/CgIgLAiQgnB7A9AnQAmAdCRA0QBxAfAdhGQgCg1g1gjQgrgmgigqQgGgMgDgZQgoilBojUQBGjGANihIgFgeQgXhsiAhgQhshhhahfQihjgi9jPQixhzijBkQiIBZAnDnQAuCWB4BwQBvBvCJBLQBuBACCAmg");
	this.shape_18.setTransform(22.7,-14.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D59211").s().p("AGrOxQiQg0gngdQg9gnAnh7IALgiQA/igAkikQA0ishKiGQAOAwgFgGQhqhJh9gsQiCgmhuhAQiJhLhuhvQh5hwguiWQgnjnCIhZQCjhkCxBzQC9DPChDgQBbBfBrBhQCABgAYBsIAEAeQgNChhGDGQhoDUAoClQADAZAGAMQAiAqArAmQA1AjACA1QgUAxg8AAQgbAAgjgKg");
	this.shape_19.setTransform(22.7,-14.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-22.8,-98,-22.8,122.7).p("AAtgjQB6A0BlBPQAGAGgLgmQBLCJgkCvQgWCngzCiIgJAjQggB8BBAkQAnAbCUAqQByAYAZhHQgFg1g3gfQgugkgkgoQgGgLgGgZQgwiiBYjUQA5jGALikIgFgfQgXhvh3hiQhkhkhShkQiTjpiwjaQirh+ioBbQiNBQAZDpQAkCZByB3QBnB2CFBSQBqBGB/Aug");
	this.shape_20.setTransform(23,-12.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D59211").s().p("AG4PJQiUgqgngbQhBgkAgh8IAJgjQAziiAWinQAkivhLiJQALAmgGgGQhlhPh6g0Qh/guhqhGQiFhShnh2Qhyh3gkiZQgZjpCNhQQCohbCrB+QCwDaCTDpQBSBkBkBkQB3BiAXBvIAFAfQgLCkg5DGQhYDUAwCiQAGAZAGALQAkAoAuAkQA3AfAFA1QgSA1hFAAQgXAAgdgGg");
	this.shape_21.setTransform(23,-12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-23.2,-99.9,-23.2,120.8).p("AAAggQB3A7BfBVQAGAGgIgdQBMCLgTCxQgICpgmCkIgHAkQgZB+BDAgQApAYCWAiQB0ARAUhJQgIg1g5gbQgwghgnglQgHgLgHgZQg6ifBJjTQAsjGAJioIgFgdQgYhxhthlQhbhnhLhnQiEjyijjkQiiiIiuBQQiRBHAKDqQAbCcBqB9QBhB8B/BaQBmBNB8A2g");
	this.shape_22.setTransform(23.3,-10.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D59211").s().p("AHBPeQiWgigpgYQhDggAZh+IAHgkQAmikAIipQATixhMiLQAIAdgGgGQhfhVh3g7Qh8g2hmhNQh/hahhh8Qhqh9gbicQgKjqCRhHQCuhQCiCIQCjDkCEDyQBLBnBbBnQBtBlAYBxIAFAdQgJCogsDGQhJDTA6CfQAHAZAHALQAnAlAwAhQA5AbAIA1QgRA7hPAAQgSAAgWgDg");
	this.shape_23.setTransform(23.3,-10.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-23.3,-101.4,-23.3,119.3).p("AGyAFQgYhwhihnQhThqhChqQh1j6iVjtQiaiSiyBGQiWA+gDDqQARCcBjCFQBZCBB5BiQBhBSB7A+QBwBCBaBaQAGAIgFgUQCaEZhjF2IgFAlQgRB/BFAbQAqAWCYAYQB1AKAPhKQgLg0g7gXQgxgegpgjQgIgLgIgXQhEicA5jSQAgjEAFiqg");
	this.shape_24.setTransform(23.5,-8.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D59211").s().p("AHJPvQiYgYgqgWQhFgbARh/IAFglQBjl2iakZQAFAUgGgIQhahahwhCQh7g+hhhSQh5hihZiBQhjiFgRicQADjqCWg+QCyhGCaCSQCVDtB1D6QBCBqBTBqQBiBnAYBwIAFAgQgFCqggDEQg5DSBECcQAIAXAIALQApAjAxAeQA7AXALA0QgNBChdAAIgagCg");
	this.shape_25.setTransform(23.5,-8.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-18.7,-102.6,-18.7,118.1).p("AHAAcQgRhxhfhtQhPhug+htQhrj/iKjzQiUiYi1A+QiYA4gNDqQAKCdBdCIQBUCFB1BnQBdBWB4BDQBtBHBXBeQAEAHgEgWQBFCQgYCzQgMCtgiClIgFAkQgUCABMAhQArAUCZAUQB1AHANhKQgNg0g8gTQgygagogjQgIgLgGgUQg3igBKjOQAvjDARipg");
	this.shape_26.setTransform(18.9,-7.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D59211").s().p("AGfP7QiZgUgrgUQhMghAUiAIAFgkQAiilAMitQAYizhFiQQAEAWgEgHQhXhehthHQh4hDhdhWQh1hnhUiFQhdiIgKidQANjqCYg4QC1g+CUCYQCKDzBrD/QA+BtBPBuQBfBtARBxIADAfQgRCpgvDDQhKDOA3CgQAGAUAIALQAoAjAyAaQA8ATANA0QgMBEhjAAIgTgBg");
	this.shape_27.setTransform(18.9,-7.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-14.1,-103.4,-14.1,117.3).p("AFnivQhLhyg6hwQhgkDiBj5QiLiei4A2QiaAxgYDpQAECdBXCMQBOCJBxBrQBZBbB1BHQBrBMBSBiQAEAHgDgaQA7CUgsCzQgeCsgqCkIgGAlQgYB/BUAmQAsAUCZAQQB1AEAMhLQgOgzg+gOQg0gXgngjQgIgLgEgQQgqikBbjJQA/i/AcioIgCgfQgJhxhchyg");
	this.shape_28.setTransform(14.2,-6.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D59211").s().p("AF0QEQiZgQgsgUQhUgmAYh/IAGglQAqikAeisQAsizg7iUQADAagEgHQhShihrhMQh1hHhZhbQhxhrhOiJQhXiMgEidQAYjpCagxQC4g2CLCeQCBD5BgEDQA6BwBLByQBcByAJBxIACAfQgcCog/C/QhbDJAqCkQAEAQAIALQAnAjA0AXQA+AOAOAzQgLBHhsAAIgKAAg");
	this.shape_29.setTransform(14.2,-6.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-10.2,-104,-10.2,116.7).p("AD5mEQhVkGh3j+QiEiki6AuQicAqghDoQgDCeBRCPQBICMBsBwQBVBeByBNQBnBQBOBlQAFAIgDgdQAyCWhCCwQguCrgyCjIgIAkQgbB+BcAtQAtATCZAMQB1AAAKhLQgQgzg/gJQg1gTgngiQgGgMgEgMQgdinBsjDQBPi6AmilIAAgfQgChxhYh4QhGh2g2hzg");
	this.shape_30.setTransform(10.4,-6.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D59211").s().p("AFBQKQiZgMgtgTQhcgtAbh+IAIgkQAyijAuirQBCiwgyiWQADAdgFgIQhOhlhnhQQhyhNhVheQhshwhIiMQhRiPADieQAhjoCcgqQC6guCECkQB3D+BVEGQA2BzBGB2QBYB4ACBxIAAAfQgmClhPC6QhsDDAdCnQAEAMAGAMQAnAiA1ATQA/AJAQAzQgKBLh0AAIgBAAg");
	this.shape_31.setTransform(10.4,-6.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-8.3,-104.2,-8.3,116.5).p("AD7lzQhKkKhskDQh9iqi7AmQieAkgrDnQgJCdBKCSQBCCPBnB1QBSBhBvBSQBjBUBKBpQAEAHgBggQAoCZhWCsQhACog3ChIgJAkQgeB8BhAzQAsASCaAIQB1gDAIhLQgRgyhBgFQg2gQgmghQgHgMgBgIQgRipB9i7QBdi1AxihIADgfQAEhwhTh9QhCh6gyh1g");
	this.shape_32.setTransform(8.5,-6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D59211").s().p("AA0PyQhhgzAeh8IAJgkQA3ihBAioQBWisgoiZQABAggEgHQhKhphjhUQhvhShShhQhnh1hCiPQhKiSAJidQArjnCegkQC7gmB9CqQBsEDBKEKQAyB1BCB6QBTB9gEBwIgDAfQgxChhdC1Qh9C7ARCpQABAIAHAMQAmAhA2AQQBBAFARAyQgIBLh1ADQiagIgsgSg");
	this.shape_33.setTransform(8.5,-6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-6.3,-104.2,-6.3,116.5).p("AD+lhQg+kNhikHQh1ivi9AfQifAdg1DkQgRCcBFCWQA8CSBiB4QBNBlBrBWQBgBZBFBsQADAHACgiQAfCahrCnQhOCjhBCdIgJAkQgiB8BpA5QAsAQCZAEQB1gGAGhLQgTgyhCgBQg3gMglghQgHgLAAgEQgDiqCMiyQBsiuA7idIAEgeQAMhyhPiAQg9h9gth4g");
	this.shape_34.setTransform(6.5,-6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D59211").s().p("AgRP3Qhpg5Aih8IAJgkQBBidBOijQBringfiaQgCAigDgHQhFhshghZQhrhWhNhlQhih4g8iSQhFiWARicQA1jkCfgdQC9gfB1CvQBiEHA+ENQAtB4A9B9QBPCAgMByIgEAeQg7CdhsCuQiMCyADCqQAAAEAHALQAlAhA3AMQBCABATAyQgGBLh1AGQiZgEgsgQg");
	this.shape_35.setTransform(6.5,-6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-4.3,-103.8,-4.3,116.9).p("AB3tmQhwi0i8AWQihAXg+DiQgXCbA+CZQA2CUBdB9QBJBoBnBaQBcBdBABuQADAIAEglQAVCah+CgQhfCfhHCZIgLAjQgkB5BvBAQAuAPCXAAQB1gIAEhMQgUgxhEAEQg5gJgkggQgGgMAAAAQAKipCbioQB6imBGiYIAGgeQARhwhJiEQg4iCgoh6QgaiHgSiOQgaiKhDh7g");
	this.shape_36.setTransform(4.5,-6.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D59211").s().p("AhWP4QhvhAAkh5IALgjQBHiZBfifQB+iggViaQgEAlgDgIQhAhuhchdQhnhahJhoQhdh9g2iUQg+iZAXibQA+jiChgXQC8gWBwC0QBDB7AaCKQASCOAaCHQAoB6A4CCQBJCEgRBwIgGAeQhGCYh6CmQibCogKCpIAGAMQAkAgA5AJQBEgEAUAxQgEBMh1AIQiXAAgugPg");
	this.shape_37.setTransform(4.5,-6.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-0.8,-104.6,-0.8,116.1).p("AChtcQhji7i9AIQiiALhODdQgiCZAzCdQArCYBTCDQBBBtBhBiQBUBjA5BzQADAHAFgjQAMCciFCZQhpCZhQCVIgMAiQgrB3BrBHQAtARCXAJQB1gCAIhLQgRgzhEAAQg4gMghgiIgFgMQAUipCiieQCDieBOiUIAIgdQAZhwg/iIQgviEgeh9QgQiJgIiOQgQiMg6iAg");
	this.shape_38.setTransform(0.9,-5.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D59211").s().p("AinP2QhrhHArh3IAMgiQBQiVBpiZQCFiZgMicQgFAjgDgHQg5hzhUhjQhhhihBhtQhTiDgriYQgzidAiiZQBOjdCigLQC9gIBjC7QA6CAAQCMQAICOAQCJQAeB9AvCEQA/CIgZBwIgIAdQhOCUiDCeQiiCegUCpIAFAMQAhAiA4AMQBEAAARAzQgIBLh1ACQiXgJgtgRg");
	this.shape_39.setTransform(0.9,-5.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],2.8,-105.1,2.8,115.6).p("ADLtNQhVjCi9gFQiigBhfDXQgsCWAnCgQAgCaBKCJQA5ByBZBoQBPBqAuB2QACAIAIgiQABCdiMCRQhxCThYCRIgOAhQgyB1BnBMQAsAUCZARQBzAFAMhLQgOgzhDgEQg3gPgggkQgFgMAAAAQAeinCpiVQCLiWBYiOIAKgeQAhhtg2iMQgliHgVh+QgGiKADiPQgGiMgxiEg");
	this.shape_40.setTransform(-2.7,-5.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D59211").s().p("AgyQUQiZgRgsgUQhnhMAyh1IAOghQBYiRBxiTQCMiRgBidQgIAigCgIQguh2hPhqQhZhog5hyQhKiJggiaQgnigAsiWQBfjXCiABQC9AFBVDCQAxCEAGCMQgDCPAGCKQAVB+AlCHQA2CMghBtIgKAeQhYCOiLCWQipCVgeCnIAFAMQAgAkA3APQBDAEAOAzQgMBHhmAAIgNgBg");
	this.shape_41.setTransform(-2.7,-5.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],9.8,-105.1,9.8,115.6).p("AEVs5QhHjIi+gTQifgNhuDPQg3CTAbCjQAVCcBACOQAwB1BSBuQBFBvAnB6QACAIAJggQgJCdiTCKQh5CMhgCLIgQAhQg4ByBjBSQAqAWCYAaQBzALAQhKQgLg0hDgHQg2gTgeglQgFgNABAAQAnilCxiKQCTiNBhiKIAMgcQAnhsgriOQgaiJgNh/QAEiKANiOQAEiNgniGg");
	this.shape_42.setTransform(-9.7,-5.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D59211").s().p("AhjQVQiYgagqgWQhjhSA4hyIAQghQBgiLB5iMQCTiKAJidQgJAggCgIQgnh6hFhvQhShugwh1QhAiOgVicQgbijA3iTQBujPCfANQC+ATBHDIQAnCGgECNQgNCOgECKQANB/AaCJQArCOgnBsIgMAcQhhCKiTCNQixCKgnClQgBAAAFANQAeAlA2ATQBDAHALA0QgOBAhYAAIgdgBg");
	this.shape_43.setTransform(-9.7,-5.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],18.2,-104.9,18.2,115.8).p("AFssjQg4jNi9ggQiegZh8DHQhCCOAQClQAJCdA1CSQAoB4BKB0QA8B0AfB8QABAJALgfQgTCcibCCQiBCGhmCGIgSAgQg/BuBfBXQApAZCVAiQB0ARAThIQgGg1hEgLQg2gVgcgoQgDgMAAAAQAxijC4h/QCaiEBpiEIAOgcQAuhpggiSQgRiIgDh/QAPiKAXiMQAOiMgdiJg");
	this.shape_44.setTransform(-18.1,-5.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D59211").s().p("AiHQQQiVgigpgZQhfhXA/huIASggQBmiGCBiGQCbiCATicQgLAfgBgJQgfh8g8h0QhKh0goh4Qg1iSgJidQgQilBCiOQB8jHCeAZQC9AgA4DNQAdCJgOCMQgXCMgPCKQADB/ARCIQAgCSguBpIgOAcQhpCEiaCEQi4B/gxCjIADAMQAcAoA2AVQBEALAGA1QgPA7hPAAQgTAAgWgEg");
	this.shape_45.setTransform(-18.1,-5.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],24.2,-104.3,24.2,116.4).p("AGosJQgpjPi6gvQiegjiIC9QhMCJAEClQgCCdAqCVQAfB7BBB5QA0B4AWB+QAAAJANgdQgdCcihB5QiIB/huCAIgUAfQhEBqBZBdQAoAaCTArQBzAYAYhIQgFg1hDgPQg0gYgagpQgDgMABAAQA5igC+h0QCih8Bxh8IAPgbQA2hmgWiUQgHiIAHh/QAYiIAhiKQAYiLgTiLg");
	this.shape_46.setTransform(-24.1,-5.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D59211").s().p("AjCQIQiTgrgogaQhZhdBEhqIAUgfQBuiACIh/QChh5AdicQgNAdAAgJQgWh+g0h4QhBh5gfh7QgqiVACidQgEilBMiJQCIi9CeAjQC6AvApDPQATCLgYCLQghCKgYCIQgHB/AHCIQAWCUg2BmIgPAbQhxB8iiB8Qi+B0g5CgIACAMQAaApA0AYQBDAPAFA1QgSA2hFAAQgXAAgdgGg");
	this.shape_47.setTransform(-24.1,-5.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],29.9,-103.3,29.9,117.4).p("AHhrrQgajTi2g7QibgviWCzQhWCDgIClQgNCdAgCYQAWB9A4B9QArB8AMB/QAAAIAOgaQgoCZimBwQiPB4h1B6IgVAdQhKBnBTBhQAmAdCRAzQBxAeAdhGQgCg1hCgTQgzgbgYgqQgCgNABAAQBCicDEhpQCnhxB5h2IASgaQA7higKiVQADiHAPh+QAiiGAriIQAjiIgJiMg");
	this.shape_48.setTransform(-29.8,-6.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D59211").s().p("Aj/P7QiRgzgmgdQhThhBKhnIAVgdQB1h6CPh4QCmhwAoiZQgOAaAAgIQgMh/grh8Qg4h9gWh9QggiYANidQAIilBWiDQCWizCbAvQC2A7AaDTQAJCMgjCIQgrCIgiCGQgPB+gDCHQAKCVg7BiIgSAaQh5B2inBxQjEBphCCcIABANQAYAqAzAbQBCATACA1QgUAxg9AAQgaAAgjgJg");
	this.shape_49.setTransform(-29.8,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_3のコピー8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7E6308").s().p("AjqPyQiDgIgfgOQg0gXABgfQALgaAHhAQADgSgBgVQgsiGAHiKQgIjygZkBQADgvABgLQAghvBQhsQBehuAwhoQA0kXDDi4QCwiDCXA8QCyBEgQDYQgUCXhVB8QhcB9htBaQjbBkigCZQgEgUgHAVQgZDbggDTQhUDUB+CNIARARQA6AYA5AkQBTAhhOBDQgpAOhLAAIgpgBg");
	this.shape.setTransform(-17,-53.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E6308").s().p("AjLPrQiDgKgfgOQg0gYACgfQALgaAIhAQAEgPgBgVQgziAgBiKQgXjwgnkAQACg4ACgKQAfhvBUhuQBkhvAzhnQA7kWDJiyQCzh+CVBBQCxBIgXDZQgYCVhZB6QhgB6hvBXQjfBeijCUQgDgcgFAVQgNDcgTDVQhEDYCCCKIARARQA6AYA4AoQBRAmhQBBQgkAMhAAAQgaAAgegCg");
	this.shape_1.setTransform(-17.9,-53.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E6308").s().p("AisPjQiEgMgegPQgzgZACgfQAMgZAJhAQAFgMgCgVQg6h6gJiKQgkjug2j9QABhBABgKQAfhvBYhvQBphxA2hlQBDkUDOisQC3h5CTBFQCvBOgeDXQgdCWhbB2QhjB3hyBVQjiBXinCPQgCgjgEAUQAADbgHDXQgyDbCDCIIASAQQA6AZA3ArQBQArhRBAQghAKg3AAQgfAAglgDg");
	this.shape_2.setTransform(-18.7,-54.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E6308").s().p("AiNPZQiEgPgdgPQgzgaADgfQAMgZAKhAQAHgJgDgUQhBhzgSiJQgxjthEj5IABhTQAehvBbhvQBuhzA5hkQBLkRDTinQC7hzCQBJQCtBTgkDWQggCVhgB0QhmB0h1BRQjjBRisCKQAAgrgDAVQAMDaAFDWQggDeCGCEIARAQQA7AaA0AvQBQAvhUA+QgcAJgxAAQgiAAgrgEg");
	this.shape_3.setTransform(-19.5,-55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E6308").s().p("AhuPNQiDgRgegQQgygaADgfQANgZALhAQAIgFgCgVQhJhrgZiJQg/johSj2QgDgHAChUQAehuBfhxQByh0A8hiQBTkPDYihQC+htCOBNQCqBYgqDVQglCUhjBxQhqBxh2BNQjlBKiuCEIgEgcQABgLgEAYQgCAPAGACIADgCQAXDLAQDHQgPDfCICBIASAQQA6AaAzAyQBQA1hVA8QgcAIgqAAQglAAgwgGg");
	this.shape_4.setTransform(-20.3,-56);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E6308").s().p("AhQPAQiDgTgegRQgygbAEgfQAOgZAMg/QAJgDgCgUQhQhkghiGQhMjlhgjwQgDgHABhdQAdhtBihxQB3h2A/hhQBbkMDciaQDBhpCMBSQCnBdgwDUQgpCShmBuQhtBuh5BKQjjBCixB8IgGghQAAgLgFAdQgDARAGAEIAIgGQAiDHAbDDQADDgCJB+IASAPQA5AcA0A1QBOA5hWA7QgYAGgmAAQgmAAg2gHg");
	this.shape_5.setTransform(-20.9,-57.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E6308").s().p("AgyOwQiDgVgdgRQgxgdAEgeQAOgZANg/QALABgDgVQgSg8gog0QgwgugUhCQhZjghujqQgDgHgBhlQAdhrBlhyQB7h4BBhfQBkkKDfiTQDEhjCKBWQCkBhg1DTQguCRhpBrQhwBrh7BGQjiA7izB1IgJgnQgBgLgFAhQgDAUAGAFIAMgIQAsDCAmC9QAVDhCKB6IARAOQA6AcAzA4QBOA/hXA5QgWAGggAAQgrAAg5gKg");
	this.shape_6.setTransform(-21.6,-58.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E6308").s().p("AggPVQiDgRgegQQgygbADgfQANgZAMg/QAJgDgDgUQhShigjiGQhRjjhljuQgDgHgEhXQAXhvBZh2QBuh8A2hlQBGkTDPirQC5h3CSBHQCtBPgfDXQgdCWhdB1QhkB2hzBUQjgBUinCLIgGgdQAAgLgDAYQgBARAGADIAEgEQAmDIAgDEQAHDgCMB7IAQAPQA7AaA1A1QBPA4hVA9QgbAHgqAAQgmAAgvgGg");
	this.shape_7.setTransform(-18.6,-58.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7E6308").s().p("AgNP1QiDgMgegQQg0gZADgfQAMgZAJhAQAIgFgDgVQhNhogfiHQhIjmhdjxQgIhIAAgKQAShwBMh5QBeh+AshqQAokZC+jAQCoiKCZA2QC2A9gJDZQgOCYhPB+QhXCBhpBfQjYBtiZCeQgFgpgBAVQAiDaAaDUQgEDgCJB8IATAPQA7AZA3AwQBRAzhTA/QggAJg3AAQgfAAglgDg");
	this.shape_8.setTransform(-15.2,-59.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E6308").s().p("AAGQPQiBgIgfgOQg0gXABgfQALgaAIhAQAGgJgDgUQhKhugZiIQhAjphTj1QgJg5AAgKQAMhxA/h7QBPh/AghuQAKkcCojTQCZibCeAmQC6ApAQDYQACCYhCCHQhJCJheBpQjNCEiFCuQgHgbgCAVQAaDbATDVQgSDgCKB9IATAPQA8AXA4AsQBSAthRBCQgmANhFAAIgxgCg");
	this.shape_9.setTransform(-11.4,-60.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E6308").s().p("AAcQkQiCgEgfgNQg1gVABgfQAKgaAFhBQAEgMgDgUQhEh0gViIQg3jshKj3IgJg1QAGhxAyh7QA/h+AUhxQAPiFAXiCQAOiHBJhyQCHirChAVQC+AVAmDWQATCWgzCOQg6CQhTBzQi9CYhyC8QgIgMgCAVQARDbALDWQgfDfCLB9IATAPQA7AWA6AoQBUAnhOBFQguAQhaAAIgUAAg");
	this.shape_10.setTransform(-7.2,-62.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E6308").s().p("AhyQnQg1gUAAgfQAJgaADhBQADgOgDgVQhBh5gPiJQgvjthAj6QgGgcgBgLQAAhxAjh6QAwh7AIhzQAAiFAJiFQAAiGA8h5QB3i5CgAEQC/AAA8DQQAjCUgkCSQgqCVhGB7QisCshcDHQgJADgDAVQAKDcADDWQgsDdCLB/IATAPQA8ATA7AlQBVAghMBHQgxAVhqACIgKAAQh6AAgegMg");
	this.shape_11.setTransform(-2.6,-64.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E6308").s().p("AhfQ1Qg2gSgBgfQAIgbABhAQABgSgDgVQg7h+gKiKQgnjug3j9IgEgXQgGhyAVh1QAgh4gEhzQgOiEgFiFQgOiGAvh/QBijECfgOQC+gUBTDJQAyCPgUCVQgaCZg4CCQg0BkhBBiQhJBggjBnQgGASgEAVQACDcgGDWQg4DcCLB+IATAQQA8ASA8AgQBXAahKBKQgwAWhqAFIhFACQhHAAgWgIg");
	this.shape_12.setTransform(2.3,-66.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E6308").s().p("AhOQsQg2gTgBgfQAIgbAChAQADgPgEgUQhDh4gSiJQg0jshGj4IgIglQgDhyAfh6QArh8AEhzQgFiFAFiFQgFiHA4h7QBvi9ChgCQC/gGBEDOQAoCTgfCTQglCXhBB9Qg7BghIBdQhPBbgqBkQgIAEgDAWQAPDcAHDVQgmDeCOB8IATAOQA8ATA8AjQBWAfhLBIQgwAWhqAEIg4ABQhSAAgYgJg");
	this.shape_13.setTransform(-0.9,-62.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E6308").s().p("Ag+QfQg2gTgBgfQAJgbADhAQAEgMgEgUQhKhxgaiHQhCjphVj0IgLgyQgBhxAoh9QA2iBANhyQAFiFANiEQAGiHBAh3QB9i0CfAJQC/AHA1DTQAeCVgpCQQgvCUhLB5QiyCmhkDDQgJgJgBAVQAbDbAUDVQgUDfCQB4IATAOQA9ATA7AmQBWAjhMBHQgxAWhpACIgeAAQhoAAgcgKg");
	this.shape_14.setTransform(-4.1,-58.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E6308").s().p("AgvQPQg1gUgBgfQAJgaADhBQAGgJgEgUQhRhogiiHQhPjkhjjuQgNg1gBgKQABhyAyh/QBBiEAUhxQAOiEAXiDQAPiGBIhyQCIirChAVQC+AVAmDWQASCWgzCNQg6CRhSByQi+CZhxC8QgKgXAAAWQAoDYAhDUQgDDgCSBzQAJAIALAGQA9ATA6ApQBWAnhNBHQgxAUhqACIgKAAQh5AAgegMg");
	this.shape_15.setTransform(-7.1,-54.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7E6308").s().p("AgiP6Qg1gUAAgfQAKgbAEhAQAGgGgEgUQhXhhgqiDQhcjfhxjpQgPhBgCgKQAEhxA6iBQBMiGAchwQAAkcChjZQCTihCfAhQC8AiAXDYQAICYg9CJQhECLhbBtQjICLh/CzQgKgkACAWQA1DVAtDRQAPDgCUBvIAUANQA9AUA6AsQBVArhNBGQgxAUhqAAQiCgBgggNg");
	this.shape_16.setTransform(-9.8,-51.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7E6308").s().p("ACMPzQiEgDgdgNQg1gVAAgfQAKgaAFhBQAJgDgGgUQhchYgxiBQhqjZh/jiQgEgGgOhRQAGhwBDiCQBViJAkhtQAVkbCwjNQCeiWCcAsQC5AwAHDZQgDCYhGCEQhOCGhiBmQjPB8iNCpIgIgbQgBgKABAXQABAPAGAAIABgBQA9DFA2DBQAgDeCWBrQAJAHALAFQA9AUA7AvQBVAvhOBFQgwAThiAAIgKAAg");
	this.shape_17.setTransform(-12.4,-48.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7E6308").s().p("ACYPaQiEgFgdgNQg1gWABgfQAKgaAFhAQALgBgFgTQhihQg5h+Qh2jSiMjaQgEgGgRheQAJhuBLiCQBgiKAshqQAokZC+jAQCoiKCZA3QC2A9gJDZQgOCXhPB/QhYCAhpBfQjTBqiXCbIgNgiQgCgKABAdQABAUAHACIAGgHQBHC9A/C6QAxDbCZBnIAUAMQA9AUA7AxQBVA0hPBEQgtARhbAAIgUAAg");
	this.shape_18.setTransform(-14.8,-45.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E6308").s().p("ACjO9QiEgGgfgOQgygWABgfQAKgaAHhAQAMACgGgUQhmhGhAh7QiCjLiZjRQgEgGgThpQALhsBUiCQBpiKAzhnQA8kVDJiyQC1h+CUBCQCwBJgXDYQgZCWhZB5QhfB5hwBYQjVBaigCKIgTgpQgCgLgBAkQABAYAHAEIAOgMQBPC0BJCyQBCDYCaBiIAUAMQA9AUA7A0QBVA4hQBDQgpAQhSAAIghgBg");
	this.shape_19.setTransform(-17,-43.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7E6308").s().p("ACuOdQiEgHgfgOQgygXABgfQALgaAHhAQAPAEgHgTQgcg2g1glQg8gdgkg7QiPjEijjHQgFgGgUh1QANhpBbiBQByiKA7hjQBQkQDVijQC8hwCQBLQCqBWgmDWQgkCUhhByQhpBzh1BOQjVBIioB7IgZgwQgDgJgBAoQgBAcAIAHIAWgSQBYCrBRCpQBTDUCbBdIAUALQA+AUA6A3QBVA8hQBDQgnANhJAAIgsgBg");
	this.shape_20.setTransform(-19,-41.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7E6308").s().p("AC4N6QiDgJgfgOQgygYACgeQALgaAIhAQAPAHgHgTQgcg0g4ghQg/gYgng5Qiai6ivi+QgGgFgViAQAPhnBjh+QB7iKBBhfQBjkKDhiTQDEhiCJBWQClBhg3DTQgtCRhpBrQhxBqh6BHQjWA3irBqQBeChBZCfQBkDOCaBYIAVALQA+AVA6A5QBWBAhRBBQglANhDAAQgYAAgdgCgAkZAbQgBAiAHAIIAhgWIgig3IgBgBQgDAAgBAkg");
	this.shape_21.setTransform(-20.8,-39.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7E6308").s().p("ADCNVQiEgLgegOQgygYACgfQAMgaAGhAQAUAJgIgSQgdgyg6gcQhCgTgqg2Qilixi6i0QgGgEgWiLQARhjBqh8QCDiIBIhaQB2kCDqiDQDKhUCEBfQCcBthEDOQg4COhxBjQh3BiiAA+QjSAmiuBaQBkCVBeCUQB1DICaBUIAUAJQA/AVA6A9QBWBEhSBAQgjALg/AAQgbAAgfgCgAk4ARQgBAmAHAKIAugZIgshAIgCgBQgDAAgDAqg");
	this.shape_22.setTransform(-22.4,-38.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7E6308").s().p("ADMMtQiEgMgegPQgxgYACgfQAKgaAJhAQAWALgIgRQgegwg8gXQhFgOgtg0QivinjEioQgHgEgWiUQAThfBwh6QCKiGBPhUQCIj5DyhyQDQhGB8BpQCVB4hTDJQhCCIh3BcQh/BZiDA1QjNAWivBIQBoCJBjCIQCFDBCaBPIAUAJQA+AVA7A/QBXBIhTA/QghAKg4AAQgeAAglgDgAlUAGQgDAqAIAMQAegOAegNIg5hJIgBgBQgEAAgDAvg");
	this.shape_23.setTransform(-23.9,-36.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7E6308").s().p("ADVMCQiEgNgdgQQgzgZACgfQAMgZAKhAQAYANgHgRQgigtg8gTQhGgIgxgxQi4idjOibQgGgFgYibQAVhdB2h2QCRiDBUhOQCajvD6hgQDVg2B0BwQCMCDhiDCQhLCEh+BSQiEBRiHAqQjEAIitA2QBpB8BlB7QCWC5CZBKIAUAIQA+AWA7BBQBYBMhUA+QgfAJgyAAQghAAgqgEgAlwgDQgDAsAIANQAmgPAogNIhJhTIgBgBQgFAAgEA3g");
	this.shape_24.setTransform(-25.1,-35.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7E6308").s().p("ADVMCQiEgNgdgQQgzgZACgfQAMgZAKhAQAYANgHgRQgigtg8gTQhGgIgxgxQi4idjOibQgGgFgYibQAVhdB2h2QCRiDBUhOQCajvD6hgQDVg2B0BwQCMCDhiDCQhLCEh+BSQiEBRiHAqQjEAIitA2IhJhTQgFgKgFBAQgDAsAIANQAmgPAogNQBpB8BlB7QCWC5CZBKIAUAIQA+AWA7BBQBYBMhUA+QgfAJgyAAQghAAgqgEg");
	this.shape_25.setTransform(-25.1,-35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_3のコピー5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7E6308").s().p("ABiPlQg2gUAAgfQAJgaADhBQANACgHgTQhnhBhHh4QiNjEiijJQgFgFgchQQgMhyAviIQBAiVAUhyQAOiEAWiDQAOiGBIhyQCJisCeAUQC+AUAoDVQATCXgyCNQg5CQhSB0Qi7CYhxC8IgNgaQAEAoAIgMIABgCQBcC3BUC1QBPDUCeBaIAVALQA+ARA9AyQBYAzhNBHQgxAVhqACIgKAAQh7AAgegMg");
	this.shape.setTransform(0.1,-7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E6308").s().p("ABVPmQg2gUAAgfQAJgaADhBQAMAAgHgTQhlhHhCh5QiFjJibjPQgFgGgZhRQgHhyA0iHQBGiSAYhxQASiDAciCQATiGBMhvQCPinCeAaQC+AbAeDXQAPCYg5CLQg+COhXBwQi/CSh5C2IgMgaQADAoAIgMIABgCQBVC7BNC4QBEDXCeBdIAVALQA+ASA8AwQBXAyhMBHQgxAUhqACIgKAAQh7AAgegLg");
	this.shape_1.setTransform(-4.3,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E6308").s().p("ABIPmQg2gUAAgfQAJgaADhBQALgBgHgTQhihNg+h7Qh9jPiTjUQgFgGgWhSQgDhyA6iFQBLiQAchvQAAkcChjZQCTihCfAgQC8AiAXDYQAICYg9CJQhFCLhaBuQjHCKh+CyIgLgbQACAoAIgLIABgCQBPC9BFC7QA6DZCdBhIAUALQA/ASA8AvQBWAwhMBHQgxAVhqACIgTAAQhzAAgdgLg");
	this.shape_2.setTransform(-8.7,-6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E6308").s().p("AAlPkQg0gTAAgfQAJgbADhAQAHgDgEgTQhhhSg5h+Qh2jTiLjZQgEgGgThTQABhwA/iFQBRiNAghuQALkbCpjTQCZibCeAmQC6ApAPDZQACCYhCCGQhKCJheBqQjLCCiGCtQBIDAA+C9QAvDbCcBlIAUALQA+ASA8AuQBWAvhMBHQgxAVhqABIgTABQhzAAgdgMgAiIBdIACgCIgKgcQAAApAIgLg");
	this.shape_3.setTransform(-11,-6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E6308").s().p("AgDPiQg2gTgBgfQAJgbADhAQAJgEgGgUQhehWg0iBQhujWiDjfQgEgHgQhTQAGhwBDiCQBXiKAkhtQAWkbCwjMQCgiVCcAsQC4AwAHDaQgECYhHCEQhPCFhiBmQjPB6iOCoIgJgcQgBApAJgLIABgCQBBDCA5DAQAiDdCbBoIAUAMQA+ASA8AsQBWAthMBHQgxAVhqACIgTAAQhzAAgbgLg");
	this.shape_4.setTransform(-12.5,-7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E6308").s().p("AguPfQg2gUAAgfQAJgaAChBQAIgFgGgUQhahcgviCQhmjbh7jjQgEgHgMhUQAJhvBJiAQBbiGAphsQAgkaC5jFQCkiPCbAyQC3A4gCDZQgKCYhMCBQhTCDhnBhQjTBziUCiQA5DFAyDBQAaDeCXBrQAIAHAMAFQA+ASA7AsQBWArhMBHQgxAVhpACIgVABQhwAAgdgLgAinBJIACgCIgIgcQgDAoAJgKg");
	this.shape_5.setTransform(-13.9,-7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E6308").s().p("AhYPbQg2gUgBgeQAJgbADhAQAHgIgGgTQhWhhgriEQhejehyjoQgDgHgKhUQAOhvBOh9QBgiDAthqQArkZDAi+QCqiICYA4QC1A+gLDZQgPCYhRB+QhYB/hrBeQjXBqiaCcQAxDHAsDDQAODgCWBtIAUANQA9ASA8AqQBWAphMBIQgxAVhqACIgdAAQhoAAgcgKgAi2A/IACgCIgHgcQgFAoAKgKg");
	this.shape_6.setTransform(-15.4,-7.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E6308").s().p("AiKPeQg2gUAAgeQAJgbADhAQAGgJgEgUQhRhpgjiFQhPjkhkjuQgDgOgDgeIgEgrQARhvBPh6QBgh/AuhqQAskYDBi9QCriICXA5QC1A/gMDZQgQCXhSB+QhZB/hqBeQjZBqicCcQgFgvAAAWQApDZAhDSQgCDgCSB0IAUANQA9AUA7ApQBVAnhNBHQgxAVhqABQiCAAgfgNg");
	this.shape_7.setTransform(-15.7,-7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7E6308").s().p("Ai9PhQg1gUgBgfQAKgbAEhAQAEgKgDgVQhKhvgaiIQhCjohWj0IgGhRQAUhvBPh3QBhh8AuhqQAukXDBi9QCsiHCXA6QC0BAgMDZQgRCXhSB+QhaB+hrBdQjaBpicCcQgEgqgCAWQAcDaAUDVQgSDfCQB6QAIAIAJAGQA8AUA7AoQBVAnhOBFQgxAUhoAAQiEgBgfgNg");
	this.shape_8.setTransform(-15.9,-6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E6308").s().p("AhOPyQiEgCgfgNQg1gVABgfQAJgbAFhAQAEgNgDgUQhCh1gTiKQg0jrhGj5QgEhCABgKQAXhvBPh1QBgh4AvhpQAwkYDCi7QCsiGCXA7QC0BBgODZQgRCXhTB8QhaB/hsBcQjaBnidCcQgEgkgDAVQAPDbAHDXQgkDeCNB+IATAPQA6AVA5AnQBVAlhOBFQgvAShcAAIgPAAg");
	this.shape_9.setTransform(-16.2,-6.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E6308").s().p("AiCP0QiEgFgfgNQg1gWABgfQAKgaAGhAQADgPgCgUQg7h8gKiKQgmjvg3j8IgBhFQAbhwBPhyQBgh0AvhpQAxkYDBi6QCviFCXA7QCzBCgODZQgSCXhUB8QhbB+hsBcQjaBmifCbQgDgfgEAVQABDdgFDVQg0DcCHCEIATAPQA7AWA3AnQBVAjhPBEQgqARhYAAIgYAAg");
	this.shape_10.setTransform(-16.4,-6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E6308").s().p("Ai2PzQiEgGgfgNQg0gWABgfQAKgbAHhAQADgQgCgVQgziBgCiKQgXjwgokAQABg1ABgKQAdhwBQhvQBfhxAwhpQAykXDCi5QCwiECWA7QC0BDgQDZQgTCXhVB8QhbB9htBbQjbBlieCaQgEgZgFAVQgNDcgSDVQhEDYCDCJIASAQQA6AXA5AlQBTAjhOBDQgqAPhRAAIghgBg");
	this.shape_11.setTransform(-16.7,-6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E6308").s().p("AjqPyQiDgIgfgOQg0gXABgfQALgaAHhAQADgSgBgVQgsiGAHiKQgIjygZkBQADgvABgLQAghvBQhsQBehuAwhoQA0kXDDi4QCwiDCXA8QCyBEgQDYQgUCXhVB8QhcB9htBaQjbBkigCZQgEgUgHAVQgZDbggDTQhUDUB+CNIARARQA6AYA5AkQBTAhhOBDQgpAOhLAAIgpgBg");
	this.shape_12.setTransform(-17,-6.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E6308").s().p("AjLPrQiDgKgfgOQg0gYACgfQALgaAIhAQAEgPgBgVQgziAgBiKQgXjwgnkAQACg4ACgKQAfhvBUhuQBkhvAzhnQA7kWDJiyQCzh+CVBBQCxBIgXDZQgYCVhZB6QhgB6hvBXQjfBeijCUQgDgcgFAVQgNDcgTDVQhEDYCCCKIARARQA6AYA4AoQBRAmhQBBQgkAMhAAAQgaAAgegCg");
	this.shape_13.setTransform(-17.9,-6.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E6308").s().p("AisPjQiEgMgegPQgzgZACgfQAMgZAJhAQAFgMgCgVQg6h6gJiKQgkjug2j9QABhBABgKQAfhvBYhvQBphxA2hlQBDkUDOisQC3h5CTBFQCvBOgeDXQgdCWhbB2QhjB3hyBVQjiBXinCPQgCgjgEAUQAADbgHDXQgyDbCDCIIASAQQA6AZA3ArQBQArhRBAQghAKg3AAQgfAAglgDg");
	this.shape_14.setTransform(-18.7,-7.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E6308").s().p("AiNPZQiEgPgdgPQgzgaADgfQAMgZAKhAQAHgJgDgUQhBhzgSiJQgxjthEj5IABhTQAehvBbhvQBuhzA5hkQBLkRDTinQC7hzCQBJQCtBTgkDWQggCVhgB0QhmB0h1BRQjjBRisCKQAAgrgDAVQAMDaAFDWQggDeCGCEIARAQQA7AaA0AvQBQAvhUA+QgcAJgxAAQgiAAgrgEg");
	this.shape_15.setTransform(-19.5,-8.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7E6308").s().p("AhuPNQiDgRgegQQgygaADgfQANgZALhAQAIgFgCgVQhJhrgZiJQg/johSj2QgDgHAChUQAehuBfhxQByh0A8hiQBTkPDYihQC+htCOBNQCqBYgqDVQglCUhjBxQhqBxh2BNQjlBKiuCEQAXDLAQDHQgPDfCICBIASAQQA6AaAzAyQBQA1hVA8QgcAIgqAAQglAAgwgGgAj0gDQgCAPAGACIADgCIgEgcIAAgEIgDARg");
	this.shape_16.setTransform(-20.3,-9.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7E6308").s().p("AhQPAQiDgTgegRQgygbAEgfQAOgZAMg/QAJgDgCgUQhQhkghiGQhMjlhgjwQgDgHABhdQAdhtBihxQB3h2A/hhQBbkMDciaQDBhpCMBSQCnBdgwDUQgpCShmBuQhtBuh5BKQjjBCixB8QAiDHAbDDQADDgCJB+IASAPQA5AcA0A1QBOA5hWA7QgYAGgmAAQgmAAg2gHgAkBgKQgDARAGAEIAIgGIgGghIgBgDQgBAAgDAVg");
	this.shape_17.setTransform(-20.9,-10.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7E6308").s().p("AgyOwQiDgVgdgRQgxgdAEgeQAOgZANg/QALABgDgVQgSg8gog0QgwgugUhCQhZjghujqQgDgHgBhlQAdhrBlhyQB7h4BBhfQBkkKDfiTQDEhjCKBWQCkBhg1DTQguCRhpBrQhwBrh7BGQjiA7izB1IgJgnQgBgLgFAhQgDAUAGAFIAMgIQAsDCAmC9QAVDhCKB6IARAOQA6AcAzA4QBOA/hXA5QgWAGggAAQgrAAg5gKg");
	this.shape_18.setTransform(-21.6,-11.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E6308").s().p("AAWPKQiBgRgdgQQgzgbAEgfQANgZALg/QALAAgEgUQgUg8gqgxQgygsgXhBQhijch4jmQgEgGgHhhQAUhtBah5QBviAA3hkQBJkTDQipQC5h1CSBHQCtBRghDXQgfCVheB1QhlB1hzBTQjdBRioCHIgKgiQgBgLgDAcQgBAVAHADIAIgHQA1DCAvC+QAfDfCMB1IATANQA7AaA1A3QBQA8hVA9QgcAHgqAAQglAAgygGg");
	this.shape_19.setTransform(-18.7,-9.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7E6308").s().p("ABiPeQiCgMgegQQgzgZADgfQAMgZAJhAQALABgEgUQgXg7gsgvQg0gqgahAQhsjYiBjgQgEgGgNhbQAMhvBOh/QBhiGAuhqQAskYDCi9QCriHCXA5QC0A/gLDZQgQCYhSB9QhaB/hqBdQjWBniaCaIgLghQgEAvAKgJIAFgFQA+DBA3C9QApDeCQBvIAUANQA8AYA3A1QBSA6hUA/QggAKg1AAQggAAgngEg");
	this.shape_20.setTransform(-15.4,-7.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7E6308").s().p("ACvPvQiEgIgegPQgzgXACgfQALgaAHhAQAMAAgFgTQhhhPg5h+Qh1jTiKjbQgEgGgThVQADhvBBiEQBViNAjhtQAQkbCvjPQCciYCdAqQC5AuAKDZQgBCYhFCFQhNCHhhBnQjMB9iLCpQBHDAA/C9QAxDcCWBpIAVAMQA9AWA5A0QBTA4hRBBQgmANhGAAIgwgBgAiRBVIACgDIgLgcQAAAqAJgLg");
	this.shape_21.setTransform(-11.9,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7E6308").s().p("ADoP6QiEgFgfgNQg1gVAAgfQALgaAFhBQALABgGgUQhhhKg/h8Qh9jOiUjUQgEgGgXhOQgGhyA1iGQBGiQAYhxQATiDAbiCQAUiFBMhwQCNimCgAaQC9AbAfDXQANCXg3CMQg/CNhWBxQjBCSh5C3QgPguAEAVIALAZQBPC+BGC8QA9DaCaBjIAUALQA+AUA7AzQBVA1hPBEQgtARhbAAIgTAAg");
	this.shape_22.setTransform(-5.9,-6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7E6308").s().p("ABZP0Qg2gUAAgfQAJgbADhAQAMAAgHgTQhlhGhDh5QiGjIidjOIgfhNQgOhyAoiHQA4iUANhyQAFiFAPiEQAGiHBBh2QB+i0CgALQC/AIA0DTQAcCWgqCQQgwCThLB4QixClhnDCQgSgnAGAVQBeDHBTDEQBGDXCeBdQAJAGAMAFQA+ARA8AxQBXAzhMBHQgxAUhqABIgLAAQh7AAgdgLg");
	this.shape_23.setTransform(3.8,-5.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7E6308").s().p("ABtP4Qg2gSgBgfQAIgaABhBQAMAAgHgSQhohBhIh2QiPjDiljHIgihGQgXhwAbiJQAqiVABhzQgHiFACiFQgIiGA1h9QBsi/CigFQC9gKBIDMQAsCSgcCTQgiCYg/B/Qg5BhhDBfQhNBagqBnQgSggAGAUQBmDDBbDAQBRDUCgBXIAVAKQBAAPA+AvQBZAwhLBKQgwAWhqAFIhGABQhHAAgXgIg");
	this.shape_24.setTransform(13.7,-5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_2のコピー8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-14.1,-69.7,-14.1,147.6).p("Ahiv8QiiAFhtC/Qg1B8AHCHQgBCFAHCFQgCB4gtCgQgcCTAfBzIAEAIQA0BtBuBrQBhBrBVBqQAoA7A/AcQA2AkAfA2QAGAQgNgFQgEBAgJAaQAAAfA2AUQAfAMCEAAQBqgBAxgUQBNhGhZg4Qg+g0hAgRIgRgIQikhThgjTQgxhehNhPQhAhUgOhiQAAgEAKATQAjhxBUhiQBJhmA/hoQA/h/AiiXQAciUgsiSQhIjMi8AKg");
	this.shape.setTransform(14.3,-38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D59211").s().p("AB1PxQg2gUAAgfQAJgaAEhAQANAFgGgQQgfg2g2gkQg/gcgog7QhVhqhhhrQhuhrg0htIgEgIQgfhzAciTQAtigACh4QgHiFABiFQgHiHA1h8QBti/CigFQC8gKBIDMQAsCSgcCUQgiCXg/B/Qg/BohJBmQhUBigjBxQgKgTAAAEQAOBiBABUQBNBPAxBeQBgDTCkBTIARAIQBAARA+A0QBZA4hNBGQgxAUhqABQiEAAgfgMg");
	this.shape_1.setTransform(14.3,-38.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-9.3,-70,-9.3,147.4).p("Agnv/QiigBh0C7Qg5B6ABCHQgHCEACCFQgHB5gzCeQgiCRAbB1IADAIQAwBvBqBvQBeBuBRBtQBLB4BrBCQAGAQgMgEQgCBAgJAbQABAfA1ATQAgALCEgCQBqgCAxgVQBkhfjvhfIgSgIQikhVhWjXQguhfhKhSQg9hWgLhiQAAgEAKATQAohvBYheQBMhjBDhmQBFh8AniWQAiiSgliUQg/jPi+ACg");
	this.shape_2.setTransform(9.5,-38.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D59211").s().p("ABsP2Qg1gTgBgfQAJgbAChAQAMAEgGgQQhrhChLh4QhRhthehuQhqhvgwhvIgDgIQgbh1AiiRQAzieAHh5QgCiFAHiEQgBiHA5h6QB0i7CiABQC+gCA/DPQAlCUgiCSQgnCWhFB8QhDBmhMBjQhYBegoBvQgKgTAAAEQALBiA9BWQBKBSAuBfQBWDXCkBVIASAIQDvBfhkBfQgxAVhqACIglABQhkAAgbgKg");
	this.shape_3.setTransform(9.5,-38.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-5,-70.1,-5,147.2).p("AAOwAQiggIh7C2Qg/B4gECHQgMCEgECFQgLB4g6CdQgoCQAXB1IADAJQArBwBnByQBaByBOBwQBHB7BpBHQAGAQgLgCQgCBAgIAbQABAfA2ASQAgALCEgEQBqgEAwgWQBLhJhagwQg+gvg/gQIgRgIQilhXhLjaQgrhhhHhUQg7hYgHhiQAAgFAJAVQAshuBdhbQBQhfBHhjQBJh6AuiUQAoiQggiVQg3jTi/gFg");
	this.shape_4.setTransform(5.2,-38.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D59211").s().p("ABfP5Qg2gSgBgfQAIgbAChAQALACgGgQQhphHhHh7QhOhwhahyQhnhygrhwIgDgJQgXh1AoiQQA6idALh4QAEiFAMiEQAEiHA/h4QB7i2CgAIQC/AFA3DTQAgCVgoCQQguCUhJB6QhHBjhQBfQhdBbgsBuQgJgVAAAFQAHBiA7BYQBHBUArBhQBLDaClBXIARAIQA/AQA+AvQBaAwhLBJQgwAWhqAEIg9ABQhPAAgYgIg");
	this.shape_5.setTransform(5.2,-38.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-0.4,-70.2,-0.4,147.1).p("ABIwAQiggOiCCxQhEB1gJCGQgSCEgJCFQgQB3hACbQguCOATB2IADAJQAnByBjB2QBWB1BKBzQBDB8BmBNQAGARgKAAQAABAgIAbQACAeA2ASQAgAKCEgGQBpgGAxgWQBJhKhZgtQg/gsg/gQIgRgIQilhZhBjdQgnhihFhWQg3hagEhiQAAgFAIAVQAxhsBghXQBUhcBLhgQBOh3A0iSQAtiOgZiXQgvjUi+gNg");
	this.shape_6.setTransform(0.6,-38.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D59211").s().p("ABVP7Qg2gSgCgeQAIgbAAhAQAKAAgGgRQhmhNhDh8QhKhzhWh1Qhjh2gnhyIgDgJQgTh2AuiOQBAibAQh3QAJiFASiEQAJiGBEh1QCCixCgAOQC+ANAvDUQAZCXgtCOQg0CShOB3QhLBghUBcQhgBXgxBsQgIgVAAAFQAEBiA3BaQBFBWAnBiQBBDdClBZIARAIQA/AQA/AsQBZAthJBKQgxAWhpAGQgwADgjAAQg9AAgUgHg");
	this.shape_7.setTransform(0.6,-38.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],4,-70.2,4,147.2).p("ACBv+QifgUiJCrQhIBygPCGQgXCDgOCEQgVB3hGCZQg0CMAOB3IADAJQAjByBfB6QBSB5BGB1QA/B/BjBSQAGARgIABQAABAgHAbQACAfA3AQQAgALCEgJQBpgHAwgYQBIhLhZgpQg/gqg/gOIgRgJQilhbg2jfQgkhjhChZQg0hbAAhjQAAgEAHAVQA2hqBhhSQBZhZBPhdQBTh0A5iPQAziNgTiXQgmjWi+gVg");
	this.shape_8.setTransform(-3.9,-38.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D59211").s().p("ABLP7Qg3gQgCgfQAHgbAAhAQAIgBgGgRQhjhSg/h/QhGh1hSh5Qhfh6gjhyIgDgJQgOh3A0iMQBGiZAVh3QAOiEAXiDQAPiGBIhyQCJirCfAUQC+AVAmDWQATCXgzCNQg5CPhTB0QhPBdhZBZQhhBSg2BqQgHgVAAAEQAABjA0BbQBCBZAkBjQA2DfClBbIARAJQA/AOA/AqQBZAphIBLQgwAYhpAHQg7AEgoAAQgwAAgRgGg");
	this.shape_9.setTransform(-3.9,-38.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],8.6,-70.1,8.6,147.3).p("AC6v7QiggbiOCmQhNBvgUCFQgcCCgTCEQgaB2hMCVQg5CLAJB3IACAJQAfB0BbB+QBOB7BCB3QA7CBBgBYQAGARgHADQACBAgIAbQADAfA3AQQAgAJCEgKQBpgJAwgYQBHhMhagmQg/gng+gOIgSgJQilhegrjgQgghlg/hbQgyhdAEhiQAAgEAHAVQA5hoBlhOQBdhVBShaQBXhvBAiOQA5iLgNiXQgejXi9gdg");
	this.shape_10.setTransform(-8.5,-38.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D59211").s().p("ABAP7Qg3gQgDgfQAIgbgChAQAHgDgGgRQhghYg7iBQhCh3hOh7Qhbh+gfh0IgCgJQgJh3A5iLQBMiVAah2QATiEAciCQAUiFBNhvQCOimCgAbQC9AdAeDXQANCXg5CLQhACOhXBvQhSBahdBVQhlBOg5BoQgHgVAAAEQgEBiAyBdQA/BbAgBlQArDgClBeIASAJQA+AOA/AnQBaAmhHBMQgwAYhpAJQhDAFgqAAQgnAAgQgEg");
	this.shape_11.setTransform(-8.5,-38.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],10.6,-69.8,10.6,147.5).p("ADav2QifghiVCfQiiDYgCEcQgfB1hSCTQg/CJAFB3IACAJQAaB0BXCCQBLB+A9B5QA2CEBgBcQAFARgFAFQACBAgGAcQADAeA1APQAhAJCDgMQBpgLAvgZQBGhNhZgiQg/glg/gNIgSgJQilhggdjiQgfhmg9hdQguheAHhiQAAgEAHAWQA9hlBohLQBghRBWhWQBchtBFiKQA+iJgHiYQgVjYi7gkg");
	this.shape_12.setTransform(-10.5,-38.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D59211").s().p("AAcP5Qg1gPgDgeQAGgcgChAQAFgFgFgRQhghcg2iEQg9h5hLh+QhXiCgah0IgCgJQgFh3A/iJQBSiTAfh1QACkcCijYQCVifCfAhQC7AkAVDYQAHCYg+CJQhFCKhcBtQhWBWhgBRQhoBLg9BlQgHgWAAAEQgHBiAuBeQA9BdAfBmQAdDiClBgIASAJQA/ANA/AlQBZAihGBNQgvAZhpALQhLAHgqAAQghAAgOgEg");
	this.shape_13.setTransform(-10.5,-38.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],8.2,-68.2,8.2,149.2).p("ACxwKQiggYiLCoQhLBxgRCFQgaCDgRCDQgXB3hKCQQg2CIAGB3IACAKQAbB2BNB/QBDB+A2B7QAuCGBbBkQAFAQgEAHQACBAgHAbQADAfA0APQAhAKCDgLQBqgKAvgZQBGhMhYghQg/gkg+gOIgRgKQiihlgPjjQgahog0hhQgnhiAIhkQAAgEAGASQA3hpBjhRQBchXBQhbQBWhxA8iPQA2iMgQiXQghjXi+gYg");
	this.shape_14.setTransform(-8.1,-40.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D59211").s().p("AANQKQg0gPgDgfQAHgbgChAQAEgHgFgQQhbhkguiGQg2h7hDh+QhNh/gbh2IgCgKQgGh3A2iIQBKiQAXh3QARiDAaiDQARiFBLhxQCLioCgAYQC+AYAhDXQAQCXg2CMQg8CPhWBxQhQBbhcBXQhjBRg3BpQgGgSAAAEQgIBkAnBiQA0BhAaBoQAPDjCiBlIARAKQA+AOA/AkQBYAhhGBMQgvAZhqAKQhHAFgqAAQgkAAgPgEg");
	this.shape_15.setTransform(-8.1,-40.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],5.7,-66.3,5.7,151).p("ACHwcQiggOiCCwQhEB1gKCGQgSCEgJCFQgRB3hACOQguCFAJB4IACAJQAcB4BDB+QA6B8AtB8QAoCIBVBqQAFASgEAHQABBAgHAcQACAeA3AQQAfAKCDgJQBqgJAvgYQBIhMhZggQg9gjg+gPIgRgKQiehrgCjkQgUhpgrhkQghhlAKhmQAAgFAFANQAxhsBehWQBWhcBLhgQBOh2A1iSQAuiPgZiWQgvjUi+gOg");
	this.shape_16.setTransform(-5.6,-42.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D59211").s().p("AgBQYQg3gQgCgeQAHgcgBhAQAEgHgFgSQhVhqgoiIQgth8g6h8QhDh+gch4IgCgJQgJh4AuiFQBAiOARh3QAJiFASiEQAKiGBEh1QCCiwCgAOQC+AOAvDUQAZCWguCPQg1CShOB2QhLBghWBcQheBWgxBsQgFgNAAAFQgKBmAhBlQArBkAUBpQACDkCeBrIARAKQA+APA9AjQBZAghIBMQgvAYhqAJQhAAFgoAAQgrAAgPgGg");
	this.shape_17.setTransform(-5.6,-42.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],3.1,-64.2,3.1,153.2).p("AFWtWQg7jRjAgCQiggFh4C4Qg8B5gCCGQgKCFgBCFQgKB4g2CKQgnCDALB4IACAJQA5DzBzD4QAhCKBPBxQAEARgDAKQABBAgIAbQACAfA3AQQAeAKCEgIQBpgIAwgXQBIhLhYgfQg9gjg9gPIgRgLQiahwALjkQgMhqgkhnQgZhoALhoQAAgEAEAIQArhvBZhcQBQhhBGhkQBGh7AsiUQAliSghiUg");
	this.shape_18.setTransform(-3,-44.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D59211").s().p("AgRQkQg3gQgCgfQAIgbgBhAQADgKgEgRQhPhxghiKQhzj4g5jzIgCgJQgLh4AniDQA2iKAKh4QABiFAKiFQACiGA8h5QB4i4CgAFQDAACA7DRQAhCUglCSQgsCUhGB7QhGBkhQBhQhZBcgrBvQgEgIAAAEQgLBoAZBoQAkBnAMBqQgLDkCaBwIARALQA9APA9AjQBYAfhIBLQgwAXhpAIQg7AEgnAAQgvAAgRgGg");
	this.shape_19.setTransform(-3,-44.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],0.3,-61.7,0.3,155.6).p("AE1tuQhHjOi/AKQigAEhtC/Qg2B8AHCHQgDCFAHCEQgCB5gtCFQgeCAAMB4IACAJQA6D0BXD0QAaCMBJB2QAEASgDALQAABAgIAbQACAfA2AQQAgALCCgHQBqgHAwgWQBJhKhYgeQg8gig9gRIgRgLQiXh1AbjjQgHhrgbhrQgShqAMhpQABgEADADQAihvBVhjQBKhlBAhoQA/h/AjiXQAciTgqiSg");
	this.shape_20.setTransform(-0.2,-46.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D59211").s().p("AgjQtQg2gQgCgfQAIgbAAhAQADgLgEgSQhJh2gaiMQhXj0g6j0IgCgJQgMh4AeiAQAtiFACh5QgHiEADiFQgHiHA2h8QBti/CggEQC/gKBHDOQAqCSgcCTQgjCXg/B/QhABohKBlQhVBjgiBvQgDgDgBAEQgMBpASBqQAbBrAHBrQgbDjCXB1IARALQA9ARA8AiQBYAehJBKQgwAWhqAHQgyADgkAAQg4AAgUgHg");
	this.shape_21.setTransform(-0.2,-46.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-2.3,-59,-2.3,158.3).p("AETuEQhTjJi+AVQigAOhhDFQguB/AOCGQAGCEAOCEQAFB5gjCBQgWB9AOB2IADAKQA6D0A7DvQASCNBDB8QACARgBANQgBBAgIAbQACAfA2ARQAgALCCgGQBpgFAxgWQBJhKhXgcQg9gig8gRIgQgMQiTh6ApjiQgGjVgLjZIADgGQAbhxBPhoQBFhpA4hsQA5iCAZiZQAUiVgziPg");
	this.shape_22.setTransform(2.5,-49.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D59211").s().p("Ag0Q0Qg2gRgCgfQAIgbABhAQABgNgCgRQhDh8gSiNQg7jvg6j0IgDgKQgOh2AWh9QAjiBgFh5QgOiEgGiEQgOiGAuh/QBhjFCggOQC+gVBTDJQAzCPgUCVQgZCZg5CCQg4BshFBpQhPBogbBxIgDAGQALDZAGDVQgpDiCTB6IAQAMQA8ARA9AiQBXAchJBKQgxAWhpAFQguACghAAQg+AAgVgHg");
	this.shape_23.setTransform(2.5,-49.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-4,-56.1,-4,161.3).p("AD7uXQhfjDi6AgQigAXhWDKQgmCCAWCFQANCEAWCDQAMB4gZB8QgOB5ARB1IACAKQA8D0AeDoQAKCOA8CBQADASgCAOQgBBAgJAbQACAeA2ATQAfALCCgEQBqgEAxgWQBKhJhXgbQg8ghg8gSIgQgNQiPh+A4jgQAFjVgBjeIABgLQAXhyBIhsQA/huAyhvQAwiFARiaQAKiWg7iMg");
	this.shape_24.setTransform(4.1,-52.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D59211").s().p("Ag6Q4Qg2gTgCgeQAJgbABhAQACgOgDgSQg8iBgKiOQgejog8j0IgCgKQgRh1AOh5QAZh8gMh4QgWiDgNiEQgWiFAmiCQBWjKCggXQC6ggBfDDQA7CMgKCWQgRCagwCFQgyBvg/BuQhIBsgXByIgBALQABDegFDVQg4DgCPB+IAQANQA8ASA8AhQBXAbhKBJQgxAWhqAEIhCABQhJAAgWgIg");
	this.shape_25.setTransform(4.1,-52.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-2.5,-59.6,-2.5,157.8).p("AEQuGQhUjIi8AVQihAPhhDFQgtB/AOCGQAHCFAPCEQAFB5gjCBQgVB9APB3IACAJQA9D0A+DvQATCMBEB6QADASgDALQgCBAgJAbQABAfA2ASQAgAMCCgDQBqgDAxgWQBLhIhXgfQg8gkg8gSIgQgMQiSh6AljjQgIjVgNjZIACgFQAbhyBPhoQBEhqA4hrQA4iDAZiZQATiVg0iPg");
	this.shape_26.setTransform(2.7,-48.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D59211").s().p("AgvQyQg2gSgBgfQAJgbAChAQADgLgDgSQhEh6gTiMQg+jvg9j0IgCgJQgPh3AVh9QAjiBgFh5QgPiEgHiFQgOiGAth/QBhjFChgPQC8gVBUDIQA0CPgTCVQgZCZg4CDQg4BrhEBqQhPBogbByIgCAFQANDZAIDVQglDjCSB6IAQAMQA8ASA8AkQBXAfhLBIQgxAWhqADIgsABQhbAAgbgKg");
	this.shape_27.setTransform(2.7,-48.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],0,-62.8,0,154.6).p("AExtxQhJjNi/ALQigAGhrC/Qg1B8AHCHQgBCFAICFQgBB4gsCHQgeCBAOB3IADAKQA9DzBeDzQAcCLBLByQADASgDAIQgDBAgJAbQABAfA1ATQAeAMCEgCQBqgCAxgVQBMhHhWgkQg8gmg8gTIgRgMQiUh1ARjkQgLhrgbhqQgVhqALhoQABgFACAEQAhhvBUhkQBKhmA/hoQA+iAAiiXQAbiTgriSg");
	this.shape_28.setTransform(0,-45.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D59211").s().p("AgXQqQg1gTgBgfQAJgbADhAQADgIgDgSQhLhygciLQhejzg9jzIgDgKQgOh3AeiBQAsiHABh4QgIiFABiFQgHiHA1h8QBri/CggGQC/gLBJDNQArCSgbCTQgiCXg+CAQg/BohKBmQhUBkghBvQgCgEgBAFQgLBoAVBqQAbBqALBrQgRDkCUB1IARAMQA8ATA8AmQBWAkhMBHQgxAVhqACIgcABQhsAAgagLg");
	this.shape_29.setTransform(0,-45.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],2.5,-65.7,2.5,151.7).p("AFPtZQg9jRi/ABQiggEh2C6Qg8B5AACHQgICEAACFQgIB5g1CLQglCEANB4IACAJQA+DxB9D3QAlCKBTBqQADARgFAGQgEBAgJAaQABAfA1AUQAdAMCFAAQBqgBAxgUQBMhHhVgoQg8gpg9gUIgQgLQiZhxAAjlQgShpglhmQgdhnAJhoQABgEADAJQAqhwBXhcQBQhiBEhlQBFh7AqiWQAjiRgjiUg");
	this.shape_30.setTransform(-2.4,-42.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D59211").s().p("AAAQfQg1gUgBgfQAJgaAEhAQAFgGgDgRQhThqgliKQh9j3g+jxIgCgJQgNh4AliEQA1iLAIh5QAAiFAIiEQAAiHA8h5QB2i6CgAEQC/gBA9DRQAjCUgjCRQgqCWhFB7QhEBlhQBiQhXBcgqBwQgDgJgBAEQgJBoAdBnQAlBmASBpQAADlCZBxIAQALQA9AUA8ApQBVAohMBHQgxAUhqABQiFAAgdgMg");
	this.shape_31.setTransform(-2.4,-42.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],4.9,-68.3,4.9,149).p("AB6wdQifgMiACzQhDB2gHCGQgQCEgHCFQgOB3g+CQQgtCHAMB4IACAJQAfB3BJB8QA/B7AzB6QAuCHBZBiQAEAQgHAEQgEBAgKAaQABAfAzAUQAfANCEABQBqAAAygUQBNhFhWgtQg7gsg9gUIgRgKQichtgTjkQgWhogwhiQglhjAHhmQAAgEAFANQAvhsBdhYQBVhdBJhhQBMh4AyiTQAsiPgbiWQgyjTi/gLg");
	this.shape_32.setTransform(-4.8,-40.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D59211").s().p("AATQQQgzgUgBgfQAKgaAEhAQAHgEgEgQQhZhiguiHQgzh6g/h7QhJh8gfh3IgCgJQgMh4AtiHQA+iQAOh3QAHiFAQiEQAHiGBDh2QCAizCfAMQC/ALAyDTQAbCWgsCPQgyCThMB4QhJBhhVBdQhdBYgvBsQgFgNAAAEQgHBmAlBjQAwBiAWBoQATDkCcBtIARAKQA9AUA7AsQBWAthNBFQgyAUhqAAQiEgBgfgNg");
	this.shape_33.setTransform(-4.8,-40.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],7.2,-70.6,7.2,146.7).p("ACiwLQihgViICrQhIBygPCGQgXCDgPCEQgVB2hGCUQg0CKAKB3IADAJQAfB1BUB9QBJB8A8B4QA2CEBdBYQAFASgJAAQgDBAgJAaQgBAeA0AVQAfANCEADQBqABAxgTQBOhFhWgxQg7gvg9gUIgRgKQidhngnjiQgchng6hdQgthgAFhkQAAgEAGATQA1hqBihTQBahYBOhdQBThzA6iQQA0iNgUiXQgmjVi9gVg");
	this.shape_34.setTransform(-7.1,-37.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D59211").s().p("ADLQPQiEgDgfgNQg0gVABgeQAJgaADhAQAJAAgFgSQhdhYg2iEQg8h4hJh8QhUh9gfh1IgDgJQgKh3A0iKQBGiUAVh2QAPiEAXiDQAPiGBIhyQCIirChAVQC9AVAmDVQAUCXg0CNQg6CQhTBzQhOBdhaBYQhiBTg1BqQgGgTAAAEQgFBkAtBgQA6BdAcBnQAnDiCdBnIARAKQA9AUA7AvQBWAxhOBFQguASheAAIgPAAg");
	this.shape_35.setTransform(-7.1,-37.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],9.5,-72.7,9.5,144.6).p("ADIv3QifgeiRCjQieDcAFEbQgcB2hPCXQg7CMAJB2IADAJQAfBzBfB+QBSB7BGB2QAfBAA5AnQAuAuAbA6QAEARgKgCQgFBAgKAaQgBAfA1AVQAfANCEAEQBqACAygSQBPhEhWg1Qg8gyg+gUIgQgKQifhjg6jeQgjhkhDhZQg0hcAChhQAAgEAIAXQA7hmBmhNQBehUBUhYQBZhvBCiMQA7iKgLiXQgajYi8gfg");
	this.shape_36.setTransform(-9.4,-35.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D59211").s().p("ADeP8QiEgEgfgNQg1gVABgfQAKgaAFhAQAKACgEgRQgbg6guguQg5gngfhAQhGh2hSh7Qhfh+gfhzIgDgJQgJh2A7iMQBPiXAch2QgFkbCejcQCRijCfAeQC8AfAaDYQALCXg7CKQhCCMhZBvQhUBYheBUQhmBNg7BmQgIgXAAAEQgCBhA0BcQBDBZAjBkQA6DeCfBjIAQAKQA+AUA8AyQBWA1hPBEQgtARhbAAIgUgBg");
	this.shape_37.setTransform(-9.4,-35.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],11.5,-74.5,11.5,142.8).p("ADsvfQidgniaCbQipDSgMEcQgiB0hXCaQhCCNAIB2IADAIQAfBwBqB+QBbB7BOBzQAkA+A8AiQAyApAcA5QAFAQgMgEQgGBAgLAZQAAAfA0AWQAfAOCEAFQBqADAygSQBqhajrhrIgQgJQighehNjaQgphihMhTQg8hXABheQAAgFAIAcQBBhjBqhHQBjhOBZhTQBehqBKiIQBCiGgBiZQgOjYi7gqg");
	this.shape_38.setTransform(-11.4,-34);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D59211").s().p("ADvPnQiEgFgfgOQg0gWAAgfQALgZAGhAQAMAEgFgQQgcg5gygpQg8gigkg+QhOhzhbh7Qhqh+gfhwIgDgIQgIh2BCiNQBXiaAih0QAMkcCpjSQCaibCdAnQC7AqAODYQABCZhCCGQhKCIheBqQhZBThjBOQhqBHhBBjQgIgcAAAFQgBBeA8BXQBMBTApBiQBNDaCgBeIAQAJQDrBrhqBaQgrAQhUAAIgdgBg");
	this.shape_39.setTransform(-11.4,-34);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],13.5,-76.1,13.5,141.3).p("AEPvEQibgviiCSQi1DJgbEaQgoByhfCdQhICOAGB0IACAIQAfBtB0B+QBkB6BYBwQAmA7BAAdQA1AkAeA3QAGAQgPgHQgGBAgLAZQgBAfA0AWQAfAOCEAHQBqAEAygRQBQhDhXg9Qg8g4g+gUIgRgIQighZhfjVQgwhfhUhNQhDhSgChbQAAgEAKAgQBGhfBvhBQBmhJBdhOQBlhkBRiEQBJiDAHiYQgCjZi4g0g");
	this.shape_40.setTransform(-13.4,-32.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D59211").s().p("AD/PPQiEgHgfgOQg0gWABgfQALgZAGhAQAPAHgGgQQgeg3g1gkQhAgdgmg7QhYhwhkh6Qh0h+gfhtIgCgIQgGh0BIiOQBfidAohyQAbkaC1jJQCiiSCbAvQC4A0ACDZQgHCYhJCDQhRCEhlBkQhdBOhmBJQhvBBhGBfQgKggAAAEQACBbBDBSQBUBNAwBfQBfDVCgBZIARAIQA+AUA8A4QBXA9hQBDQgpAOhOAAIglgBg");
	this.shape_41.setTransform(-13.4,-32.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],15.3,-77.4,15.3,140).p("AHbqOQAKjZi1g+QiYg4iqCJQi/C/gqEYQgvBvhmCfQhPCQAFBxIACAIQAeBqB/B9QBsB4BgBsQAqA4BDAXQA4AgAgA0QAFAQgQgJQgIBAgKAZQgCAfA0AXQAfAOCEAIQBpAGAzgRQBQhChXhBQg8g7g/gUIgRgIQighThyjPQg1hbhchIQhLhMgDhYQAAgDALAkQBLhbBzg7QBphCBihKQBqhdBYiAQBQh/APiXg");
	this.shape_42.setTransform(-15.2,-31.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D59211").s().p("AEOO0QiEgIgfgOQg0gXACgfQAKgZAIhAQAQAJgFgQQggg0g4ggQhDgXgqg4IjMjkQh/h9gehqIgCgIQgFhxBPiQQBmifAvhvQAqkYC/i/QCqiJCYA4QC1A+gKDZQgPCXhQB/QhYCAhqBdQhiBKhpBCQhzA7hLBbQgLgkAAADQADBYBLBMQBcBIA1BbQByDPCgBTIARAIQA/AUA8A7QBXBBhQBCQgnANhFAAIgwgCg");
	this.shape_43.setTransform(-15.2,-31.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],17,-78.4,17,138.9).p("AHrpjQAWjYixhIQiVhAizB/QjHC0g6EWQg1BshtCgQhVCQADBvIADAIQAdBmCIB8QB0B1BoBoQAuA2BDARQA9AbAhAyQAGAPgTgLQgIA/gLAaQgCAfA0AXQAfAPCDAJQBqAHAzgRQBRhBhZhFQg8g9g/gVIgRgHQighNiDjHQg7hYhkhBQhRhIgGhTQAAgEAMApQCgisD5hfQBuhZBfh6QBYh6AXiWg");
	this.shape_44.setTransform(-16.9,-30.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D59211").s().p("AEaOXQiDgJgfgPQg0gXACgfQALgaAIg/QATALgGgPQghgyg9gbQhDgRgug2IjcjdQiIh8gdhmIgDgIQgDhvBViQQBtigA1hsQA6kWDHi0QCzh/CVBAQCxBIgWDYQgXCWhYB6QhfB6huBZQj5BfigCsQgMgpAAAEQAGBTBRBIQBkBBA7BYQCDDHCgBNIARAHQA/AVA8A9QBZBFhRBBQglAMhBAAQgZAAgegCg");
	this.shape_45.setTransform(-16.9,-30.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],18.6,-79.2,18.6,138.1).p("AH5o1QAijXithSQiRhIi6B1QjRCohJETQg7BphzChQhbCQACBsIACAIQAcBhCSB6QB7B0BwBiQAxAzBGALQA/AWAiAwQAGAOgVgNQgJBAgLAZQgCAfAzAYQAfAPCDALQBqAHAzgQQBShAhahJQg9hAg/gUIgRgHQifhIiTi+QhChUhsg7QhXhBgIhPQAAgEANAuQCqikD9hRQB0hSBlh1QBfh0AfiVg");
	this.shape_46.setTransform(-18.5,-29.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D59211").s().p("AElN4QiDgLgfgPQgzgYACgfQALgZAJhAQAVANgGgOQgigwg/gWQhGgLgxgzQhwhih7h0QiSh6gchhIgCgIQgChsBbiQQBzihA7hpQBJkTDRioQC6h1CRBIQCtBSgiDXQgfCVhfB0QhlB1h0BSQj9BRiqCkQgNguAAAEQAIBPBXBBQBsA7BCBUQCTC+CfBIIARAHQA/AUA9BAQBaBJhSBAQgjALg8AAQgcAAgigCg");
	this.shape_47.setTransform(-18.5,-29.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],20.1,-79.8,20.1,137.5).p("AIGoGQAtjUiohbQiNhQjABqQjaCchYEOQhBBmh5CiQhhCPABBpIACAHQAcBdCZB4QCDBwB2BeQA1AvBIAFQBBARAjAtQAHAOgYgPQgKBAgLAZQgDAfA0AYQAeAPCDANQBqAIAzgPQBSg/hahNQg/hDg/gUIgQgGQiehCiki2QhHhPhzg0Qg/gogZgwQCyiaEBhCQB4hMBshvQBlhvAoiTgAkeCTQgBgBAAgBQAAABABACgAkfCRQgLgVgDgX");
	this.shape_48.setTransform(-20,-28.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D59211").s().p("AEvNWQiDgNgegPQg0gYADgfQALgZAKhAQAYAPgHgOQgjgthBgRQhIgFg1gvQh2heiDhwQiZh4gchdIgCgHQgBhpBhiPQB5iiBBhmQBYkODaicQDAhqCNBQQCoBbgtDUQgoCThlBvQhsBvh4BMQkBBCiyCaQAZAwA/AoQBzA0BHBPQCkC2CeBCIAQAGQA/AUA/BDQBaBNhSA/QghAKg4AAQgeAAgmgDgAkeCUIAAgBIgBgCIABADgAkfCRQgLgVgDgXQADAXALAVg");
	this.shape_49.setTransform(-20,-28.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],20.1,-79.8,20.1,137.5).p("AkfCRQAAABABABQCyiaEBhCQB4hMBshvQBlhvAoiTQAtjUiohbQiNhQjABqQjaCchYEOQhBBmh5CiQhhCPABBpIACAHQAcBdCZB4QCDBwB2BeQA1AvBIAFQBBARAjAtQAHAOgYgPQgKBAgLAZQgDAfA0AYQAeAPCDANQBqAIAzgPQBSg/hahNQg/hDg/gUIgQgGQiehCiki2QhHhPhzg0Qg/gogZgwIAAABQgBgCAAgBQgLgVgDgX");
	this.shape_50.setTransform(-20,-28.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D59211").s().p("AEvNWQiDgNgegPQg0gYADgfQALgZAKhAQAYAPgHgOQgjgthBgRQhIgFg1gvQh2heiDhwQiZh4gchdIgCgHQgBhpBhiPQB5iiBBhmQBYkODaicQDAhqCNBQQCoBbgtDUQgoCThlBvQhsBvh4BMQkBBCiyCaIgBgCQgLgVgDgXQADAXALAVIABADIAAgBQAZAwA/AoQBzA0BHBPQCkC2CeBCIAQAGQA/AUA/BDQBaBNhSA/QghAKg4AAQgeAAgmgDg");
	this.shape_51.setTransform(-20,-28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_2のコピー5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],18.8,-100.9,18.8,116.4).p("AGNmhQBZh5AXiWQAXjYixhJQiUhAi0B+QjICzg7EWQg1BshqB0QhYBygcB1IgBAIQgKB6AcCNQATCIAHCFQgCCOAxCIIABAjQgCBAgJAbQABAfA2ASQAfAMCFgDQBpgDAxgVQBJhIhVgZQg8gfg7gTIgPgNQiMiFBSjaQAMhqgNhtQgChqAoheQABgDABAOQBQhVB3g2QBtg8BmhEQBvhXBfh7g");
	this.shape.setTransform(-18.7,-7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D59211").s().p("Al0PeQg2gSgBgfQAJgbAChAIgBgjQgxiIACiOQgHiFgTiIQgciNAKh6IABgIQAch1BYhyQBqh0A1hsQA7kWDIizQC0h+CUBAQCxBJgXDYQgXCWhZB5QhfB7hvBXQhmBEhtA8Qh3A2hQBVQgBgOgBADQgoBeACBqQANBtgMBqQhSDaCMCFIAPANQA7ATA8AfQBVAZhJBIQgxAVhpADIgtABQheAAgZgKg");
	this.shape_1.setTransform(-18.7,-7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],19.4,-100.3,19.4,117).p("AICqkQAcjYivhMQiUhEi2B6QjMCvhBEUQg4BrhwB4QhbB2gZB1IgBAIQgFB5ArCQQAiCMAWCFQAMCNA+B/QADARgDANQgCBAgJAbQABAeA2ATQAfAMCFgCQBpgDAvgVQBMhHhXgeQg5gjg8gTIgQgMQiRh+A0jgQABhrgbhrQgPhpAihdQACgEAAAUQClipD7hZQBxhVBih4QBbh3AbiWg");
	this.shape_2.setTransform(-19.3,-8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D59211").s().p("AkxPXQg2gTgBgeQAJgbAChAQADgNgDgRQg+h/gMiNQgWiFgiiMQgriQAFh5IABgIQAZh1Bbh2QBwh4A4hrQBBkUDMivQC2h6CUBEQCvBMgcDYQgbCWhbB3QhiB4hxBVQj7BZilCpQAAgUgCAEQgiBdAPBpQAbBrgBBrQg0DgCRB+IAQAMQA8ATA5AjQBXAehMBHQgvAVhpADIglAAQhkAAgbgKg");
	this.shape_3.setTransform(-19.3,-8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],19.9,-99.3,19.9,118).p("AIHqUQAhjXiuhQQiShHi5B2QjQCqhHESQg6Bqh1B+QheB5gXByIAAAKQAAB2A7CTQAvCMAlCFQAaCLBLB0QACARgDAJQgDBAgJAaQABAfA2ATQAfAMCEgCQBogCAxgVQBMhHhWgjQg7gmg7gTIgQgLQiXh3AXjkQgKhqgphnQgbhmAbhdQACgEABAZQCpilD8hTQBzhTBlh2QBeh1AeiVg");
	this.shape_4.setTransform(-19.8,-9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D59211").s().p("AjuPNQg2gTgBggQAJgaADhAQADgJgCgRQhLh0gaiLQgliEgviNQg7iTAAh2IAAgKQAXhyBeh5QB1h9A6hrQBHkRDQirQC5h2CSBHQCuBQghDXQgeCVheB2QhlB1hzBTQj8BTipClQgBgZgCAFQgbBcAbBmQApBnAKBqQgXDkCXB3IAQALQA7AUA7AmQBWAihMBHQgxAWhoACIgdAAQhqAAgcgKg");
	this.shape_5.setTransform(-19.8,-9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],20.5,-97.9,20.5,119.4).p("AIMqAQAljWirhUQiQhLi8BzQjUClhNERQg9Boh5CDQhhB8gUByIABAJQAEB0BLCTQA9CMAzCCQAoCIBWBnQAEASgGAEQgDBAgJAbQABAfA1ATQAgAMCEgBQBogCAxgUQBMhHhXgpQg7gqg9gSIgPgLQibhvgHjjQgUhpg4hiQgnhjAWhbQABgEACAeQCsiiD/hNQB1hQBnhzQBgh0AiiUg");
	this.shape_6.setTransform(-20.4,-10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D59211").s().p("AisO9Qg1gTgBgfQAJgbADhAQAGgEgEgSQhWhngoiIQgziCg9iMQhLiTgEh0IgBgJQAUhyBhh8QB5iDA9hoQBNkRDUilQC8hzCQBLQCrBUglDWQgiCUhgB0QhnBzh1BQQj/BNisCiQgCgegBAEQgWBbAnBjQA4BiAUBpQAHDjCbBvIAPALQA9ASA7AqQBXAphMBHQgxAUhoACIgLAAQh7AAgegLg");
	this.shape_7.setTransform(-20.4,-10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],21,-96.1,21,121.3).p("AIQpnQAqjWiqhYQiOhNi+BuQjYCghTEPQg/Bnh8CIQhlCAgQBwIAAAJQAJBwBbCSQBLCLBAB+QA2CEBgBZQAEARgIABQgDBAgJAbQAAAfA2ATQAfAMCCAAQBqgBAxgVQBNhGhXguQg8gtg+gTIgRgKQidhmgljhQgehnhFhcQgyhdAPhZQACgDACAiQCxieD/hHQB4hOBphxQBjhxAliTg");
	this.shape_8.setTransform(-20.9,-12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D59211").s().p("AhsOqQg2gTAAgfQAJgbADhAQAIgBgEgRQhghZg2iEQhAh+hLiLQhbiSgJhwIAAgJQAQhwBliAQB8iIA/hnQBTkPDYigQC+huCOBNQCqBYgqDWQglCThjBxQhpBxh4BOQj/BHixCeQgCgigCADQgPBZAyBdQBFBcAeBnQAlDhCdBmIARAKQA+ATA8AtQBXAuhNBGQgxAVhqABIgKAAQh5AAgegMg");
	this.shape_9.setTransform(-20.9,-12.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],21.4,-93.9,21.4,123.5).p("AITpLQAvjUiohcQiMhRjBBqQjbCbhaENQhBBmh/CMQhnCDgNBvIABAIQAMBtBqCPQBZCIBOB5QBDB+BnBLQAGAQgLgCQgEBAgJAaQABAfA1AUQAfAMCCAAQBqgBAygUQBMhGhXgyQg9gxg/gSIgRgJQifhdhDjdQgphihQhVQg+hXAKhWQABgEAEAnQC0iZEBhCQB5hLBshvQBmhvAoiSg");
	this.shape_10.setTransform(-21.3,-14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D59211").s().p("AgwOTQg1gUgBgfQAJgaAEhAQALACgGgQQhnhLhDh+QhOh5hZiIQhqiPgMhtIgBgIQANhvBniDQB/iMBBhmQBakNDbibQDBhqCMBRQCoBcgvDUQgoCShmBvQhsBvh5BLQkBBCi0CZQgEgngBAEQgKBWA+BXQBQBVApBiQBDDdCfBdIARAJQA/ASA9AxQBXAyhMBGQgyAUhqABQiCAAgfgMg");
	this.shape_11.setTransform(-21.3,-14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],21.8,-91.3,21.8,126).p("AIVosQA0jTimhfQiLhUjDBlQjeCWhgEMQhDBkiCCRQhoCGgLBsIABAIQAQBoB5CMQBmCDBbBzQAoA7A/AdQA3AkAgA2QAGAQgOgFQgEBAgJAaQAAAfAzAUQAgAMCEABQBqAAAxgUQBNhGhZg4Qg+g0g/gSIgRgIQijhThejUQgyhehchNQhJhQAFhTQAAgDAHArQC3iVEDg8QB6hIBvhsQBnhtAsiSg");
	this.shape_12.setTransform(-21.7,-17.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D59211").s().p("AAGN4QgzgUAAgfQAJgaAEhAQAOAFgGgQQggg2g3gkQg/gdgog7QhbhzhmiDQh5iMgQhoIgBgIQALhsBoiGQCCiRBDhkQBgkMDeiWQDDhlCLBUQCmBfg0DTQgsCShnBtQhvBsh6BIQkDA8i3CVIgHgoQgFBTBJBQQBcBNAyBeQBeDUCjBTIARAIQA/ASA+A0QBZA4hNBGQgxAUhqAAQiEgBgggMg");
	this.shape_13.setTransform(-21.7,-17.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],18.8,-94.1,18.8,123.3).p("AH8phQAfjXiuhQQiShGi4B4QjPCrhGETQg5Bqh1CYQhcCLgEBuIACAJQAWBqB4CGQBmB/BaBxQAoA7A/AcQA3AlAeA2QAGAQgOgFQgDBAgIAaQABAfAzAUQAfAMCEABQBqgBAxgUQBNhGhZg3Qg+g1g/gRIgRgIQijhThejVQgyhehahMQhHhQAChWQAAgEAJAoQCninD8hUQBzhTBkh3QBdh2AdiVg");
	this.shape_14.setTransform(-18.7,-14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D59211").s().p("AAtOWQgzgUgBgfQAIgaADhAQAOAFgGgQQgeg2g3glQg/gcgog7IjAjwQh4iGgWhqIgCgJQAEhuBciLQB1iYA5hqQBGkTDPirQC4h4CSBGQCuBQgfDXQgdCVhdB2QhkB3hzBTQj8BUinCnQgJgoAAAEQgCBWBHBQQBaBMAyBeQBeDVCjBTIARAIQA/ARA+A1QBZA3hNBGQgxAUhqABQiEgBgfgMg");
	this.shape_15.setTransform(-18.7,-14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],15.5,-96.5,15.5,120.8).p("AHdqUQAKjZi0g+QiYg4iqCIQjAC/grEYQgvBwhmCbQhQCOADByIACAJQAbBrB3CBQBmB6BaBwQAoA7A/AcQA1AlAgA2QAGAQgOgGQgDBAgKAbQABAfA1AUQAfAMCEAAQBqAAAxgUQBNhGhZg4Qg+g0g/gRIgRgIQikhUhdjUQgzhehXhMQhFhRgBhZQABgDAJAjQBLhcB0g6QBphDBhhJQBqheBYiAQBRh+APiXg");
	this.shape_16.setTransform(-15.4,-12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D59211").s().p("ABVOwQg1gUgBgfQAKgbADhAQAOAGgGgQQggg2g1glQg/gcgog7Qhahwhmh6Qh3iBgbhrIgCgJQgDhyBQiOQBmibAvhwQArkYDAi/QCqiICYA4QC0A+gKDZQgPCXhRB+QhYCAhqBeQhhBJhpBDQh0A6hLBcQgJgjgBADQABBZBFBRQBXBMAzBeQBdDUCkBUIARAIQA/ARA+A0QBZA4hNBGQgxAUhqAAQiEAAgfgMg");
	this.shape_17.setTransform(-15.4,-12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],9.9,-98.6,9.9,118.7).p("AGlrEQgLjZi6gsQidgpicCYQisDQgQEcQgkBzhYCfQhDCQAKB0IACAIQAiBtB1B7QBmB3BYBuQAoA6A/AdQA2AkAfA2QAGAQgOgFQgDBAgJAaQAAAfA1AUQAgAMCEABQBqgBAxgUQBNhGhag4Qg9g0hAgRIgRgIQijhThgjUQgxhehUhNQhEhRgEhcQAAgEAKAgQBDhjBthFQBihNBahSQBhhoBLiHQBFiGAAiYg");
	this.shape_18.setTransform(-9.8,-9.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D59211").s().p("ABqPGQg1gUAAgfQAJgaADhAQAOAFgGgQQgfg2g2gkQg/gdgog6QhYhuhmh3Qh1h7gihtIgCgIQgKh0BDiQQBYifAkhzQAQkcCsjQQCciYCdApQC6AsALDZQAACYhFCGQhLCHhhBoQhaBShiBNQhtBFhDBjQgKggAAAEQAEBcBEBRQBUBNAxBeQBgDUCjBTIARAIQBAARA9A0QBaA4hNBGQgxAUhqABQiEgBgggMg");
	this.shape_19.setTransform(-9.8,-9.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],2.1,-100.3,2.1,117).p("AFTrvQgfjXi9gaQiegaiPCnQhMBwgTCFQgbCCgSCEQgZB2hKChQg2CSARB0IADAIQAnBuB0B1QBkBzBYBsQAnA7BAAcQA1AlAgA2QAGAQgOgGQgDBAgKAbQABAfA1AUQAfAMCEAAQBqgBAygUQBMhGhZg3Qg+g0g/gSIgRgIQikhThgjUQgxhehRhNQhDhSgHheQAAgEALAbQA4hoBmhPQBahWBShbQBWhwA+iOQA4iMgPiXg");
	this.shape_20.setTransform(-2,-8.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D59211").s().p("ABtPZQg1gVgBgeQAKgbADhAQAOAFgGgPQggg2g1glQhAgcgng7QhYhshkh0Qh0h0gnhuIgDgJQgRhzA2iSQBKihAZh2QASiEAbiCQATiGBMhvQCPioCeAbQC9AaAfDXQAPCXg4CMQg+COhWBwQhSBbhaBWQhmBPg4BoQgLgbAAAEQAHBeBDBSQBRBNAxBeQBgDUCkBTIARAIQA/ASA+A0QBZA3hMBGQgyAUhqABQiEAAgfgMg");
	this.shape_21.setTransform(-2,-8.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-5.9,-101.7,-5.9,115.7).p("AD9sXQg0jTi/gIQiggKh+C0QhBB2gGCHQgOCEgGCFQgNB4g8ChQgpCTAZB0IADAIQAuBuBxBwQBjBvBWBrQAoA7A/AcQA2AkAfA2QAGAQgOgFQgDBAgJAaQAAAfA1AUQAgAMCEAAQBqgBAxgUQBNhGhZg4Qg+g0hAgRIgRgIQikhThgjTQgxhehPhOQhBhTgLhgQAAgEALAXQAuhuBehYQBRhfBJhiQBKh4AxiTQAqiQgdiWg");
	this.shape_22.setTransform(6,-6.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D59211").s().p("ABwPnQg1gUAAgfQAJgaADhAQAOAFgGgQQgfg2g2gkQg/gcgog7QhWhrhjhvQhxhwguhuIgDgIQgZh0ApiTQA8ihANh4QAGiFAOiEQAGiHBBh2QB+i0CgAKQC/AIA0DTQAdCWgqCQQgxCThKB4QhJBihRBfQheBYguBuQgLgXAAAEQALBgBBBTQBPBOAxBeQBgDTCkBTIARAIQBAARA+A0QBZA4hNBGQgxAUhqABQiEAAgggMg");
	this.shape_23.setTransform(6,-6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-14.1,-102.6,-14.1,114.7).p("ACis6QhIjMi8AKQiiAFhtC/Qg1B8AHCHQgBCFAHCFQgCB4gtCgQgcCTAfBzIAEAIQA0BtBuBrQBhBrBVBqQAoA7A/AcQA2AkAfA2QAGAQgNgFQgEBAgJAaQAAAfA2AUQAfAMCEAAQBqgBAxgUQBNhGhZg4Qg+g0hAgRIgRgIQikhThgjTQgxhehNhPQhAhUgOhiQAAgEAKATQAjhxBUhiQBJhmA/hoQA/h/AiiXQAciUgsiSg");
	this.shape_24.setTransform(14.3,-5.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D59211").s().p("AB1PxQg2gUAAgfQAJgaAEhAQANAFgGgQQgfg2g2gkQg/gcgog7QhVhqhhhrQhuhrg0htIgEgIQgfhzAciTQAtigACh4QgHiFABiFQgHiHA1h8QBti/CigFQC8gKBIDMQAsCSgcCUQgiCXg/B/Qg/BohJBmQhUBigjBxQgKgTAAAEQAOBiBABUQBNBPAxBeQBgDTCkBTIARAIQBAARA+A0QBZA4hNBGQgxAUhqABQiEAAgfgMg");
	this.shape_25.setTransform(14.3,-5.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-9.3,-102.9,-9.3,114.5).p("ADWsyQg/jPi+ACQiigBh0C7Qg5B6ABCHQgHCEACCFQgHB5gzCeQgiCRAbB1IADAIQAwBvBqBvQBeBuBRBtQBLB4BrBCQAGAQgMgEQgCBAgJAbQABAfA1ATQAgALCEgCQBqgCAxgVQBkhfjvhfIgSgIQikhVhWjXQguhfhKhSQg9hWgLhiQAAgEAKATQAohvBYheQBMhjBDhmQBFh8AniWQAiiSgliUg");
	this.shape_26.setTransform(9.5,-5.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D59211").s().p("ABsP2Qg1gTgBgfQAJgbAChAQAMAEgGgQQhrhChLh4QhRhthehuQhqhvgwhvIgDgIQgbh1AiiRQAzieAHh5QgCiFAHiEQgBiHA5h6QB0i7CiABQC+gCA/DPQAlCUgiCSQgnCWhFB8QhDBmhMBjQhYBegoBvQgKgTAAAEQALBiA9BWQBKBSAuBfQBWDXCkBVIASAIQDvBfhkBfQgxAVhqACIglABQhkAAgbgKg");
	this.shape_27.setTransform(9.5,-5.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-5,-103,-5,114.3).p("AEEsoQg3jTi/gFQiggIh7C2Qg/B4gECHQgMCEgECFQgLB4g6CdQgoCQAXB1IADAJQArBwBnByQBaByBOBwQBHB7BpBHQAGAQgLgCQgCBAgIAbQABAfA2ASQAgALCEgEQBqgEAwgWQBLhJhagwQg+gvg/gQIgRgIQilhXhLjaQgrhhhHhUQg7hYgHhiQAAgFAJAVQAshuBdhbQBQhfBHhjQBJh6AuiUQAoiQggiVg");
	this.shape_28.setTransform(5.2,-5.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D59211").s().p("ABfP5Qg2gSgBgfQAIgbAChAQALACgGgQQhphHhHh7QhOhwhahyQhnhygrhwIgDgJQgXh1AoiQQA6idALh4QAEiFAMiEQAEiHA/h4QB7i2CgAIQC/AFA3DTQAgCVgoCQQguCUhJB6QhHBjhQBfQhdBbgsBuQgJgVAAAFQAHBiA7BYQBHBUArBhQBLDaClBXIARAIQA/AQA+AvQBaAwhLBJQgwAWhqAEIg9ABQhPAAgYgIg");
	this.shape_29.setTransform(5.2,-5.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],-0.4,-103.1,-0.4,114.2).p("AE1sfQgvjUi+gNQiggOiCCxQhEB1gJCGQgSCEgJCFQgQB3hACbQguCOATB2IADAJQAnByBjB2QBWB1BKBzQBDB8BmBNQAGARgKAAQAABAgIAbQACAeA2ASQAgAKCEgGQBpgGAxgWQBJhKhZgtQg/gsg/gQIgRgIQilhZhBjdQgnhihFhWQg3hagEhiQAAgFAIAVQAxhsBghXQBUhcBLhgQBOh3A0iSQAtiOgZiXg");
	this.shape_30.setTransform(0.6,-5.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D59211").s().p("ABVP7Qg2gSgCgeQAIgbAAhAQAKAAgGgRQhmhNhDh8QhKhzhWh1Qhjh2gnhyIgDgJQgTh2AuiOQBAibAQh3QAJiFASiEQAJiGBEh1QCCixCgAOQC+ANAvDUQAZCXgtCOQg0CShOB3QhLBghUBcQhgBXgxBsQgIgVAAAFQAEBiA3BaQBFBWAnBiQBBDdClBZIARAIQA/AQA/AsQBZAthJBKQgxAWhpAGQgwADgjAAQg9AAgUgHg");
	this.shape_31.setTransform(0.6,-5.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],4,-103.1,4,114.3).p("AFlsTQgmjWi+gVQifgUiJCrQhIBygPCGQgXCDgOCEQgVB3hGCZQg0CMAOB3IADAJQAjByBfB6QBSB5BGB1QA/B/BjBSQAGARgIABQAABAgHAbQACAfA3AQQAgALCEgJQBpgHAwgYQBIhLhZgpQg/gqg/gOIgRgJQilhbg2jfQgkhjhChZQg0hbAAhjQAAgEAHAVQA2hqBhhSQBZhZBPhdQBTh0A5iPQAziNgTiXg");
	this.shape_32.setTransform(-3.9,-5.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D59211").s().p("ABLP7Qg3gQgCgfQAHgbAAhAQAIgBgGgRQhjhSg/h/QhGh1hSh5Qhfh6gjhyIgDgJQgOh3A0iMQBGiZAVh3QAOiEAXiDQAPiGBIhyQCJirCfAUQC+AVAmDWQATCXgzCNQg5CPhTB0QhPBdhZBZQhhBSg2BqQgHgVAAAEQAABjA0BbQBCBZAkBjQA2DfClBbIARAJQA/AOA/AqQBZAphIBLQgwAYhpAHQg7AEgnAAQgxAAgRgGg");
	this.shape_33.setTransform(-3.9,-5.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],8.6,-103,8.6,114.4).p("AGVsHQgejXi9gdQiggbiOCmQhNBvgUCFQgcCCgTCEQgaB2hMCVQg5CLAJB3IACAJQAfB0BbB+QBOB7BCB3QA7CBBgBYQAGARgHADQACBAgIAbQADAfA3AQQAgAJCEgKQBpgJAwgYQBHhMhagmQg/gng+gOIgSgJQilhegrjgQgghlg/hbQgyhdAEhiQAAgEAHAVQA5hoBlhOQBdhVBShaQBXhvBAiOQA5iLgNiXg");
	this.shape_34.setTransform(-8.5,-5.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D59211").s().p("ABAP7Qg3gQgDgfQAIgbgChAQAHgDgGgRQhghYg7iBQhCh3hOh7Qhbh+gfh0IgCgJQgJh3A5iLQBMiVAah2QATiEAciCQAUiFBNhvQCOimCgAbQC9AdAeDXQANCXg5CLQhACOhXBvQhSBahdBVQhlBOg5BoQgHgVAAAEQgEBiAyBdQA/BbAgBlQArDgClBeIASAJQA+AOA/AnQBaAmhHBMQgwAYhpAJQhEAFgpAAQgnAAgQgEg");
	this.shape_35.setTransform(-8.5,-5.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],10.6,-102.7,10.6,114.6).p("AGqr6QgVjYi7gkQifghiVCfQiiDYgCEcQgfB1hSCTQg/CJAFB3IACAJQAaB0BXCCQBLB+A9B5QA2CEBgBcQAFARgFAFQACBAgGAcQADAeA1APQAhAJCDgMQBpgLAvgZQBGhNhZgiQg/glg/gNIgSgJQilhggdjiQgfhmg9hdQguheAHhiQAAgEAHAWQA9hlBohLQBghRBWhWQBchtBFiKQA+iJgHiYg");
	this.shape_36.setTransform(-10.5,-5.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D59211").s().p("AAcP5Qg1gPgDgeQAGgcgChAQAFgFgFgRQhghcg2iEQg9h5hLh+QhXiCgah0IgCgJQgFh3A/iJQBSiTAfh1QACkcCijYQCVifCfAhQC7AkAVDYQAHCYg+CJQhFCKhcBtQhWBWhgBRQhoBLg9BlQgHgWAAAEQgHBiAuBeQA9BdAfBmQAdDiClBgIASAJQA/ANA/AlQBZAihGBNQgvAZhpALQhLAHgqAAQghAAgOgEg");
	this.shape_37.setTransform(-10.5,-5.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],11.8,-102.6,11.8,114.8).p("AG3rwQgOjZi7gpQidgniaCcQioDTgMEbQghB0hXCQQhDCJABB1IACAJQAXB2BSCDQBHCBA6B7QAzCFBcBgQAFARgGAFQABBAgIAbQADAeA2ARQAfAKCDgIQBqgIAwgYQBIhLhZgkQg9gng/gPIgRgKQifhkgajjQgchng5heQgshgAKhiQAAgEAGAWQBBhjBqhHQBjhPBYhTQBfhqBJiIQBDiHgDiYg");
	this.shape_38.setTransform(-11.7,-5.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D59211").s().p("AgLP2Qg2gRgDgeQAIgbgBhAQAGgFgFgRQhchggziFQg6h7hHiBQhSiDgXh2IgCgJQgBh1BDiJQBXiQAhh0QAMkbCojTQCaicCdAnQC7ApAODZQADCYhDCHQhJCIhfBqQhYBThjBPQhqBHhBBjQgGgWAAAEQgKBiAsBgQA5BeAcBnQAaDjCfBkIARAKQA/APA9AnQBZAkhIBLQgwAYhqAIQg6ADgnAAQgwAAgRgFg");
	this.shape_39.setTransform(-11.7,-5.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],13.1,-102.5,13.1,114.9).p("AHFrnQgIjZi5gvQidgrieCXQivDNgTEbQgmBzhbCOQhHCHgCB1IABAJQATB2BPCGQBDCDA2B9QAvCFBaBjQAEASgGAEQgBBAgJAbQACAfA2ASQAgALCCgEQBqgFAwgWQBKhJhXgnQg9gpg9gRIgRgKQidhpgSjkQgZhog3hgQgphhANhhQABgEAFAWQBDhhBshEQBmhLBbhRQBhhnBOiGQBGiEADiZg");
	this.shape_40.setTransform(-13,-6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D59211").s().p("AgyPxQg2gSgCgfQAIgbAChAQAGgEgFgSQhZhjgviFQg2h9hDiDQhPiGgTh2IgBgJQACh1BHiHQBbiOAlhzQAUkbCvjNQCeiXCdArQC5AvAHDZQgCCZhHCEQhNCGhhBnQhcBRhlBLQhsBEhDBhQgFgWgBAEQgNBhApBhQA3BgAYBoQASDkCeBpIARAKQA9ARA8ApQBYAnhKBJQgwAWhrAFIhCABQhIAAgXgIg");
	this.shape_41.setTransform(-13,-6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],14.3,-102.3,14.3,115.1).p("AHRrcQgBjai4g0QibgwijCSQi0DIgdEaQgpByhfCLQhLCEgGB1IABAJQAQB3BLCIQA/CFAyB/QAqCHBXBlQAEASgGAEQgDBAgJAbQAAAeA2AUQAfAMCCAAQBqgCAxgUQBNhHhWgpQg8grg9gTIgRgLQiZhtgMjkQgVhpg0hiQgmhiAQhhQABgEAEAXQBGheBvhCQBnhJBdhOQBmhjBRiEQBKiDAHiXg");
	this.shape_42.setTransform(-14.2,-6.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D59211").s().p("AhaPrQg2gUAAgeQAJgbADhAQAGgEgEgSQhXhlgqiHQgyh/g/iFQhLiIgQh3IgBgJQAGh1BLiEQBfiLAphyQAdkaC0jIQCjiSCbAwQC4A0ABDaQgHCXhKCDQhRCEhmBjQhdBOhnBJQhvBChGBeQgEgXgBAEQgQBhAmBiQA0BiAVBpQAMDkCZBtIARALQA9ATA8ArQBWAphNBHQgxAUhqACIgKAAQh5AAgegMg");
	this.shape_43.setTransform(-14.2,-6.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],15.5,-102.1,15.5,115.3).p("AHdrSQAFjZi2g6QiZg1inCNQi7DDglEZQgsBwhjCIQhPCCgKB1IABAJQAMB3BHCLQA7CGAuCAQAnCKBTBnQADARgGAFQgFBAgKAaQAAAfA1AVQAfANCCADQBqACAygTQBOhEhVgsQg6gtg9gUIgQgMQiWhygFjkQgShqgxhjQgihjAShgQABgFADAXQBKhbByg/QBohFBfhLQBohhBViBQBOiAAMiYg");
	this.shape_44.setTransform(-15.4,-6.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D59211").s().p("AAfP0QiCgDgfgNQg1gVAAgfQAKgaAFhAQAGgFgDgRQhThngniKQguiAg7iGQhHiLgMh3IgBgJQAKh1BPiCQBjiIAshwQAlkZC7jDQCniNCZA1QC2A6gFDZQgMCYhOCAQhVCBhoBhQhfBLhoBFQhyA/hKBbQgDgXgBAFQgSBgAiBjQAxBjASBqQAFDkCWByIAQAMQA9AUA6AtQBVAshOBEQguARhaAAIgUAAg");
	this.shape_45.setTransform(-15.4,-6.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],16.6,-101.9,16.6,115.5).p("AHorIQAMjYi0hAQiYg5irCHQjBC9gtEYQgvBvhoCFQhTCAgNB0IABAKQAIB3BDCNQA3CIAqCBQAjCKBQBqQADASgGAEQgHBAgLAZQgCAfA1AXQAfAOCDAHQBoAFAygRQBRhChTgvQg5gug8gWIgQgMQiTh3ACjkQgPhqguhlQgfhkAVhgQABgEADAXQBMhZB0g8QBphBBihJQBrhdBZh/QBSh+AQiXg");
	this.shape_46.setTransform(-16.5,-6.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D59211").s().p("AgIPwQiDgHgfgOQg1gXACgfQALgZAHhAQAGgEgDgSQhQhqgjiKQgqiBg3iIQhDiNgIh3IgBgKQANh0BTiAQBoiFAvhvQAtkYDBi9QCriHCYA5QC0BAgMDYQgQCXhSB+QhZB/hrBdQhiBJhpBBQh0A8hMBZQgDgXgBAEQgVBgAfBkQAuBlAPBqQgCDkCTB3IAQAMQA8AWA5AuQBTAvhRBCQgnAOhIAAIgrgCg");
	this.shape_47.setTransform(-16.5,-6.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],17.7,-101.6,17.7,115.8).p("AHzq8QASjZiyhFQiWg9ixCCQjEC3g2EWQgzBuhrCCQhXB9gRB0IABAJQAFB4A+COQAyCKAnCDQAeCLBOBsQACASgGADQgJBAgMAZQgCAfAzAZQAfAOCDAMQBoAIAzgQQBSg/hSgyQg3gvg6gZIgPgMQiRh7AJjkQgMhqgrhmQgdhmAZhfQABgEACAXQBPhXB2g4QBrg+BkhGQBthaBdh8QBXh7AUiWg");
	this.shape_48.setTransform(-17.6,-6.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D59211").s().p("AgxPsQiDgMgfgOQgzgZACgfQAMgZAJhAQAGgDgCgSQhOhsgeiLQgniDgyiKQg+iOgFh4IgBgJQARh0BXh9QBriCAzhuQA2kWDEi3QCxiCCWA9QCyBFgSDZQgUCWhXB7QhdB8htBaQhkBGhrA+Qh2A4hPBXQgCgXgBAEQgZBfAdBmQArBmAMBqQgJDkCRB7IAPAMQA6AZA3AvQBSAyhSA/QgiAKg5AAQgcAAgkgCg");
	this.shape_49.setTransform(-17.6,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_1のコピー8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7E6308").s().p("AjgP6QiYgUgrgVQhrhgBBh1IANgWQBmiCCPh/QCsh5AniaQgJAWAAgJQgIh/goh9Qg0iAgRh+QgaiZATicQAOilBaiAQCcitCZA1QC0BCASDTQAECMgnCHQgwCGgmCFQgVB8gICHQAGCSg+BiIgRAaQh5B2iiB1Qi7BphBCYIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgBABIAAAAIAAAAIgBAFIgBACIAAABIAAgBIABgCIABgFIAAAAIAAAAIABgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABADQAYAoA+APQBOACAOA3QgNBEhkAAIgSAAg");
	this.shape.setTransform(-29.6,-60.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E6308").s().p("AisQEQiYgZgqgWQhnheBCh1IANgXQBniDCKiAQClh7AeibQgLAcgBgJQgVh+g0h4QhAh6geh7QgqiVADieQgEikBNiKQCKi9CdAlQC5AwApDPQASCLgZCLQghCLgZCIQgHB+AGCIQAVCUg2BmIgQAbQhxB9ihB7Qi6Byg7CbQgBAAgCAGQACgGABAAQAAAAAAAAQAAAAABABQAAAAAAABQAAABAAABQAYAqA8ARQBMAHAMA2QgOBBhbAAIgcgCg");
	this.shape_1.setTransform(-23.3,-59.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E6308").s().p("AiCQJQiWgfgqgYQhihaBDh2IANgXQBoiECFiCQCgh9ASibQgLAigCgJQgih7g/hyQhNhygrh4Qg5iRgNidQgUijA+iQQB3jKCeAUQC9AbA+DLQAhCJgLCMQgTCOgLCJQAHCAAVCJQAkCVguBoIgOAbQhpCCifCDQi6B6g1CgIgBADIABgDQABgDABAGQAYAsA6AVQBKAJAHA4QgNA8hSAAQgRAAgVgCg");
	this.shape_2.setTransform(-16.1,-59.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E6308").s().p("Ah6QHQiVglgpgZQhehWBEh4IANgXQBoiFCBiEQCbh/AIiaQgLAogCgJQgvh3hLhrQhYhpg3hzQhIiKgdiaQglihAviWQBhjVCiADQC9AIBTDEQAuCEAECNQgECOADCKQAVCAAjCLQA0CRgnBqIgLAcQhhCGicCKQi7CEguCjQABgFACAIQAXAtA4AYQBGAOAHA3QgPA6hMAAQgUAAgYgEg");
	this.shape_3.setTransform(-5.6,-59.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E6308").s().p("AhSP+QiUgqgngaQhZhTBEh4IANgXQBpiHB7iGQCWiBgCiZQgJAvgDgJQg7hxhWhlQhihehDhsQhWiBgtiXQg1icAfiaQBLjeCigNQC8gMBmC6QA8B/ATCLQAKCOASCJQAiB+AxCIQBECOgfBsIgJAcQhYCLiYCQQi6CNgoCkQACgCAAAJQAYAtA1AcQBEARAFA4QgSA2hEAAQgXAAgcgGg");
	this.shape_4.setTransform(1.4,-59.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E6308").s().p("AgVPxQiSgwgngcQhUhPBEh4IAOgYQBpiIB0iHQCUiEgNiWQgGAzgEgHQhGhrhghbQhshThNhlQhih4g9iRQhFiVAPidQA0jlCfgeQC8gfB3CuQBiEHBAENQAwB7A/CEQBUCKgYBrIgHAdQhOCOiVCXQi5CWghCmQABABABAIQAXAvAxAeQBDAWAEA4QgUAzhAAAQgZAAgegIg");
	this.shape_5.setTransform(6,-60.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E6308").s().p("AAkPeQiOg1gmgeQhPhKBFh5IANgYQBqiKBwiJQCOiGgXiTIgDAZQgCAdgCgEQhRhjhqhQQhyhIhYhcQhuhuhLiKQhViNgBidQAcjpCbguQC5gzCIChQB8D8BcEEQA9B2BNCAQBiCDgPBrIgFAdQhGCRiQCdQi2CfgdCnIABAMQAWAwAyAiQBAAZABA4QgUAwg7AAQgbAAgkgKg");
	this.shape_6.setTransform(10.3,-62.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E6308").s().p("ABCP7QiTgogogaQhWhGA7h+IAMgYQBciRBjiTQCAiSgXiXQgCAvgFgIQhJhohjhWQhuhRhRhjQhmh1hBiPQhKiTAKidQAsjmCfgjQC7glB8CqQBrEEBIEKQAzB4BDCAQBXCEgQBuIgFAeQhFCViDCjQioClgSCoIADAMQAaAtA0AdQBDATAGA4QgSA3hHAAQgWAAgbgFg");
	this.shape_7.setTransform(7.4,-63.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7E6308").s().p("ABgQSQiVgagrgXQhdhAAxiBIAKgaQBPiXBWicQBwidgXiaQgCAkgEgIQhBhuhdhcQhohahJhnQheh8g3iUQg/iYAVibQA9jiCggYQC8gYBxCzQBEB6AcCKQATCNAaCIQApB6A5CAQBLCDgRBxIgFAeQhDCZh3CoQiXCqgICpIAEAKQAdAsA3AXQBFAMALA3QgOBAhZAAQgOAAgQgCg");
	this.shape_8.setTransform(4.3,-64.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E6308").s().p("AB+QlQiXgNgsgTQhkg5AniFIAIgaQBAidBJikQBhiogXidQgCAZgDgIQg6hyhVhjQhihhhChsQhUiDgtiXQg0icAgiaQBNjdCigMQC9gLBkC7QA7B/ARCMQAKCOARCJQAeB6AvCAQA+CDgRByIgGAfQhBCchpCsQiHCuADCqIAEAJQAhAoA5ASQBGAGAQA2QgJBJhyAAIgEAAg");
	this.shape_9.setTransform(1,-66.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E6308").s().p("AgpQkQhqgzAdiHIAGgaQAyiiA9isQBOiygWifQgCAOgDgJQgxh1hOhpQhbhog6hxQhKiIgiiaQgpifAriXQBdjXCigBQC9ADBXDBQAxCEAICMQgBCOAHCKQAUB7AkB/QAyCAgSB0IgGAfQg/CfhbCuQh2C0AOCoQABAAAEAIQAkAlA6AMQBHgBAUA1QgDBMh1AIIgJAAQiSAAgqgOg");
	this.shape_10.setTransform(-2.4,-68.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E6308").s().p("AgMQ6QhvgsATiIIADgbQAkilAvi0QA9i7gWigQgBACgDgJQgmh5hJhuQhShugyh0QhBiNgXicQgdiiA2iUQBrjQCiALQC8ARBJDHQApCGgDCNQgLCOgDCKQAJB6AaB9QAlB+gSB1IgHAfQg9CghMCxQhlC3AaCnQAAgBAEAHQAnAjA7AGQBHgHAZAyQAEBLh0AUQhWAHg0AAQgpAAgTgEg");
	this.shape_11.setTransform(-6.1,-70.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E6308").s().p("AAERIQhygjAJiKIABgbQAVioAhi7QAujEgWigIgDgSQggh8hAhzQhKhzgqh4Qg2iRgMidQgSikBBiPQB6jICeAWQC9AfA7DLQAeCJgNCMQgVCNgMCJQgCB5APB7QAYB7gTB1IgGAfQg6Chg+CzQhTC6AkClQAAgDAFAIQApAfA8ABQBGgPAeAwQAKBLhyAdQh6AWg3AAIgWgBg");
	this.shape_12.setTransform(-8.6,-72.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E6308").s().p("AAFRIQhygjAIiKIABgbQAVioAhi7QAujEgWigIgDgSQggh8hAhzQhKhzgqh4Qg2iRgMidQgSikBBiPQB6jICeAWQC9AfA7DLQAeCJgNCMQgVCNgMCJQgCB5APB7QAYB7gTB1IgGAfQg6Chg+CzQhTC6AkClQAAgDAFAIQApAfA8ABQBHgPAdAwQAKBLhyAdQh6AWg2AAIgWgBg");
	this.shape_13.setTransform(-8.6,-72.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E6308").s().p("AAFRIQhygjAIiKIABgbQAVioAhi7QAujEgWigIgCgSQghh8hAhzQhKhzgqh4Qg2iRgMidQgSikBBiPQB6jICeAWQC9AfA7DLQAeCJgNCMQgVCNgMCJQgCB5APB7QAZB7gTB1IgHAfQg6Chg+CzQhTC6AlClQAAgDAEAIQApAfA9ABQBGgPAdAwQAKBLhxAdQh7AWg2AAIgWgBg");
	this.shape_14.setTransform(-8.6,-72.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E6308").s().p("AAFRIQhzgjAJiKIACgbQAUioAhi7QAujEgWigIgCgSQghh8hAhzQhKhzgqh4Qg2iRgMidQgSikBBiPQB6jICeAWQC9AfA7DLQAeCJgNCMQgVCNgMCJQgCB5APB7QAZB7gTB1IgHAfQg6Chg+CzQhTC6AlClQAAgDAFAIQAoAfA9ABQBGgPAdAwQAKBLhxAdQh7AWg2AAIgWgBg");
	this.shape_15.setTransform(-8.6,-72.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7E6308").s().p("AAFRIQhzgjAJiKIACgbQAUioAhi7QAujEgWigIgCgSQggh8hAhzQhLhzgqh4Qg2iRgMidQgSikBBiPQB6jICeAWQC9AfA7DLQAeCJgNCMQgVCNgMCJQgBB5AOB7QAZB7gTB1IgHAfQg6Chg+CzQhSC6AkClQAAgDAFAIQApAfA8AAQBGgOAdAvQAKBLhxAeQh7AWg2AAIgWgBg");
	this.shape_16.setTransform(-8.6,-72.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7E6308").s().p("AAFRIQhygjAIiKIABgbQAVioAhi7QAujEgWigIgDgSQggh8hAhzQhLhzgph4Qg3iRgLidQgSikBAiPQB6jICfAWQC8AfA7DLQAfCJgNCMQgVCNgNCJQgBB5APB7QAYB7gTB1IgGAfQg6Chg+CzQhTC6AlClQAAgDAEAIQApAfA9AAQBGgPAdAwQAKBLhxAeQh7AWg2AAIgWgBg");
	this.shape_17.setTransform(-8.6,-72.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7E6308").s().p("AAFRIQhygjAIiKIACgbQAUioAhi7QAujEgWigIgDgSQggh8hAhzQhKhzgqh4Qg3iRgLidQgSikBAiPQB6jICfAWQC8AeA7DMQAfCJgNCMQgVCNgNCJQgBB5APB7QAYB7gTB1IgGAfQg6Chg+CzQhTC6AlClQAAgDAEAIQApAfA9AAQBGgPAdAwQAKBLhxAeQh7AWg2AAIgWgBg");
	this.shape_18.setTransform(-8.6,-72.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E6308").s().p("AAFRIQhzgjAJiKIACgbQAUioAhi7QAujEgWigIgCgSQghh8hAhzQhKhzgqh4Qg3iRgLidQgSikBAiPQB6jICfAWQC8AeA7DMQAfCJgNCMQgVCNgNCJQgBB5APB7QAYB7gTB1IgGAfQg6Chg+CzQhTC6AlClQAAgDAFAIQApAfA8AAQBGgPAdAwQAKBLhxAeQh6AWg3AAIgWgBg");
	this.shape_19.setTransform(-8.6,-72.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7E6308").s().p("AAFRIQhygjAIiKIACgbQAUioAhi7QAujEgWigIgCgSQghh8hAhzQhKhzgqh4Qg3iRgLidQgSikBAiPQB6jICfAWQC8AeA7DMQAfCJgNCMQgVCNgNCJQgBB5APB7QAZB7gTB1IgHAfQg6Chg+CzQhSC6AkClQAAgDAFAIQApAeA8ABQBGgPAeAwQAKBLhyAeQh6AWg3AAIgWgBg");
	this.shape_20.setTransform(-8.6,-72.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7E6308").s().p("AAFRIQhygjAIiKIACgbQAUioAhi7QAujEgWigIgCgSQghh8hAhzQhKhzgqh4Qg3iRgLidQgSikBAiPQB6jICfAWQC8AeA7DMQAfCJgNCMQgVCNgNCJQgBB5APB7QAZB7gTB0IgHAgQg6Chg+CzQhSC6AkClQAAgDAFAIQApAeA8ABQBGgPAeAwQAKBLhyAeQh6AWg3AAIgWgBg");
	this.shape_21.setTransform(-8.6,-72.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7E6308").s().p("AAGRIQhzgjAJiKIABgbQAUioAhi7QAujEgWigIgCgSQghh8hAhzQhKhzgqh4Qg3iRgLidQgSikBAiPQB6jICfAWQC8AeA7DMQAfCJgNCMQgVCNgNCJQgBB4APB8QAZB7gTB0IgHAgQg6Chg+CzQhSC6AkClQAAgDAFAIQApAeA8ABQBGgPAeAwQAKBLhyAeQh6AWg2AAIgWgBg");
	this.shape_22.setTransform(-8.6,-72.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7E6308").s().p("AAGRIQhygjAIiKIABgbQAVioAgi7QAujEgVigIgDgSQggh8hAhzQhLhzgqh4Qg3iRgLidQgSikBAiPQB6jICfAWQC8AeA7DMQAfCJgNCMQgVCNgNCJQgBB4APB8QAZB7gTB0IgGAgQg7Chg+CzQhSC6AkClQABgDAEAIQApAeA8ABQBHgPAdAwQAKBLhxAeQh7AWg2AAIgWgBg");
	this.shape_23.setTransform(-8.6,-72.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7E6308").s().p("AAFRIQhygjAIiKIACgbQAUioAhi7QAujEgWigIgDgSQggh8hAhzQhLhzgph4Qg3iSgMicQgSikBBiPQB6jICeAWQC9AeA7DMQAeCJgMCMQgVCNgNCJQgBB4APB8QAYB7gTB0IgGAgQg6Chg+CzQhSC6AkClQAAgDAFAIQApAeA8ABQBGgPAeAwQAKBLhyAeQh6AWg3AAIgWgBg");
	this.shape_24.setTransform(-8.5,-72.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7E6308").s().p("AAGRIQhzgjAJiKIABgbQAUioAhi7QAujEgWigIgCgSQggh8hBhzQhLhzgph4Qg3iRgMidQgSikBBiPQB6jICeAWQC8AeA7DMQAfCJgMCMQgVCNgNCJQgBB4APB7QAYB7gTB1IgGAfQg6Cig+CzQhSC6AkClQAAgDAFAIQApAeA8ABQBGgPAeAwQAKBLhyAeQh6AWg2AAIgWgBg");
	this.shape_25.setTransform(-8.5,-72.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7E6308").s().p("AAGRIQhygjAIiKIABgbQAUioAhi7QAujEgWigIgCgSQggh8hBhzQhLhzgph4Qg3iRgMidQgSikBBiPQB6jICeAWQC8AeA7DMQAfCJgMCMQgVCNgNCJQgBB4APB7QAZB7gTB1IgHAfQg6Cig+CzQhSC6AkClQAAgDAFAIQApAeA8ABQBHgPAdAwQAKBLhxAeQh7AWg2AAIgWgBg");
	this.shape_26.setTransform(-8.5,-72.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7E6308").s().p("AAGRIQhygjAIiKIABgbQAVioAgi7QAujEgWigIgCgSQggh8hBhzQhLhzgph4Qg3iRgMidQgSikBBiPQB5jICfAWQC8AeA7DMQAfCJgMCMQgVCNgNCJQgBB4APB7QAZB7gTB1IgHAfQg6Cig+CzQhSC5AlCmQAAgDAEAIQApAeA9ABQBGgPAdAwQAKBLhxAeQh7AWg2AAIgWgBg");
	this.shape_27.setTransform(-8.5,-72.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7E6308").s().p("AAGRIQhzgjAJiKIABgbQAUioAhi7QAujEgWigIgDgSQggh8hAhzQhLhzgqh4Qg2iRgMidQgSikBAiPQB6jICeAWQC9AeA7DMQAfCJgNCMQgVCNgMCJQgBB4AOB7QAZB7gTB1IgGAfQg6Cig+CzQhSC5AkCmQAAgDAFAIQApAeA8ABQBGgPAeAwQAKBLhyAeQh6AWg2AAIgWgBg");
	this.shape_28.setTransform(-8.5,-72.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7E6308").s().p("AAGRIQhygjAIiKIABgbQAUioAhi7QAujEgWigIgDgSQggh8hAhzQhLhzgph4Qg3iRgMidQgSijBAiQQB6jICeAWQC9AeA7DMQAfCJgNCMQgVCNgMCJQgBB4AOB7QAZB7gTB1IgGAfQg6Cig+CzQhSC5AkCmQAAgDAFAIQApAeA8ABQBHgPAdAwQAKBLhxAeQh7AWg2AAIgWgBg");
	this.shape_29.setTransform(-8.5,-72.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7E6308").s().p("AAGRIQhygjAIiKIABgbQAUioAhi7QAujEgWigIgDgSQggh8hAhzQhLhzgph4Qg3iRgMidQgSijBAiQQB6jICeAWQC9AeA7DMQAfCJgNCMQgVCNgMCJQgBB4APB7QAYB7gTB1IgGAfQg6Cig+CzQhSC5AkCmQABgDAEAIQApAeA9ABQBGgPAdAwQAKBLhxAeQh7AWg2AAIgWgBg");
	this.shape_30.setTransform(-8.5,-72.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7E6308").s().p("AAGRIQhygjAIiKIABgbQAVioAgi7QAujEgWigIgCgSQghh8hAhzQhLhzgph4Qg3iRgMidQgSijBAiQQB6jICeAWQC9AeA7DMQAfCJgNCMQgVCNgMCJQgBB4APB7QAYB7gTB1IgGAfQg6Cig9CzQhTC5AlCmQAAgDAEAIQApAeA9ABQBGgPAdAwQAKBLhxAeQh7AWg2AAIgWgBg");
	this.shape_31.setTransform(-8.5,-72.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7E6308").s().p("AAGRIQhygjAIiKIACgbQAUioAgi7QAujEgWigIgCgSQghh8hAhzQhLhzgph4Qg3iRgMidQgSijBAiQQB6jICeAWQC9AeA7DMQAfCJgNCLQgVCNgMCKQgBB4APB7QAZB7gTB1IgHAfQg6Cig9CzQhTC5AlCmQAAgDAFAIQApAeA8ABQBGgPAdAwQAKBLhxAeQh6AWg3AAIgWgBg");
	this.shape_32.setTransform(-8.5,-72.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7E6308").s().p("AAGRIQhygjAIiKIABgaQAUioAhi7QAujFgWigIgDgSQggh8hAhzQhLhzgqh4Qg3iRgLidQgSijA/iQQB6jICfAWQC8AeA7DMQAfCJgMCLQgVCNgNCKQAAB4AOB7QAZB7gTB1IgGAfQg6Cig+CzQhSC5AkCmQABgDAEAIQApAeA9ABQBGgPAdAwQAKBLhxAeQh6AWg3AAIgWgBg");
	this.shape_33.setTransform(-8.4,-72.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7E6308").s().p("AAGRIQhygjAIiKIABgaQAVioAgi7QAujFgWigIgDgSQggh8hAhzQhLhzgqh4Qg3iRgLidQgSijA/iQQB6jICfAWQC8AeA7DMQAfCJgMCLQgVCNgNCKQAAB4AOB7QAZB7gTB1IgGAfQg6Cig+CzQhSC5AlCmQAAgDAEAIQApAeA9ABQBGgPAdAwQAKBLhxAeQh6AWg3AAIgWgBg");
	this.shape_34.setTransform(-8.4,-72.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7E6308").s().p("AAGRIQhygjAIiKIACgaQAUioAgi7QAujFgWigIgDgSQggh8hAhzQhLhzgqh4Qg3iRgLidQgSijA/iQQB6jICfAWQC8AeA7DLQAfCJgMCMQgVCNgMCKQgBB4AOB7QAZB7gTB1IgGAfQg6Cig9CzQhTC5AlCmQAAgDAFAIQAoAeA9ABQBGgPAdAwQAKBLhxAeQh6AWg3AAIgWgBg");
	this.shape_35.setTransform(-8.4,-72.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7E6308").s().p("AAHRIQhzgjAIiKIACgaQAUioAgi7QAujFgWigIgDgSQggh8hAhzQhLhzgqh3Qg3iSgLidQgSijA/iQQB6jICfAWQC8AeA7DLQAfCJgMCMQgVCNgMCKQgBB4AOB7QAZB7gTB1IgGAfQg6Cig9CzQhTC5AlCmQAAgCAFAGQApAfA8ABQBGgPAeAwQAKBLhyAeQh6AWg2AAIgWgBg");
	this.shape_36.setTransform(-8.4,-72.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7E6308").s().p("AAHRIQhzgjAIiKIACgaQAUioAgi7QAujFgWigIgCgSQghh8hAhzQhLhzgqh3Qg3iSgLidQgSijA/iQQB6jICfAWQC8AeA7DLQAfCJgMCMQgVCNgMCKQgBB4APB7QAZB7gTB1IgHAfQg6Cig9CzQhSC5AkCmQAAgCAFAGQApAfA8ABQBGgPAeAwQAKBLhxAdQh7AXg3AAIgVgBg");
	this.shape_37.setTransform(-8.4,-72.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7E6308").s().p("AAHRIQhygjAIiKIABgaQAUioAhi7QAtjFgWigIgCgSQghh8hAhzQhLhzgqh3Qg3iSgLidQgSijA/iQQB6jICfAWQC8AeA7DLQAfCJgMCMQgVCNgMCKQgBB4APB7QAZB7gTB1IgHAfQg6Cig9CzQhSC5AkCmQAAgCAFAGQApAfA8ABQBGgPAeAwQAKBLhxAdQh7AXg3AAIgVgBg");
	this.shape_38.setTransform(-8.4,-72.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7E6308").s().p("AAHRIQhzgjAIiKIACgaQAUioAgi7QAujFgWigIgDgSQggh8hAhzQhMhzgph3Qg3iSgMidQgSijBAiQQB6jICeAWQC9AeA7DLQAfCJgNCMQgVCNgMCKQgBB4APB7QAZB7gTB1IgGAfQg6Cig9CzQhTC5AlCmQAAgCAFAGQApAfA8ABQBGgPAeAwQAKBLhyAdQh6AXg3AAIgVgBg");
	this.shape_39.setTransform(-8.4,-72.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7E6308").s().p("AAHRIQhzgjAIiKIACgaQAUioAgi7QAujFgWigIgDgSQggh8hAhzQhLhzgqh3Qg3iSgMidQgSijBAiQQB6jICeAWQC9AeA7DLQAfCJgMCMQgVCNgNCKQgBB4APB7QAZB7gTB1IgGAfQg6Cig9CzQhSC5AkCmQAAgCAFAGQApAfA8ABQBGgPAeAwQAKBLhxAdQh7AXg3AAIgVgBg");
	this.shape_40.setTransform(-8.4,-72.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7E6308").s().p("AAHRIQhygjAIiKIABgaQAUioAgi7QAujFgWigIgDgSQggh8hAhzQhLhzgqh3Qg3iSgMidQgSijBAiQQB6jICeAWQC9AeA7DLQAfCJgMCMQgVCNgNCKQAAB4AOB7QAZB7gTB1IgGAfQg6Cig9CzQhSC5AkCmQAAgCAFAGQApAfA8ABQBGgPAeAwQAKBLhxAdQh7AXg3AAIgVgBg");
	this.shape_41.setTransform(-8.4,-72.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7E6308").s().p("AAHRIQhygjAIiKIABgaQAUioAhi7QAtjFgWigIgCgSQghh8hAhzQhLhzgqh3Qg3iSgMidQgSijBAiQQB5jICfAWQC9AeA7DLQAfCJgMCMQgVCNgNCKQAAB4AOB7QAZB7gTB1IgGAfQg6Cig9CzQhSC5AkCmQAAgCAFAGQApAfA9ABQBGgPAdAwQAKBLhxAdQh7AXg2AAIgWgBg");
	this.shape_42.setTransform(-8.4,-72.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7E6308").s().p("AAHRIQhygjAIiKIABgaQAUioAhi7QAtjFgWigIgCgSQghh8hAhzQhLhzgqh3Qg3iSgMicQgSikBAiQQB5jICfAWQC9AeA7DLQAfCJgMCMQgVCNgNCJQAAB5APB7QAZB7gTB1IgHAfQg5Cig+CzQhSC5AkCmQABgCAEAGQApAfA9ABQBGgPAdAwQAKBLhxAdQh7AXg2AAIgWgBg");
	this.shape_43.setTransform(-8.4,-72.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7E6308").s().p("AAHRIQhygjAIiKIABgaQAUioAhi7QAtjFgWigIgCgSQghh8hAhzQhLhzgqh3Qg3iSgMicQgSikBAiQQB5jICfAWQC9AeA7DLQAfCJgMCMQgVCNgNCJQAAB5APB7QAZB7gTB1IgHAfQg5Cig+CzQhSC5AlCmQAAgCAEAGQApAfA9ABQBGgPAdAwQAKBLhxAdQh7AXg2AAIgWgBg");
	this.shape_44.setTransform(-8.4,-72.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7E6308").s().p("AAIRIQhzgjAIiKIACgaQATioAhi7QAtjFgVigIgDgSQghh8hAhzQhLhzgqh3Qg3iRgMidQgSikBAiQQB5jICfAWQC9AeA7DLQAfCJgMCMQgVCNgNCJQAAB5APB7QAZB7gTB1IgGAfQg6Cig+CzQhSC5AlCmQAAgCAFAGQApAfA8ABQBGgPAdAwQAKBLhxAdQh6AXg3AAIgVgBg");
	this.shape_45.setTransform(-8.4,-72.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7E6308").s().p("AAHRIQhygjAIiKIABgaQAUioAhi7QAtjFgWigIgDgSQggh8hAhzQhMhzgph3Qg3iRgMidQgSikA/iQQB6jICeAWQC9AeA7DLQAfCJgMCMQgVCNgMCJQgBB5APB7QAZB7gTB1IgGAfQg6Cig9CzQhSC5AkCmQABgCAEAGQApAfA9ABQBGgPAdAwQAKBLhxAdQh7AXg2AAIgWgBg");
	this.shape_46.setTransform(-8.3,-72.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7E6308").s().p("AAHRIQhygjAIiKIABgaQAUioAhi7QAtjFgWigIgDgSQggh8hAhzQhMhzgph3Qg3iRgMidQgSikA/iQQB6jICeAWQC9AeA7DLQAfCJgMCMQgVCNgMCJQgBB5APB7QAZB7gTB1IgGAfQg6Cig9CzQhSC5AlCmQAAgCAEAGQApAfA9ABQBGgPAdAwQAKBLhxAdQh7AXg2AAIgWgBg");
	this.shape_47.setTransform(-8.3,-72.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7E6308").s().p("AAIRIQhzgjAIiKIACgaQAUioAgi7QAtjFgWigIgCgSQghh8hAhzQhMhzgph3Qg3iRgMidQgSikA/iQQB6jICeAWQC9AeA7DLQAfCJgMCMQgVCNgMCJQgBB5APB7QAZB7gTB1IgGAfQg5Cig+CzQhSC5AlCmQAAgCAFAGQApAfA8ABQBGgPAdAwQAKBLhxAdQh6AXg3AAIgVgBg");
	this.shape_48.setTransform(-8.3,-72.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7E6308").s().p("AAIRIQhzgjAIiKIACgaQAUioAgi7QAtjFgWigIgCgSQghh8hAhzQhMhzgph3Qg3iRgMidQgSikA/iQQB6jICeAWQC9AeA7DLQAfCJgMCMQgVCNgMCJQgBB5APB7QAZB7gSB1IgHAfQg5Cig+CzQhSC5AlCmQAAgCAFAGQApAfA8ABQBGgPAeAwQAKBLhxAdQh7AXg3AAIgVgBg");
	this.shape_49.setTransform(-8.3,-72.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7E6308").s().p("AAIRIQhygjAHiKIACgaQAUioAgi7QAtjFgWigIgCgSQghh8hAhzQhMhzgph3Qg3iRgMidQgSikA/iPQB6jJCeAWQC9AeA7DLQAfCJgMCMQgVCNgMCJQAAB5APB7QAZB7gTB1IgHAfQg5Cig+CzQhRC5AkCmQAAgCAFAGQApAfA8ABQBGgPAeAvQAKBMhxAdQh7AXg3AAIgVgBg");
	this.shape_50.setTransform(-8.3,-72.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7E6308").s().p("AAIRIQhygjAIiKIABgaQAUioAgi7QAtjFgVigIgDgSQghh8hAhyQhLhzgqh4Qg3iRgMidQgSikA/iPQB6jJCeAWQC9AeA7DLQAfCJgMCMQgVCNgMCJQAAB5APB7QAZB7gTB1IgGAfQg6Cig+CzQhRC5AkCmQAAgCAFAGQApAfA8ABQBGgPAeAvQAKBLhxAeQh7AXg2AAIgWgBg");
	this.shape_51.setTransform(-8.3,-72.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7E6308").s().p("AAjQuQhwgrARiIIAEgbQAjikAwizQBEi5gdieQgBAJgDgHQg0h1hRhnQhchlg9hwQhOiGgliZQgtieAoiZQBXjZCjgFQC9AABbC/QA1CCALCMQACCOAKCKQAWB5AmB9QA0B+gNB1IgEAfQg3CihPCzQhpC5AaCoQAAgDAFAIQAnAhA8AFQBHgLAaAyQAFBMhzAWQhiAMg3AAQgeAAgRgEg");
	this.shape_52.setTransform(-1.4,-65.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7E6308").s().p("AAwQEQhtgyAaiHIAFgaQAyiiBDipQBciugkiaQAAAdgEgHQhGhrhhhYQhshVhNhkQhjh4g9iRQhGiWAPicQAzjlCfgeQC8ggB3CuQBkEHBBELQAsB3A+B8QBOB8gHBzIgDAfQg0CghfCzQh+C5AOCpQAAgDAEAIQAlAkA7AIQBIgFAXAzQAABMh1AOQg5ADgqAAQhHAAgdgIg");
	this.shape_53.setTransform(6.2,-59.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7E6308").s().p("AA7PKQhpg6AjiFIAHgaQBBidBWigQByikgqiSQAEAvgFgHQhXhehvhIQh3hBhchXQh1hmhUiFQhdiIgLidQAOjqCYg4QC1g+CTCYQCLDzBrD+QBCBxBUB3QBoB5gCBtIgBAeQgxCchvCzQiSC4ADCqQABgDADAIQAiAnA7AMQBIgBATA1QgFBMh1AGQiagCgtgQg");
	this.shape_54.setTransform(12.8,-54.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7E6308").s().p("AEGOiQiZgNgsgTQhlhBAqiCIAIgaQBTiZBniXQCKiZgviKIACAdQAEAhgDgDQhlhOh6g2Qh/gthqhGQiEhShoh2Qhyh3gkiZQgYjpCNhQQCphaCqB+QCvDZCTDqQBXBnBoBuQCABxADBoIAAAcQgtCWh9CyQilC4gICpQABgCACAIQAgAoA6ARQBHAEAQA2QgKBKhyAAIgDAAg");
	this.shape_55.setTransform(18.6,-50.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7E6308").s().p("AEENbQiYgXgrgWQhghHAziAIAKgYQBhiVB5iOQCgiPgyh/IAFAlQAHAqgDgDQhwg9iBgiQiGgXhzg0QiQg8h5hjQiEhkg8iRQg+jiB/hlQCXh0C9BgQDQC7C2DOQBqBbB6BjQCVBkAIBjIABAbQgqCMiKCwQi1C3gUCoQABgCACAIQAdArA5AUQBHAJAMA3QgOBChdAAIgZgBg");
	this.shape_56.setTransform(23.2,-47.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7E6308").s().p("AD7MKQiWghgqgZQhbhOA7h7IAMgYQBviRCKiFQBxhTAXhMIAKADQADACgHgoQAAgagLgaIALA0QgBARgFASQh0goh/gMQiJgDh5geQiXgkiIhPQiShMhTiGQhhjVBsh4QCDiLDJBBQDuCVDTCvQB6BLCKBVQCoBVALBbIACAZQgnCCiWCtQjEC2gfCnQABgCACAIQAaAsA3AZQBGANAIA4QgQA7hPAAQgTAAgVgDg");
	this.shape_57.setTransform(26.4,-45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.lsd_1のコピー5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7E6308").s().p("AD4PtQhcgcAIiLIABgbQATipAHiwQAUi4hGiQQAEARgGgHQhVhfhthJQh3hEhchYQh0hohRiHQhbiJgKidQASjqCYg1QC2g8CSCaQCHD2BnD/QA8BuBNBuQBcBsASByIADAfQgNCqgnDDQhBDPA+CeQAEAJAEAHQAqAjA5APQBEADAWA0QAABLh1AOQgwACgmAAQhSAAgfgJg");
	this.shape.setTransform(19.6,-8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E6308").s().p("ADXPwQheggAMiLIADgbQAbinAUiwQAji3g/iTQAEAVgGgHQhThhhrhLQh2hGhahaQhyhqhPiIQhYiMgGidQAWjpCagzQC2g4CPCdQCCD4BiECQA7BvBLBxQBbBvAOByIACAfQgVCpg0DBQhPDNA0ChIAHAPQApAkA5APQBEADAWAzQgCBMh1AMIg5AAQhpAAglgLg");
	this.shape_1.setTransform(16.4,-7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E6308").s().p("AC2PyQhhglASiKIADgbQAkimAhiuQAzi2g5iUQADAZgEgIQhShihphNQh1hJhYhcQhwhshMiKQhViNgDidQAajpCbgwQC4g0CJCgQB/D7BeEDQA4BxBKBzQBbBzAIByIABAfQgdCnhAC/QhcDIApClIAGANQAnAlA6APQBEACAVA0QgDBMh1AKIgTAAQiJAAgrgOg");
	this.shape_2.setTransform(13.2,-7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E6308").s().p("ACVPyQhjgqAXiKIAFgaIBalRQBCiygyiVQACAbgFgHQhPhkhohPQhzhMhXhdQhthvhJiLQhTiOABieQAfjoCcgtQC4gwCGCjQB6D9BZEGQA3ByBIB1QBZB2AEByIAAAfQglClhMC7QhqDEAeCnIAGAMQAmAlA5APQBFADAUA0QgEBMh1AHQiZgBgugPg");
	this.shape_3.setTransform(10,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E6308").s().p("ABePwQhjgwAaiHIAGgbQA0iiA7ipQBSiugtiXQACAfgEgHQhOhmhmhRQhyhOhUheQhrhxhHiNQhPiQADidQAkjoCcgqQC6gsCDClQB1EABTEHQA1B0BGB4QBYB6gBBxIgBAeQgsCihZC4Qh3C/AVCoIAEAKQAkAnA6AOQBGACATA1QgFBMh1AGQiagEgtgQg");
	this.shape_4.setTransform(9.1,-6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E6308").s().p("AAmPtQhlg1AiiGIAGgaQA7ifBIimQBgipgmiYQABAjgFgHQhLhohlhTQhwhQhShgQhohzhFiOQhNiSAIidQAojnCdgmQC7gpB/CoQBwEBBNEJQA0B1BEB7QBXB9gGBxIgDAeQgzCfhkCzQiFC5ALCpQABAAADAIQAiAnA6APQBHACASA1QgGBMh1AEQiagGgtgRg");
	this.shape_5.setTransform(8.3,-6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E6308").s().p("AgOPoQhpg7AniEIAIgaQBEicBTigQBuijgfiZQgBAmgEgHQhJhphjhVQhuhShRhjQhnh1hAiPQhKiTAKidQAtjmCegjQC7glB8CqQBrEEBIEKQAyB3BCB9QBVB/gKBxIgEAfQg7CbhwCuQiRCxAACqQABgCADAIQAhAoA6APQBHACASA1QgIBLh1ADQiagIgqgSg");
	this.shape_6.setTransform(7.4,-7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E6308").s().p("AhrPxQhphBAsiCIAIgZQBMiYBdicQB7idgTibQgDAjgEgHQg/hwhaheQhmhdhHhpQhah+gziWQg8iaAaiaQBCjhChgUQC8gTBtC2QBBB9AYCKQAQCOAXCIQAmB7A1CCQBICFgUBwIgHAeQhGCYh7CkQicCngMCpQACgEACAIQAfAoA7APQBIADARA1QgJBLh2ABQiXgLgsgTg");
	this.shape_7.setTransform(3.1,-5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7E6308").s().p("AgDQWQiZgOgsgTQhqhIAyiAIAJgYQBSiUBriWQCEiWgHidQgFAhgDgIQg0h1hQhnQhdhmg8hwQhOiGgliZQgsifAoiYQBYjaCigEQC9AABbC/QA1CDAKCMQACCOAKCKQAZB9ApCGQA6CKgdBvIgJAeQhTCRiFCbQijCbgXCoQABgGACAIQAeApA5APQBJADAQA2QgKBJhxAAIgDAAg");
	this.shape_8.setTransform(-1.3,-5.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E6308").s().p("AhNQWQiZgQgrgUQhrhPA3h8IAKgYQBZiPB1iRQCQiOAGieQgIAfgCgJQgmh5hIhvQhThugxh1QhAiNgWicQgdijA3iTQBsjQCiAMQC8ASBIDHQAoCHgDCMQgMCOgDCKQANB/AbCIQAsCOgmBtIgLAcQheCMiPCRQitCOgiClQABgGACAHQAcApA8AQQBIACAPA3QgLBHhoAAIgMgBgAiANeIAAgBg");
	this.shape_9.setTransform(-7.8,-5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E6308").s().p("Ah1QRQiYgTgsgVQhqhWA8h5IAMgYQBeiJCAiKQCaiGATidQgKAbgBgJQgch8g7h1QhHh2gmh5QgyiTgHidQgNilBEiNQCAjECeAbQC7AkA1DNQAbCKgRCLQgaCNgQCJQABB/AOCHQAeCSgwBpIgNAcQhpCEiYCHQixB/gvCgIgCAFIACgFIABAEQAbApA8APQBLADAMA3QgLBFhlAAIgQAAg");
	this.shape_10.setTransform(-17.8,-5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E6308").s().p("Ai3QFQiYgVgrgWQhqhcBBh2IAMgXQBliECJiDQCmh9AficQgLAZgBgJQgQh/gvh6Qg8h8gah8QgkiXAJieQADikBRiHQCQi3CdAqQC3A2AhDSQANCMgeCJQgnCJgeCHQgLB+ABCHQAPCTg4BlIgQAbQhzB8igB7Qi3Byg6CbQAAAAAAAAQAAAAAAAAQABABAAAAQAAABAAABQAZAqA8AQQBNADANA3QgNBDhgAAIgWgBgAjnNTQACgHABAAQgBAAgCAHg");
	this.shape_11.setTransform(-25.1,-6.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E6308").s().p("Aj8PzQiXgYgrgWQhohjBFhzIANgWQBqh/CTh6QCwh0AriZQgKAVABgIQgFiAgkh/QgwiBgOh+QgViaAXibQATikBch+QCjioCYA5QCxBHANDUQgBCMgrCGQgzCFgrCDQgYB8gMCGQABCShABhIgSAZQh9ByilBwQi+BkhFCWIAAADQAYApA9ARQBOAEAMA3QgOBBhcAAIgbgBgAkqNEIABgCIAAgCIABgEIABAAIAAAAIAAgBIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIAAABIAAAAIgBAAIgBAEIAAACIgBACg");
	this.shape_12.setTransform(-31.9,-8.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E6308").s().p("Aj8PzQiXgYgrgWQhohjBFhzIANgWQBqh/CTh6QCwh0AriZQgKAVABgIQgFiAgkh/QgwiBgOh+QgViaAXibQATikBch+QCjioCYA5QCxBHANDUQgBCMgrCGQgzCFgrCDQgYB8gMCGQABCShABhIgSAZQh9ByilBwQi+BkhFCWIAAAAIAAAAIgBAAIAAAAIAAAAIAAABIAAAAIgBAAIgBAEIAAACIgBABIAAABIAAgBIABgBIAAgCIABgEIABAAIAAAAIAAgBIAAAAIAAAAIABAAIAAAAIAAAAIAAADQAYApA9ARQBOAEAMA3QgOBBhcAAIgbgBg");
	this.shape_13.setTransform(-31.9,-8.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E6308").s().p("AiSQFQiXgXgrgWQhohcBBh2IAMgXQBmiECKiBQClh8AZibQgMAfgBgJQgbh9g5h2QhGh2gkh6QgwiUgFidQgLikBHiNQCCjCCeAdQC7AmAyDOQAYCLgSCLQgcCMgSCJQgBB/ANCJQAbCVgyBnIgPAbQhuB/ihB9Qi6B1g5CdIgCAGIACgGQAAgBAAAAQAAAAABABQAAAAAAABQAAAAAAACQAZApA8ASQBMAFAMA3QgNBBheAAIgZgBg");
	this.shape_14.setTransform(-20.4,-6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E6308").s().p("AhiQFQiYgXgrgWQhnhUA8h6IAMgXQBiiKB/iHQCdiDAFibQgKApgCgJQgxh2hNhrQhahmg5hyQhKiJghiaQgnifAsiXQBejXCiAAQC9AFBVDCQAxCDAHCNQgCCPAGCJQAXCAAlCKQA3CQglBrIgLAcQheCIiZCMQi3CGgsCiQAAAAABAAQAAAAAAAAQAAABABABQAAABAAABQAbAqA6ASQBJAGAMA3QgNBChcAAIgYgBgAiONLIABgEIgBAEg");
	this.shape_15.setTransform(-3.1,-6.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7E6308").s().p("AAZPzQiWgXgrgVQhmhNA4h9IALgYQBeiPB0iNQCViLgOiXQgFAxgFgHQhEhshfhcQhrhUhNhmQhhh5g7iSQhEiWARicQA2jkCggdQC8gdB1CvQBgEJA9ENQAuB7A+CEQBSCIgXBtIgHAdQhNCQiQCZQi0CZgdCnQACgFABAIQAaAqA6ATQBJAHAMA3QgNBDhgAAIgWgBg");
	this.shape_16.setTransform(5.6,-8.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7E6308").s().p("ACZPRQiYgVgpgWQhkhGA0h/IAJgZQBXiVBsiSQCNiSghiSQAAA4gEgFQhWhdhwhJQh3hAhdhXQh2hmhUiFQhdiHgLidQANjqCYg5QC0g+CUCXQCLDzBsD+QBFByBVB7QBrB+gJBqIgDAdQg8CViFCnQisCrgRCoQABgCACAIQAdAqA5AUQBHAIANA3QgNBDhgAAIgWgBg");
	this.shape_17.setTransform(12.9,-11.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7E6308").s().p("AEROhQiZgVgrgVQheg/AriCIAJgaQBUiaBiiYQCDiagyiJIADAdQAEAhgDgDQhmhNh7gzQiAgqhrhEQiGhPhqh1Qh1h0gmiZQgdjoCLhTQCnhdCsB6QC0DXCYDmQBZBlBqBsQCCBuAFBoIABAdQgrCXh5C0QigC7gFCqIAEAJQAeAqA4AVQBGAJANA3QgMBDhjAAIgTAAg");
	this.shape_18.setTransform(19.3,-16.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E6308").s().p("AGBNjQiYgUgsgVQhdg4ApiFIAIgZQBNigBYidQB5iihBh+QATBEgFgDQhyg5iCgbQiIgUh0gwQiRg2h+hgQiHhehBiPQhGjgB7hqQCTh5DABaQDWCyC/DIQBrBVB9BbQCWBZASBmIAEAbQgZCWhsC/QiTDMAICqIAEALQAgAqA4AWQBEALANA2QgMBFhkAAIgSgBg");
	this.shape_19.setTransform(24.3,-22.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7E6308").s().p("AGUOBQiZgTgrgVQhcgzAmiHIAHgZQBFiiBLigQBoinhCiCQAQA8gFgDQhuhAiBgiQiEgchzg3QiOg/h4hmQiBhmg5iTQg4jjCAhjQCahxC7BlQDLC+CzDUQBkBaB3BeQCOBdASBpIAEAcQgXCahhDBQiHDPARCoQABAGADAHQAiAqA3AWQBDAMAOA2QgMBFhlAAIgRAAg");
	this.shape_20.setTransform(22.9,-19.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7E6308").s().p("AGmOdQiYgSgsgVQhZgvAhiHIAHgbIB7lHQBXiqhDiGQAPA3gHgGQhrhGh9gqQiDgkhvg9QiLhHhxhtQh7hugwiVQgsjnCGhbQChhnC0BwQDBDKClDdQBdBeBwBiQCGBhASBrIAEAdQgVCdhXDDQh6DQAaCnQABAIAEAIQAiApA3AXQBDAMAOA2QgMBGhmAAIgQAAg");
	this.shape_21.setTransform(21.4,-16.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7E6308").s().p("AG1O3QiZgRgrgUQhYgsAeiIIAGgaQA1ikAwinQBGiuhEiJQAMAugGgFQhnhNh7gxQiAgrhshEQiGhPhqh0Qh0h1goiXQgejpCLhTQCnheCtB6QC0DVCYDmQBXBjBoBlQB8BkATBuIAEAcQgTCihMDEQhtDQAiCmIAGARQAkApA2AXQBDANAOA3QgLBGhpAAIgNAAg");
	this.shape_22.setTransform(20,-14.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7E6308").s().p("AG1POQiZgQgsgUQhUgnAZiJIAFgaQAtimAjipQA1ixhGiLQAKAmgGgGQjyh1jNiTQiBhXhkh5Qhth7geiaQgRjqCQhLQCshUClCEQCoDfCLDvQBOBmBhBoQBzBnATBwIAEAcQgRClhBDEQhfDRAqCkIAHATQAkAoA3AYQBCAOAOA2QgLBIhqAAIgLgBg");
	this.shape_23.setTransform(19.9,-12.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7E6308").s().p("AGzPkQiZgQgrgTQhSgjAWiKIAEgbQAlimAUirQAkiyhGiOQAHAdgGgGQhdhYhyhAQh9g6hihPQh8hfhdh/QhmiBgVicQgCjqCThCQCwhKCeCNQCbDpB8D2QBHBqBYBqQBqBpATBwIAEAfQgPCng2DEQhSDRA0ChQADANAEAHQAmApA2AYQBBAPAQA2QgLBIhtAAIgJAAg");
	this.shape_24.setTransform(19.7,-10);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7E6308").s().p("AGyP3QiZgPgsgTQhPggASiKIADgaQAdinAHitQASizhGiQQAEAVgFgHQhYhdhuhHQh5hBhehVQh2hmhViEQheiHgNicQAMjqCXg6QC0hACVCXQCNDxBuD+QA/BsBQBsQBgBsASBxIAEAfQgNCpgqDEQhEDPA8CfIAIAWQAnAnA2AZQBBAQAQA2QgLBJhuAAIgHAAg");
	this.shape_25.setTransform(19.3,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.FR2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],0,-68.6,0,68.8).p("AgqqpQhVgDhFAyQhKA3gjBoQguCJAfCuQAYCJBICcQAbA5AzBMQAdArA6BUQAVAgAXA9QAaBMAKAUQAzBpBqgBQBKgBAogqQAyg1gKhhQgFg3ggiUQgciAgBhNQAHi5gBheQgCilgshtQgnhghLg4QhIg2hSgDg");
	this.shape.setTransform(59.2,52.5,1,1,-44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D59211").s().p("AAVJCQgKgUgahMQgXg9gVggIhXh/QgzhMgbg5QhIicgYiJQgfiuAuiJQAjhoBKg3QBFgyBVADQBSADBIA2QBLA4AnBgQAsBtACClQABBegHC5QABBNAcCAQAgCUAFA3QAKBhgyA1QgoAqhKABIgDAAQhoAAgyhog");
	this.shape_1.setTransform(59.2,52.5,1,1,-44.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,125.2,93.2);


(lib.ctt3ai = function() {
	this.initialize();

	// レイヤー 1
	this.text = new cjs.Text("ラクダと一緒に砂漠を\n旅しようとした話", "54px HGSoeiKakugothicUB", "#3F2F10");
	this.text.lineHeight = 65;
	this.text.setTransform(92.4,41.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("EA00AArQgiBJhEBFQhTBNgsApQggAfhWBfQhEBLgsAjQiEBpizghQjRgnkaA9QhSASifArQihAshPARQicAjjggNQgMAAlxgkQhGgGhaAfQiCAugWAFQhSARh5ACQiMgBhCAAQhZABgtAAQhMAAg3gDQhEgDibgmQiQgkhNABQhQABiQA8QihBBhDAKQhmAQh1gFQhvgDhsgVQh/ghg/gMQhugWhUAbQjVBHitARQjSAVi3g1QjkhBjbjOQjZjLhYjiQhAihAFiWQAGioBbiFQBWh9CEg4QBHgeB8gYQCrgiArgLQBAgRCkhEQCOg6BbgOQDdghCoAuQAoALB8A0QBkArBEAIQCXASDogtQA+gMB+gYQBtgUBTgEQCdgHCBALQCIAMCRAiQB8AdCVgUQBsgOCpgwQD4hHAdgHQCegnB2AAQBGAAAzAGQA3AGA/AQQBOAUCWAqQCYArBKATQBWAVCDgDQBKgCCSgIQBlgBCNgaQBSgQCkgjQCRgeBlgFQCEgHBtAeQB+AiB9CzQB1CpAPCLQAbEIg5B5g");
	this.shape.setTransform(342.4,93.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FABA41").s().p("EgouAOAQjkhBjbjOQjZjLhYjiQhAihAFiWQAGioBbiFQBWh9CEg4QBHgeB8gYQCrgiArgLQBAgRCkhEQCOg6BbgOQDdghCoAuQAoALB8A0QBkArBEAIQCXASDogtIC8gkQBtgUBTgEQCdgHCBALQCIAMCRAiQB8AdCVgUQBsgOCpgwQD4hHAdgHQCegnB2AAQBGAAAzAGQA3AGA/AQQBOAUCWAqQCYArBKATQBWAVCDgDQBKgCCSgIQBlgBCNgaQBSgQCkgjQCRgeBlgFQCEgHBtAeQB+AiB9CzQB1CpAPCLQAbEIg5B5QgiBJhEBFIh/B2QggAfhWBfQhEBLgsAjQiEBpizghQjRgnkaA9QhSASifArQihAshPARQicAjjggNIl9gkQhGgGhaAfQiCAugWAFQhSARh5ACIjOgBIiGABQhMAAg3gDQhEgDibgmQiQgkhNABQhQABiQA8QihBBhDAKQhmAQh1gFQhvgDhsgVQh/ghg/gMQhugWhUAbQjVBHitARQg7AGg6AAQiRAAiDgmg");
	this.shape_1.setTransform(342.4,93.9);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,683.8,186.9);


(lib.CHD = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7E6308").p("AAFgwQA1AVgGAtQgCATgPAKQgNAKgSgDQgDAAgCgBQgUgJgOgUQgPgUgBgUQgCgXAOgKQAQgKAcALg");
	this.shape.setTransform(8.6,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B673A").s().p("AgBA1IABABIgCgCIABABQgUgJgOgUQgPgUgBgUQgCgXAOgKQAQgKAcALQA1AVgGAtQgCATgPAKQgKAIgNAAQgHAAgGgCg");
	this.shape_1.setTransform(8.6,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7E6308").p("AALBcQg2gKgcg3QgZgyATgkQAfg5A7AsQAwAjAZAy");
	this.shape_2.setTransform(8.7,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[1,1,1,1,1,1,1,1],-8.5,0.1,8.7,0).s().p("AhHAbQgZgyATgkQAfg5A7AsQAwAjAZAyIhLBPQg2gKgcg3g");
	this.shape_3.setTransform(8.7,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().rs(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0.996,0.996,1,1,1,1,1,1],0.1,0,0,0.1,0,12.6).p("AihguQAYArAwAXQAyAZA7gBQA6gBAmgUQAsgXACgm");
	this.shape_4.setTransform(30.3,67.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[1,1,1,1,1,1,1,1],-16.1,0,16.3,0.2).s().p("AhZAVQgwgXgYgrIFDAIQgCAmgsAXQgmAUg6ABIgEABQg5AAgwgZg");
	this.shape_5.setTransform(30.3,67.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F3C15").p("AAJARIgRgh");
	this.shape_6.setTransform(44.3,30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F3C15").p("AgJAQIATgf");
	this.shape_7.setTransform(36,30.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F3C15").p("AAAgTIAAAn");
	this.shape_8.setTransform(40.2,31.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F3C15").p("AhPgaQAeAtAyAGQA3AGAYg0");
	this.shape_9.setTransform(40.2,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#7E6308").p("AkDEtQgWg2gYgtQhFiFgShFQggh/A8hUQA5hQCJgKQCEgKBNA8QAKAHA7A8QAlAlAuAOQAoAMBRALQBCASAUA+QAdBRhoA/QgaAPhBAeQg4AagUAPQg/AugjA7");
	this.shape_10.setTransform(40.5,34.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[1,1,1,1,1,1,1,1],0,-30.3,0,30.5).s().p("AkDEsQgWg2gYgtQhFiFgShFQggh/A8hUQA5hQCJgKQCEgKBNA8QAKAHA7A8QAlAlAuAOQAoAMBRALQBCASAUA+QAdBRhoA/QgaAPhBAeQg4AagUAPQg/AugjA7g");
	this.shape_11.setTransform(40.5,34.8);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,72.3);


(lib.CEye1 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7E6308").p("ACFgqQhfArgmAOQhbAkgmgL");
	this.shape.setTransform(0,-5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7E6308").p("Ag1gIQADAXAPAQQAQAQATAAQAWAAAQgUQAQgUAAgaQAAgOgFgMQhPAegXAHg");
	this.shape_1.setTransform(-1.2,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#552602").s().p("AgiAeQgQgQgDgWQAXgHBPgfQAFAMAAAOQAAAagQAVQgQAUgWAAQgTAAgPgRg");
	this.shape_2.setTransform(-1.2,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#7E6308").p("AhggUQAHAxApAcQAlAaAjgLQArgNARgpQAMgdABhE");
	this.shape_3.setTransform(-0.4,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2EEE7").s().p("AgwA7QgpgcgHgxIDBg6QgBBDgMAeQgRAogrANQgLADgLAAQgYAAgagSg");
	this.shape_4.setTransform(-0.4,2.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.1,-10,26.5,20.2);


(lib.BR2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#D59211","#D39111","#CC8E10","#C1870F","#B07E0D","#9A720B","#806408","#7E6308"],[0,0.059,0.078,0.09,0.102,0.114,0.122,0.122],0,-65.6,0,65.7).p("AhrpUQhMA1gmBbQgsBogBCbQAABZAHCvQAABKgWBjQgMA5gdByQgTBQAFAuQAGBJA9AZQApARAxgGQAugFAogYQArgZAXgzQAYg+APghQAdg5BShuQBOhqAeg/QBHiQAZiFQAeikgviCQgjhihKgzQhFgvhWADQhRADhIAzg");
	this.shape.setTransform(57.7,57.4,1,1,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D59211").s().p("AkNJ/Qg9gZgGhJQgFguAThQQAdhyAMg5QAWhjAAhKQgHivAAhZQABibAshoQAmhbBMg1QBIgzBRgDQBWgDBFAvQBKAzAjBiQAvCCgeCkQgZCFhHCQQgeA/hOBqQhSBugdA5QgPAhgYA+QgXAzgrAZQgoAYguAFIgYACQgjAAgfgNg");
	this.shape_1.setTransform(57.7,57.4,1,1,30);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108.1,106.5);


(lib.シンボル1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.ctt3ai("synched",0);
	this.instance.setTransform(0,0,0.31,0.444,0,0,0,342.3,93.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.8,-41.4,211.8,82.9);


(lib.Ctt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AAtBmQgpANgYAAQglgBgZgZQgcgdgDgtQgDgqAYgjQAagmArgKQAqgLAkAYQAVAOARAnQARAmAEAlQAEAqgPAVQgRAYgmgM");
	this.shape.setTransform(13.6,-7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FABA41").s().p("AgUBzQglgBgZgZQgcgdgDgtQgDgqAYgjQAagmArgKQAqgLAkAYQAVAOARAnQARAmAEAlQAEAqgPAVQgRAYgmgMIgDgEQgnANgYAAIgCAAg");
	this.shape_1.setTransform(13.6,-7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("AkTAQQgBgQAGgNQAGgOAMgHQAFgEAGgDQAFgEAGgFQAFgHAKgLQAIgLAJgHQAHgFAJgFQAPgJATgHQAOgGASgCQAMgDAVgBQAdgBAZgFQAHgCAGgBQAigLAWgBQAdgDAeAGQAMABAHADQAJAEAGAFQAEADAGAHQAFAGAEAEQAMAKAVAIQAVAHAMAKQAdAXAPAdQARAbgEAcQgBAIgDAHQgHASgQALQgMARghATQgHAFgHAEQgWAMgTAEQgNACgNgCQgHgBgQgEQgJgDgJgCQgEgBgEgBQgCAAgCABQgMACgSAFQglAKgaACQgPABgNAAQgVgBgTgFQgRgGgLgFQgNgGgNgCQgSgDgMgEQgCgBgDgBQgSgFgOgJQgNgHgIgMQgJgNgGgLQgDgFgFgFQgFgFgDgDQgIgJgCgMIAAgB");
	this.shape_2.setTransform(15.8,-10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FABA41").s().p("Ag0CTQgVgBgTgFIgcgLQgNgGgNgCQgSgDgMgEIgFgCQgSgFgOgJQgNgHgIgMIgPgYQgDgFgFgFIgIgIQgIgJgCgMIAAgBQgBgQAGgNQAGgOAMgHIALgHIALgJIAPgSQAIgLAJgHQAHgFAJgFQAPgJATgHQAOgGASgCQAMgDAVgBQAdgBAZgFIANgDQAigLAWgBQAdgDAeAGQAMABAHADQAJAEAGAFIAKAKIAJAKQAMAKAVAIQAVAHAMAKQAdAXAPAdQARAbgEAcQgBAIgDAHQgHASgQALQgMARghATIgOAJQgWAMgTAEQgNACgNgCQgHgBgQgEIgSgFIgIgCIgEABIgeAHQglAKgaACIgVABIgHAAg");
	this.shape_3.setTransform(15.8,-10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("Am1ATQgDgZAMgSQALgTAXgHQAJgDAMgDQAJgDAJgHQAKgIAQgRQAPgQAOgIQALgHAPgFQAYgKAggGQAVgFAcABQASgBAhADQAvADAigGQALgCAJgCQA0gTAegFQApgIAtAEQATABAKADQAQAGAIAGQAGAFAIAKQAIALAFADQASAOAlAFQAlAFASAKQAxAbAaAnQAeAqgKAnQgDAMgGAKQgPAYggALQgXAOg6AZQgOAGgMAEQgkAPgbADQgTACgSgEQgJgBgagIQgNgEgNgBQgGgBgGgBQgDAAgDAAQgRADgcAHQg1AQgpADQgVACgUgBQgfgBgbgJQgagKgOgGQgVgJgUgBQgcAAgSgDQgEAAgEAAQgegDgXgKQgVgIgOgQQgOgUgLgNQgFgHgIgGQgKgHgEgEQgQgLgCgRIAAgC");
	this.shape_4.setTransform(18.2,-14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FABA41").s().p("AhWC2QgfgBgbgJIgogQQgVgJgUgBQgcAAgSgDIgIAAQgegDgXgKQgVgIgOgQIgZghQgFgHgIgGIgOgLQgQgLgCgRIAAgCQgDgZAMgSQALgTAXgHIAVgGQAJgDAJgHQAKgIAQgRQAPgQAOgIQALgHAPgFQAYgKAggGQAVgFAcABQASgBAhADQAvADAigGIAUgEQA0gTAegFQApgIAtAEQATABAKADQAQAGAIAGQAGAFAIAKQAIALAFADQASAOAlAFQAlAFASAKQAxAbAaAnQAeAqgKAnQgDAMgGAKQgPAYggALQgXAOg6AZIgaAKQgkAPgbADQgTACgSgEQgJgBgagIQgNgEgNgBIgMgCIgGAAQgRADgcAHQg1AQgpADIgcABIgNAAg");
	this.shape_5.setTransform(18.2,-14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").p("ApYAXQgEgiARgXQARgYAigHQANgDARgCQANgDAOgJQANgIAXgYQAVgVATgJQARgHAUgGQAhgLAtgFQAcgEAnAEQAXABAtAHQBAAIAsgHQAOgDAMgDQBIgcAlgIQA2gMA8ABQAZABAMADQAXAIALAIQAIAFALAPQAKAOAHAEQAYAQA1AEQA0ADAYAJQBGAfAlAyQAqA3gPA0QgFAQgKAMQgWAegxALQgiAKhUAfQgUAHgRAGQgyAQgjADQgZACgYgFQgKgCgkgLQgRgGgRgBQgIgBgIAAQgEAAgEAAQgWADgnAKQhGAUg3AFQgbACgZgBQgpgCgkgMQgkgOgRgHQgcgMgbAAQgmACgYAAQgGAAgFAAQgqgBgfgKQgfgJgSgUQgVgagOgRQgHgJgNgHQgNgIgHgEQgWgOgEgWIAAgD");
	this.shape_6.setTransform(20.6,-19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FABA41").s().p("Ah3DaQgpgCgkgMIg1gVQgcgMgbAAQgmACgYAAIgLAAQgqgBgfgKQgfgJgSgUIgjgrQgHgJgNgHIgUgMQgWgOgEgWIAAgDQgEgiARgYQARgXAigHIAegFQANgDAOgJQANgIAXgYQAVgVATgJQARgHAUgGQAhgLAtgFQAcgEAnAEQAXABAtAHQBAAIAsgHQAOgDAMgDQBIgcAlgIQA2gMA8ABQAZABAMADQAXAIALAIQAIAFALAPQAKAOAHAEQAYAQA1AEQA0ADAYAJQBGAfAlAyQAqA3gPA0QgFAQgKAMQgWAegxALQgiAKhUAfIglANQgyAQgjADQgZACgYgFIgugNQgRgGgRgBIgQgBIgIAAQgWADgnAKQhGAUg3AFIgiABIgSAAg");
	this.shape_7.setTransform(20.6,-19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").p("ABEDeQhYAZhEAGQhZAHhHgXQgtgTgUgIQgkgPghACQg/AFgfABQg1ACgngLQgogKgYgYQgaghgSgUQgJgKgRgJQgSgJgIgFQgfgRgEgdQgEgrAWgdQAXgdAsgGQARgDAWgCQARgDATgKQAQgJAegeQAcgaAYgKQA4gXBagIQAkgCAxAGQAdAEA6AKQBrASA8gVIADgCQBXgiAsgLQBDgSBLAAQAhAAAOADQAWAEAVAQQAJAGAOATQAOASAHAEQAfATBEABQBLABAcALQBVAhAwA9QA3BFgVBAQgXBChcAPQgtAHhuAlQhhAgg6AEQgfACgegHQgMgDgtgPQgjgLglADQgbADgxANg");
	this.shape_8.setTransform(23,-23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FABA41").s().p("Aj4DtIhBgbQgkgPghACIheAGQg1ACgngLQgogKgYgYQgaghgSgUQgJgKgRgJIgagOQgfgRgEgdQgEgrAWgdQAXgdAsgGIAngFQARgDATgKQAQgJAegeQAcgaAYgKQA4gXBagIQAkgCAxAGQAdAEA6AKQBrASA8gVIADgCQBXgiAsgLQBDgSBLAAQAhAAAOADQAWAEAVAQQAJAGAOATQAOASAHAEQAfATBEABQBLABAcALQBVAhAwA9QA3BFgVBAQgXBChcAPQgtAHhuAlQhhAgg6AEQgfACgegHIg5gSQgjgLglADQgbADgxANQhYAZhEAGQgVABgUAAQhAAAg3gRg");
	this.shape_9.setTransform(23,-23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").p("AtDAIQgDgwAWgjQAegmAkgLQAFgBAFgBQAPgEASgDQAHgCAHgCQANgEAMgGQANgGALgIQAMgJATgPQAJgGAIgHQAXgQAUgIQAFgCAFgCQArgOAwAAQARgBAZAEQAJACAKABQALABALAAQAgACAqAAQAGAAAGAAQARAAAbAAQAUABAUACQArADAeADQAiACAeACQAcABAZgHQACgBACgBQAhgLAfgMQAugRAVgGQAJgDAJgCQAWgGAWgDQAQgCANAAQAOgBAOABQAZABAfAEQAAAAAAAAQAjAEARAEQABABACABQAVAFAZAKQABABABAAQALAEASAOQAFADAEADQALAIAJACQAMAEAQACQAWACAigCQANgBAOAAQARgCAOAAQAgABAXAFQASAEAMAIQAYANAVAUQAqAlAYApQAFAJAFAJQAbA5gBAqQAAAagMAZQAAAAAAABQgMAYgOARQgNAOgWATQgSAOgUAIQgJAFgKADQgYAJglAEQgtAEhAAVQgdAJgdAKQgiALgYAFQggAIgfABQgLAAgLAAQgRAAgggGQgLgDgZgGQgMgDgRgCQgEAAgEAAQgXABgPAAQgQABgRABQgHABgGABQgZABgYAFQgMACgLACQgEABgEAAQgPADgOACQgVAEgdgBQgeAAgXACQgRACgUAGQgHABgIACQghAIgYAAQgaABgZgDQgagEgZgHQgBgBgCAAQgYgKgPgGQgWgIgPgBQgCgBgDAAQglgEgiAEQgLACgLABQgzAEghgDQgDgBgDAAQgzgFgpgWQgRgIgOgLQgTgNgOgQQgagkgTgbQgIgNgNgMQgBgBgBgBQgPgNgHgJQgZgYgDggIAAgB");
	this.shape_10.setTransform(24.4,-27.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FABA41").s().p("AjzEfQgagEgZgHIgDgBIgngQQgWgIgPgBIgFgBQglgEgiAEIgWADQgzAEghgDIgGgBQgzgFgpgWQgRgIgOgLQgTgNgOgQQgagkgTgbQgIgNgNgMIgCgCQgPgNgHgJQgZgYgDggIAAgBQgDgwAWgjQAegmAkgLIAKgCQAPgEASgDIAOgEQANgEAMgGQANgGALgIIAfgYIARgNQAXgQAUgIIAKgEQArgOAwAAQARgBAZAEIATADIAWABQAgACAqAAIAMAAIAsAAQAUABAUACIBJAGIBAAEQAcABAZgHIAEgCQAhgLAfgMQAugRAVgGIASgFQAWgGAWgDIAdgCIAcAAQAZABAfAEIAAAAQAjAEARAEIADACQAVAFAZAKIACABQALAEASAOIAJAGQALAIAJACQAMAEAQACQAWACAigCIAbgBIAfgCQAgABAXAFQASAEAMAIQAYANAVAUQAqAlAYApIAKASQAbA5gBAqQAAAagMAZIAAABQgMAYgOARQgNAOgWATQgSAOgUAIQgJAFgKADQgYAJglAEQgtAEhAAVIg6ATQgiALgYAFQggAIgfABIgWAAQgRAAgggGIgkgJQgMgDgRgCIgIAAIgmABIghACIgNACQgZABgYAFIgXAEIgIABIgdAFQgVAEgdgBQgeAAgXACQgRACgUAGIgPADQghAIgYAAIgJAAQgVAAgVgCg");
	this.shape_11.setTransform(24.4,-27.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("AuMgIQgBg3AVgoQAfgwAjgPQAFgCAFgCQAPgGAVgFQAHgCAIgCQAPgFANgFQARgGAKgHQANgHAXgQQAKgHAKgHQAagSAVgIQAGgCAGgCQA0gNAxAGQAPABAeALQALADAKADQAMADALABQAkADAwgFQAHgBAHAAQARgCAfgDQAXgCAVAAQAvABAiADQAlAEAjAGQAdAEAdgGQACgBADAAQAjgKAngPQA4gWARgFQAKgEAKgDQAagHAYgBQARgCAPABQAOABAQADQAZADAkAJQAAAAABAAQAlAIASAGQACABACABQAXAGAeAHQABAAABAAQAOADAWAIQAGACAGACQAMAFANAAQAOACARgBQAYAAAngHQAPgCAPgCQATgDAPAAQAjgBAbAIQASAFAOAMQAXARAVAbQAoAyASAwQADALADAMQAUBFgFAqQgEAcgPAbQAAABAAAAQgRAcgOARQgMAOgXAaQgTAVgSALQgJAGgKAFQgcAOgngBQgzgDhIAXQgcAJgjANQgnANgZAHQgiAJglAAQgMABgNgBQgMAAgrgHQgPgDgZgGQgPgDgSACQgEABgFABQgcAIgNAAQgRACgUACQgHABgIAAQgeABgXADQgOACgMABQgFABgEAAQgSACgPABQgVACgjgGQgjgGgXACQgSACgXAIQgIADgJADQgmAPgXACQgcADgdgDQgcgDgcgIQgCgBgCAAQgcgLgQgGQgZgIgRACQgDAAgDAAQgpAGglAFQgMADgMABQg2AGgngJQgEgBgEgBQg0gKgsgjQgRgLgPgOQgSgRgPgTQgbgogSgiQgJgQgKgQQgBgBgBAAQgMgRgGgOQgTgggCghIAAgB");
	this.shape_12.setTransform(25.8,-33);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FABA41").s().p("AkfFHQgcgDgcgIIgEgBIgsgRQgZgIgRACIgGAAIhOALIgYAEQg2AGgngJIgIgCQg0gKgsgjQgRgLgPgOQgSgRgPgTQgbgogSgiQgJgQgKgQIgCgBQgMgRgGgOQgTgggCghIAAgBQgBg3AVgoQAfgwAjgPIAKgEQAPgGAVgFIAPgEIAcgKQARgGAKgHQANgHAXgQIAUgOQAagSAVgIIAMgEQA0gNAxAGQAPABAeALIAVAGQAMADALABQAkADAwgFIAOgBIAwgFQAXgCAVAAQAvABAiADQAlAEAjAGQAdAEAdgGIAFgBQAjgKAngPQA4gWARgFIAUgHQAagHAYgBQARgCAPABQAOABAQADQAZADAkAJIABAAQAlAIASAGIAEACQAXAGAeAHIACAAQAOADAWAIIAMAEQAMAFANAAQAOACARgBQAYAAAngHIAegEQATgDAPAAQAjgBAbAIQASAFAOAMQAXARAVAbQAoAyASAwIAGAXQAUBFgFAqQgEAcgPAbIAAABQgRAcgOARIgjAoQgTAVgSALQgJAGgKAFQgcAOgngBQgzgDhIAXIg/AWQgnANgZAHQgiAJglAAIgZAAQgMAAgrgHIgogJQgPgDgSACIgJACQgcAIgNAAIglAEIgPABQgeABgXADIgaADIgJABIghADQgVACgjgGQgjgGgXACQgSACgXAIIgRAGQgmAPgXACIgcABIgdgBg");
	this.shape_13.setTransform(25.8,-33);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("AvWgaQAAg7AWgvQAeg4AigUQAGgDAFgDQAQgIAXgHQAIgCAJgDQARgFANgEQAVgHAKgFQANgGAbgRQALgHAMgHQAegTAWgIQAHgCAGgCQA8gOAzANQAOADAiARQAMAGALAEQAOAFALACQAnAFA3gKQAHgCAHgBQATgDAigHQAagFAWgBQA0gBAlADQAnAFAoAKQAgAIAigGQACAAADgBQAlgIAtgSQBDgbANgEQAMgFALgDQAdgIAZgBQAUAAAPACQAQABASAFQAYAGAqAOQAAAAAAABQAoAMAUAHQACABACABQAZAIAkACQABAAABAAQAQABAbADQAGABAHABQAPACAQgCQAQAAATgDQAZgEAtgLQAQgEAQgDQAVgDARgBQAmgCAeAKQASAGAQARQAWAVAVAiQAmA+ALA3QACAOACANQAMBRgKAsQgHAegSAdQAAABgBAAQgUAegOASQgLAOgZAiQgUAcgQANQgJAIgKAGQgfAUgpgGQg6gLhPAZQgcAJgpAQQgtAQgYAIQgkAKgrAAQgOAAgOgBQgIAAg3gIQgRgDgbgFQgQgDgUAGQgFABgFACQgiAOgKABQgSAEgXACQgIABgIAAQglABgWABQgQABgMAAQgFABgFAAQgVABgOAAQgWAAgpgLQgogLgYABQgSABgcAMQgIAEgJAEQgsAXgWADQgeAEgggCQgggCgfgJQgCAAgCgBQgggMgRgGQgbgIgUAFQgEABgDAAQgtAPgnAIQgOADgNABQg4AIgvgOQgEgBgEgCQg1gQgxgvQgQgPgPgRQgTgVgPgWQgbgrgSgqQgJgTgIgTQgBgBAAgBQgKgVgFgTQgNgmgBglIAAgB");
	this.shape_14.setTransform(27.4,-38.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FABA41").s().p("AlLFvQgggCgfgJIgEgBIgxgSQgbgIgUAFIgHABQgtAPgnAIIgbAEQg4AIgvgOIgIgDQg1gQgxgvQgQgPgPgRQgTgVgPgWQgbgrgSgqIgRgmIgBgCQgKgVgFgTQgNgmgBgmIAAAAQAAg7AWgvQAeg4AigUIALgGQAQgIAXgHIARgFIAegJQAVgHAKgFQANgGAbgRIAXgOQAegTAWgIIANgEQA8gOAzANQAOADAiARIAXAKQAOAFALABQAnAGA3gKIAOgDIA1gLQAagEAWgBQA0gCAlAEQAnAFAoAKQAgAIAigGIAFgBQAlgIAtgSQBDgbANgEIAXgIQAdgIAZgBQAUAAAPACQAQABASAFQAYAGAqAOIAAABIA8ATIAEACQAZAIAkACIACAAIArAEIANACQAPACAQgCQAQAAATgDQAZgEAtgLIAggHQAVgDARgBQAmgCAeAKQASAGAQARQAWAVAVAiQAmA+ALA3IAEAbQAMBRgKAsQgHAegSAdIgBABQgUAegOASIgkAwQgUAbgQAOQgJAIgKAGQgfAUgpgGQg6gLhPAZQgcAJgpAQQgtAQgYAHQgkALgrAAIgcgBQgIAAg3gIIgsgIQgQgDgUAGIgKADQgiAOgKABQgSAEgXACIgQABQglAAgWACIgcABIgKABQgVABgOAAQgWAAgpgLQgogLgYABQgSABgcAMIgRAIQgsAXgWADQgUADgVAAIgVgBg");
	this.shape_15.setTransform(27.4,-38.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("AH0laQAbAKAogCQAXgBAtgDQAggBArgLQAagHAygQQAugNAfgCQApgDAhANQAnAPAnBPQAkBLAFA+QAIB1gRA1QgLAggVAfQgaAigNASQgKAOgbAqQgVAhgNAQQgpAug4gOQhBgShXAbQgZAIgxAUQgyATgZAIQgwAPhFgGQgEAAhygQQgWgDgcAOQgoAVgHACQgaAHglACQgrgBgVAAQgcAAgNAAQgWABgSgCQgVgBgwgRQgsgQgYAAQgZABgtAaQgxAdgVAFQggAHgkgCQgigCgigJQgngPgUgFQgigKgaAMQhCAgg1AHQhBAKg5gYQhHgdhDhbQhEhagbhkQgUhIAChBQAChLAcg7QAag3AqgZQAVgOAngKQA1gPANgFQAUgHAzgfQAsgaAcgGQBEgOA0AUQANAFAmAXQAfATAVAEQAvAIBIgUQATgGAngKQAigJAagCQAwgDAoAFQAqAFAtAPQAmANAtgJQAigGA0gVQBNggAJgDQAxgRAkAAQAWAAAQADQARACATAHQAZAJAuATQAvATAXAIg");
	this.shape_16.setTransform(29.1,-42.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FABA41").s().p("AsmGNQhHgdhDhbQhEhagbhkQgUhIAChBQAChLAcg7QAag3AqgZQAVgOAngKQA1gPANgFQAUgHAzgfQAsgaAcgGQBEgOA0AUQANAFAmAXQAfATAVAEQAvAIBIgUIA6gQQAigJAagCQAwgDAoAFQAqAFAtAPQAmANAtgJQAigGA0gVIBWgjQAxgRAkAAQAWAAAQADQARACATAHIBHAcIBGAbQAbAKAogCIBEgEQAggBArgLIBMgXQAugNAfgCQApgDAhANQAnAPAnBPQAkBLAFA+QAIB1gRA1QgLAggVAfIgnA0QgKAOgbAqQgVAhgNAQQgpAug4gOQhBgShXAbQgZAIgxAUQgyATgZAIQgwAPhFgGIh2gQQgWgDgcAOQgoAVgHACQgaAHglACIhAgBIgpAAQgWABgSgCQgVgBgwgRQgsgQgYAAQgZABgtAaQgxAdgVAFQggAHgkgCQgigCgigJQgngPgUgFQgigKgaAMQhCAgg1AHQgTADgSAAQgtAAgogRg");
	this.shape_17.setTransform(29.1,-42.5);

	this.movieClip_4 = new lib.シンボル1();
	this.movieClip_4.setTransform(29.1,-42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.movieClip_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CEye2 = function() {
	this.initialize();

	// レイヤー 1
	this.movieClip_2 = new lib.CEye1();
	this.movieClip_2.setTransform(13.2,10.6,1,1,0,0,0,0,0.5);

	this.addChild(this.movieClip_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.5,20.2);


(lib.camelwalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		if(this.parent.currentFrame>160){
			this.gotoAndPlay(49);
		}
	}
	this.frame_47 = function() {
		　　this.gotoAndPlay(1);
	}
	this.frame_170 = function() {
		var Rand=Math.floor( Math.random() * 15 );
		if(Rand==1)this.CamelEye.visible = false;
	}
	this.frame_174 = function() {
		this.CamelEye.visible = true;
	}
	this.frame_178 = function() {
		this.gotoAndPlay(170);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(23).call(this.frame_47).wait(123).call(this.frame_170).wait(4).call(this.frame_174).wait(4).call(this.frame_178).wait(1));

	// EY
	this.movieClip_2 = new lib.CEye1();
	this.movieClip_2.setTransform(437,174.5,1,1,0,0,0,0,0.5);

	this.CamelEye = new lib.CEye2();
	this.CamelEye.setTransform(437,174.5,1,1,0,0,0,13.2,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieClip_2}]},139).to({state:[{t:this.CamelEye}]},31).wait(10));

	// HD
	this.instance = new lib.CHD();
	this.instance.setTransform(417.4,54,0.999,0.999,-22.5,0,0,40.1,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:40.5,regY:36.2,scaleX:1,scaleY:1,rotation:-16.7,x:427.4,y:57.2},0).wait(1).to({rotation:-11,x:436.2,y:62.4},0).wait(1).to({rotation:-5.2,x:444.3,y:68.7},0).wait(1).to({rotation:0.3,x:451.9,y:75.7},0).wait(1).to({rotation:6.1,x:459.1,y:83},0).wait(1).to({rotation:11.9,x:465.8,y:90.8},0).wait(1).to({rotation:6.1,x:459.7,y:82.5},0).wait(1).to({rotation:0.3,x:452.8,y:74.9},0).wait(1).to({rotation:-5.2,x:444.9,y:68.1},0).wait(1).to({rotation:-11,x:436.5,y:62.4},0).wait(1).to({rotation:-16.7,x:427.3,y:57.7},0).wait(1).to({rotation:-22.5,x:417.7,y:53.9},0).wait(11).wait(1).to({regX:40.1,regY:36.1,scaleX:1,scaleY:1,rotation:-22.4,x:417.4,y:54},0).wait(1).to({regX:40.5,regY:36.2,scaleX:1,scaleY:1,rotation:-16.2,x:427.8,y:56.7},0).wait(1).to({rotation:-9.9,x:437,y:61.6},0).wait(1).to({rotation:-3.6,x:445.3,y:68.1},0).wait(1).to({rotation:2.4,x:452.8,y:75.4},0).wait(1).to({rotation:8.7,x:459.8,y:83.3},0).wait(1).to({rotation:15,x:466.7,y:91.2},0).wait(1).to({rotation:8.7,x:459.7,y:83.5},0).wait(1).to({rotation:2.4,x:452.5,y:75.7},0).wait(1).to({rotation:-3.6,x:445.1,y:68.5},0).wait(1).to({rotation:-9.9,x:436.8,y:62.1},0).wait(1).to({rotation:-16.2,x:427.7,y:57},0).wait(1).to({rotation:-22.5,x:417.7,y:53.9},0).wait(11).wait(1).to({regX:40.1,regY:36.1,scaleX:1,scaleY:1,rotation:-22.4,x:417.4,y:54},0).wait(1).to({regX:40.5,regY:36.2,scaleX:1,scaleY:1,rotation:-16.2,x:427.8,y:56.7},0).wait(1).to({rotation:-9.9,x:437,y:61.6},0).wait(1).to({rotation:-3.6,x:445.3,y:68.1},0).wait(1).to({rotation:2.4,x:452.8,y:75.4},0).wait(1).to({rotation:8.7,x:459.8,y:83.3},0).wait(1).to({rotation:15,x:466.7,y:91.2},0).wait(1).to({rotation:11.2,x:460.1,y:82.6},0).wait(1).to({rotation:7.5,x:454.3,y:73.4},0).wait(1).to({rotation:3.7,x:448.6,y:64.1},0).wait(1).to({rotation:0,x:442.2,y:55.4},0).wait(1).to({rotation:-3.6,x:434.2,y:48},0).wait(1).to({rotation:-7.4,x:424.3,y:44},0).wait(38).wait(1).to({regX:40.1,regY:36.4,rotation:-7.3,x:425.2,y:44.2},0).wait(1).to({regX:40.5,regY:36.2,rotation:-7.4,x:426.5,y:55.7},0).wait(1).to({x:427.5,y:67.5},0).wait(1).to({x:428.5,y:79.2},0).wait(1).to({x:429.5,y:90.9},0).wait(1).to({x:430.4,y:102.7},0).wait(1).to({x:431.4,y:114.4},0).wait(1).to({x:432.4,y:126.1},0).wait(1).to({x:433.4,y:137.9},0).wait(1).to({x:434.4,y:149.6},0).wait(1).to({x:435.3,y:161.4},0).wait(1).to({x:436.3,y:173.1},0).wait(1).to({x:437.3,y:184.8},0).wait(10).wait(1).to({regX:40.4,regY:36.3,rotation:-7.3,x:438.3,y:185},0).wait(1).to({regX:40.5,regY:36.2,rotation:-6.4,x:437.2,y:184.9},0).wait(1).to({rotation:-5.5,x:435.9,y:184.8},0).wait(1).to({rotation:-4.6,x:434.6,y:184.9},0).wait(1).to({rotation:-3.6,x:433.4},0).wait(1).to({rotation:-2.7,x:433.8},0).wait(1).to({rotation:-1.8,x:434.2},0).wait(1).to({rotation:-0.8,x:434.5},0).wait(1).to({rotation:0,x:434.8},0).wait(1).to({rotation:0.9,x:435.1},0).wait(1).to({rotation:1.8,x:435.5},0).wait(1).to({rotation:2.7,x:435.8},0).wait(1).to({rotation:3.7,x:436.2},0).wait(1).to({rotation:4.6,x:436.5},0).wait(1).to({rotation:5.5,x:436.8},0).wait(1).to({rotation:6.5,x:437.2},0).wait(1).to({rotation:7.4,x:437.6},0).wait(42));

	// FR
	this.instance_1 = new lib.lsd_4のコピー7("synched",0,false);
	this.instance_1.setTransform(330.7,289.9,1,1,0,0,0,0.7,-0.2);

	this.instance_2 = new lib.lsd_4のコピー10("synched",0,false);
	this.instance_2.setTransform(330.7,289.9,1,1,0,0,0,0.7,-53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},48).to({state:[]},58).wait(74));

	// FR2
	this.instance_3 = new lib.FR2();
	this.instance_3.setTransform(343.9,282.4,1,1,0,0,0,62.6,46.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(106).to({_off:false},0).wait(1).to({regX:59.2,regY:52.5,rotation:-5.8,x:341.2,y:298.5},0).wait(1).to({rotation:-11.8,x:341.7,y:309},0).wait(1).to({rotation:-17.8,x:342.4,y:319.4},0).wait(1).to({rotation:-23.8,x:343.1,y:329.7},0).wait(1).to({rotation:-29.8,x:343.8,y:340},0).wait(10).wait(1).to({regX:62.9,regY:46.6,scaleX:1,scaleY:1,rotation:-29.7,y:333.3},0).wait(1).to({regX:59.2,regY:52.5,scaleX:1,scaleY:1,rotation:-29.8,x:343.6,y:340.2},0).wait(57));

	// BR
	this.instance_4 = new lib.lsd_2のコピー5("synched",0,false);
	this.instance_4.setTransform(134.4,290.1);

	this.instance_5 = new lib.lsd_2のコピー8("synched",0,false);
	this.instance_5.setTransform(134.4,290.1,1,1,0,0,0,0,-32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},48).to({state:[]},75).wait(57));

	// BR2
	this.instance_6 = new lib.BR2();
	this.instance_6.setTransform(113.5,281.9,1,1,0,0,0,54.1,53.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(123).to({_off:false},0).wait(1).to({regX:57.7,regY:57.4,rotation:15,x:123.9,y:304.2},0).wait(1).to({rotation:30,x:130.5,y:321.9},0).wait(1).to({rotation:45,x:137.1,y:339.4},0).wait(54));

	// BD
	this.instance_7 = new lib.lsd_9のコピー9("synched",0,false);
	this.instance_7.setTransform(282.5,157.4,1,1,0,0,0,0,2.3);

	this.instance_8 = new lib.lsd_9のコピー12("synched",0,false);
	this.instance_8.setTransform(282.5,157.3,1,1,0,0,0,0,13.3);

	this.instance_9 = new lib.lsd_9のコピー13("synched",0,false);
	this.instance_9.setTransform(282.5,157.4,1,1,0,0,0,0,-105.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},48).to({state:[{t:this.instance_9}]},51).wait(81));

	// FL
	this.instance_10 = new lib.lsd_1のコピー5("synched",0,false);
	this.instance_10.setTransform(338.6,290.1);

	this.instance_11 = new lib.lsd_1のコピー8("synched",0,false);
	this.instance_11.setTransform(338.6,290.1,1,1,0,0,0,0,-52.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},48).to({state:[]},58).wait(74));

	// BL
	this.instance_12 = new lib.lsd_3のコピー5("synched",0,false);
	this.instance_12.setTransform(146.4,290.1);

	this.instance_13 = new lib.lsd_3のコピー8("synched",0,false);
	this.instance_13.setTransform(146.4,290.2,1,1,0,0,0,0,-46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},48).to({state:[]},75).wait(57));

	// TL
	this.instance_14 = new lib.lsd_10のコピー5("synched",0,false);
	this.instance_14.setTransform(94.3,204.9);

	this.instance_15 = new lib.lsd_10のコピー8("synched",0,false);
	this.instance_15.setTransform(94.3,204.9,1,1,0,0,0,-1.7,-96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},48).wait(132));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.7,5.1,429.2,384.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;