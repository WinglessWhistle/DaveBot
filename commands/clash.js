module.exports = {
    name: 'clash',
    description: "what will he do today",
    execute(message){

        function random_item(items) {
            return items[Math.floor(Math.random()*items.length)];
          }
          
          var responses = [
            "Jordan 4s",
            "Jordan 1s",
          ];
          console.log(random_item(responses));

                message.channel.send(responses);
    }
}

