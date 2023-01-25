import React, { useEffect, useState } from 'react'
import "./style.css"


const App = () => {
  const [mark, setMark] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [count, setcount] = useState(0);
  const [win, setWin] = useState("");
  const [player, setPlayer] = useState("X");
  const [again, setAgain] = useState(false);

  const checkWinner = () => {
    let winlist = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let x = mark.map((val, ind) => (val == "X") ? ind : undefined).filter((val) => val != undefined);

    let o = mark.map((val, ind) => (val == "O") ? ind : undefined).filter((val) => val != undefined);

    let win = "";
    winlist.map((val) => {
      if (x.includes(val[0]) && x.includes(val[1]) && x.includes(val[2])) {
        win = "x";
        setWin("X");
      }
      if (o.includes(val[0]) && o.includes(val[1]) && o.includes(val[2])) {
        win = "o";
        setWin("O");
      }
    });
    if (win != "") {
      // var contin = confirm(`Player ${win} wins ! Would you like to play again ?`);
      var contin = window.confirm(`Player ${win} wins ! Would you like to play again ?`);
      setAgain(contin);
      // alert(`Player ${win} wins ! Would you like to play again ?`)
    }
  }

  useEffect(() => {
    if (again) {
      setMark(Array(9).fill(null));
      setTurn(true);
      setcount(0);
      setWin("");
      setPlayer("X");
    }
    else {
      setAgain(false);
    }
  }, [win])

  const markPoint = (e, val) => {
    if (turn && mark[val] == null && win == "") {
      setTurn(turn ? false : true);
      e.target.innerText = "X";
      mark[val] = "X";
      setcount(count + 1);
      setPlayer("O")
    }
    if (!turn && mark[val] == null && win == "") {
      setTurn(turn ? false : true);
      e.target.innerText = "O";
      mark[val] = "O";
      setcount(count + 1);
      setPlayer("X");
    }
    if (count > 3) {
      checkWinner();
    }
  }

  const resetFun = () => {
    setMark(Array(9).fill(null));
    setTurn(true);
    setcount(0);
    setPlayer("X");
  }

  return (
    <>
      <div className="containert">
        <div className="row flex-column pt-2 px-0 mx-0">
          <div className='col-12 col-md-7 col-lg-6 col-xl-3 mx-auto d-flex justify-content-around'>
            <div className="text-center d-flex flex-column">
              <div className='d-flex winnig-num mx-auto rounded align-items-center justify-content-center'>
                <div>0</div>
              </div>
              <div className='mt-2'>PLAYER X</div>

            </div>
            <div className="text-center d-flex flex-column">
              <div className='d-flex winnig-num mx-auto rounded align-items-center justify-content-center'>
                <div>0</div>
              </div>
              <div className='mt-2'>PLAYER O</div>

            </div>
          </div>
          <div className='col-12 col-md-7 col-lg-6 col-xl-3 mx-auto mt-3 px-0'>
            <div className="tic-tac-box mx-auto">
              <button className={(mark[0] == "X") ? "box-btn red-color" : "box-btn"} onClick={(e) => markPoint(e, 0)} >{mark[0]}</button>
              <button className={(mark[1] == "X") ? "box-btn red-color" : "box-btn"} onClick={(e) => markPoint(e, 1)} >{mark[1]}</button>
              <button className={(mark[2] == "X") ? "box-btn red-color" : "box-btn"} onClick={(e) => markPoint(e, 2)} >{mark[2]}</button>
              <button className={(mark[3] == "X") ? "box-btn red-color" : "box-btn"} onClick={(e) => markPoint(e, 3)} >{mark[3]}</button>
              <button className={(mark[4] == "X") ? "box-btn red-color" : "box-btn"} onClick={(e) => markPoint(e, 4)} >{mark[4]}</button>
              <button className={(mark[5] == "X") ? "box-btn red-color" : "box-btn"} onClick={(e) => markPoint(e, 5)} >{mark[5]}</button>
              <button className={(mark[6] == "X") ? "box-btn red-color" : "box-btn"} onClick={(e) => markPoint(e, 6)} >{mark[6]}</button>
              <button className={(mark[7] == "X") ? "box-btn red-color" : "box-btn"} onClick={(e) => markPoint(e, 7)} >{mark[7]}</button>
              <button className={(mark[8] == "X") ? "box-btn red-color" : "box-btn"} onClick={(e) => markPoint(e, 8)} >{mark[8]}</button>
              {/* <input type="button" value="" /> */}
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 col-xl-3 mx-auto mt-2'>
            <p className='turn ps-0 ps-sm-5'><b>{player}'s</b> turn</p>

            <div className="ps-3 px-sm-3 px-xl-0">
              <button className='w-100 border-0 reset-btn rounded' onClick={() => resetFun()}>Reset</button>
            </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default App