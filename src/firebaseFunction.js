import 'firebase/firestore'
//import firebase from 'firebase/app';
import {db} from './firebaseConfig';


async function newPizza (orderObj) {
	try {
		const order = await db.collection('pizzas').add({
      pizzaName: orderObj.pizzaName,
      name: orderObj.name,
      phone: orderObj.phone,
      products: orderObj.products,
      totalOrder: orderObj.totalOrder,
      date: orderObj.date,
    });

		return order;
	} catch (error) {
		return error.message;
	}
};

function snapshotGettingData(collection, arrayData, setState) {
	db.collection(collection).onSnapshot((querySnapshot) => {
		
		querySnapshot.forEach((doc) => {
			const data = doc.data()
			arrayData.push({...data, idDoc: doc.id})
		});
		return setState(arrayData);
	});
};
export {newPizza, snapshotGettingData}