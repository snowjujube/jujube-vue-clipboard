# Something to say

I can not use English very well, but under certain sutuation of this community, no translation for Chinese people, I'll write this markdown in English. ʕ•̫͡•ོʔ•̫͡•ཻʕ•̫͡•ʔ•͓͡•ʔ

# Install

Get it on npm.

```
npm install jujube-vue-clipboard --save
```


# Setup

```
import JujubeVueClipboard from 'jujube-vue-clipboard'
Vue.use(JujubeVueClipboard)
```

# Usage


```
// use in dom by Vue directive
<button v-jujube-copy="text">copy me</button>

// Vue global method
Vue.prototype.$copy(text)

// Vue instance
this.$copy(text)

```