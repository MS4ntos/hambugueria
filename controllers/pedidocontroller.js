bd.collection("cardapio").doc("1").get().then(function(doc) {
    if (doc.exists) {

        const dados = doc.data();
    

        const id = dados.id
        const nome = dados+nome
       console.log("id"+"nome: "+nome);
    } else {
       console.log("nao Existe");
    }
    
    });