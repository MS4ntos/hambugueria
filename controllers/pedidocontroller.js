let bd = firebase.firestore();



    bd.collection("Cardapio").doc("1").onSnapshot(function(doc) {
    
      if(doc.exists){
       const dados = doc.data();
       const key = doc.id;
  
  
       const id = dados.id;
       const nome = dados.nome;
       const url_imagem = dados.url_imagem ;
  
  
       console.log("nome pasta: " + key + " id:"+id +  " nome:" + nome + " url_imagem: " + url_imagem);
  
      }else{
        console.log("nao existe");
      }
      });
      

      