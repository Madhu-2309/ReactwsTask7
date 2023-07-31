import React from 'react';
import'./validation.css';
import f2 from './components/images/f2.jpg';
class Validation extends React.Component{
    constructor(){
        super();
        this.state= {username:" "}
        this.state= {phoneno:null,errmsg:""}
        this.state= {references:" ",errmsg1:""}
        this.state= {fees:" ",errmsg2:""}
        this.state={totalamount:""}
    }
    uservalue=(event)=>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err=" ";
        if(n==="phone no"){
            if(v!=" "&&!Number(v))
            {
                err=<strong>invalid, phone number</strong>
            }
            this.setState({errmsg:err});
        }
        if(n==="references"){
            if(v!==" "&&!Number(v))
            {
                err=<strong>invalid, reference</strong>
                this.setState({errmsg1:err});
            }else{  
                var t;      
                this.setState({errmsg:err})
                var a=document.getElementById("f").value;
                var b=document.getElementById("r").value;
                 t=a*b;
                document.getElementById("total").value=t;
            }
            
       }
       if(n==="fees"){
        if(v!==" "&&!Number(v))
        {
            err=<strong>invalid,fees</strong>
        }
        this.setState({errmsg2:err}); 
        }
    }

    formsubmit=(event)=>
    {
        event.preventDefault();
        alert("your registration is successful");
    }
    call=(event)=>
    {
        <img src={f2} alt="login"/>
    }
    render()
    {
            return(
            <form onSubmit={this.formsubmit}>
                <center>
                    <h1>Sports registration form</h1>
                </center>
                <label for="sport">Select sport:</label>
                <select name="Sports" id="sports">
                <option value="Kabbadi" onclick="call('i1')">Kabbadi</option>
                <option value="Cricket">Cricket</option>
                <option value="Foot ball">foot ball</option>
                <option value="basket ball">Baseket ball</option>
                </select><br/><br/>
                Enter your name:<input type="text" name="username" onChange={this.uservalue} /> <br/><br/>
                Enter your phone no :<input phone no="text" name="phone no" onChange={this.uservalue}/>{this.state.errmsg}<br/><br/>
                Address:<input type="text" name="address"/><br/><br/>
                Fees:<input fees="text" name="fees" onChange={this.uservalue} id="f"/>{this.state.errmsg2}<br/><br/>
                References:<input references="text" name="references" onChange={this.uservalue} id="r"/>{this.state.errmsg1}<br/><br/>
                total:<input total="number" name="toatal" id="total"/>
                <input  type='submit'/><br/><br/>
</form>
            );
    }
}
    export default Validation;  