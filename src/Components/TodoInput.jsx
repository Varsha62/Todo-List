import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        //value me input text krne pr console me task1 task2 store ho jata hai
        value={inputText}
        //onclick me bhi function call kr rhe hai
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        //kisi value ko click krke black krne ke liye set inputtext ka use krke black kr de rhe hai
        setInputText("")
      }}>+</button>      
    </div>
  );
}

export default TodoInput;

