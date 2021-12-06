export default function Stories(props) {
    return (
        <>
            <div class="story">
                <div class="imagem">
                    <img src={`assets/img/${props.username}.svg`} />
                </div>
                <div class="usuario">
                    {props.username}
                </div>
            </div>

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </>
    );
}