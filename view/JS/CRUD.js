import{getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField} 
from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"; 
 

const firebase = getFirestore();
    

let namebox = document.getElementById('product-name');
let precobox = document.getElementById('product-price');
let descriçãobox = document.getElementById('product-description');


let btnAdd = document.getElementById('btn-add');
let btnRemove = document.getElementById('btn-remove');
let btnUpdate = document.getElementById('btn-update');
let btnSel = document.getElementById('btn-select');

async function AddDocument_AutoId() {
    var ref = collection(db, "Produtos");

    const docRef = await addDoc(ref, {
        categoria: categoriabox.value,
        name: namebox.value,
        preco: precobox.value,
        descricao: descriçãobox.value,
    }).then(() => {
        alert("Produto cadastrado com sucesso!");
    }).catch(error => {
        alert(getErrorMessage(error));
    });
    console.log("Document Id é: " + docRef.id);
}

async function AddDocument_CustomId() {
    var ref = doc(db, "Produtos", namebox.value);

     await setDoc(ref, {
        categoria: categoriabox.value,
        name: namebox.value,
        preco: precobox.value,
        descricao: descriçãobox.value,
    }).then(() => {
        alert("Produto cadastrado com sucesso!");
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

async function GetADocument() {
    var ref = doc(db, "Produtos", namebox.value);
    const docSnap = await getDoc(ref);
    
    if (docSnap.exists()) {
        categoriabox.value = docSnap.data().categoria;
        namebox.value = docSnap.data().name;
        precobox.value = docSnap.data().preco;
        descriçãobox.value = docSnap.data().descricao;
    } else {
        alert("Nenhum documento encontrado com esse nome!");
    }
}

async function UpdateFieldsInADocument() {
    var ref = doc(db, "Produtos", namebox.value);

    await updateDoc(ref, {
        categoria: categoriabox.value,
        name: namebox.value,
        preco: precobox.value,
        descricao: descriçãobox.value,
    }).then(() => {
        alert("Produto cadastrado com sucesso!");
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

async function DeleteDocument() {
    var ref = doc(db, "Produtos", namebox.value);
    const docSnap = await getDoc(ref);
    
    if (!docSnap.exists()) {
        alert("Nenhum documento encontrado com esse nome!");
        return;
    }

    await deleteDoc(ref).then(() => {
        alert("Produto removido com sucesso!");
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}


btnAdd.addEventListener('click', AddDocument_CustomId);
btnSel.addEventListener('click', GetADocument);
btnUpdate.addEventListener('click', UpdateFieldsInADocument);
btnRemove.addEventListener('click', DeleteDocument);