var quote;

function setup() {
  createCanvas(700, 700);
  loadJSON("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand", gotData);
  
};

function gotData(data){
  quotenum = int(random(0, data.length));
  quote= data[quotenum].content.rendered;
};



function draw() {
  background(50);
  fill(255);
  textSize(32);
  textLeading((mouseX / width) * 64);
  text(quote,
    100, 100, 300, 300);
}