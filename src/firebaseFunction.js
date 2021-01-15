import 'firebase/firestore'
import { db } from './firebaseConfig';


async function newPizza (orderObj) {
	try {
		const order = await db.collection('pizzas').add({
      pizzaName: orderObj.pizzaName,
      name: orderObj.name,
      phone: orderObj.phone,
      products: orderObj.products,
      totalOrder: orderObj.totalOrder,
	  date: orderObj.date,
	  time: orderObj.time,
    });
	return order;
	} catch (error) {
		return error.message;
	}
};

function snapshotGettingData(collection, arrayData, setState) {
	db.collection(collection).orderBy('time', 'desc').onSnapshot((querySnapshot) => {
		
		querySnapshot.forEach((doc) => {
			const data = doc.data()
			arrayData.push({...data, idDoc: doc.id})
		});
		return setState(arrayData);
	});
};
export {newPizza, snapshotGettingData}