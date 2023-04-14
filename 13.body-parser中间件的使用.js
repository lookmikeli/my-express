const express = require('express')

const app = express()

// 1.导入解析表单的中间件 body-parser
const parser = require('body-parser')

// 2.使用  app.use() 注册中间件
app.use(parser.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    // 如果没有配置任何 解析表单数据的中间件，则 req.body 默认等于 undefined
    console.log(req.body);
    res.send('ok')
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})
