import instagram from '../assets/instagram.png'
import text from '../assets/text.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import pix from '../assets/pix.png'

const items = [
{
    "title": "Instagram",
    "subtitle": "@ntaraujo1 | Fotos e vídeos 👀",
    "image": instagram,
    "link": "https://instagram.com/ntaraujo1",
    "onClick": ""
},
{
    "title": "Textos",
    "subtitle": "@neitanto | Posto de vez em nunca ⌛",
    "image": text,
    "link": "https://instagram.com/neitanto",
    "onClick": ""
},
{
    "title": "Currículo",
    "subtitle": "Se quiser me contratar/indicar 😉",
    "image": linkedin,
    "link": "https://www.linkedin.com/in/ntaraujo/",
    "onClick": ""
},
{
    "title": "Portfólio",
    "subtitle": "Meus projetos públicos como desenvolvedor 👨‍💻",
    "image": github,
    "link": "https://github.com/ntaraujo",
    "onClick": ""
},
{
    "title": "Pix",
    "subtitle": "Clique aqui para copiar minha chave!",
    "image": pix,
    "link": "#pix",
    "onClick": "navigator.clipboard.writeText('e48fcf72-c679-4cd4-a018-545435c4052e')"
}]

export default items
