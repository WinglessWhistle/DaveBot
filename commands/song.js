module.exports = {
    name: 'song',
    description: "What Dave song should I listen to?",
    execute(message){

        function random_item(items) {
            return items[Math.floor(Math.random()*items.length)];
          }
          
          var responses = [
            "We're all alone (https://open.spotify.com/track/22agj1ppHejR41cUyf7k6v?si=17c7fb94ab8d4f89)",
            "Verdansk (https://open.spotify.com/track/7IPKXYU2rTMnrLW5IZ7ZI5?si=7f7dc5ac659047e0)",
            "Clash (https://open.spotify.com/track/2zxEc1GCSCxbHIXTfhraRC?si=be41322f02a345db)",
            "In the fire (https://open.spotify.com/track/3mtaSob1BQO4HMSA8lWKRt?si=fa93ff2ace2f4661)",
            "Three Rivers (https://open.spotify.com/track/6lHN6T5ZkPCEKDPZqDKcYw?si=c68e32dcc3d44692)",
            "System (https://open.spotify.com/track/5gOtq0sKU24ZF8hnXlSp1V?si=5d4625e4f8a74d82)",
            "Lazarus (https://open.spotify.com/track/4wvnXoQqjIOoEis5eyTbCl?si=786bc693d08440ba)",
            "Law of attraction (https://open.spotify.com/track/25tXNghelZKdGZZVoSL9Yg?si=9bf688fe5a994de2)",
            "Both sides of a smile (https://open.spotify.com/track/3hX0ilh84w2KGaiNw2rRCV?si=fbaf434d8bda4a9f)",
            "Twenty to one (https://open.spotify.com/track/4uwMD6gmDmbwaY2cjqhy7c?si=15b7ef36073a4490)",
            "Heart attack (https://open.spotify.com/track/3EzYtOjWoZQ4jHe78hfpQo?si=a882ce1ce69a436d)",
            "Survivor's guilt (https://open.spotify.com/track/1Xapo8sq7KcQXdt0HrXX5B?si=948d73fe1dd44e37)",
            "Titanium (https://open.spotify.com/track/2qzW5AK8ldKUOWUETwAkZY?si=e1a55a117c414a87)",
            "Thiago Silva (https://open.spotify.com/track/3DKCTIiJ97bS9TGiqcABjo?si=2cd5ff5b099c4af7)",
            "Location (https://open.spotify.com/track/3z4CGd63tpUn9a6oQSG0CI?si=7e0083f388034e39)",
            "Streatham (https://open.spotify.com/track/59PUOc7B0WCNNx8Nr4qaA4?si=a1977de71b3d454e)",
            "Funky Friday (https://open.spotify.com/track/01IQ4aQgOf0Kkq3a273hmO?si=f8b998fdfae2416b)",
            "Professor X (https://open.spotify.com/track/5wfyoR8XOkw45QRtFOoxyi?si=46881f7c69ae4cf3)",
            "Physco (https://open.spotify.com/track/0FWAIRd9Uz5uNek7cALYNC?si=0b74a752abc94803)",
            "Samantha (https://open.spotify.com/track/4YLzVD32aMH4qgSsSPtNbl?si=d741b36a181440a9)",
            "Starlight (https://open.spotify.com/track/531KGXtBroSrOX9LVmiIgc?si=620c3852d7df40bf)",
            "Screwface capital (https://open.spotify.com/track/65TggCitjPK0sUXtwgOkN9?si=8620d527f46a4338)",
            "Money talks (https://open.spotify.com/track/31gzwBma4iEppvk8um5ZGx?si=f968d383aa01465f)",
            "Picture me (https://open.spotify.com/track/7eFZGDVNCjcB6j3WLzHeLR?si=5773817478894a76)",
            "Paper cuts (https://open.spotify.com/track/1gFMfqyVSXHMgvRloH2gDL?si=3ccf9397f2f74815)",
            "100M's (https://open.spotify.com/track/2OSxpLDUPrXGYmOwV0BCrv?si=dd14c6641f69426f)",
            "Dior. It's not by Dave but funny. (https://open.spotify.com/track/79s5XnCN4TJKTVMSmOx8Ep?si=9c47f50097be4029)",
          ];
          console.log(random_item(responses));

          message.channel.send("You Should Listen too... " + random_item(responses));          
    }
}