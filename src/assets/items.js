import website from '../assets/website.png'
import instagram from '../assets/instagram.png'
import appstore from '../assets/playstore.png'
import youtube from '../assets/youtube.jpeg'
import dribbble from '../assets/dribbble.png'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'
import twitter from '../assets/twitter.png'

const items = [
{
    "title": "Instagram",
    "subtitle": "@ntaraujo1 | Fotos e vídeos 👀",
    "image": instagram,
    "link": "https://instagram.com/ntaraujo1",
    "onclick": ""
},
{
    "title": "Textos",
    "subtitle": "@neitanto | Textinhos que eu posto de vez em nunca ✍️",
    "image": instagram,
    "link": "https://instagram.com/neitanto",
    "onclick": ""
},
{
    "title": "Currículo",
    "subtitle": "@ntaraujo | Meu LinkedIn 👔",
    "image": website,
    "link": "https://www.linkedin.com/in/ntaraujo/",
    "onclick": ""
},
{
    "title": "Portfólio",
    "subtitle": "@ntaraujo | Meus projetos públicos como desenvolvedor 👨‍💻",
    "image": github,
    "link": "https://github.com/ntaraujo",
    "onclick": ""
},
{
    "title": "Me faça uma doação!",
    "subtitle": "Clique aqui para copiar meu Pix!",
    "image": website,
    "link": "#",
    "onclick": "navigator.clipboard.writeText(\"e48fcf72-c679-4cd4-a018-545435c4052e\"))"
}]

export default items
