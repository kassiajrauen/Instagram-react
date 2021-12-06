import Usuario from './Usuario';
import Sugestoes from './Sugestoes';

export default function Sidebar() {
    const usernames = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"]
    return (
        <div class="sidebar">
            <Usuario username="catanacomics" name="Catana" />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {usernames.map(username => <Sugestoes username={username} />)}

                {/* <Sugestoes username="bad.vibes.memes" />
                <Sugestoes username="chibirdart" />
                <Sugestoes username="razoesparaacreditar" />
                <Sugestoes username="adorable_animals" />
                <Sugestoes username="smallcutecats" /> */}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}