import './contato.css'

export default function Contato() {
  return (
    <div className="contato">
      <h1><hr/>Contato<hr/></h1>
      
      <img src="./rieny.jpg"/>
      <div class="cont">
      <p>
        <b>Email: </b>
         maylla.nascimento@estudante.ifms.edu.br<br/>
      <hr/></p>
        
        <p><b>Telefone: </b>
         067 996984109<br/><hr/></p>
        <p><b>Instagram: </b>
         @srtajapinha
      <hr/></p></div>
      <form>
       <label>Nome</label><br/>
        <input type="text" placeholder="Digite seu nome" required name="Name"/><br/>
        <label>Email</label><br/>
        <input type="text" placeholder="Digite seu email" required name="Name"/><br/>
        <label>CPF</label><br/>
        <input type="text" placeholder="Digite seu CPF" required name="Name"/><br/>
        <input type="submit" value="Enviar"/>
      </form>
    </div>

  )


}