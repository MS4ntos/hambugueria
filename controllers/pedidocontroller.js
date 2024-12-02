let bd = firebase.firestore();



    /*bd.collection("Cardapio").doc("1").onSnapshot(function(doc) {
    
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
      */

      bd.collection("Cardapio").onSnapshot(function(documentos){
         documentos.docChanges().forEach(function(changes){
            

            if(changes.type === "added"){

               const documento = changes.doc;
               const dados = documento.data();
               
              criarItensTabela(dados);


         }

         else if (changes.type === "modified") {
            const documento = changes.doc;
            const dados = documento.data();
            const id = changes.doc.id;
          
           
            const item = document.querySelector(`[data-id='${id}']`);
            if (item) {
              
              item.querySelector(".product-name").textContent = dados.nome;
              item.querySelector(".product-price").textContent = `R$ ${dados.valor.toFixed(2)}`;
              item.querySelector("img").src = dados.imagem || "default-image.jpg";
            }
          }
          

          else if (changes.type === "removed") {
            const id = changes.doc.id;
          
            
            const item = document.querySelector(`[data-id='${id}']`);
            if (item) {
              item.remove();
            }
          }
          
      })
      })


      function criarItensTabela(dados){

         const linha = tabela.insertRow() 

         const colunaId = linha.insertCell(0)
         const colunaproduto = linha.insertCell(1)
         const colunaAcoes = linha.insertCell(2)

         const itemid = document.createTextNode(dados.id)
         const itemNome = document.createTextNode(dados.nome)

         colunaId.appendChild(itemid)
         colunaNome.appendChild(itemNome)

         const buttonAlterar = document.createElement("button")
         buttonAlterar.innerHTML = '<i class="fas fa-edit"></i> '
         buttonAlterar.className = "btn btn-success btn-xs"
       

         const buttonRemover = document.createElement("button")
         buttonRemover.innerHTML = '<i class="fas fa-trash-alt"></i> '
         buttonRemover.className = "btn btn-danger btn-xs"
      


         buttonAlterar.onclick = function(){
            abrirModalAdicionar()
            return false
         }

         buttonRemover.onclick = function(){
            abrirModalRemover()
            return false
         }

         colunaAcoes.appendChild(buttonAlterar)
         colunaAcoes.appendChild(document.createElement(""))
         colunaAcoes.appendChild(buttonRemover)
      }
