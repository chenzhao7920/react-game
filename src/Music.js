import React, { PureComponent } from 'react';
import './Game.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import "./Music.scss"
import Popper from 'popper.js';
import { render } from '@testing-library/react';


class Music extends React.Component {
  state = {//state是React组件的一个内置对象，使用setState()方法可以便捷的更新页面（159行）。
    url: "",
    imageUrl: "",
    name: "",
    artist: "",
    isLoading: false,
  }

  currentSongIndex = 0
  songs = [
    {
      url: "https://music.163.com/song/media/outer/url?id=1399534395.mp3",
      imageUrl: "http://imge.kugou.com/stdmusic/20170810/20170810111013866169.jpg",
      name: "世界美好与你环环相扣",
      artist: "未知",
    },
    {
      url: "http://mp3.9ku.com/mp3/588/587570.mp3",
      imageUrl: "https://p1.pstatp.com/large/pgc-image/6efc96251b2244509f3ee383c15193de",
      name: "Gentleman",
      artist: "刘伟德、戴爱玲",
    },
    {
      url: "https://sharefs.yun.kugou.com/202003081406/b45f21a18e565e58d680d3a31c0e8578/G152/M03/09/14/eJQEAFzmi86AGKhUADI5ULO4uiw484.mp3",
      imageUrl: "http://p3fx.kgimg.com/stdmusic/400/20190523/20190523195803900253.jpg",
      name: "迷人的危险",
      artist: "馅儿、Neko",
    },
    {
      url: "http://s85.youtaker.com/other/2017/8-19/mp3239272886136a7f94f1bc49608987bf4d777ac57e85.mp3",
      imageUrl: "http://imge.kugou.com/stdmusic/20170810/20170810111013866169.jpg",
      name: "打上花火",
      artist: "DAOKO、米津玄師",
    },
    
  ]

  nextSong(){
    this.setState({
      url: this.songs[this.currentSongIndex%this.songs.length].url,
      imageUrl: this.songs[this.currentSongIndex%this.songs.length].imageUrl,
      name: this.songs[this.currentSongIndex%this.songs.length].name,
      artist: this.songs[this.currentSongIndex%this.songs.length].artist,
    })
    this.currentSongIndex++;
  }

