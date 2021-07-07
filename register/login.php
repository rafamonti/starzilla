<?php
  $conexao = mysqli_connect('localhost', 'root','','dexterrobo')or die("A conexão não foi executada com sucesso");	//Conecta com o MySQL
						//Seleciona banco de dados
  
  $login=$_POST['login'];	//Pegando dados passados por AJAX
  $senha=$_POST['senha'];
  
  //Consulta no banco de dados
  $sql="select * from usuarios where nome='".$login."' and senha='".$senha."'"; 
  $resultados = mysqli_query($conexao,$sql)or die ("aaa");
  $res=mysqli_fetch_array($resultados); //
	if (mysqli_num_rows ($resultados) == 0){
		echo 0;	//Se a consulta não retornar nada é porque as credenciais estão erradas
	}
	
	else{
		echo 1;	//Responde sucesso
		if(!isset($_SESSION)) 	//verifica se há sessão aberta
		session_start();		//Inicia seção
		//Abrindo seções
		$_SESSION['usuarioID']=$res['id']; 		
		$_SESSION['nomeUsuario']=$res['nome'];
		exit;	
	}
?>