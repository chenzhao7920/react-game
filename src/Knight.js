import React from 'react';
import './Knight.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import { render } from '@testing-library/react';
// import { ReactComponent } from '*.svg';


class Knight extends React.Component {
    state = {//state是React组件的一个内置对象，使用setState()方法可以便捷的更新页面（159行）。
        done: 0,
        isWin: '否',
        isclickable: true,
        laststep: -1,
    }
    table = [];

    func() {
        console.log("func");
        this.state.done++;
    }
    componentWillMount() { //因为table不在state里面，所以必须在页面Mount之前将其初始化！
        this.createTable();
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

        var gezi = [];
        for (var i = 0; i < 64; i++) {
            gezi.push("empty");
        }
        var possible = [];
        console.log(gezi.length);

        $("#btn").on("click", function () {
            $(".square").css("background", "blueviolet");
            g.setState({
                done: 0,
                isWin: '否',
                isclickable: true

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
            console.log("after click start, geze.length = " + gezi.length);
        })

        $(".square").on("click", function () {

            console.log("possible.length" + possible.length);
            var d = g.state.done;
            var id = $(this).attr("id");
            console.log("choice Id is" + id);
            // if(possible.includes(parseInt(id))!==true) {
            //     console.log("possible.includes(parseInt(id))!==true"+ possible.includes(parseInt(id)));
            //     return;
            // }

            //重设possible 里的颜色
            //
            var 更新了没 = setSquare(id);
            if (!更新了没) return;

            if (更新了没) {
                $(this).css("background", "#eb8de7");
                g.func();
                d++;
                g.setState({
                    done: d,
                })
            }
            if (giveOption(id) > 0)
                isclickable = true;
            else
                isclickable = false;
            //gameover;

        })


        //这个函数接受一个格子ID， 和颜色， 然后把gezi状态设为full
        function setSquare(id) {
            var idx = parseInt(id);
            if (gezi[idx] !== "empty") return false;
            gezi[idx] = "full";
            return true;
        }

        //这个函数接受一个格子ID， 算出周边可选的格子（刨除已选过的格子），改变格子颜色作为用户提示b，b
        function giveOption(id) {
            var idx = parseInt(id);
            var i = idx % 8; //col
            var j = parseInt(idx / 8); //row
            //possition 0
            if ((i + 2) <= 7 && (j - 1) >= 0) {
                var n0 = (i + 2) + (j - 1) * 8;
                if (gezi[n1] === "full") possible.push(n0);
            }
            //possition 1
            if ((i + 1) <= 7 && (j - 2) >= 0) {
                var n1 = (i + 1) + (j - 2) * 8;
                // possible.push(n2);
                if (gezi[n0] !== "full") possible.push(n1);
            }
            //possition 2
            if ((i - 1) >= 0 && (j - 2) >= 0) {
                var n2 = (i - 1) + (j - 2) * 8;
                // possible.push(n2);
                if (gezi[n1] !== "full") possible.push(n2);
            }
            //possition 3
            if ((i - 2) >= 0 && (j - 1) >= 0) {
                var n3 = (i - 2) + (j - 1) * 8;
                // possible.push();
                if (gezi[n2] !== "full") possible.push(n3);
            }
            //possition 4
            if ((i - 2) >= 0 && (j + 1) <= 7) {
                var n4 = (i - 2) + (j + 1) * 8;
                // possible.push();
                if (gezi[n3] !== "full") possible.push(n4);
                console.log("i is" + i + " j is " + j);
            }
            //possition 5
            if ((i - 1) >= 0 && (j + 2) <= 7) {
                var n5 = (i - 1) + (j + 2) * 8;
                // possible.push();
                if (gezi[n4] !== "full") possible.push(n5);
            }
            //possition 6
            if ((i + 1) <= 7 && (j + 2) <= 7) {
                var n6 = (i + 1) + (j + 2) * 8;
                // possible.push();
                if (gezi[n5] !== "full") possible.push(n6);
            }
            //possition 7
            if ((i + 2) <= 7 && (j + 1) <= 7) {
                var n7 = (i + 2) + (j + 1) * 8;
                // possible.push();
                if (gezi[n7] !== "full") possible.push(n7);
            }
            console.log("after set knight the possible button.size is " + possible.length);
            for (var i = 0; i < possible.length; i++) {
                var id = possible[i];
                $("#" + id).css("background", "#8de3a4");
                console.log("possible idx " + id);
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
                    <p>游戏介绍</p>
                    <p>任意选一个棋子</p>
                    <p>开始游戏</p>
                    <p>已完成步数： {this.state.done}</p>
                    <p>游戏结束： {this.state.isclickable ? null : true}</p>
                    <button id="btn">Start</button>
                </div>
                <div class="board col-md-6">
                    {this.table.map(row => {
                        return (
                            <div className="row">
                                {row.map((boxid) => {
                                    return (
                                        <div className="square" id={boxid}></div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Knight;

