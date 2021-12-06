export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={`assets/img/${props.username}.svg`} />
            <div class="texto">
                <strong>{props.username}</strong>
                {props.name}
            </div>
        </div>
    );
}