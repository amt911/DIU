/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1_Estrellas";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Rory Trey",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere un lugar tranquilo para desconectar del trabajo y poder socializar.",
                touch1: "Agenda laboral",
                feel1: "4",
                con1: "Ver a qué hora sale del trabajo.",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet sitios interesantes para salir.",
                touch2: "Móvil",
                feel2: "3",
                con2: "Hay demasiados lugares donde poder elegir.",
                ima2: "cartoon-deciding.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra una publicación de un evento en el Instagram del Lemon Rock por el día de San Patricio",
                touch3: "Móvil (Redes sociales)",
                feel3: "4",
                con3: "Se encuentra lejos de donde vive actualmente.",
                ima3: "cartoon-reading.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca autobuses que le dejen lo más cerca posible.",
                touch4: "Aplicación del bus (Móvil)",
                feel4: "2",
                con4: "No hay ningún bus que pare cerca del Lemon Rock o que pasen antes del evento.",
                ima4: "cartoon-PCcrying.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra que el metropolitano le deja cerca.",
                touch5: "Aplicación de mapas (Móvil)",
                feel5: "3",
                con5: "No tiene tarjeta de metro y tiene que comprar el billete básico",
                ima5: "cartoon-going.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue llegar al evento a la hora de comienzo",
                touch6: "Lemon Rock",
                feel6: "5",
                con6: "La gente del bar es más joven que él.",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Olga Patiño",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere pasar el viernes por la tarde en algún lado",
                touch1: "Amigos",
                feel1: "4",
                con1: "No conocer sitios en Granada capital.",
                ima1: "cartoon-looking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Pregunta a sus amigos si conocen lugares.",
                touch2: "Amigos",
                feel2: "3",
                con2: "No le gusta el ambiente de las discotecas.",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Habla con sus amigos de la otra carrera y le recomiendan el Lemon Rock",
                touch3: "Amigos",
                feel3: "3",
                con3: "Tiene que convencer a sus amigos de magisterio de ir.",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Mira si hay posibilidad de cenar en el establecimiento",
                touch4: "Página Lemon Rock (Móvil)",
                feel4: "2",
                con4: "Observa que los precios de la comida son caros",
                ima4: "cartoon-crying.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Compara los precios con los bares de la zona",
                touch5: "Google (Móvil)",
                feel5: "3",
                con5: "Tienen que moverse para cenar en otro sitio y luego volver al Lemon Rock para pasar el rato.",
                ima5: "cartoon-going.png",


                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente acaban yendo al Lemon Rock a tomar unas copas y hablar en el \"patio-garaje\" mientras juegan a las cartas",
                touch6: "Lemon Rock",
                feel6: "5",
                con6: "Estaba lleno pero tuvieron suerte y consiguieron una mesa pronto.",
                ima6: "cartoon-shaking.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



