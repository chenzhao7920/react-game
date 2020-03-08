import React from 'react';
import './Game.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import { render } from '@testing-library/react';
// import { ReactComponent } from '*.svg';


class Game extends React.Component {
    state = {//state是React组件的一个内置对象，使用setState()方法可以便捷的更新页面（159行）。
        red: true,
        done: 0,
        isWin: '否',
       
    }

    
    func(){
        console.log("func");
        this.state.done++;
    }

    // togglePop = ()=>{
    //     this.setState({
    //         seen: !this.state.seen,
    //         isWin: '是'
    //     });
    // } 
    componentDidMount() {
        var g = this; //需要一个当前React ObJect来更新他的状态
        var isclickable = true;
        var gezi1 = "black";
        var gezi2 = "black";
        var gezi3 = "black";
        var gezi4 = "black";
        var gezi5 = "black";
        var gezi6 = "black";
        var gezi7 = "black";
        var gezi8 = "black";
        var gezi9 = "black";

        var gezi = ["black", "black", "black", "black", "black", "black", "black", "black", "black",]
        $("#btn").on("click",function(){
            $(".gezi").css("background", "black");
            g.setState({
                red: true,
                done: 0,
                isWin: '否',
            })
            isclickable = true;
            gezi1 = "black";
            gezi2 = "black";
            gezi3 = "black";
            gezi4 = "black";
            gezi5 = "black";
            gezi6 = "black";
            gezi7 = "black";
            gezi8 = "black";
            gezi9 = "black";
            gezi = ["black", "black", "black", "black", "black", "black", "black", "black", "black",];  
            
        })
        $(".gezi").on("click", function () {
            if (!isclickable) return;
            var d = g.state.done;
            if (g.state.red) {
                var id = $(this).attr("id");
                var 更新了没 = 存颜色(id, "red");
                if (更新了没) {
                    $(this).css("background", "red");
                    g.func();//调用一个子函数更新状态
                    d++;
                    g.setState({//直接更新其状态
                        done: d,
                        red: !g.state.red,
                        isWin: '否',
                    })

                }
            }
            else {
                var id = $(this).attr("id");
                var 更新了没 = 存颜色(id, "green");
                if (更新了没) {
                    $(this).css("background", "green");
                    g.func();
                    d++;
                    g.setState({
                        done: d,
                        red: !g.state.red,
                    })
                }
            }
            if (gezi1 != "black" && gezi1 === gezi2 && gezi2 === gezi3) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
                // g.togglePop();
            } else if (gezi4 != "black" && gezi4 === gezi5 && gezi5 === gezi6) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
            } else if (gezi7 != "black" && gezi7 === gezi8 && gezi8 === gezi9) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
            } else if (gezi1 != "black" && gezi1 === gezi4 && gezi1 === gezi7) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
            } else if (gezi2 != "black" && gezi2 === gezi5 && gezi5 === gezi8) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                    
                })
            } else if (gezi3 != "black" && gezi3 === gezi6 && gezi6 === gezi9) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
            } else if (gezi1 != "black" && gezi1 === gezi5 && gezi5 === gezi9) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
            } else if (gezi3 != "black" && gezi3 === gezi5 && gezi5 === gezi7) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
            }
        })


        //这个函数接受一个格子ID， 和颜色， 然后把gezix存成颜色
        function 存颜色(格子id, 颜色) {
            var idx = parseInt(格子id) - 1;
            if (gezi[idx] != "black") return false;
            gezi[idx] = 颜色;
            switch (格子id) {
                case "1":
                    gezi1 = 颜色
                    break;
                case "2":
                    gezi2 = 颜色
                    break;
                case "3":
                    gezi3 = 颜色
                    break;
                case "4":
                    gezi4 = 颜色
                    break;
                case "5":
                    gezi5 = 颜色
                    break;
                case "6":
                    gezi6 = 颜色
                    break;
                case "7":
                    gezi7 = 颜色
                    break;
                case "8":
                    gezi8 = 颜色
                    break
                case "9":
                    gezi9 = 颜色
                    break;
            }

            return true;
        }
    }

    render() {
        return (
            <div className='row'>
                <div className="col-md-6 info">
                    <p>一个很简单的小游戏，还需要更新成React的写法。</p>
                    <p>在compoentDidMount()中使用了jQuery来更新css以更新格子颜色。</p>
                    <p>需要完善src/Game.js:</p>
                    <p>显示胜利玩家</p>
                    <p>已完成步数： {this.state.done}</p>
                    <p>游戏结束： {this.state.isWin}</p>
                    <p>即将落子玩家：{this.state.red ? '红' : '绿'}</p>
                    <p>千里之行始于足下</p>
                    <button id = "btn">Start</button>
                </div>
                <div class="qipan col-md-6">
                    <div class="row">
                        <div class="gezi" id="1" >

                        </div>
                        <div class="gezi" id="2">

                        </div>
                        <div class="gezi " id="3">
                        </div>
                    </div>
                    <div class="row">
                        <div class="gezi " id="4">

                        </div>
                        <div class="gezi " id="5">

                        </div>
                        <div class="gezi " id="6">
                        </div>
                    </div>
                    <div class="row">
                        <div class="gezi " id="7" >

                        </div>
                        <div class="gezi " id="8">

                        </div>
                        <div class="gezi " id="9">
                        </div>
                    </div>
                </div>
                
            </div>
            
             
        )
    }
}
export default Game;