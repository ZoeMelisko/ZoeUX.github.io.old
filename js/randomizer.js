var list = ["I created a religion based off of Shia LaBeouf for a class in college", "I love South Korean film (Thirst, Parasite, Burning, etc)","When I was vegan, I accidentally hit a cow with my car...","Last show I went to: Reggie Watts at the Teregram Ballroom","Podcast I'm always listening too: Comedy Bang Bang!","My favorite color is orange"];

$( "#clickme" ).click(function() {
    $("#displayme").html(list[Math.floor(Math.random()*list.length)]);
});