<template>
    <div id="app">
        <fieldset>
            <legend>路由：</legend>
            <ol>
                <li><a href="/douban">Douban热映电影</a></li>
                <li><a href="/bio">关于我</a></li>
            </ol>
        </fieldset>
        <fieldset>
            <legend>内容：</legend>
            <router-view class="view"></router-view>
        </fieldset>
        <div id="bottom">
            <div>
                <img src="./assets/logo.png" />
            </div>
            <div><b>{{ bottomText }}</b></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            bottomText: 'Powered by Vue 2'
        }
    }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}
div#bottom {
    margin-top: 2rem;
    align-items: center;
    display: -webkit-flex;
    display:flex;
    flex-flow: column;
}
div#bottom img {
    width: 40px;
    height: 40px;
}
</style>
