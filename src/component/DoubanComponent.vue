<template>
    <div id="douban_search">
        <h1>{{title}}</h1>
        <div class="container">
            <div class="row" v-for="article in articles">
                <div class="image">
                    <img v-bind:src="article.images.small" v-bind:alt="article.title"/>
                </div>
                <div class="link">
                    <a v-bind:href="article.alt" target="_blank">{{article.title}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    mounted() {
        this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters', {}, {
            headers: {
            },
            emulateJSON: true,
        }).then(function(response) {
            this.title = response.data.title
            this.articles = response.data.subjects
        }).catch(err => console.error(err))
    },
    data() {
        return {
            title:'',
            articles: [],
        }
    }
}
</script>

<style>
div.container{
    display: -webkit-flex;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
}
div.row {
    width: 8rem;
    text-align: center;
    display: -webkit-inline-block;
    display:inline-block;
}
div.image, div.link {
}
</style>
