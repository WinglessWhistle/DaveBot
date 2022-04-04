module.exports = {
    name: 'song',
    description: "What Dave song should I listen to?",
    execute(message){

        function random_item(items) {
            return items[Math.floor(Math.random()*items.length)];
          }
          
          var responses = [
            "We're all alone",
            "Verdansk",
            "Clash",
            "In the fire",
            "Three Rivers",
            "System",
            "Lazarus",
            "Law of attraction",
            "Both sides of a smile",
            "Twenty to one",
            "Heart attack",
            "Survivor's guilt",
            "Titanium",
            "Thiago Silva",
            "Location",
            "Streatham",
            "Funky Friday",
            "Professor X",
            "Physco",
            "Samantha",
            "Starlight",
            "Screwface capital",
            "Money talks",
            "Picture me",
            "Paper cuts",
            "100M's",
            "Yeah, its not Dave but put on Dior because British.",
          ];
          console.log(random_item(responses));

          message.channel.send(random_item(responses));          
    }
}