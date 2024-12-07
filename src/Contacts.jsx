
import Linker from './Linker.jsx'
import GithubIcon from './icons/GithubIcon.jsx'
import MailIcon from './icons/MailIcon.jsx'
import LinkintIcon from  './icons/LinkintIcon.jsx'

export default function Contact () {

    return (
        <>
            <article className='container-contacts'>
                <Linker link="https://github.com/BegliardoFrancisco"><GithubIcon></GithubIcon></Linker>
                <Linker link="franciscobegliardo@gmail.com"><MailIcon></MailIcon></Linker>
                <Linker link="www.linkedin.com/in/francisco-begliardo-2a07a2297"><LinkintIcon></LinkintIcon></Linker>
            </article>
        </>
    )
}