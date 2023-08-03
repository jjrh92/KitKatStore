import React from 'react';
import styled from '@emotion/styled';
import { useForm, ValidationError } from '@formspree/react';
import { ColoresJulioFood } from '../../Colores';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
import "./Formulario.css";


const Formulario = styled ("form") ({

    display: "flex",
    borderRadius: "10px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1rem",
    marginBottom: "1rem",
    gap: "1rem",
    backgroundColor: ColoresJulioFood.fondo,
    width: "30%",
    height: "100%",
    fontFamily: "KittyKatt",
    
});

const Label = styled ("label") ({

  fontSize: "20px",
  color: ColoresJulioFood.textos,
  textAlign: "center",
  fontFamily: "KittyKatt",
  
});

const Input = styled ("input") ({

    backgroundColor: ColoresJulioFood.textos,
    height: "35px",
    width: "350px",
    borderRadius: "10px",
    fontSize: "20px",
    outline: "none",
    border: "none",
    color: ColoresJulioFood.fondo,
    fontFamily: "KittyKatt",

});

const TextArea = styled ("textarea") ({

    backgroundColor: ColoresJulioFood.textos,
    display: "flex",
    height: "330px",
    width: "350px",
    borderRadius: "10px",
    fontSize: "20px",
    outline: "none",
    border: "none",
    color: ColoresJulioFood.fondo,
    resize: "none",
    fontFamily: "KittyKatt",

});

const SendButtonContainer = styled ("div") ({

  display: "flex",
  width: "360px",
  flexDirection: "column-reverse",
  alignItems: "center",

});

const Text = styled ("p") ({

  fontSize: "20px",
  color: ColoresJulioFood.textos,
  textAlign: "center",
  display: "flex",
  paddingBottom: "1rem",
  paddingTop: "3rem",
  
});

const AfterClickContainer = styled ("section") ({

  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  height: "100vh",
  backgroundColor: ColoresJulioFood.fondo,
  userSelect: "none",
  paddingLeft: "3rem",
  paddingRight: "3rem",
  paddingBottom: "2rem",
  gap: "30px",
  border: "1px solid",
  borderColor: ColoresJulioFood.hover,
  borderRadius: "15px",
  fontFamily: "KittyKatt",

});

const IconoImagen = styled ("img") ({

  width: "200px",
  height: "200px",

});


function CallSendButton () {

  const Container = document.getElementById ("SendButtonContainer");
  const SendButton = document.createElement ("button");
  SendButton.setAttribute ("id", "SendButton");
  SendButton.setAttribute ("type", "submit");
  SendButton.setAttribute ("style", "padding: 1rem; font-family: KittyKatt;font-size: 20px; background-color: #F7F0F0; border: 2px solid; border-color: yellowgreen; border-radius: 10px; color: yellowgreen; cursor: pointer; margin-bottom: 20px; margin-top: 10px;",);
  SendButton.textContent = "Send";
  Container.removeChild (Captcha);
  Container.append (SendButton);
  const ChangeText = document.querySelector (".TextChange");
  SendButton.onclick = ChangeText.textContent = "Captcha resuelto! Gracias.";
  SendButton.onclick = ChangeText();
  
}

function FormularioContacto () {

  const [state, handleSubmit] = useForm ("xrgwezba");

  if (state.succeeded) {

    return (

      <AfterClickContainer>
        <Text>Gracias por tu mensaje, pronto respondere tu mensaje. Atte, Julio.</Text>
          <IconoImagen alt='Mensaje enviado correctamente' draggable="false" src='https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg'/>

        <Link title="Home" draggable="false" style={{fontSize: "20px", fontWeight: "bold", textDecoration: "none", color: ColoresJulioFood.textos,}} to="/">Volver a la pagina principal</Link>
        <Link title="Refresh" draggable="false" style={{fontSize: "20px", fontWeight: "bold", textDecoration: "none", color: ColoresJulioFood.textos,}} onClick={location.reload}>Or refrescar esta pagina</Link>
      </AfterClickContainer>

    )

  }
  
  return (

    <Formulario id='FormContainer' onSubmit={handleSubmit}>

      <Label htmlFor="email">Correo Electronico</Label>

      <Input autoComplete='off' required placeholder='Ingrese su correo electronico aca' id="email" type="email" name="email" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Ingrese su correo electronico aca"}/>

      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Label htmlFor="message">Mensaje:</Label>

      <TextArea autoComplete='off' required placeholder='Ingrese su mensaje aca' id="message" name="message" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Ingrese su mensaje aca"}/>

      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <SendButtonContainer id='SendButtonContainer'>
        <ReCAPTCHA id='Captcha' sitekey="6LdrWF0nAAAAAPQXC8kCiUP-l895Bx151TyLPm1z" onChange={CallSendButton} />
      </SendButtonContainer>
      
    </Formulario>

  );

}

export default FormularioContacto;