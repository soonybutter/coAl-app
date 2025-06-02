import { useState } from 'react';
import './App.css';
import Box from "./components/Box";

// 1. 박스 2개( 타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼 클릭 시 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 됨.
// 5. 3 4 결과를 가지고 누가 이겼는지 승패를 따짐.
// 6. 승패 결과에 따라 테두리 색 변경(이기면-초록, 지면- 빨강, 비기면- 블랙)

const choice = {
  rock:{
    name:"Rock",
    img:"https://www.pngitem.com/pimgs/m/109-1094400_rock-paper-scissors-png-clipart-rock-paper-scissor.png"
  },
  scissors:{
    name:"Scissors", 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyJob5hcksKHEhaDgqD7g1122-WhLmEQAKVJiozWqvSjHlNr8Qy0rD2HG8ocMWBWS9QU&usqp=CAU"
  },
  paper:{
    name:"Papper",
    img:"https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png"
}
};

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play=(userChoice)=>{
    
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement=(user, computer)=>{
    // user== computer : 비김
    // user== rock, computer == "scissors" user 이김
    // user == "rock" computer == paper user 짐
    // user == scissors computer paper user 이김
    // user == scissors computer rock user 짐
    // user == paper, computer scissors user 짐

    if(user.name== computer.name){
      return "tie";
    }
    else if(user.name== "Rock"){
      if(computer.name=="Scissors"){
        return "win";
      }
      else{
        return "lose";
      }
    }
    else if(user.name== "Scissors") return computer.mname=="Paper"?"win":"lose";
    else if(user.name== "Paper") return computer == "Rock"? "win": "lose";
  }

  // 객체에 키값만 뽑아서 array로 만들어주는 함수
  const randomChoice=()=>{
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  }

  

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main-btn">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </>
  )
}

export default App
