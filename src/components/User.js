import React from "react"

export default function User() {
  const [nome, setNome] = React.useState("catanacomics")
  const [img, setImg] = React.useState('assets/img/catanacomics.svg ')
  return (
    <div className="usuario">
      <img data-test="profile-image" onClick={()=> {const inputs=prompt('Escolha a sua foto através de uma URL:');
      inputs ? setImg(inputs) : setImg("./assets/img/catanacomics.svg")
      }} src={img} alt="imagem de perfil" />
      <div className="texto">
        <span data-test="name">
          <strong>{nome}</strong>
          <ion-icon data-test="edit-name" onClick={() => {
            const input = prompt('Qual seu lindo nome?');
            input ? setNome(input) : setNome("catanacomics");
          }} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
}

