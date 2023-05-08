import React from "react";

export default function Posts() {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      topoUsuario: "thaliapasetto",
      alt: "thaliapasetto",
      topoImg: "./assets/img/perfil_4.jpg",
      contImg: "./assets/img/post_1.jpg",
      fundoImg: "assets/img/perfil_1.jpg",
      fundoAlt: "yooseph",
      temLike: false,
      taSalvo: false,
      likes: 92463
    },
    {
      id: 2,
      topoUsuario: "meowed",
      alt: "meowed",
      topoImg: "./assets/img/meowed.svg",
      contImg: "./assets/img/gato-telefone.svg",
      fundoImg: "./assets/img/respondeai.svg",
      fundoAlt: "respondeai",
      temLike: false,
      taSalvo: false,
      likes: 3381
    },
    {
      id: 3,
      topoUsuario: "barked",
      alt: "barked",
      topoImg: "assets/img/barked.svg",
      contImg: "assets/img/dog.svg",
      fundoImg: "./assets/img/adorable_animals.svg",
      fundoAlt: "adorable_animals",
      temLike: false,
      taSalvo: false,
      likes: 6854
    },
  ]);
  const postsRender = posts.map((item, index) => {
    function ClickHeart(index) {
      setPosts((prevState) => {
        const updatedPosts = [...prevState];
        const post = updatedPosts[index];
        post.temLike = !post.temLike;
        post.temLike ? post.likes++ : post.likes--;
        return updatedPosts;
      });
    }

    function LikeFoto(index){
      // index.currentTarget.disabled = true;
      setPosts((prevState) => {
        const updatedPosts = [...prevState];
        const post = updatedPosts[index];
        if(!post.temLike){
          post.likes++
          post.temLike = true;
        }
        return updatedPosts;
      });
    }
    
    function ClickBookmark(index) {
      setPosts((prevState) => {
        const updatedPosts = [...prevState];
        const post = updatedPosts[index];
        post.taSalvo = !post.taSalvo;
        return updatedPosts;
      });
    }

    return (
      <div data-test="post" className="post">

        <div className="topo">
          <div className="usuario">
            <img src={item.topoImg} alt={item.alt} />
            {item.topoUsuario}
          </div>
          
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img data-test="post-img" onClick={() => LikeFoto(index)} src={item.contImg} alt={item.alt} />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon data-test="like-post" class={!item.temLike ? "preto" : "vermelho"} onDoubleClick={() => ClickHeart(index)} onClick={() => ClickHeart(index)} name={item.temLike ? "heart" : "heart-outline"}></ion-icon>

              <ion-icon name="chatbubble-outline"></ion-icon>

              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon data-test="save-post" onClick={() => ClickBookmark(index)} name={item.taSalvo ? "bookmark" : "bookmark-outline"}></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={item.fundoImg} alt={item.fundoAlt} />
            <div data-test="likes-number" className="texto">
              Curtido por <strong>{item.fundoAlt}</strong> e
              <strong> outras {item.likes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div className="posts">{postsRender}</div>;
}
