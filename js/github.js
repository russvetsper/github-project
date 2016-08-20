var apiKey = require('./../.env').apiKey;

function Repo() {
}

Repo.prototype.getRepos = function(name) {
  $.get('https://api.github.com/users/' + input +'?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response.repos_url));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};





exports.repoModule = Repo;
