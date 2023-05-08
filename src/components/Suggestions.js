export default function Suggestions() {
  const sugestoes = [
    {
      img: "assets/img/bad.vibes.memes.svg",
      alt: "bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      img: "assets/img/chibirdart.svg",
      alt: "chibirdart",
      nome: "chibirdart",
      razao: "Segue você",
    },
    {
      img: "assets/img/razoesparaacreditar.svg",
      alt: "razoesparaacreditar",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      img: "assets/img/adorable_animals.svg",
      alt: "adorable_animals",
      nome: "adorable_animals",
      razao: "Segue você",
    },
    {
      img: "assets/img/smallcutecats.svg",
      alt: "smallcutecats",
      nome: "smallcutecats",
      razao: "Segue você",
    },
  ];

  const sugestoesRender = sugestoes.map((elem) => {
    return (
      <>
        <div className="sugestao">
          <div className="usuario">
            <img src={elem.img} alt={elem.alt} />
            <div className="texto">
              <div className="nome">{elem.nome}</div>
              <div className="razao">{elem.razao}</div>
            </div>
          </div>
          <div className="seguir">Seguir</div>
        </div>
        
      </>
    )});
    
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoesRender}
    </div>
  );
}
