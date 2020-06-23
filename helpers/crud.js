require('dotenv').config({ path: require('find-config')('.env') });
const Discord = require('discord.js');
const client_discord_embed = new Discord.MessageEmbed();
var request = require("request");

module.exports.get = function(url, query, message){
    let fields;

    if(query === "game"){
        fields = 'age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;  limit 1;'
    }
    else {
        // This is to get cover art, 69359 being the ID of the game thats picture you want.
        fields = 'alpha_channel,animated,checksum,game,height,image_id,url,width; where game = 69359'
    }
    
	var options = {
        method: 'GET',
        url: url,
        qs: {
            fields: fields
        },
        headers: {'user-key': process.env.igdb_token, accept: 'application/json'},
        jar: 'JAR'
	};
	
	request(options, function (error, response, body) {
	    if (error) throw new Error(error);
	
        body = JSON.parse(body);
        
        let info = client_discord_embed
        .setTitle("Game Information")
        .setColor("#008b8b")
        // .setThumbnail(body[0].cover)
        .addField("Title ", body[0].name)
        .addField("Description ", body[0].summary)
        .addField("Link ", body[0].url)
        // .addField("Release Date ", new Date(body[0].created_at))
        // .setImage(body[0].url)
        .setTimestamp();

        message.channel.send(info);
	});
}