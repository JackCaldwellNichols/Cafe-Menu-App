const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
			    {
					id: 1,
					title: "buttermilk pancakes",
					category: "breakfast",
					price: 15.99,
					img: "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_960_720.jpg",
					desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
				  },
				  {
					id: 2,
					title: "diner double",
					category: "lunch",
					price: 13.99,
					img: "https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_960_720.jpg",
					desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
				  },
				  {
					id: 3,
					title: "godzilla milkshake",
					category: "shakes",
					price: 6.99,
					img: "https://cdn.pixabay.com/photo/2020/05/21/07/52/milkshake-5199612_960_720.jpg",
					desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
				  },
				  {
					id: 4,
					title: "country delight",
					category: "breakfast",
					price: 20.99,
					img: "https://cdn.pixabay.com/photo/2016/06/08/19/46/cereal-1444495_960_720.jpg",
					desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
				  },
				  {
					id: 5,
					title: "egg attack",
					category: "lunch",
					price: 22.99,
					img: "https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_960_720.jpg",
					desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
				  },
				  {
					id: 6,
					title: "oreo dream",
					category: "shakes",
					price: 18.99,
					img: "https://cdn.pixabay.com/photo/2020/03/07/05/18/beverage-4908765_960_720.jpg",
					desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
				  },
				  {
					id: 7,
					title: "bacon overflow",
					category: "breakfast",
					price: 8.99,
					img: "https://cdn.pixabay.com/photo/2016/04/20/19/39/bacon-1341868_960_720.jpg",
					desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
				  },
				  {
					id: 8,
					title: "american classic",
					category: "lunch",
					price: 12.99,
					img: "https://cdn.pixabay.com/photo/2018/10/30/09/28/burger-3783181_960_720.jpg",
					desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
				  },
				  {
					id: 9,
					title: "quarantine buddy",
					category: "shakes",
					price: 16.99,
					img: "https://cdn.pixabay.com/photo/2017/08/05/18/56/milk-2585087_960_720.jpg",
					desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
				  
				}
			],
		}
	};
};

export default getState;
