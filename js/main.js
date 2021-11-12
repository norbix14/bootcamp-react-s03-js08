document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')

	window.addEventListener('scroll', controlScroll)

	function controlScroll() {
		const st = document.body.scrollTop || document.documentElement.scrollTop
		const display = toTop.style.display
		const cl = toTop.classList
		if (st > 300) {
			toTop.style.display = 'block'
			cl.remove('hide')
			cl.add('show')
			setTimeout(() => {cl.add('rotate')}, 2100)
	  } else {
			if (display === 'block') {
				cl.remove('show')
				cl.add('hide')
				setTimeout(() => {
					cl.remove('rotate')
					toTop.style.display = 'none'
				}, 2000)
			}
	  }
	}

	toTop.addEventListener('click', () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})

	const ej01 = (arr = [1,3,4,2,6,7,9,1,8]) => arr.filter(el => el % 2 === 1).length
	const ej02 = (str = 'hola mundo desde javascript') => str.split(' ').join('-')
	const ej03 = (arr = [1,2,3,4,5,6,7,8,9,10]) => arr.filter(el => el % 2 === 0)
	const ej04 = (pets = ['cat','dog','elephant','hawk','snake','cat']) => pets.filter(pet => pet !== 'cat')
	const ej05 = (products = []) => {
		const productos = (products.length > 0 && products) || [
	  	{id: 2, nombre: 'Remera muy fachera', precio: 250},
	  	{id: 5, nombre: 'Pantalon muy fachero', precio: 400},
	    {id: 6, nombre: 'Camperon invierno', precio: 699},
	    {id: 34, nombre: 'Guantes negros', precio: 199}
		]
		return productos.map(obj => obj.nombre)
	}
	const ej06 = (data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]) => data.reduce((acc, cur) => acc.concat(cur), [])

	document.addEventListener('click', e => {
		const { target: { tagName, id } } = e
		if (tagName === 'BUTTON') {
			switch (id) {
				case 'ej01':
					return alert(ej01())
				case 'ej02':
					return alert(ej02())
				case 'ej03':
					return alert(ej03())
				case 'ej04':
					return alert(ej04())
				case 'ej05':
					return alert(ej05())
				case 'ej06':
					return alert(ej06())
				default:
					console.log('ELEGIR EJERCICIO')
			}
		}
	})

})
