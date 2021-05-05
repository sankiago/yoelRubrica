	//listado
	
	
	//Traer los elementos del DOM
	const itemsNodeList = document.querySelectorAll('.temas__lista__item.main_item')
	const itemsArray = [...itemsNodeList]
	
	//Hacer que cuando haga click se dispare una función
	itemsArray.forEach(currentItem =>  currentItem.addEventListener('mouseup', handler))
	
	
	//Función que deja todos los anchos por defecto y amplia el ancho del objeto actual
	function handler()
	{
		redimensionar(this);
		cerrarLosDemas(this);
	}

	function redimensionar(thisItem){

		//ponemos a todos los elementos con el tamaño por defecto
		itemsArray.forEach(currentItem => {
			currentItem.style.width= '35vw'
		})



		var itemSelected = thisItem.childNodes[1]
		if (itemSelected.open)
		{
			itemSelected.style.width = '35vw'
			thisItem.style.width= '35vw'
		} else {
			itemSelected.style = '100%'
			thisItem.style.width = '100%'
		}

		/* itemsArray.forEach(currentItem => currentItem.style.width = '35vw')
		thisItem.style.width = '100%' */
	}

	function cerrarLosDemas(thisItem) {

	var listOpen = thisItem.childNodes[1].open
		itemsArray.forEach(currentItem => {
			currentItem.childNodes[1].open = false
		})
		console.log('eo')
		if(listOpen)
		{
			thisItem.open = false
		} else {
			thisItem.open = true
		}
	}