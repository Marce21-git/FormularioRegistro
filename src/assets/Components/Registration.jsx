
import Header from "./Header"
import SocialButton from "./SocialButton"
import Form from "./Form"
import Alert from "./Alert"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from "react"


const Registration = () => {

const [alert, setAlert] = useState ({
  error:"", msg:"", color:""
});

  return (
    <>
      <Header title="Crea tu cuenta con nosotros" /> 
      <SocialButton 
        facebook="fa-brands fa-facebook fa-fade"
        github="fa-brands fa-github fa-fade"
        linkedin="fa-brands fa-linkedin-in fa-fade"
        />
      <Form setAlert={setAlert}/>
      {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
    </>
  );
};

export default Registration

