const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default


// babel  代码解析为AST ->  AST转换为处理后的AST  ->  生成新的代码


const sourceCode = 'console.log(1);'

const ast = parser.parse(sourceCode, {
    sourceType: 'unambiguous'
})

traverse(ast, {
    CallExpression(path,state){}
})

const { code, map } = generate(ast)

console.log(code)
