const avatar = document.querySelector('#avatar_img');
const id = document.querySelector('#id');
const name = document.querySelector('#name');
const url = document.querySelector('#url');
const repos = document.querySelector('#repos');
const follos = document.querySelector('#followers');
const foolow = document.querySelector('#following');

const api_url = 'https://api.github.com/users/luanferreira93';

axios.get(api_url).then(res=>{
        avatar.setAttribute('src',res.data.avatar_url);
        createLine(name,res.data.name);
        createLine(id,res.data.login);
        createLine(url,res.data.url);
        createLine(repos,res.data.public_repos);
        createLine(follos,res.data.followers);
        createLine(foolow,res.data.following);
});

function createLine(html,data) {
       return html.innerHTML = data;
}