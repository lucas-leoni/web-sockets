module.exports.iniciaChat = (application, req, res) => {
  const dadosForm = req.body;
  console.log(dadosForm);

  req.assert('nome', 'O campo Nome ou Apelido é obrigatório e deve ser preenchido.').notEmpty();
  req.assert('nome', 'O campo Nome ou Apelido deve conter entre 3 a 15 caracteres.').len(3,14);

  const erros = req.validationErrors();

  if(erros) {
    res.render('index', {validacao: erros });
    return;
  };

  application.get('io').emit('msgParaCliente', {
    nome: dadosForm.nome, 
    mensagem: 'Entrou no chat'
  });

  res.render('chat', { dadosForm });
}