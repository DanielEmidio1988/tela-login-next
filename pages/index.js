import {useState } from "react"
import {SessionProvider} from 'next-auth/react'
import { signIn } from "next-auth/react"


export default function Home() {

    const [form, setForm] = useState({
      login: "",
      password: "",
  }) //Daniel: formulário para armazenar dados de login e senha
  const [validatePass, setValidatePass] = useState(false) //Daniel: variavel para ativar mensagem de login/senha incorretos
  const [checkBox, setCheckBox] = useState(false) //Daniel: variavel para ativar o checkbox de Lembre-me.

  //Daniel: callback para ativar o login
  const login = ()=>{
      if(form.login === 'admin' && form.password === 'ADMIN123'){        
          if(checkBox){
          const tokenrandomapi = JSON.stringify(form)
          window.localStorage.setItem("tokenrandomapi", tokenrandomapi)
          alert("Sucesso!")
          setCheckBox(false)
          }
          setValidatePass(false)
          context.setAuth(true)
          // goToHomePage(navigate)
      }else{
          setValidatePass(true)
      }      
  }
  
  const onChangeCheckBox = (event)=>{
      const auxCheckBox = !checkBox
      setCheckBox(auxCheckBox)
  }
 
  const onChangeForm = (event)=>{
      setForm({...form,[event.target.name]:event.target.value})
  }

  //Daniel: este hook fará com que o usuário seja redirecionado a Home Page caso tenha ativado "lembre-me" quando logou
  // useEffect(()=>{
  //     const token = JSON.parse(window.localStorage.getItem("tokenrandomapi")) 
  //     if(token){
  //     goToHomePage(navigate) 
  //      }        
  // },[])

  return (
    <>   
      
           <section>
            <div className="boxLogin">

                <div className="boxlogintitle">
                    <h2>LOGIN</h2>
                    <p>Acesse sua conta</p>
                </div>

                <div className="boxloginuser">
                        <input value={form.login} name="login" onChange={onChangeForm} placeholder="Insira seu e-mail"/>
                        <input value={form.password} name="password" onChange={onChangeForm} type='password' placeholder="Insira sua senha"/>
                        {validatePass ? <p id='errorLogin'>E-mail ou senha incorreto!</p> : ''}
                        <button onClick={()=>login()}>Login</button>

                        <div id="registerbox">
                          <p>Não tem uma conta? <a href="*">Registre-se</a></p>
                        </div>
                        <div id="socialogin">
                          <p>Ou entre com </p> <button onClick={()=>signIn('github')} id="buttonSociaLogin">Github</button>
                        </div> 
                </div>
            </div>
        </section>
      
    </>
  )
}
