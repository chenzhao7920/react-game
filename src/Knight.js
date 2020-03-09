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
        gameover: false
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
                isWin: '否'
            })
            gezi.splice(0, gezi.length);
            for (var i = 0; i < 64; i++) {
                gezi.push("empty");
            }

        })

        $(".square").on("click", function () {

            if (!isclickable) return;
            var d = g.state.done;

            //获得新的id
            var id = $(this).attr("id");
            console.log("choice Id is " + id + " gezi[id] " + gezi[id]);
            //如果新的id是已经选过的格子，则什么也不干，没选过则清空原先的颜色，重新设新格子 
            if (gezi[id] === 'empty') {
                //把留在possible 里的颜色还原，并且把possible array清空
                for (var i = 0; i < possible.length; i++) {
                    var pId = possible[i];
                    $("#" + pId).css("background", "blueviolet");
                }
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
                if (isclickable === false){
                    g.setState({ gameover : true})

                    alert("gameover!");  //gameover;
                }                
            }
            return

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
                if (gezi[n0] !== "full") possible.push(n0);
            }
            //possition 1
            if ((i + 1) <= 7 && (j - 2) >= 0) {
                var n1 = (i + 1) + (j - 2) * 8;
                // possible.push(n2);
                if (gezi[n1] !== "full") possible.push(n1);
            }
            //possition 2
            if ((i - 1) >= 0 && (j - 2) >= 0) {
                var n2 = (i - 1) + (j - 2) * 8;
                // possible.push(n2);
                if (gezi[n2] !== "full") possible.push(n2);

            }
            //possition 3
            if ((i - 2) >= 0 && (j - 1) >= 0) {
                var n3 = (i - 2) + (j - 1) * 8;
                // possible.push();
                if (gezi[n3] !== "full") possible.push(n3);

            }
            //possition 4
            if ((i - 2) >= 0 && (j + 1) <= 7) {
                var n4 = (i - 2) + (j + 1) * 8;
                // possible.push();
                if (gezi[n4] !== "full") possible.push(n4);
            }
            //possition 5
            if ((i - 1) >= 0 && (j + 2) <= 7) {
                var n5 = (i - 1) + (j + 2) * 8;
                // possible.push();
                if (gezi[n5] !== "full") possible.push(n5);
            }
            //possition 6
            if ((i + 1) <= 7 && (j + 2) <= 7) {
                var n6 = (i + 1) + (j + 2) * 8;
                // possible.push();
                if (gezi[n6] !== "full") possible.push(n6);
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

            }
            return possible.length;
        }
    }

    render() {
        return (
            <div className='row'>
                <div className="col-md-6 info">
                    <p>游戏介绍</p>
                    <p>任选一个格子开始</p>
                    <p>选定后，在选定格子周围会出现一个绿色光环</p>
                    <p>从光环中选择下一个灼烧点 </p>
                    <p>每次选定，都会形成新的光环</p>
                    <p>已灼烧过的地方不可再次点亮</p>
                    <p>尽可能的灼烧更多更多的格子</p>
                    <p>挑战开始!</p>
                    <p>已完成步数： {this.state.done}</p>
                    <p>游戏结束： {this.state.gameover ? 'true' : null}</p>
                    <button id="btn">Start</button>
                </div>
                <div class="board col-md-6">
                    <div class="row">
                        <div class="square" id="0" >
                        </div>
                        <div class="square" id="1">
                        </div>
                        <div class="square " id="2">
                        </div>
                        <div class="square" id="3" >
                        </div>
                        <div class="square" id="4">
                        </div>
                        <div class="square " id="5">
                        </div>
                        <div class="square" id="6" >
                        </div>
                        <div class="square" id="7">
                        </div>
                    </div>
                    <div class="row">
                        <div class="square" id="8" >
                        </div>
                        <div class="square" id="9">
                        </div>
                        <div class="square " id="10">
                        </div>
                        <div class="square" id="11" >
                        </div>
                        <div class="square" id="12">
                        </div>
                        <div class="square " id="13">
                        </div>
                        <div class="square" id="14" >
                        </div>
                        <div class="square" id="15">
                        </div>

                    </div>
                    <div class="row">
                        <div class="square" id="16" >
                        </div>
                        <div class="square" id="17">
                        </div>
                        <div class="square " id="18">
                        </div>
                        <div class="square" id="19" >
                        </div>
                        <div class="square" id="20">
                        </div>
                        <div class="square " id="21">
                        </div>
                        <div class="square" id="22" >
                        </div>
                        <div class="square" id="23">
                        </div>
                    </div>
                    <div class="row">
                        <div class="square" id="24" >
                        </div>
                        <div class="square" id="25">
                        </div>
                        <div class="square " id="26">
                        </div>
                        <div class="square" id="27" >
                        </div>
                        <div class="square" id="28">
                        </div>
                        <div class="square " id="29">
                        </div>
                        <div class="square" id="30" >
                        </div>
                        <div class="square" id="31">
                        </div>
                    </div>
                    <div class="row">
                        <div class="square" id="32" >
                        </div>
                        <div class="square" id="33">
                        </div>
                        <div class="square " id="34">
                        </div>
                        <div class="square" id="35" >
                        </div>
                        <div class="square" id="36">
                        </div>
                        <div class="square " id="37">
                        </div>
                        <div class="square" id="38" >
                        </div>
                        <div class="square" id="39">
                        </div>
                    </div>
                    <div class="row">
                        <div class="square" id="40" >
                        </div>
                        <div class="square" id="41">
                        </div>
                        <div class="square " id="42">
                        </div>
                        <div class="square" id="43" >
                        </div>
                        <div class="square" id="44">
                        </div>
                        <div class="square " id="45">
                        </div>
                        <div class="square" id="46" >
                        </div>
                        <div class="square" id="47">
                        </div>
                    </div>
                    <div class="row">
                        <div class="square" id="48" >
                        </div>
                        <div class="square" id="49">
                        </div>
                        <div class="square " id="50">
                        </div>
                        <div class="square" id="51" >
                        </div>
                        <div class="square" id="52">
                        </div>
                        <div class="square " id="53">
                        </div>
                        <div class="square" id="54" >
                        </div>
                        <div class="square" id="55">
                        </div>
                    </div>
                    <div class="row">
                        <div class="square" id="56" >
                        </div>
                        <div class="square" id="57">
                        </div>
                        <div class="square " id="58">
                        </div>
                        <div class="square" id="59" >
                        </div>
                        <div class="square" id="60">
                        </div>
                        <div class="square " id="61">
                        </div>
                        <div class="square" id="62" >
                        </div>
                        <div class="square" id="63">
                        </div>
                    </div>
                </div>
            </div>




        )
    }
}
export default Knight;

