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

        var gezi = ["black", "black", "black", "black", "black", "black", "black", "black", "black"]
       
        $("#btn").on("click",function(){
            $(".gezi").css("background", "black");
            g.setState({
                red: true,
                done: 0,
                isWin: '否',
            })
            isclickable = true;
            gezi = ["black", "black", "black", "black", "black", "black", "black", "black", "black"];  
            
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
            if (gezi[0] !== "black" && gezi[0] === gezi[1] && gezi[1] === gezi[2]) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
                // g.togglePop();
            } else if (gezi[3] !== "black" && gezi[3] === gezi[4] && gezi[4] === gezi[5]) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
            } else if (gezi[6] !== "black" && gezi[6] === gezi[7] && gezi[7] === gezi[8]) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
            } else if (gezi[0] !== "black" && gezi[0] === gezi[3] && gezi[0] === gezi[6]) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
            } else if (gezi[1] !== "black" && gezi[1] === gezi[4] && gezi[4] === gezi[7]) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                    
                })
            } else if (gezi[2] !== "black" && gezi[2] === gezi[5] && gezi[5] === gezi[8]) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
            } else if (gezi[0] !== "black" && gezi[0] === gezi[4] && gezi[4] === gezi[8]) {
                console.log("win");
                isclickable = false;
                g.setState({
                    isWin: '是',
                })
            } else if (gezi[2] !== "black" && gezi[2] === gezi[4] && gezi[4] === gezi[7]) {
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