module.exports = {
    name: 'clash',
    description: "Jordan 2s or Jordan 1s?",
    execute(message){

        function random_item(items) {
            return items[Math.floor(Math.random()*items.length)];
          }
          
          var responses = [
            "Jordan 4s",
            "Jordan 1s",
          ];
          console.log(random_item(responses));

          message.channel.send(random_item(responses));          
    }
}