  componentDidMount() {
    $(".audio-player-small").css("display", "flex").hide().slideDown(2500, function(){
      console.log("FadeinDone")
    });
    var r = this;
    
    if(r.props.song != undefined && r.props.song.length > 0){
      var isfound = false;
      for(var i = 0; i < this.songs.length; i++){
        if(this.songs[i].name === r.props.song){
          isfound = true;
          this.setState({ //更新歌曲
            url: this.songs[i].url,
            imageUrl: this.songs[i].imageUrl,
            name: this.songs[i].name,
            artist: this.songs[i].artist,
          })
          break;
        }
      }
      if(!isfound) r.nextSong();
    }else{
      r.nextSong();
    }
    

    var jQuery = $;
    $("#player").on("timeupdate", function () {
      initProgressBar();
    }).on("ended", function () {
      r.nextSong();
      $("#player")[0].load();
      $("#player")[0].play();
      console.log($("#player")[0].duration)
    })
    $("#next").on("click", function(){
      r.nextSong();
      $("#player")[0].load();
      $("#player")[0].play();
    })

    initPlayers(jQuery('#player-container').length);
    function calculateTotalValue(length) {
      var minutes = Math.floor(length / 60),
        seconds_int = length - minutes * 60,
        seconds_str = seconds_int.toString(),
        seconds = seconds_str.substr(0, 2),
        time = minutes + ':' + seconds
      return time;
    }

    function calculateCurrentValue(currentTime) {
      var current_hour = parseInt(currentTime / 3600) % 24,
        current_minute = parseInt(currentTime / 60) % 60,
        current_seconds_long = currentTime % 60,
        current_seconds = current_seconds_long.toFixed(),
        current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

      return current_time;
    }


    var r = 0x77;
    var g = 0x00;
    var b = 0x20;
    function initProgressBar() {

      var player = document.getElementById('player');
      var length = player.duration
      if(!length) return;
      if(!$('#play-btn').hasClass("pause") && player.paused === false){
        $('#play-btn').addClass("pause")
      }
      var current_time = player.currentTime;
      
      var c =颜色渐变(r, 0xff, g, 0xff, b, 0xff);
      $(".spinner").css("background-color", c)
      console.log(c);
      r++;
      g++;
      b++;
      r %= 0xff;
      g %= 0xff;
      b %= 0xff;

      // calculate total length of value
      var totalLength = calculateTotalValue(length)
      jQuery(".end-time").html(totalLength);

      // calculate current value time
      var currentTime = calculateCurrentValue(current_time);
      jQuery(".start-time").html(currentTime);

      $(".done").css("width", (player.currentTime / player.duration)*100+"%")
      document.getElementById('barBg').addEventListener("click", seek);
      var progressbar = document.getElementById('seekObj');
      progressbar.value = (player.currentTime / player.duration);
      progressbar.addEventListener("click", seek);

      if (player.currentTime == player.duration) {
        $('#play-btn').removeClass('pause');
      }

      function seek(evt) {
        console.log("clicked")
        var percent = evt.offsetX / this.offsetWidth;
        console.log(percent)

        player.currentTime = percent * player.duration;
        progressbar.value = percent / 100;
        $(".done").css("width", (player.currentTime / player.duration)*100+"%")

      }
    };

    function initPlayers(num) {
      // pass num in if there are multiple audio players e.g 'player' + i

      for (var i = 0; i < num; i++) {
        (function () {

          // Variables
          // ----------------------------------------------------------
          // audio embed object
          var playerContainer = document.getElementById('player-container'),
            player = document.getElementById('player'),
            isPlaying = false,
            playBtn = document.getElementById('play-btn');

          // Controls Listeners
          // ----------------------------------------------------------
          if (playBtn != null) {
            playBtn.addEventListener('click', function () {
              togglePlay()
            });
          }

          // Controls & Sounds Methods
          // ----------------------------------------------------------
          function togglePlay() {
            if (player.paused === false) {
              player.pause();
              isPlaying = false;
              $('#play-btn').removeClass('pause');

            } else {
              player.play();
              $('#play-btn').addClass('pause');
              isPlaying = true;
            }
          }
        }());
      }
    }

    function 颜色渐变(fromRed, endRed, fromGreen, endGreen, fromBlue, endBlue){
      if(fromRed > endRed) fromRed--;
      if(fromRed < endRed) fromRed++;
      if(fromGreen > endGreen) fromGreen--;
      if(fromGreen < endGreen) fromGreen++;
      if(fromBlue > endBlue) fromBlue--;
      if(fromBlue < endBlue) fromBlue++;
      return "#" + Number(fromRed).toString(16) +"" + Number(fromGreen).toString(16) +"" + Number(fromBlue).toString(16);
    }


  }

  render() {
    return (     
       <div className="audio-player-small">

        <div id="play-btn" className="pause"></div>
        <div id="next" ></div>
        <div className="audio-wrapper" id="player-container" href="javascript:;">
          <audio id="player" autoPlay>
            <source src={this.state.url} type="audio/mp3" />
          </audio>
        </div>
        <div className="player-controls scrubber">
          {
        <p>{this.state.name} <small>by</small> {this.state.artist}
          <small style={{marginLeft: "15px"}} className="start-time"></small>/
          <small style={{}} className="end-time"></small></p>
        }
          <div id="seekObjContainer">
            <progress id="seekObj" value="0" max="1">
            </progress>
            <div className="barBg" id="barBg">
              <div className="done">
                <div className="spinner"></div>
              </div>
            </div>
          </div>
          <br />


        </div>
      <div className="album-image" style={{ backgroundImage: "url("+this.state.imageUrl+")" }}></div>
      </div>
    )
  }
}

export default Music;