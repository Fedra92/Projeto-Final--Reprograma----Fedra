import { SignUp } from "./SignUp"
import { Container } from 'react-bootstrap'

export function CriarConta() {
    return(
        <div> 
            <Container className="d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh"}}>
             <div className="w-100" style={{maxWidth: "400px"}}>
             <SignUp />    
            </div>   
            
            </Container>
            
            
        </div>
    )
}