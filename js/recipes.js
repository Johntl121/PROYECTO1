const recipes = [
    // DESAYUNOS
    {
        id: 'pancakes-arandanos',
        title: 'Pancakes con Arándanos',
        category: 'desayuno',
        image: 'images/pancakes.png',
        imageStyle: '',
        rating: 5.0,
        author: 'Chef Roberto',
        authorInitials: 'CR',
        time: '30 min',
        description: 'El desayuno clásico americano, esponjoso y dulce.',
        details: {
            servings: 4,
            calories: '320 kcal',
            protein: '8g',
            carbs: '45g',
            fat: '10g',
            difficulty: 'Fácil'
        },
        ingredients: [
            '2 tazas de harina de trigo',
            '2 huevos grandes',
            '1 ½ tazas de leche entera',
            '1 cda de polvo para hornear',
            '2 cdas de azúcar',
            '1 taza de arándanos frescos',
            'Mantequilla para cocinar'
        ],
        instructions: [
            'En un bol grande, mezcla la harina, el azúcar y el polvo para hornear.',
            'En otro recipiente, bate los huevos con la leche.',
            'Integra los líquidos a los secos suavemente sin batir en exceso.',
            'Añade los arándanos con movimientos envolventes.',
            'Calienta una sartén con un poco de mantequilla.',
            'Vierte un cucharón de mezcla y cocina hasta que salgan burbujas, luego voltea.'
        ]
    },
    {
        id: 'tostadas-francesas',
        title: 'Tostadas Francesas',
        category: 'desayuno',
        image: 'images/pancakes.png',
        imageStyle: 'transform: scaleX(-1);',
        rating: 4.9,
        author: 'Ana N.',
        authorInitials: 'AN',
        time: '25 min',
        description: 'Pan brioche dorado con canela, vainilla y frutas frescas.',
        details: {
            servings: 2,
            calories: '280 kcal',
            protein: '10g',
            carbs: '38g',
            fat: '12g',
            difficulty: 'Media'
        },
        ingredients: [
            '4 rebanadas de pan brioche grueso',
            '2 huevos',
            '1/2 taza de leche',
            '1 cdita de canela en polvo',
            '1 cdita de extracto de vainilla',
            'Miel y frutas para decorar'
        ],
        instructions: [
            'Batir los huevos con la leche, la canela y la vainilla.',
            'Pasar cada rebanada de pan por la mezcla, asegurando que se empape bien pero no se deshaga.',
            'Cocinar en una sartén con mantequilla a fuego medio hasta que estén doradas por ambos lados.',
            'Servir caliente con miel y frutas frescas.'
        ]
    },
    {
        id: 'huevos-benedictinos',
        title: 'Huevos Benedictinos',
        category: 'desayuno',
        image: 'images/hero_background.png',
        imageStyle: '',
        rating: 4.7,
        author: 'Luis U.',
        authorInitials: 'LU',
        time: '40 min',
        description: 'Huevos pochados sobre muffin inglés con salsa holandesa.',
        details: {
            servings: 2,
            calories: '450 kcal',
            protein: '18g',
            carbs: '25g',
            fat: '30g',
            difficulty: 'Difícil'
        },
        ingredients: [
            '2 muffins ingleses partidos',
            '4 huevos frescos',
            '4 rebanadas de jamón canadiense',
            'Para la salsa holandesa: 3 yemas, 100g mantequilla, limón'
        ],
        instructions: [
            'Preparar la salsa holandesa batiendo las yemas a baño maría y añadiendo la mantequilla derretida poco a poco.',
            'Pochar los huevos en agua hirviendo con vinagre por 3-4 minutos.',
            'Tostar los muffins y calentar el jamón.',
            'Montar: muffin, jamón, huevo y bañar con la salsa.'
        ]
    },
    {
        id: 'bowl-avena',
        title: 'Bowl de Avena y Frutas',
        category: 'desayuno',
        image: 'images/pancakes.png',
        imageStyle: '',
        rating: 4.8,
        author: 'Sofia O.',
        authorInitials: 'SO',
        time: '15 min',
        description: 'Energía pura para empezar el día con avena y berries.',
        details: {
            servings: 1,
            calories: '210 kcal',
            protein: '6g',
            carbs: '40g',
            fat: '4g',
            difficulty: 'Fácil'
        },
        ingredients: [
            '1/2 taza de avena en hojuelas',
            '1 taza de leche de almendras o agua',
            '1 plátano en rodajas',
            'Frutos rojos al gusto',
            'Semillas de chía'
        ],
        instructions: [
            'Cocinar la avena con la leche hasta que espese.',
            'Servir en un bowl.',
            'Decorar con el plátano, los frutos rojos y espolvorear chía.',
            'Endulzar con miel si se desea.'
        ]
    },

    // ALMUERZOS
    {
        id: 'ensalada-caprese',
        title: 'Ensalada Caprese',
        category: 'almuerzo',
        image: 'images/pasta_salad.png',
        imageStyle: '',
        rating: 4.8,
        author: 'Maria J.',
        authorInitials: 'MJ',
        time: '20 min',
        description: 'Fresca, ligera y deliciosa. Perfecta para el verano.',
        details: {
            servings: 2,
            calories: '180 kcal',
            protein: '12g',
            carbs: '5g',
            fat: '14g',
            difficulty: 'Fácil'
        },
        ingredients: [
            'Tomates maduros',
            'Queso mozzarella fresco (bocconcini)',
            'Hojas de albahaca fresca',
            'Aceite de oliva virgen extra',
            'Glaseado de balsámico'
        ],
        instructions: [
            'Cortar los tomates y la mozzarella en rodajas o cubos.',
            'Intercalar tomate, queso y hojas de albahaca en el plato.',
            'Rociar generosamente con aceite de oliva y un toque de balsámico.',
            'Salpimentar al gusto y servir inmediatamente.'
        ]
    },
    {
        id: 'pasta-pesto',
        title: 'Pasta al Pesto Genovés',
        category: 'almuerzo',
        image: 'images/pasta_salad.png',
        imageStyle: 'filter: hue-rotate(40deg);',
        rating: 4.6,
        author: 'Giovanni P.',
        authorInitials: 'GP',
        time: '35 min',
        description: 'Salsa de albahaca fresca con piñones y parmesano.',
        details: {
            servings: 4,
            calories: '520 kcal',
            protein: '14g',
            carbs: '70g',
            fat: '22g',
            difficulty: 'Media'
        },
        ingredients: [
            '400g de pasta (spaghetti o fusilli)',
            '2 tazas de albahaca fresca',
            '1/2 taza de queso parmesano rallado',
            '1/3 taza de piñones o nueces',
            '1 diente de ajo',
            'Aceite de oliva'
        ],
        instructions: [
            'Cocinar la pasta en agua salada hasta que esté al dente.',
            'Mientras, triturar albahaca, piñones, ajo y queso con aceite de oliva hasta obtener una pasta verde brillante.',
            'Escurrir la pasta (reservando un poco de agua de cocción).',
            'Mezclar la pasta con el pesto, añadiendo agua de cocción si es necesario para dar cremosidad.'
        ]
    },
    {
        id: 'pollo-asado',
        title: 'Pollo Asado al Limón',
        category: 'almuerzo',
        image: 'images/hero_background.png',
        imageStyle: '',
        rating: 4.9,
        author: 'Rosa M.',
        authorInitials: 'RO',
        time: '50 min',
        description: 'Jugoso pollo horneado con hierbas y cítricos.',
        details: {
            servings: 4,
            calories: '410 kcal',
            protein: '45g',
            carbs: '2g',
            fat: '20g',
            difficulty: 'Media'
        },
        ingredients: [
            '4 muslos de pollo',
            '2 limones',
            'Romero y tomillo frescos',
            '4 dientes de ajo',
            'Aceite de oliva, sal y pimienta'
        ],
        instructions: [
            'Marinar el pollo con jugo de limón, ajo picado, hierbas y aceite por 30 mins.',
            'Precalentar el horno a 200°C.',
            'Colocar el pollo en una bandeja y rodajas de limón alrededor.',
            'Hornear por 40-45 minutos hasta que la piel esté dorada y crujiente.'
        ]
    },
    {
        id: 'bowl-quinoa',
        title: 'Bowl Mediterráneo',
        category: 'almuerzo',
        image: 'images/pasta_salad.png',
        imageStyle: 'transform: scaleX(-1);',
        rating: 4.7,
        author: 'Lena E.',
        authorInitials: 'LE',
        time: '25 min',
        description: 'Quinoa, aceitunas, pepino y hummus casero.',
        details: {
            servings: 1,
            calories: '340 kcal',
            protein: '12g',
            carbs: '48g',
            fat: '15g',
            difficulty: 'Fácil'
        },
        ingredients: [
            '1 taza de quinoa cocida',
            '1/2 pepino picado',
            '10 aceitunas negras',
            '2 cdas de hummus',
            'Tomates cherry',
            'Queso feta (opcional)'
        ],
        instructions: [
            'Colocar la quinoa como base en el bowl.',
            'Acomodar los vegetales y las aceitunas por secciones.',
            'Añadir una cucharada generosa de hummus en el centro.',
            'Rociar con aceite de oliva y orégano.'
        ]
    },

    // CENAS
    {
        id: 'salmon-horno',
        title: 'Salmón al Horno',
        category: 'cena',
        image: 'images/hero_background.png',
        imageStyle: '',
        rating: 4.9,
        author: 'Chef Ken',
        authorInitials: 'CK',
        time: '40 min',
        description: 'Filete de salmón tierno con costra de hierbas finas.',
        details: {
            servings: 2,
            calories: '480 kcal',
            protein: '35g',
            carbs: '5g',
            fat: '32g',
            difficulty: 'Media'
        },
        ingredients: [
            '2 filetes de salmón fresco',
            'Eneldo fresco picado',
            '1 limón',
            'Ajo en polvo',
            'Mantequilla o aceite de oliva'
        ],
        instructions: [
            'Precalentar horno a 180°C.',
            'Sazonar el salmón con sal, pimienta, ajo y mucho eneldo.',
            'Colocar rodajas de limón encima.',
            'Hornear durante 15-20 minutos dependiendo del grosor.'
        ]
    },
    {
        id: 'tacos-asada',
        title: 'Tacos Gourmet de Asada',
        category: 'cena',
        image: 'images/hero_background.png',
        imageStyle: 'transform: scaleX(-1);',
        rating: 5.0,
        author: 'Maria A.',
        authorInitials: 'MA',
        time: '30 min',
        description: 'Tortillas artesanales con carne premium y salsas.',
        details: {
            servings: 4,
            calories: '180 kcal (por taco)',
            protein: '15g',
            carbs: '20g',
            fat: '8g',
            difficulty: 'Media'
        },
        ingredients: [
            '500g de carne de res (arrachera o asada)',
            'Tortillas de maíz',
            'Cebolla y cilantro picados',
            'Salsa verde o roja',
            'Limones'
        ],
        instructions: [
            'Sazonar y asar la carne a la parrilla o plancha hasta el término deseado.',
            'Picar la carne en trozos pequeños.',
            'Calentar las tortillas.',
            'Armar los tacos con carne, cebolla, cilantro y salsa.'
        ]
    },
    {
        id: 'risotto-setas',
        title: 'Risotto de Setas',
        category: 'cena',
        image: 'images/pasta_salad.png',
        imageStyle: '',
        rating: 4.8,
        author: 'Luigi',
        authorInitials: 'LU',
        time: '45 min',
        description: 'Arroz cremoso cocinado lentamente con funghi porcini.',
        details: {
            servings: 4,
            calories: '420 kcal',
            protein: '10g',
            carbs: '65g',
            fat: '18g',
            difficulty: 'Difícil'
        },
        ingredients: [
            '300g arroz arborio',
            '200g setas o champiñones variados',
            '1 litro de caldo de verduras caliente',
            '1/2 taza de vino blanco',
            'Queso parmesano y mantequilla'
        ],
        instructions: [
            'Sofreír cebolla y setas.',
            'Añadir el arroz y tostar ligeramente (nacarar).',
            'Verter el vino y dejar evaporar.',
            'Añadir caldo caliente cucharón a cucharón, removiendo constantemente.',
            'Mantecar con mantequilla y parmesano al final.'
        ]
    },
    {
        id: 'crema-calabaza',
        title: 'Crema de Calabaza',
        category: 'cena',
        image: 'images/hero_background.png',
        imageStyle: '',
        rating: 4.5,
        author: 'Elena R.',
        authorInitials: 'EL',
        time: '35 min',
        description: 'Reconfortante y suave, ideal para noches frías.',
        details: {
            servings: 4,
            calories: '150 kcal',
            protein: '3g',
            carbs: '25g',
            fat: '6g',
            difficulty: 'Fácil'
        },
        ingredients: [
            '1kg calabaza pelada y troceada',
            '1 trozo de jengibre fresco pelado',
            '1 cebolla',
            'Caldo de verduras',
            'Crema o leche de coco (opcional)'
        ],
        instructions: [
            'Sofreír la cebolla y el jengibre.',
            'Añadir la calabaza y cubrir con caldo.',
            'Cocinar hasta que la calabaza esté muy tierna.',
            'Triturar todo hasta obtener una crema fina. Salpimentar.'
        ]
    },

    // POSTRES
    {
        id: 'tiramisu',
        title: 'Tiramisú Clásico',
        category: 'postre',
        image: 'images/pancakes.png',
        imageStyle: '',
        rating: 5.0,
        author: 'Chef Ita',
        authorInitials: 'IT',
        time: '60 min',
        description: 'Capas de soletillas, café espresso y crema de mascarpone.',
        details: {
            servings: 8,
            calories: '450 kcal',
            protein: '8g',
            carbs: '40g',
            fat: '28g',
            difficulty: 'Media'
        },
        ingredients: [
            '500g queso mascarpone',
            '4 huevos (separados)',
            '100g azúcar',
            'Bizcochos de soletilla',
            'Café fuerte frío',
            'Cacao en polvo'
        ],
        instructions: [
            'Batir yemas con azúcar hasta blanquear. Añadir mascarpone.',
            'Montar claras a punto de nieve y mezclar con la crema anterior.',
            'Mojar bizcochos en café y hacer una capa en el molde.',
            'Cubrir con crema. Repetir capas.',
            'Refrigerar al menos 4 horas. Espolvorear cacao antes de servir.'
        ]
    },
    {
        id: 'cheesecake',
        title: 'Cheesecake Frutos Rojos',
        category: 'postre',
        image: 'images/pancakes.png',
        imageStyle: 'filter: brightness(1.1);',
        rating: 4.9,
        author: 'Paula S.',
        authorInitials: 'PA',
        time: '90 min',
        description: 'Base crujiente y relleno cremoso con topping de fresas.',
        details: {
            servings: 10,
            calories: '500 kcal',
            protein: '9g',
            carbs: '55g',
            fat: '35g',
            difficulty: 'Media'
        },
        ingredients: [
            'Galletas tipo "digestive" o maría molidas',
            'Mantequilla derretida',
            '600g queso crema',
            '200ml crema para batir',
            'Azúcar, huevos y vainilla',
            'Mermelada o frutos rojos frescos'
        ],
        instructions: [
            'Mezclar galletas con mantequilla y forrar la base del molde.',
            'Batir queso crema, azúcar, huevos y crema hasta integrar.',
            'Verter sobre la base y hornear a baño maría suavemente.',
            'Dejar enfriar y refrigerar. Decorar con frutos rojos.'
        ]
    },
    {
        id: 'brownie',
        title: 'Brownie con Nueces',
        category: 'postre',
        image: 'images/pancakes.png',
        imageStyle: 'filter: contrast(1.2);',
        rating: 4.8,
        author: 'ChocoLover',
        authorInitials: 'CH',
        time: '40 min',
        description: 'Intenso sabor a chocolate con interior húmedo.',
        details: {
            servings: 9,
            calories: '380 kcal',
            protein: '5g',
            carbs: '45g',
            fat: '22g',
            difficulty: 'Fácil'
        },
        ingredients: [
            '200g chocolate negro',
            '150g mantequilla',
            '3 huevos',
            '200g azúcar',
            '100g harina',
            '50g nueces picadas'
        ],
        instructions: [
            'Derretir chocolate con mantequilla.',
            'Batir huevos con azúcar y añadir la mezcla de chocolate.',
            'Incorporar la harina tamizada y las nueces.',
            'Hornear a 180°C por 20-25 minutos (el centro debe quedar algo húmedo).'
        ]
    },
    {
        id: 'helado-vainilla',
        title: 'Helado Artesanal',
        category: 'postre',
        image: 'images/pancakes.png',
        imageStyle: 'transform: scaleX(-1);',
        rating: 4.7,
        author: 'IceMaster',
        authorInitials: 'IC',
        time: '12h',
        description: 'Cremoso, suave y hecho en casa con vaina natural.',
        details: {
            servings: 6,
            calories: '250 kcal',
            protein: '4g',
            carbs: '28g',
            fat: '16g',
            difficulty: 'Media'
        },
        ingredients: [
            '500ml crema de leche',
            '250ml leche entera',
            '150g azúcar',
            '1 vaina de vainilla (o extracto de calidad)',
            'Yemas de huevo (opcional para estilo francés)'
        ],
        instructions: [
            'Calentar leche y crema con la vainilla.',
            'Mezclar yemas y azúcar (si se usa). Temperar con la leche caliente.',
            'Cocinar a fuego bajo hasta que espese ligeramente (crema inglesa).',
            'Enfriar y llevar a la máquina de helados o congelar removiendo cada 30 min.'
        ]
    }
];
