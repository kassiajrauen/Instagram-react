import Stories from './Stories';
import Post from './Post';

export default function Esquerda() {
    const usernames = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];
    const posts = [{ username: "meowed", imgContent: "gato-telefone", username: "respondeai", numLike: "101.523" }, { username: "barked", imgContent: "dog", username: "adorable_animals", numLike: "99.159" }];

    return (
        <div class="esquerda">
            <div class="stories">
                {usernames.map(username => <Stories username={username} />)};
            </div>

            <div class="posts">
                {posts.map(obj => <Post username={obj.username} imgContent={obj.imgContent} username={obj.username} numLike={obj.numLike} />)}

                {/* <Post username="meowed" imgContent="gato-telefone" username="respondeai" numLike="101.523" />
                // <Post username="barked" imgContent="dog" username="adorable_animals" numLike="99.159" /> */}
            </div>
        </div>
    );
}

{/* <Stories username="9gag" />
                <Stories username="meowed" />
                <Stories username="barked" />
                <Stories username="nathanwpylestrangeplanet" />
                <Stories username="wawawicomics" />
                <Stories username="respondeai" />
                <Stories username="filomoderna" />
                <Stories username="memeriagourmet" /> */}

