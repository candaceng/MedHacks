import axios from 'axios'; 
  
import React,{Component} from 'react'; 
import { Link, Switch, Redirect, Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Results from './Results'
  
class FileUpload extends Component { 
   
    state = { 
        selectedFile: null
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
          this.setState({ selectedFile: event.target.files[0] }); 
     
    }; 
    
    // backend api stuff ???????????
    onFileUpload = () => { 

      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("api/uploadfile", formData); 
    }; 
     
    content = () => {
        if (this.state.selectedFile) {  // if file is uploaded, redirect to results page
            return(
                <div> 
                <Switch>
                <Redirect from='/' to='/results' />
                <Route path='/results'>
                  <Results image={this.state.selectedFile}/>
                </Route>
                </Switch>
                </div>  
            )

        }else { // else display upload page

            return (
            <Container className="m-5">
            <Button variant="primary" href="/login">Log In</Button>{' '}
            <Button variant="primary" href="/signup">SignUp</Button>{' '}
            <h1 style={{textAlign: "center", paddingTop: "20%"}}>AppName</h1>
            <Form>
                <Form.File
                  id="example"
                  type="file"
                  label="Upload your skin lesion!"
                  custom
                  onChange={this.onFileChange && this.onFileUpload}/>
            </Form>
                
            <Button variant="primary" href="/results">Results</Button>{' '}

            </Container>
            )
        }
    }
     
    render() { 
     
      return ( 
        <div> 
            {this.content()}
        </div> 
      ); 
    } 
  } 
  
  export default FileUpload; 