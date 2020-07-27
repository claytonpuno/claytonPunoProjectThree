const streamers = [
  {
    title: 'izastikup',
    game: ['valorant', 'csgo', 'fortnite', 'wow', 'fitness'],
    language: ['eng', 'tag'],
    tag: 'GAMING'
  },
  {    
    title: 'kcapital47',
    game: ['valorant', 'csgo', 'fortnite', 'wow'],
    language: ['eng', 'tag'],
    type: 'GAMING'
  },
  {    
    title: 'Jsteel0',
    game: ['valorant', 'csgo', 'fortnite', 'wow'],
    language: ['eng', 'tag'],
    type: 'GAMING'
  },
  {    
    title: 'kusibak',
    game: ['valorant', 'csgo', 'fortnite', 'wow', 'poe'],
    language: ['eng', 'pol'],
    type: 'GAMING'
  },
  {    
    title: 'JzA',
    game: ['valorant', 'csgo', 'fortnite', 'wow', 'lol', 'poe'],
    language: ['eng', 'tag'],
    type: 'GAMING'
  },
  {    
    title: 'Sqirl',
    game: ['valorant', 'csgo', 'fortnite', 'wow', 'lol', 'poe'],
    language: ['eng', 'tag'],
    type: 'GAMING'
  },
  {    
    title: 'lgrzy2ez',
    game: ['valorant', 'csgo', 'fortnite', 'wow'],
    language: ['eng', 'tag'],
    type: 'GAMING'
  },
  {    
    title: 'drji',
    game: ['valorant', 'csgo', 'fortnite', 'karaoke','cook'],
    language: ['eng', 'tag'],
    type: 'GAMING'
  },
  {    
    title: 'joshua',
    game: ['valorant', 'csgo', 'fortnite', 'wow', 'fitness', 'art'],
    language: ['eng', 'tag'],
    type: 'GAMING'
  },
  {    
    title: 'rDQlous',
    game: ['valorant', 'karaoke', 'lol'],
    language: ['eng', 'tag', 'fr'],
    type: 'GAMING'
  },
  {    
    title: 'shondal',
    game: ['valorant', 'csgo', 'lol', 'karaoke'],
    language: ['eng', 'viet'],
    type: 'GAMING'
  },
  {    
    title: 'leankeane',
    game: ['valorant', 'csgo', 'fortnite', 'rag'],
    language: ['eng', 'tag'],
    type: 'GAMING'
  },
  {    
    title: 'Alverson',
    game: ['valorant', 'csgo', 'fortnite', 'karaoke'],
    language: ['eng', 'bos'],
    type: 'GAMING'
  }
]


// Document ready:
$(function() {
  $('form').on('submit', function(event){
    // prevent default when submitting form
    event.preventDefault();

    // save users choice into a variable
    const usersChoice = streamers.filter((streamer) => {
    
      const { game, language } = streamer
    // return streamers if users choice matches streamers game && language
      return game.includes($("input[name=game]:checked").val())
      && language.includes($("input[name=language]:checked").val())
     });
    //  console log new array
    console.log(usersChoice);

    
    usersChoice.forEach(function (streamArr) {
      const streamerOptions = streamArr.title;
      console.log(streamerOptions);
      $('.results').append(`<div class="streamerBox">
      <h2>${streamerOptions}</h2>
      </div>`);
  });

  });
});
