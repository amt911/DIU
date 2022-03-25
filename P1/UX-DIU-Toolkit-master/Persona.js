/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1_Estrellas";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Rory Trey",
				Photo: "man.png",
				Quote: "Trust the timing of your life",
				Age: 31,
				Occupation: "Guía turístico para una agencia turística irlandesa",
				Family: "Con pareja desde hace 6 meses",
				Location: "Granada capital",
				Character: "Le gusta la historia, el arte, salir y conocer gente y la música de los 80",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Visitar nuevos lugares de España", "Encontrar un trabajo como profesor de inglés para obtener más estabilidad", "Le gustaría comprarse una vivienda en Granada para quedarse a vivir aquí con su pareja"],
				Frustrations: ["Echa de menos a su familia", "Le gustaría hablar español de manera más fluida", "Le gustaría vivir en un lugar más espacioso y con más luz"],
				Bio: "Es de Dublin y lo destinaron en el trabajo a Granada hace 1 año como guía turístico para los viajeros irlandeses. Conoció a su pareja en una visita turística a los 6 meses de estar en Granada. Dio clases de español en la escuela y eso le motivó a interesarse más por la cultura española; tanto que había visitado más de una vez distintas partes de España antes de venir por trabajo.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Se acerca Navidad y como es temporada baja quiere aprovechar sus vacaciones para viajar con su pareja y de paso visitar a su familia.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Olga Patiño",
				Photo: "woman.png",
				Quote: "SUeña pero no te duermas",
				Age: 20,
				Occupation: "Estudiante de Magisterio en la UGR",
				Family: "Soltera. Vive con sus padres.",
				Location: "Albolote (Granada)",
				Character: "Ama los juegos de mesa y las fiestas entre amigos antes que las discotecas, y si son temáticas mejor.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Quiere vivir la experiencia de Sicue un cuatrimestre.","Le encantaría viajar con sus amigas y conocer el norte de España","Dar las prácticas en su antiguo instituto","Poder aprobar las oposiciones a la primera"],
				Frustrations: ["El dinero no abunda en su familia y dependen de las becas que le dan para estudiar.", "La mayoría de gente de su clase hablan y molestan en las clases y ningún profesor les dice nada .", "Le estresa depender del metro para ir a la universidad."],
				Bio: "Es una chica de Albolote que desde chica quería dedicarse a la educación. Como se le daban bien los estudios pensó en hacer matemáticas y luego el máster para profesora. Sin embargo no le gustó la carrera y decidió ir a por magisterio directamente donde conoció amigas con las que congenia muy bien.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Móvil", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos:   "Ha terminado una semana llena de examenes y está cansada pero contenta porque tiene alo de tiempo libre." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])