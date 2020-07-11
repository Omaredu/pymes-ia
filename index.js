const brain = require('brain.js')

/* 
Primero configuramos los parámetros (Tipo de algóritmo, número de neuronas, etc.) 
que brain.js tendrá en cuenta a la hora de
aprender la información que le proporcionaremos
*/
const configuracion = {
	binaryThresh: 0.5,
	hiddenLayers: [3],
	activation: 'sigmoid'
}

/*
Creamos nuestra red neural con los parámetros anteriormente establecidos
*/
const net = new brain.NeuralNetwork(configuracion)

/*
Entrenamos a nuestro sujeto de prueba
*/
net.train([
	{
		input: [1, 1],
		output: [0]
	},
	{
		input: [1, 0],
		output: [1],
	},
	{
		input: [0, 0],
		output: [0]
	},
	{
		input: [0, 1],
		output: [1]
	}
])

/*
Listo! ya aprendió, pero falta probarla con el dato que reservamos para pruebas
y guardamos el resultado en una variable
*/
const salida = net.run([1, 1])

/*
Mostramos la información en nuestra consola
*/
console.log(salida[0])