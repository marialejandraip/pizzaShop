import firebase from 'firebase/app';
import 'firebase/firestore'

const db = firebase.firestore();

async function newPizza (orderObj) {
	try {
		const order = await db.collection('order').add({
      name: orderObj.name,
      uid: orderObj.uid,
      time: orderObj.time,
      products: orderObj.products,
      totalOrder: orderObj.totalOrder,
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