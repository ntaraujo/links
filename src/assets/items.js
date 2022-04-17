import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import pix from '../assets/pix.png'

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
    "image": linkedin,
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
    "image": pix,
    "link": "#",
    "onclick": "navigator.clipboard.writeText(\"e48fcf72-c679-4cd4-a018-545435c4052e\"))"
}]

export default items
