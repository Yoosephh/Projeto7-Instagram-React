export default function Stories() {
  const stories = [
    { imagem: "./assets/img/9gag.svg", usuario: "9gag", alt: "9gag" },
    { imagem: "./assets/img/meowed.svg", usuario: "meowed", alt: "meowed" },
    { imagem: "./assets/img/barked.svg", usuario: "barked", alt: "barked" },
    {
      imagem: "./assets/img/nathanwpylestrangeplanet.svg",
      usuario: "nathanwpylestrangeplanet",
      alt: "nathanwpylestrangeplanet",
    },
    {
      imagem: "./assets/img/wawawicomics.svg",
      usuario: "wawawicomics",
      alt: "wawawicomics",
    },
    {
      imagem: "./assets/img/respondeai.svg",
      usuario: "respondeai",
      alt: "respondeai",
    },
    {
      imagem: "./assets/img/filomoderna.svg",
      usuario: "filomoderna",
      alt: "filomoderna",
    },
    {
      imagem: "./assets/img/memeriagourmet.svg",
      usuario: "memeriagourmet",
      alt: "memeriagourmet",
    },
  ];

  const resultStory = stories.map((story) => {
    return (
      <div className="story">
        <div className="imagem">
          <img src={story.imagem} alt={story.alt} />
        </div>
        <div className="usuario">{story.usuario}</div>
      </div>
    );
  });

  return (
    <div className="stories">
      {resultStory}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
