import React from 'react';
import PageHeader from './PageHeader';

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <p>这是个牛逼的react项目，虽然这个项目看起来还很简陋，但是从0到1总是最难的！很快这个项目就很变得很牛逼！Awsome! Cheers!</p> 
                <p>通过使用React Route实现SPA - Single Page Application</p>
                <p>
                    通过SPA可以实现切换页面时音乐播放不中断！<br/>
                    屏幕过窄的时候播放器显示不正确，需要修正
                </p>
            </div>
        )
    }
}

export default HomePage;