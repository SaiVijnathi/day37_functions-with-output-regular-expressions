import React,{useRef} from 'react'

function TenthMarksheet() {
  let firstNameInputRef=useRef();
  let firstNameResultSpanRef= useRef();
    let lastNameInputRef=useRef();
    let lastNameResultSpanRef =useRef();
    let emailInputRef = useRef();
    let emailResultSpanRef=useRef();
    let passwordInputRef=useRef();
    let passwordResultSpanRef=useRef();
    let telInputRef=useRef();
    let hinInputRef=useRef();
    let engInputRef=useRef();
    let matInputRef=useRef();
    let sciInputRef=useRef();
    let socInputRef=useRef();


    let telSpanRef=useRef();
    let hinSpanRef=useRef();
    let engSpanRef=useRef();
    let matSpanRef=useRef();
    let sciSpanRef=useRef();
    let socSpanRef=useRef();
    let nameRegEx = /^[A-Za-z\s]{2,30}$/;
    let emailRegEx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegEx=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    let resultSpan=useRef();

    let calculateResult=()=>{
      let firstName=firstNameInputRef.current.value;
      let lastName=lastNameInputRef.current.value;
      let telMarks=Number(telInputRef.current.value);
      let hinMarks=Number(hinInputRef.current.value);
      let engMarks=Number(engInputRef.current.value);
      let matMarks=Number(matInputRef.current.value);
      let sciMarks=Number(sciInputRef.current.value);
      let socMarks=Number(socInputRef.current.value);

      let totalMarks=telMarks+hinMarks+engMarks+matMarks+sciMarks+socMarks;
      let perc=(totalMarks/600)*100;

      resultSpan.current.innerHTML=`${firstName} ${lastName} got total Marks of ${totalMarks} with percentage ${perc.toFixed(2)}%.`; 
    }

    let calculateMarks=(telMarks, hinMarks,engMarks,matMarks,sciMarks,socMarks,studentName)=>{

      let totalMarks=telMarks+hinMarks+engMarks+matMarks+sciMarks+socMarks;
      let totalPerc=(totalMarks/600)*100;
      console.log(`${studentName} got total Marks are ${totalMarks} with percentage ${totalPerc.toFixed(2)}`);
    }
    calculateMarks(95,89,56,78,56,89,"virat");


    let inputOnFocus=(inputRef)=>{
      inputRef.current.style.backgroundColor="lightgreen";
    }

    let inputOnChange=(inputRef,spanRef)=>{
      let marks=Number(inputRef.current.value);
        if(marks>=0 && marks<=100){
         if(marks>=35){
             spanRef.current.innerHTML="Pass";
             spanRef.current.style.color="green";
         }
         else{
             spanRef.current.innerHTML="Fail";
             spanRef.current.style.color="red";
         }
        }
        else{
         spanRef.current.innerHTML="Invalid";
         spanRef.current.style.color="blue";
         alert("Marks cannot be more than 100.");
         inputRef.current.value="";
        }
    }

    let inputOnBlur=(inputRef)=>{
      inputRef.current.style.backgroundColor="";
    }

    let calculateSummary = (engMarks,telMarks,hinMarks,matMarks,sciMarks,socMarks)=>{  
      let totalM= engMarks+telMarks+hinMarks+matMarks+sciMarks+socMarks;

      let perc = (totalM/600)*100;
    let passMarks = 35;
    let result;

    if(telMarks>=passMarks&&
      hinMarks>=passMarks&&
      engMarks>=passMarks&&
      matMarks>=passMarks&&
      sciMarks>=passMarks&&
      socMarks>=passMarks
    ){
      result="pass";
    }else{
      result="fail";
    }

      return{totalM,perc,result};
      }
    let totalMarks = calculateSummary(92,96,84,98,78,52);
    
    console.log(totalMarks);

    let dhoniDetails = calculateSummary(78,89,45,89,98,23);
    console.log(dhoniDetails);


    let validateName=(inputRef,spanRef)=>{
      let result = nameRegEx.test(inputRef.current.value);
      if(result == true){
        spanRef.current.innerHTML = "valid";
        spanRef.current.style.color="green";
      }else{
        spanRef.current.innerHTML = "invalid";
        spanRef.current.style.color="red";
      }
    }

    let validateEmail=(inputRef,spanRef)=>{
      let result = emailRegEx.test(inputRef.current.value);
      if(result == true){
        spanRef.current.innerHTML = "valid";
        spanRef.current.style.color="green";
      }else{
        spanRef.current.innerHTML = "invalid";
        spanRef.current.style.color="red";
      }
    }

    let validatePassword=(inputRef,spanRef)=>{
      let result = passwordRegEx.test(inputRef.current.value);
      if(result == true){
        spanRef.current.innerHTML = "valid";
        spanRef.current.style.color="green";
      }else{
        spanRef.current.innerHTML = "invalid";
        spanRef.current.style.color="red";
      }
    }


  return (
    <div className='main'>
        <div>
        <h1>Student Marks Sheet</h1>
        </div>
        <form>
            <fieldset>
                <legend>Student Details</legend>
      <div>
        
        <label>First Name</label>
        <input ref={firstNameInputRef} type="text" onChange={()=>{
          validateName(firstNameInputRef,firstNameResultSpanRef);
        }}></input>
        <span ref={firstNameResultSpanRef}></span>
      </div>

      <div>
        <label>Last Name</label>
        <input ref={lastNameInputRef} type="text"onChange={()=>{
          validateName(lastNameInputRef,lastNameResultSpanRef);
        }}></input>
        <span ref={lastNameResultSpanRef}></span>
      </div>

      <div>
        <label>Email</label>
        <input ref={emailInputRef} type="email" onChange={()=>{
          validateEmail(emailInputRef,emailResultSpanRef);
        }}></input>
        <span ref={emailResultSpanRef}></span>
      </div>

      <div>
        <label>Password</label>
        <input ref={passwordInputRef} type="password" onChange={()=>{
          validatePassword(passwordInputRef,passwordResultSpanRef);
        }}></input>
        <span ref={passwordResultSpanRef}></span>
      </div>
      </fieldset>

    <fieldset>
        <legend>Subjects</legend>
      <div>


        <label>Telugu</label>
        <input type='number' ref={telInputRef} onFocus={()=>{
          inputOnFocus(telInputRef);
        }}

        onChange={()=>{
           inputOnChange(telInputRef,telSpanRef);
    }}
        onBlur={()=>{
          inputOnBlur(telInputRef);
        }}
        >
            
        </input>
        <span ref={telSpanRef}></span>
      </div>

      
        
      <div>
        <label>Hindi</label>
        <input type='number' ref={hinInputRef} 
        onFocus={()=>{
          inputOnFocus(hinInputRef);
        }}
        onChange={()=>{
           
            inputOnChange(hinInputRef,hinSpanRef);
        }}
        onBlur={()=>{
          inputOnBlur(hinInputRef);
        }}
        ></input> 
        <span ref={hinSpanRef}></span>
      </div>



      <div>
        <label>English</label>
        <input type='number' ref={engInputRef} 
         onFocus={()=>{
          inputOnFocus(engInputRef);
         }}
         onChange={()=>{
          inputOnChange(engInputRef,engSpanRef);
         }}
         onBlur={()=>{
          inputOnBlur(engInputRef);
         }}
        ></input> 
        <span ref={engSpanRef}></span>
      </div>
      <div>
        <label>Maths</label>
        <input type='number' ref={matInputRef} 
        onFocus={()=>{
          inputOnFocus(matInputRef);
        }}
        onChange={()=>{
          inputOnChange(matInputRef,matSpanRef);
        }}
        onBlur={()=>{
          inputOnBlur(matInputRef); 
        }}
        ></input> 
        <span ref={matSpanRef}></span>
      </div>
      <div>
        <label>Science</label>
        <input type='number' ref={sciInputRef} 
         onFocus={()=>{
          inputOnFocus(sciInputRef);
         }}
         onChange={()=>{
          inputOnChange(sciInputRef,sciSpanRef);
         }}
         onBlur={()=>{
          inputOnBlur(sciInputRef);
         }}
         ></input> 
        <span ref={sciSpanRef}></span>
      </div>
      <div>
        <label>Social</label>
        <input type='number' ref={socInputRef}
        onFocus={()=>{
          inputOnFocus(socInputRef);
        }}
        onChange={()=>{
          inputOnChange(socInputRef,socSpanRef);  
        }}
        onBlur={()=>{
          inputOnBlur(socInputRef);
        }}
        ></input> 
        <span ref={socSpanRef}></span>
      </div>
      </fieldset>
      <div>
        <button type='button' onClick={()=>{
            
            calculateResult();

        }}>Calculate</button>
      </div>
      <p ref={resultSpan}></p>
      </form>
      
    </div>
  )
}

export default TenthMarksheet