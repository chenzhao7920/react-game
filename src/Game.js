import React from 'react';
import './Knight.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import { render, findAllByTestId } from '@testing-library/react';
// import { ReactComponent } from '*.svg';


class Knight extends React.Component {
    state = {//state是React组件的一个内置对象，使用setState()方法可以便捷的更新页面（159行）。
        done: 0,
        isWin: '否',
        gameover: false
    }
    table = [];
    componentWillMount() { //因为table不在state里面，所以必须在页面Mount之前将其初始化！
        this.createTable();
    }

    componentDidMount() {
        var g = this; //需要一个当前React ObJect来更新他的状态
        var isclickable = true;

        var gezi = [];
        for (var i = 0; i < 64; i++) {
            gezi.push("empty");
        }
        var possible = [];


        $("#btn").on("click", function () {

            $(".square").css("background", "blueviolet");
            g.setState({
                done: 0,
                isWin: '否',
                isclickable : true,
                gameover : false
            })
            for (var i = 0; i < 64; i++) {
                gezi.pop();
            }
            for (var i = 0; i < 64; i++) {
                gezi.push("empty");
            }
            for (var i = 0; i < possible.length; i++) {
                possible.pop();
            }
        })

        $(".square").on("click", function () {
            //test
           
            // if(g.state.done ===3)  alert("gameover!"); 

            if (!isclickable) return;
            var d = g.state.done;

            //获得新的id
            var id = $(this).attr("id");
            console.log("choice Id is " + id + " gezi[id] " + gezi[id]);
            //如果新的id是已经选过的格子，则什么也不干，没选过则清空原先的颜色，重新设新格子 
            if (d === 0) {
                possible.splice(0, possible.length);
                setSquare(id);
                //set knight to pink
                $(this).css("background", "#eb8de7");
                // g.func();
                d++;
                g.setState({
                    done: d,
                })

                isclickable = giveOption(id) > 0 ? true : false;
            } else {
                if (gezi[id] === 'possible') {
                    //把留在possible 里的颜色还原，并且把possible array清空
                    for (var i = 0; i < possible.length; i++) {
                        var pId = possible[i];
                        $("#" + pId).css("background", "blueviolet");
                        gezi[pId] ="empty";
                    }
                    possible.splice(0, possible.length);
                    console.log("possible length", possible.length);
                    setSquare(id);
                    //set knight to pink
                    $(this).css("background", "#eb8de7");
                    // g.func();
                    d++;
                    g.setState({
                        done: d,
                    })

                    isclickable = giveOption(id) > 0 ? true : false;
                    if (isclickable === false) {
                        g.setState({ gameover: true })

                        alert("gameover!");  //gameover;
                        isclickable =true;
                    }
                }
                return;
            }
            return;

        })


        //这个函数接受一个格子ID， 如果不为空，返回F， 空则gezi状态设为full
        function setSquare(id) {
            var idx = parseInt(id);
            if (gezi[idx] !== "empty") {
                return false;
            } else {
                gezi[idx] = "full";
                return true;
            }
        }

        //这个函数接受一个格子ID， 算出周边可选的格子（刨除已选过的格子），改变格子颜色作为用户提示b，b
        function giveOption(id) {
            var idx = parseInt(id);
            var i = idx % 8; //col
            var j = parseInt(idx / 8); //row
            //possition 0
            if ((i + 2) <= 7 && (j - 1) >= 0) {
                var n0 = (i + 2) + (j - 1) * 8;
                if (gezi[n0] !== "full") {
                    possible.push(n0);
                    gezi[n0] = "possible";
                }
            }
            //possition 1
            if ((i + 1) <= 7 && (j - 2) >= 0) {
                var n1 = (i + 1) + (j - 2) * 8;
                if (gezi[n1] !== "full") {
                    possible.push(n1);
                    gezi[n1] = "possible";                   
                }
            }
            //possition 2
            if ((i - 1) >= 0 && (j - 2) >= 0) {
                var n2 = (i - 1) + (j - 2) * 8;
                if (gezi[n2] !== "full") {
                    possible.push(n2);
                    gezi[n2] = "possible";                  
                }

            }
            //possition 3
            if ((i - 2) >= 0 && (j - 1) >= 0) {
                var n3 = (i - 2) + (j - 1) * 8;
                if (gezi[n3] !== "full") {
                    possible.push(n3);
                    gezi[n3] = "possible";                
                }

            }
            //possition 4
            if ((i - 2) >= 0 && (j + 1) <= 7) {
                var n4 = (i - 2) + (j + 1) * 8;
                if (gezi[n4] !== "full") {
                    possible.push(n4);
                    gezi[n4] = "possible";
                  
                }
            }
            //possition 5
            if ((i - 1) >= 0 && (j + 2) <= 7) {
                var n5 = (i - 1) + (j + 2) * 8;
                if (gezi[n5] !== "full") {
                    possible.push(n5);
                    gezi[n5] = "possible";
                    
                }
            }
            //possition 6
            if ((i + 1) <= 7 && (j + 2) <= 7) {
                var n6 = (i + 1) + (j + 2) * 8;
                if (gezi[n6] !== "full") {
                    possible.push(n6);
                    gezi[n6] = "possible";
                    
                }
            }
            //possition 7
            if ((i + 2) <= 7 && (j + 1) <= 7) {
                var n7 = (i + 2) + (j + 1) * 8;
                if (gezi[n7] !== "full") {
                    possible.push(n7);
                    gezi[n7] = "possible";
                }   
            }
            
            for (var i = 0; i < possible.length; i++) {
                var id = possible[i];
                $("#" + id).css("background", "#8de3a4");
            }
            
            return possible.length;
        }
    }
    createTable() {
        for (var i = 0; i < 8; i++) {
            var array = [];
            for (var j = 0; j < 8; j++) {
                array.push(i * 8 + j);
            }
            this.table.push(array);
        }

    }

    render() {
        return (
            <div className='row'>
                <div className="col-md-6 info">
                    <p>Game Rules</p>
                    <p>Choose a grid to start.</p>
                    <p>After selection, a green halo will appear around the selected grid.</p>
                    <p>Select the next burning point from the aura. </p>
                    <p>Each time you select, a new aura will be formed.</p>
                    <p>The place that has been burnt cannot be lit again.</p>
                    <p>Burn as many grids as possible.</p>
                    <p>The challenge begins! </p>
                    <p>Total steps： {this.state.done}</p>
                    <p>Game over： {this.state.gameover ? 'true' : null}</p>
                    <button id="btn">Start</button>
                </div>
                <div class="board col-md-6">
                    {this.table.map(row => {//table是一个二维数组，table的每个元素是包含一行id的数组
                        return (
                            <div className="row">
                                {row.map((boxid) => { //row是一个数组，包含了这一行的id
                                    return (
                                        <div className="square" id={boxid}></div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div >

        )
    }
}
export default Knight;

