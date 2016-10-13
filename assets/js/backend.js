/*
var valiseUser = null;
//var loginUser = null;
var toDoList = {list: []};

function User(name, city, country, date) {
	this.name = name;
	this.city = city;
	this.country = country;
	this.date = date;
}
*/

var deadLine = null;
// Initialize Firebase

function initializeFireBase () {

  var config = {
    apiKey: "AIzaSyDssrFpJ-XMh_arO3ZQbbk3fEG_5WqpUf0",
    authDomain: "msf-practicum.firebaseapp.com",
    databaseURL: "https://msf-practicum.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "9353490276"
  };
  firebase.initializeApp(config);

}

function getRef(endpoint) {
	var ref;
	if (endpoint == '') {
		ref = firebase.database().ref();
	} else {
		ref = firebase.database().ref('/' + endpoint + '/');
	}
	return ref;
}
function addFBListenter(endpoint) {
	var ref = getRef(endpoint);
	if (endpoint == 'meeting') {
		ref.on('value', getMeetingValue);
	} else if (endpoint == 'deadline') {
		ref.on('value', getDeadlineValue);
	} else if (endpoint == 'comment') {
		ref.on('value', getCommentValue);
	} else if (endpoint == 'toDoList') {
		ref.on('child_added', getToDoListChildAdded);
		ref.on('child_removed', getToDoListChildRemoved);
	} else if (endpoint == 'toDoListCompleted') {
		ref.on('child_added', getToDoListChildAddedCompleted);
		ref.on('child_removed', getToDoListChildRemovedCompleted);
	} else {
		// something very wrong
		console.error('addFBListenter: Incorrect endpoint: ' + endpoint);
	}

}
/*
function removeFBListener(endpoint) {
	var ref = getRef(endpoint);
	if (endpoint == 'user') {
		ref.off('value', getUserValue);
	} else if (endpoint == 'toDoList') {
		ref.off('value', getToDoListValue);
	} else {
		// something very wrong
		console.error('removeFBListenter: Incorrect endpoint: ' + endpoint);
	}
}

function removeFBListeners() {
	var uid = firebase.auth().currentUser.uid;
	//console.log('uid: ' + uid);
	removeFBListener('user'); 
	removeFBListener('toDoList');
}
*/
// Firebase Listeners
function getMeetingValue(snapshot) {
	//console.log('getUserValue');
	// when the user sign up first time, no snapshot.val()
	// is defined. Do nothing.
	if (snapshot.val() == null) return;

	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	//setValiseUser(snapshot.val());
	// Update UI
	updateUIGetMeetingValue(snapshot.val());
 
}

function getDeadlineValue(snapshot) {
	//console.log('getUserValue');
	// when the user sign up first time, no snapshot.val()
	// is defined. Do nothing.
	if (snapshot.val() == null) return;

	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	//setValiseUser(snapshot.val());
	// Update UI
	deadLine = snapshot.val();
	updateUIGetDeadlineValue(snapshot.val());
 
}


function getCommentValue(snapshot, index) {
	console.log('getCommentValue');
	// when the user sign up first time, no snapshot.val()
	// is defined. Do nothing.
	if (snapshot.val() == null) return;

	//console.log('snapshot.key: ' + snapshot.key);
	console.log(snapshot.val());
	//setValiseUser(snapshot.val());
	// Update UI
	updateUIGetCommentValue(snapshot.val(), index);
 
}



function getToDoListChildAdded(snapshot) {
	//console.log('getToDoListValue');
	if (snapshot.val() == null)  return;
	
	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	//toDoList = snapshot.val();
	updateUIGetToDoListChildAdded();
}

function getToDoListChildRemoved(snapshot) {
	//console.log('getToDoListValue');
	if (snapshot.val() == null)  return;

	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	//toDoList = snapshot.val();
	updateUIGetToDoListChildRemoved();
}


function getToDoListChildAddedCompleted(snapshot) {
	//console.log('getToDoListValue');
	if (snapshot.val() == null)  return;
	
	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	//toDoList = snapshot.val();
	updateUIGetToDoListChildAddedCompleted();
}

function getToDoListChildRemovedCompleted(snapshot) {
	//console.log('getToDoListValue');
	if (snapshot.val() == null)  return;

	//console.log('snapshot.key: ' + snapshot.key);
	//console.log(snapshot.val());
	//toDoList = snapshot.val();
	updateUIGetToDoListChildRemovedCompleted();
}




// Helper Function, e.g. called by click Listeners

function getDeadLineObj() {
	return Object.assign({}, deadLine);
}

/*
function setValiseToDoList(index, item) {
	toDoList.list[index] = item;	
}
function addValiseToDoList(item) {
	toDoList.list.push(item);
}
function deleteValiseToDoList(index) {
	toDoList.list.splice(index, 1);
}
function getValiseToDoList() {
	return toDoList.list;
}
function filterValiseToDoList(filter) {
	var list = toDoList.list;
	var filteredList = list.filter(function(item) {
		if (item != filter) {
			return true;
		} else {
			return false;
		}
	})
	toDoList.list = filteredList;
}
*/
function setComment(obj) {
	
	firebase.database().ref('/comment/').set(obj);
}
function setDeadLine(obj) {

	firebase.database().ref('/deadline/').set(obj);
}
function setMeeting(obj) {

	firebase.database().ref('/meeting/').set(obj);
}
