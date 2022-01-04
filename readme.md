# Dicas

## Execução com parâmetro

```shell
echo "entrada (input) do programa" | node numero_exercicio.js
```

### Entendendo o Pipe (unix)

A próxima instrução utiliza o output da primeira como input para a segunda.
![Pipe](https://linuxhandbook.com/content/images/2020/09/pipe-redirection.png

### Usando input com quebra de linha (\n)

Para interpretar uma string com sequência de escape (caractéres especiais e.g "\n;\t" etc) podemos usar a flag `-e`

```shell
echo 10$'\n'10 | node 1001.js
```

```shell
echo -e "10\n10" | node 1001.js


echo = uso no terminal para soluções.
```

## Estudar algumas funções nativas do javascript do

- map
- filter
- reduce
- 